<template>
    <div class="home">
        <header class="header">
            <img src="../../build/images/banner-2.png" alt="">
            <div class="tx">
                <img src="../../build/images/avatar.jpg" alt="">
            </div>
        </header>
        <section class="section">
            <h3 class="biao">爱时尚精品屋</h3>
            <span class="gong">公告:欢迎光临流行爆款库存有限尽早下单,谢谢</span>
            <div class="xu">
                <span class="nav-lis" v-for="(item,ind) in navList" :key="ind" @click="xu(ind)" :class="{active: ind==activeClass}">{{item}}</span>
            </div>
            <div class="list">
                <div class="good" v-for="(item,ind) in goodLists" :key="ind">
                    <div class="tu">
                        <img :src="item.pic" alt="">
                    </div>
                    <div class="zi">
                        <div class="name">{{item.name}}</div>
                        <div class="buyCount">已售:{{item.buyCount}}件</div>
                        <div class="price">单价:¥{{item.price}}</div>
                    </div>
                    <div class="addShoop" @click="addShop(item.id)">
                        加入购物车
                    </div>
                </div>
                <div class="piceShoop" @click="tiao">
                    <img src="../../build/images/cart.png" alt="">
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            navList:['价格升序∧','价格降序∨','销量升序∧','销量降序∨'],
            activeClass:0,
            goodLists:[]
        }
    },
    computed:{

    },
    methods:{
        xu(ind){
           this.activeClass=ind
           if(ind===0){ //价格升序，大数排前
               this.goodLists.sort(function(a,b){
                   return a.price-b.price
               })
           }else if(ind===1){//价格降序，小数排前
               this.goodLists.sort(function(a,b){
                   return b.price-a.price
               })
           }else if(ind===2){ //销量升序，大数排前
               this.goodLists.sort(function(a,b){
                   return a.buyCount-b.buyCount
               })
           }else if(ind===3){//销量降序，小数排前。
               this.goodLists.sort(function(a,b){
                   return b.buyCount-a.buyCount
               })
           }
        },
        tiao(){
            this.$router.push('/shoop')
        },
        addShop(id){
            console.log(id)
        }
    },
    created(){

    },
    mounted(){
        axios.get('/api/list').then(res=>{
            this.goodLists=res.data.goodList

        })
    }
}
</script>
<style scoped lang="">
.home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.header{
    width: 100%;
    height: 170px;
    position: relative;
}
.header>img{
    width: 100%;
    height: 100%;
}
.section{
    flex: 1;
    display: flex;
    flex-direction: column;
}
.tx{
    width: 30%;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    bottom: -50px;
    left: 50%;
    margin-left: -15%;
}
.tx>img{
    width: 100%;
    height: 100%;
}
.biao{
    margin-top: 53px;
    text-align: center;
}
.gong{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
}
.xu{
    width: 100%;
    height: 45px;
    display: flex;
    text-align: center;
    line-height: 45px;
}
.xu>span{
    flex: 1;
}
.active{
    color: red;
}
.list{
    flex: 1;
    display: flex;
    flex-direction: column;
}
.good{
    width: 100%;
    display: flex;
    position: relative;
}
.tu{
    width: 25%;
    height: 80%;
    margin-top: 10%;
    margin-left: 5%;
}
.tu>img{
    width: 100%;
    height: 100%;
}
.zi{
    width: 75%;
    display: flex;
    flex-direction: column;
    margin-top: 10%;
}
.zi>div{
    margin-top: 1%;
}
.name{
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
}
.addShoop{
    width: 90px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    position: absolute;
    bottom: 10px;
    right: 10%;
    background-color: red;
    color: #ccc; 
}
.addShoop:active{
    opacity: 0.8;
}
.piceShoop{
    position: fixed;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    bottom: 5%;
    right: 5%;
    background-color: blue;
}
</style>