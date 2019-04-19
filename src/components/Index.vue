<template>

  <el-container>
    <div>
      <div
        style="text-align: right;height:100%;background-color: aliceblue;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);">
        <el-dropdown style="margin-right: 20px;margin-top: 20px">
          <img
            src="http://yunhe-sz.oss-cn-shenzhen.aliyuncs.com/99410563-0bf4-42c1-957f-5b1cd5904945.jpg"
            width="30" height="30" style="margin-right: 15px;border-radius: 30px"/>
          <span>王小虎</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item><a @click="logout">退出</a></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-header style="margin-top: 50px">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#409EFF"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="2" onclick="location.href = '/'"><a>首页</a></el-menu-item>
          <el-menu-item index="3" onclick="location.href = '/answer'"><a>文章</a></el-menu-item>
          <el-menu-item index="4" onclick="location.href = '/music'"><a>音乐</a></el-menu-item>
          <el-menu-item index="5" onclick="location.href = '/video'"><a>视频</a></el-menu-item>
          <el-menu-item index="6"><a>关于我</a></el-menu-item>
        </el-menu>
      </el-header>
    </div>
    <el-main>
      <router-link to="/answer"></router-link>
      <router-view></router-view>
    </el-main>
    <el-footer>
      @凌潇
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    data () {
      return {
        user: null
      }
    },
    methods: {
      logout () {
        localStorage.removeItem('user')
        this.$router.push('/login')
      }
    },
    mounted: function () {
      this.user = localStorage.getItem('user')
    }
  }
</script>

