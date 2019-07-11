<template>
  <div id="app">
    <h1>{{title}}</h1>
    <!-- <p class="center">Click the item,it mean that is completed</p> -->
    <div class="container">
      <baseinput label='TodoItem:' placeholder="Please input your todo-item" v-model='item' v-on:keyup.enter='addItem'></baseinput>
      <itemlist :ItemList='List' v-on:removeItem="removeItem"></itemlist>
    </div>

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

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 1px solid #2c3e50;
  width:30%;
  min-height:300px;
  margin: 0 auto;
}
h1{
  text-align: center;
  color:#23609c;
}
.center{
  text-align: center;
}
.container{
  /* width: ; */
  background-color: rgba(255,255,255,0.1);
  margin:0 auto;
  /* padding: 10px 10px; */
}
</style>
