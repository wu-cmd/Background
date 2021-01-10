<template>
 <el-container>
     <!-- 头部区域 -->
   <el-header>
       <div class="logo">
           <img class="loginimg" src="../assets/logo.png" alt="">
           <span class="bgtext">电商后台管理系统</span>
       </div>
       <el-button type="info" @click="loginout">退出</el-button>
   </el-header>
    <!-- 页面主体区域 -->
   <el-container>
      <!-- 侧边栏 -->
    <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
      <el-menu background-color="#545c64"  text-color="#fff" 
      active-text-color="#ffd04b" :router="true" :collapse="isCollapse"
      :collapse-transition="false">
          <!-- 一级菜单 -->
      <el-submenu index="1">
          <!-- 一级菜单的模板区 -->
        <template slot="title">
            <!-- 图标 -->
          <i class="el-icon-location"></i>
          <!-- 文本 -->
          <span>用户菜单</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item index="adduser">
             <template slot="title">
            <!-- 图标 -->
          <i class="el-icon-location"></i>
          <!-- 文本 -->
          <span >添加菜单权限</span>
        </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    </el-aside>
    <!-- 右边主体内容 -->
    <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>  
</template>

<script>
export default {
 name:'Home',
 data(){
     return{
         isCollapse:false
     }
 },
created(){
    this.getMenuList()
},
 methods:{
     loginout() {
         window.sessionStorage.clear();
         this.$router.push('/login')
     },
    //  获取所有的菜单
     async getMenuList(){
        const res =await this.$http.get('/menu/list',)
        console.log("res",res)
     },
    //  切换菜单的折叠与展开
     toggleCollapse(){
         this.isCollapse = !this.isCollapse
     }
 }
}
</script>

<style>
.el-container.is-vertical{
    height: 100%;
}
.el-menu{
    border:none
}
.el-header {
    background-color: #373d41;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding-left: 0;
    color:#fff;
    font-size: 20px;
  }
  .logo{
      width: 220px;
      height: 45px;
      color:#fff;
      display: flex;
      align-items: center;
  }
  .loginimg{
          width:20%;
          height: 100%;
      }
 .bgtext{
     color: #fff;
     margin-left: 15px;
 }
  .el-aside {
    background-color: #333744;
    color: #fff;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #eaedf1;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .toggle-button{
      background-color: #4A5064;
      font-size: 10px;
      line-height: 24px;
      color: #fff;
      letter-spacing: 0.2em;
      cursor: pointer;
        }
</style>