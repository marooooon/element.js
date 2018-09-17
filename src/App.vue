<template>
  <div id="app">
    <el-date-picker v-model="datetime" type="datetime" placeholder="日時を選択してください"></el-date-picker>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {datetime: ''}
        }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
