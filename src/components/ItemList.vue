<template>
      <transition-group name="list" tag="ul" :duration="{ enter: 500, leave: 6000 }">
                <li v-for='(item,index) in propList' v-bind:key="item.ID"  style="height:30px;margin-bottom:10px; ">
                    <span :class="{radiocheckbox,'toggle-active':item.flag}">
                    <input type="checkbox" class="toggle" v-model="item.flag">
                    </span>
                    <span style="line-height:30px;"  v-on:click='Tag(item)'>{{item.item}}</span>
                    <button class="removeBtn" @click="$emit('removeItem',index)">Remove</button>
                </li>
      </transition-group>
</template>
<script>
var filters = {
    'all': todos => todos,
    'undone': todos => todos.filter(todo => !todo.flag),
    'finished': todos => todos.filter(todo => todo.flag)
}
export default {
    name:'ItemList',
    props:['ItemList','visibility'],
    data(){
        return{
            itemxxx:this.ItemList,
            params:this.visibility,
            listitem:'list-item',
            radiocheckbox:'radiocheckbox',
            toggleActive:"toggle-active",
        }
    },
    methods:{
        //点击某项的时候改变他的flag从而改变颜色
        Tag:function(item){
            item.flag = !item.flag;
        }
    }, 
    mounted(){
        console.log(this.itemxxx);
    },
    computed:{
        propList:function(){
            return filters[this.visibility](this.itemxxx);
        }
    }
}
</script>
<style>
    ul{
        list-style: none;
        padding-inline-start:20px;
        position: relative;
        /* width:300px; */
    }
    ul>li{
        text-align: left;
    }
    .toggle{
        opacity: 0;
        cursor: pointer;
        filter: alpha(opacity=0);
        width:50px;height:30px;
    }
    .radiocheckbox{
        width: 50px;
        height: 35px;
        float: left;
        /* padding-bottom:5px; */
        cursor: pointer;
        text-align: center;
        /* margin-right: 10px; */
        background-image: url('./../assets/no-select.png');
        background-repeat: no-repeat;
        display: inline-block;
        background-position: center;
    }
    .toggle-active{
        background-image: url('./../assets/selected.png');
    }
    .removeBtn{
        position: absolute;
        right:0;
        border: none;
        padding: 10px 10px;
        border-radius:5px;
        background-color: #e4463b;
    }

    .list-leave-active{
        position: absolute;
    }

    .list-leave-to{
        opacity:0;  
        transform:translateX(600px);
    }
    .list-enter-to{
        opacity:1;
       transform: translateX(40px);
    }
    .list-item{
        /* position:relative; */
         transition: opacity 2s;
    }
</style>
