<template>
    <header>
        <section>
            <h1>{{nowtime}}</h1>
            <p @click="backnow">{{nowday}}</p>
        </section>
    </header>
</template>
<script>
    
    export default {
        name:"Header",
        data(){
            return {
                nowtime:new Date().toLocaleTimeString(),
                nowday:new Date().getFullYear()+"年"+(new Date().getMonth()+1)+"月"+new Date().getDate()+"日",
            };
        },
        methods:{
            backnow(){
                this.$emit("back")
                this.$store.commit("tonowdate")
            }
        },
        created(){
			setInterval(()=>{
                this.nowtime=new Date().toLocaleTimeString();
			},1000)
		},
    }
</script>
<style lang="less" scoped>
    
    header{
        width: 100%;
        height: 120px;
        background: #222;
        padding:20px;
        box-sizing: border-box;
        border-bottom:1px solid #ddd;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;  
    }
    section{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }
    h1{
        font-size: 32px;
        font-weight: 500;
        color:#fff;
        
    }
    p{
        font-size: 22px;
        font-weight: 500;
        color:dodgerblue;
        cursor: pointer;
    }
</style>