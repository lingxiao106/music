<template>
  <el-row>
    <el-col :span="5" :xs="20" v-for="(o, index) in 8" :key="o"
            style="margin-top: 20px;margin-left: 30px;margin-right: 26px">
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://test-1256499519.cos.ap-guangzhou.myqcloud.com/jso3nvyj.jpg" height="200px" width="200px"
             class="image">
        <div style="padding: 14px;">
          <span>一段回忆</span>
          <div class="bottom clearfix">
            <time class="time"></time>
            <el-button type="text" class="button">查看详情</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data () {
      return {
        answerList: null
      }
    },
    methods: {},
    mounted: function () {

    }
  }
</script>

<style scoped>

</style>
