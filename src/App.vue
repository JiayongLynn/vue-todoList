<template>
  <div id="app">
    <h1>{{title}}</h1>
    <p>Click the item,it mean that is completed</p>
    <baseinput label='TodoList:' placeholder="Please input your todo-item" v-model='item' v-on:keyup.enter='addItem'></baseinput>
    <itemlist :ItemList='List' v-on:removeItem="removeItem"></itemlist>
  </div>
</template>

<script>
import BaseInput from "./components/BaseInput"
import ItemList from "./components/ItemList"
const StorageKey = 'Item'
export default {
  name: 'app',
  data:function(){
    return{
        title:'TodoList',
        item:'',
        List:JSON.parse(window.sessionStorage.getItem(StorageKey)||'[]'),
        ID:JSON.parse(window.sessionStorage.getItem('ID')||'0')
    }
  },
  components: {
    'baseinput':BaseInput,
    'itemlist':ItemList
  },
  methods:{
    addItem:function(){
        this.List.push({ID:this.ID,item:this.item,flag:false});
        this.ID++;
        this.item = '';  
    },
    removeItem:function(id){
        this.List.splice(id,1);
    }
  },
  watch:{
      //监听List的变化，存取在缓存里
      List:function(List){
          window.sessionStorage.setItem(StorageKey,JSON.stringify(List));
      },
      ID:function(ID){
          window.sessionStorage.setItem('ID',JSON.stringify(ID));
      }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
