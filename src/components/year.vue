<template>
    <article class="yearpage">
            <ul>
                <li v-for="(item,index) of getarr1" :key="index">{{item}}</li>
            </ul>
            <ul @click="getyearnum">
                <li v-for="(item,index) of getarr" :key="index">{{item}}</li>
            </ul>
            <ul>
                <li v-for="(item,index) of getarr2" :key="index">{{item}}</li>
            </ul>
    </article>  
</template>
<script>
    export default {
        data(){
            return {
                arr:new Array(9).fill(0),
                prearr:new Array(9).fill(0),
                nextarr:new Array(9).fill(0),
                add:0,
            }
        },
        computed:{
            getarr(){
                return this.arr.map((item,index)=>{
                    return item+this.$store.state.commentyear+index+(9*this.add);
                })
            },
            getarr1(){
                return this.prearr.map((item,index)=>{
                    if(item+this.$store.state.commentyear+index-9>=1970){
                        return item+this.$store.state.commentyear+index-9+(9*this.add);
                    }
                    else{
                        console.log(88888888)
                        return item="";
                    }
                    
                })
            },
            getarr2(){
                return this.nextarr.map((item,index)=>{
                    
                    return item+this.$store.state.commentyear+9+index+(9*this.add);
                })
            },
            
        },
        methods:{
            changeyear(val){
                this.add=val;
                console.log(this.add)
            },
            getyearnum(e){
                console.log(e.target.nodeName.toUpperCase()=="LI")
                if(e.target.nodeName.toUpperCase()=="LI"){
                    this.$store.commit("changetempyear",e.target.innerHTML);
                    this.$store.commit("changeymd")
                }
                
                
            },
            
        }
    }

</script>
<style lang="less" scoped>
    .yearpage{
        height: 100%;
        width: 1200px;
        position: absolute;
        transform: translate(-33.3%);
        display: flex;
        justify-content: space-between;
        padding-top: 40px;
      
    }
    ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 20px;
        box-sizing: border-box;
        animation: appear 0.3s linear;
    }
    li {
        width: 17.33%;
        height: 17.33%;
        text-align: center;
        line-height: 70px;
        font-size: 20px;
        color: white;
        cursor: pointer;
        margin: 20px;
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