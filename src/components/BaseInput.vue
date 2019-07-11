<template>
    <label>
        {{label}}
        <input v-bind="$attrs" type="text" v-bind:value="value" v-on="inputListeners">
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
</style>
