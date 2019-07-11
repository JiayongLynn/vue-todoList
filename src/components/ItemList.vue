<template>
      <transition-group name="list" tag="ul" :duration="{ enter: 500, leave: 5000 }">
                <li v-for='(item,index) in itemList' v-bind:key="item.ID"  style="height:30px;margin-bottom:10px;" :class="[item.flag ? itemTag : '',listitem ]">
                    <span v-on:click='Tag(item)'>{{item.item}}</span>
                    <button class="removeBtn" @click="$emit('removeItem',index)">Remove</button>
                </li>
      </transition-group>
</template>
<script>
export default {
    name:'ItemList',
    props:['ItemList'],
    data(){
        return{
            itemTag : 'itemtag',
            itemList:this.ItemList,
            listitem:'list-item'
        }
    },
    methods:{
        //点击某项的时候改变他的flag从而改变颜色
        Tag:function(item){
            item.flag = !item.flag;
        }
    }
}
</script>
<style>
    ul{
        list-style: none;
        padding-inline-start:20px;
        width:300px;
    }
    .itemtag{
        color:red;
    }
    .removeBtn{
        float: right;
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
        transform: translateX(-20px);      
    }
    .list-enter-to{
        opacity:1;
       transform: translateX(40px);
    }
    .list-item{
         transition: opacity 4s;
    }
</style>
