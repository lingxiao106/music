<template>
  <el-row>
    <el-col :span="5" :xs="20" v-for="(o, index) in list" :key="o"
            style="margin-top: 20px;margin-left: 30px;margin-right: 26px">
      <el-card :body-style="{ padding: '0px' }">
        <img
          :src="o.image" height="200px" width="200px"
          class="image" style="margin-top: 20px;border-radius: 30px;"
          @click="answerInfo(o.id)">
        <div style="padding: 14px;">
          <span>{{o.title}}</span>
          <div class="bottom clearfix">
            <time class="time"></time>
            <el-button type="text" class="button" @click="answerInfo(o.id)">查看详情</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col v-if="list.size > 10">
      <div :span="24">
        <el-pagination background
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-size="pagesize"
                       layout="total, prev, pager, next, jumper"
                       :total="total">
        </el-pagination>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'answer',
    data () {
      return {
        loading: true,
        list: [],
        total: null,
        currentPage: 1,
        pagesize: 10
      }
    },
    methods: {
      answerInfo (id) {
        this.$router.push({name: 'answerInfo', params: {id: id}})
      },
      load () {
        let a = this
        this.loading = true
        this.axios.get('http://192.168.1.175:8089/' + 'api/answer/getAnswerInfo', {
          params: {
            pageNum: this.currentPage,
            pageSize: this.pagesize,
          }
        }).then(response => {
          this.list = response.data.data.data
          this.total = response.data.data.total
        }).catch(function (error) {
          a.$message.error('系统出现异常请联系管理人员！')
        }).finally(() => this.loading = false)
      },
      handleCurrentChange (val) {
        this.currentPage = val
        this.load()
      }
    },
    created () {
      this.load()
    }
  }
</script>

<style scoped>

</style>
