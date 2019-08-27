<template>
    <article class="monthpage">
        <ul @click="getmonthnum">
            <li v-for="(item,index) of allmonth" :key="index">{{item}}</li>
        </ul>
    </article>  
</template>
<script>
    export default {
        name:"Month",
        data(){
            return {
                allmonth:new Array(12).fill(0).map((item,value)=>item+=value+1),
            }
        },
        methods:{
            getmonthnum(e){
                if(e.target.nodeName.toUpperCase()=="LI"){
                    this.$store.commit("changetempmonth",e.target.innerHTML);
                    this.$store.commit("changeymd")
                    this.$store.commit("choseday")
                    this.$emit("redraw")
                }
            }
        }
    }
</script>
<style lang="less" scoped >
    .monthpage{
        height: 100%;
        width: 400px;
        position: absolute;
        transform: translate(-33.3%);
        padding-top: 40px;
    }
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 20px;
        box-sizing: border-box;
        animation: appear 0.3s linear;
    }
    li{
        width: 25%;
        font-size: 24px;
        line-height: 90px;
        text-align: center;
        color: white;  
        cursor: pointer;
        border: 5px solid #222;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;  
    }
    li:hover{
        border-color: rgb(79, 79, 233);
    }
    @keyframes appear {
        from {transform: scale(0.3)}
        to {transform: scale(1)}
    }
</style>