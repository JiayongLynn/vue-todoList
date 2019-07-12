<template>
  <div id="app" style="position:relative">
    <h1>{{title}}</h1>
    <!-- <p class="center">Click the item,it mean that is completed</p> -->
    <div class="container">
        <baseinput label='TodoItem:' placeholder="Please input your todo-item" v-model='item' v-on:keyup.enter='addItem'  v-on:addItem="addItem"></baseinput>
       <router-view :ItemList='List' :visibility='visibility' v-on:removeItem="removeItem">
            <!-- <itemlist :ItemList='List' v-on:removeItem="removeItem"></itemlist> -->
       </router-view>
    </div>
    <div style="text-align:left;" class="grey">
          <span>A total of {{countData}} to-do items</span>
          <router-link :class="{active:visibility==='all'}" @click.native="changea('all')" to='/' class="router">All</router-link>
          <router-link :class="{active:visibility==='undone'}" @click.native="changea('undone')" to='/undo' class="router">Undone</router-link>
          <router-link :class="{active:visibility==='finished'}"  @click.native="changea('finished')" to='/finished' class="router">Finished</router-link>
    </div>
  </div>
</template>
<script>
import BaseInput from "./components/BaseInput"
// import ItemList from "./components/ItemList"

const StorageKey = 'Item'

export default {
  name: 'app',
  data:function(){
    return{
        title:'TodoList',
        item:'',
        List:JSON.parse(window.localStorage.getItem(StorageKey)||'[]'),
        ID:JSON.parse(window.localStorage.getItem('ID')||'0'),
        visibility:'all'
    }
  },
  components: {
    'baseinput':BaseInput,
    // 'itemlist':ItemList
  },
  methods:{
    addItem:function(){
        this.List.push({ID:this.ID,item:this.item,flag:false});
        this.ID++;
        this.item = '';  
    },
    removeItem:function(id){
        this.List.splice(id,1);
    },
    changea:function(value){
      this.visibility = value;
    }
  },
  watch:{
      //监听List的变化，存取在缓存里
      List:{
          handler(List){
          window.localStorage.setItem(StorageKey,JSON.stringify(List));
          },
          deep:true
      },
      ID:function(ID){
          window.localStorage.setItem('ID',JSON.stringify(ID));
      }
  },
  computed:{
       countData:function(){
           return this.List.filter((todo)=>{
               return !todo.flag;
           }).length;
       }
    }
}

</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  border: 1px solid #2c3e50;
  width:30%;
  min-height:300px;
  margin: 0 auto;
  padding:30px;
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
  padding-bottom:10px;
}
.grey{
  color: #777;
  font-family: Times New Roman;
  bottom: 0px;  
  position: absolute;
  height: 25px;
  margin-top: 10px;
}
.router{
  margin-left:70px;
  border: none;
  background-color:#fff;
  color:#777;
}
a{
  text-decoration: none;
}
.active{
  text-decoration: none;
  border-bottom:2px solid #23609c;
}
</style>
