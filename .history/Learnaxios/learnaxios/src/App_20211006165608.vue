<template>
  <div id="app">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  comments:{

  },
  created() {
    axios({
      url:'http://123.207.32.32:8000'
    }).then(res =>{
      console.log(res);
    })
  },
}
</script>

<style>

</style>
