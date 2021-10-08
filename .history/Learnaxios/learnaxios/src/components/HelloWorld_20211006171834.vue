<template>
  <h2>{{categoryies}}</h2>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      categoryies:''
    }
  },
  created() {
    axios({
      url:'http://123.207.32.32:8000/category'
    }).then(res =>{
      this.categoryies = res;
    })
  },
}
</script>

<style scoped>

</style>
