<template>
    <article class="datepage">
        <ul>
            <li v-for="(item,index) of day.arr2" :key="index" :style="{color:item.color}">{{item.value}}</li>
        </ul>
        <ul>
            <li 
                v-for="(item,index) of day.arr1" 
                :key="index" 
                :style="{
                    color:item.color,
                    background:(item.value==new Date().getDate() && statenum==0)?'rgb(79, 79, 233)':'#222',
                    borderColor:(item.value==new Date().getDate() && statenum==0)?'rgb(79, 79, 233)':'',
                }" 
                @click="changecol"

            >{{item.value}}</li>
        </ul>
        <ul>
            <li v-for="(item,index) of day.arr3" :key="index" :style="{color:item.color}">{{item.value}}</li>
        </ul>
    </article>
    
</template>
<script>
    export default {
        name: "MyDate",
        data() {
            return {
                obj:[],
                obj2:[],
                obj3:[],
            }
        },
        computed: {
            day(){
                return {
                    arr1:this.obj,
                    arr2:this.obj2,
                    arr3:this.obj3,
                };
            },
            statenum(){
                return this.$store.state.num;
            }

        },
        methods: {
            nowdate(){
                var year=this.$store.state.commentdate.getFullYear();
                var month=this.$store.state.commentdate.getMonth()+1;
                this.obj=[];
                for (let i = 0; i < 42; i++) {
                    this.obj.push({
                        value: 0,
                        color: "white",
                    })
                }
                var myDate = new Date();
                myDate.setFullYear(year, month-1, 1);
                var week = myDate.getDay();

                myDate.setFullYear(year, month, 0);
                var lastDate = new Date(myDate).getDate();

                myDate.setFullYear(year, month-1, 0);
                var prelastDate = new Date(myDate).getDate();

                var i = 1;
                this.obj.map((val, index) => {
                    if (index < week) {
                        val.value = prelastDate - week + index + 1;
                        val.color = "#888";
                        return val;
                    } else if (index >= week && index < lastDate + week) {
                        val.value = i;
                        i++;
                        return val;
                    } else if (index >= lastDate + week && index < 42) {
                        val.value = index - lastDate - week + 1;
                        val.color = "#888";
                        return val;
                    }
                })
            },
            predate(){
                var year=this.$store.state.commentdate.getFullYear();
                var month=this.$store.state.commentdate.getMonth();
                this.obj2=[];
                for (let i = 0; i < 42; i++) {
                    this.obj2.push({
                        value: 0,
                        color: "white",
                        preli:0,
                    })
                }
                var myDate = new Date();
                myDate.setFullYear(year, month-1, 1);
                var week = myDate.getDay();

                myDate.setFullYear(year, month, 0);
                var lastDate = new Date(myDate).getDate();

                myDate.setFullYear(year, month-1, 0);
                var prelastDate = new Date(myDate).getDate();

                var i = 1;
                this.obj2.map((val, index) => {
                    if (index < week) {
                        val.value = prelastDate - week + index + 1;
                        val.color = "#888";
                        return val;
                    } else if (index >= week && index < lastDate + week) {
                        val.value = i;
                        i++;
                        return val;
                    } else if (index >= lastDate + week && index < 42) {
                        val.value = index - lastDate - week + 1;
                        val.color = "#888";
                        return val;
                    }
                })
            },
            nextdate(){
                var year=this.$store.state.commentdate.getFullYear();
                var month=this.$store.state.commentdate.getMonth()+2;
                this.obj3=[];
                for (let i = 0; i < 42; i++) {
                    this.obj3.push({
                        value: 0,
                        color: "white",
                    })
                }
                var myDate = new Date();
                myDate.setFullYear(year, month-1, 1);
                var week = myDate.getDay();

                myDate.setFullYear(year, month, 0);
                var lastDate = new Date(myDate).getDate();

                myDate.setFullYear(year, month-1, 0);
                var prelastDate = new Date(myDate).getDate();

                var i = 1;
                this.obj3.map((val, index) => {
                    if (index < week) {
                        val.value = prelastDate - week + index + 1;
                        val.color = "#888";
                        return val;
                    } else if (index >= week && index < lastDate + week) {
                        val.value = i;
                        i++;
                        return val;
                    } else if (index >= lastDate + week && index < 42) {
                        val.value = index - lastDate - week + 1;
                        val.color = "#888";
                        return val;
                    }
                })

            },
            changecol(e){
                if(this.preli){
                    this.preli.style.background="#222";
                    this.preli.style.borderColor="#222";
                }
                e.target.style.background="rgb(79, 79, 233)";
                e.target.style.backgroundClip="content-box";
                e.target.style.borderColor="rgb(79, 79, 233)";
                this.preli=e.target;

            },
            changeday(){
                this.nowdate()
                this.predate()
                this.nextdate()
            },
        },
        watch:{
            "statenum":function(){
                if(this.preli){
                    this.preli.style.background="#222";
                    this.preli.style.borderColor="#222";
                }
            }
        },
        mounted(){
            
            this.changeday()
        },
        
    }
</script>
<style lang="less" scoped>
    .datepage {
        height: 100%;
        width: 1200px;
        position: absolute;
        left: -420px;
        display: flex;
        justify-content: space-between;
        background: #222;
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
        width: 13.5%;
        height: 12%;
        text-align: center;
        line-height: 36px;
        color: white;
        font-size: 18px;
        padding: 5px;
        box-sizing: border-box;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        border: 2px solid #222;
        background-clip:content-box !important;
    }
    li:hover{
        border-color: rgb(79, 79, 233);
    }
    @keyframes appear {
        from {transform: scale(0.3)}
        to {transform: scale(1)}
    }
</style>