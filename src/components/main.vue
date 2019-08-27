<template>
    <main>
        <Changebtn @getleft="getturnnum" @changeymd="changeymd"></Changebtn>
        <ul id="daytop">
            <li>日</li>
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li>六</li>
        </ul>
        <section class="changepage">
            <MyDate class="dataclass" :style="{left:leftnum+'px'}" ref="bo" v-show="appearvalue==0"></MyDate>
            <Year 
                :style="{left:yearplace+'px'}"  
                style="top:-40px;background:#222" 
                ref="ye" 
                v-show="appearvalue==1"
                
            ></Year>
            <Month 
                :style="{left:monthplace+'px'}" 
                style="top:-40px;background:#222"  
                v-show="appearvalue==2"
                ref="mo" 
                @redraw="redraw"
            ></Month>
        </section>
    </main>
</template>
<script>
    import Changebtn from "@/components/changebtn.vue";
    import Month from "@/components/month.vue";
    import Year from "@/components/year.vue";
    import MyDate from "@/components/date.vue";
    export default {
        name:"Header",
        data(){
            return {
                nowtime:new Date().toLocaleTimeString(),
                nowday:new Date().getFullYear()+"年"+(new Date().getMonth()+1)+"月"+new Date().getDate()+"日",
                leftnum:-420,
                yearaddnum:0,
                yearplace:-20,
                monthplace:113,
                ifchange:1,
            };
        },
        methods:{
            getturnnum(num){
                if(this.ifchange){
                    this.ifchange=0;
                    var dis=0;
                    var timer=setInterval(()=>{
                        if(this.leftnum>num){
                            this.leftnum-=10;
                            dis=1;
                        }
                        else if(this.leftnum<num){
                            this.leftnum+=10;
                            dis=0;
                        }
                        else{
                            this.$store.dispatch('changemonth',dis)
                            this.leftnum=-420;
                            this.ifchange=1;
                            this.$refs.bo.changeday()
                            clearInterval(timer)
                        }
                    },10)
                }
            },
            changeymd(num){
                if(this.ifchange){
                    this.ifchange=0;
                    if(this.yearplace>num){
                        this.yearaddnum+=1;
                    }
                    else if(this.yearplace<num){
                        this.yearaddnum-=1;
                    }
                    var timer=setInterval(()=>{
                        if(this.yearplace>num){
                            this.yearplace-=10;
                        }
                        else if(this.yearplace<num){
                            this.yearplace+=10;
                        }
                        else{
                            this.yearplace=-20;
                            this.ifchange=1;
                            this.$refs.ye.changeyear(this.yearaddnum)
                            clearInterval(timer)
                        }
                    },10)
                }
            },
            back(){
                if(this.ifchange){
                    var num;
                    var diraction=this.$store.state.num;
                    console.log(diraction)
                    if(diraction>0){
                        num=-20;
                    }
                    else if(diraction<0){
                        num=-820;
                    }
                    else{
                        num=-420;
                    }
                    this.ifchange=0;
                    var timer=setInterval(()=>{
                        if(this.leftnum>num){
                            this.leftnum-=10;
                        }
                        else if(this.leftnum<num){
                            this.leftnum+=10;
                        }
                        else{
                            this.leftnum=-420;
                            this.ifchange=1;
                            this.$refs.bo.changeday()
                            clearInterval(timer)
                        }
                    },10)
                }
            },
            ymd(value){
                this.value=value;
            },
            redraw(){
                console.log(111)
                this.$refs.bo.changeday()
            }
           
            
        },
        computed:{
            appearvalue(){
                return this.$store.state.ymd;
            }
        }, 
        created(){
            setInterval(()=>{
                this.nowtime=new Date().toLocaleTimeString();
                
            },1000)
        },
        components:{
            Changebtn,
            Year,
            Month,
            MyDate,
        }
    }
</script>
<style lang="less" scoped>
    
    main{
        width: 100%;
        height: 500px;
        background: #222;
        padding:10px 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
    }
    #daytop{
        width: 100%;
        height:40px;
        display: flex;
        justify-content: space-between;
        color: white;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none; 
    }
    #daytop li{
        width: 100%;
        text-align: center;
    }
    .changepage{
        position: relative;
        flex: 1;
    }
    .dataclass{
        position: absolute;
        
    }
</style>