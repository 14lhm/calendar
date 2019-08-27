<template>
    <section>
        <!-- <p v-for="(item,index) of mybtn" v-show="toshow==index" :key="index">{{item}}</p> -->
        <p v-show="appearvalue==0" @click="changeshow">{{this.$store.state.yearstr}}年{{this.$store.state.monthstr-0+1}}月</p>
        <p v-show="appearvalue==1" @click="changeshow">{{this.$store.state.commentdate.getFullYear()}}年</p>
        <p v-show="appearvalue==2" @click="changeshow">{{(this.$store.state.commentdate.getMonth()+1)}}月</p>
        
        <p>
            <span @click="turnmonth(-20)">&lt;</span>&nbsp;&nbsp;&nbsp;
            <span @click="turnmonth(-820)">></span>
        </p>
    </section>    
</template>
<script>
    
    export default {
        name:"Changebtn",
        props:["nowtime"],
        data(){
            return {
             
            }
        },
        methods:{
            turnmonth(num){
                if(this.$store.state.ymd==0){
                    this.$emit("getleft",num);
                }
                else if(this.$store.state.ymd==1){
                    this.$emit("changeymd",num+400);
                }
            },
            changeshow(){
                // if(this.appearvalue==1){
                //     this.$store.commit("changetempyear",2019)
                // }
                // if(this.appearvalue==2){
                //     this.$store.commit("changetempmonth",8)
                // }
                if(this.appearvalue==0){
                    this.$store.commit("changeymd")
                }
                
            }
        },
        computed:{
            mybtn(){
                return [
                    this.$store.state.commentdate.getFullYear()+"年"+(this.$store.state.commentdate.getMonth()+1)+"月",
                    this.$store.state.commentdate.getFullYear()+"年",
                    (this.$store.state.commentdate.getMonth()+1)+"月",
                ];
            },
            appearvalue(){
                return this.$store.state.ymd;
            }
           
        },
       
        
    }
</script>
<style lang="less" scoped>
    section{
        width: 100%;
        height: 40px;
        color: white;
    }
    p{
        line-height: 40px;
        float: left;
        cursor: pointer;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }
    span{
        cursor: pointer;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }
    p:nth-last-of-type(1){
        float: right;
        
    }
</style>