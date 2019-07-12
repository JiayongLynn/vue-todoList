<template>
    <label>
        <span class="grey">{{label}}</span>
        <input v-bind="$attrs" type="text" v-bind:value="value" v-on="inputListeners" style="width:65%;height:30px;" >
        <button class="submitBtn" @click="$emit('addItem')">submit</button>
    </label>
</template>
<script>
export default {
    name: 'BaseInput',
    props:['label','value'],
    computed:{
        inputListeners:function(){
            var vm = this;
            return Object.assign({},this.$listeners,{
                input:function(event){
                    vm.$emit('input',event.target.value);
                }
            })
        }
    },
    inheritAttrs:false,
}
</script>
<style scoped>
  .submitBtn{
        /* position: absolute;
        right:0; */
        border: none;
        padding: 10px 10px;
        border-radius:5px;
        width:12%;
        background-color: #28aa8e;
    }
    input{
        border-radius:5px;
    }
    .grey{
    color: #777;
    font-family: Times New Roman
    }
</style>
