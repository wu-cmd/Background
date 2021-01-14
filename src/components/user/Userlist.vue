<template>
<!-- 面包屑导航 -->
  <div>
  <el-breadcrumb separator-class="el-icon-arrow-right">
     <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
     <el-breadcrumb-item>活动管理</el-breadcrumb-item>
     <el-breadcrumb-item>活动列表</el-breadcrumb-item>
     <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>

    <!-- 卡片视图区域 -->
  <el-card >
      <!-- 搜索与添加区域 -->
    
    <el-row :gutter="20">
      <el-col :span="8">
        <el-input placeholder="请输入内容" v-model="queryinfo.query" 
        clearable @clear="getUserlist">
        <el-button slot="append" icon="el-icon-search" @click="getUserlist()"></el-button>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="adduser">添加用户</el-button>
      </el-col>
    </el-row>
    
    <!-- 用户列表区域 -->
     <el-table :data="userlist" border stripe>
      <el-table-column type="index"></el-table-column>
      <el-table-column label="姓名" prop=""></el-table-column>
      <el-table-column label="邮箱"></el-table-column>
      <el-table-column label="电话"></el-table-column>
      <el-table-column label="角色"></el-table-column>
      <el-table-column label="状态" >
        <!-- prop="message" -->
        <template slot-scope="scope" >
          {{scope.row}}
          <el-switch v-model="scope.row.message" @change="userStateChange(scope.row)"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180px">
         <template > 
           <!-- slot-scope="scope" -->
           <!-- 修改按钮 -->
           <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
           <!-- 删除按钮 -->
           <el-button type="danger" icon="el-icon-edit" size="mini"></el-button>
           <!-- 分配角色按钮 -->
          <el-tooltip  effect="dark" content="分配角色" placement="top" :enterabl="false">
             <el-button type="warning" icon="el-icon-edit" size="mini"></el-button>
         </el-tooltip>
           
          <el-switch ></el-switch>
        </template>
      </el-table-column>
     </el-table>
     <!-- 分页区域 -->
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryinfo.pagenum"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="queryinfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totle">
    </el-pagination>
  </el-card>

  <!-- 添加用户的对话框 -->
  <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="50%">
  <!-- :before-close="handleClose"> -->
  <!-- 内容主体区域 -->
  <span>这是一段信息</span>
  <!-- 底部区域 -->
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return{
      queryinfo:{
        query:'',
        // 当前页数
        pagenum:1,
        // 当前每页显示多少条数据
        pagesize:2,
      },
      userlist:[],
      // 数据总条数
      totle:0,
      // 控制对话框的显示与隐藏
      dialogVisible:false
    }
  },
  created(){
    // this.getUserlist()
  },
  methods:{
  // async  getUserlist(){
  //   const { data : res } = await this.$http().post('user', {
  //     params:this.queryinfo 
  //     })
  //   if(res.data.code !== 0){
  //   return this.$message.error("获取用户列表失败")
  //   }
  //   this.userlist = res.data.users
  //   this.totle = res.data.total
  // },
  // 监听pagesize改变的事件
  handleSizeChange(newSize){

  },
  // 监听页码值改变事件
  handleCurrentChange(newPage){

  },
  // 监听swich状态改变
  async userStateChange(userinfo){
    // 改变完，请求接口保存状态
  const {data:res} = await this.$http.put(
    // ``表示字符串
  )
  if(res.data.code !==0 ){
    return this.$message.error("更新用户状态失败！")
  }
  this.$message.success("更新用户状态成功！")
  },
  // 添加用户
  adduser(){
    this.dialogVisible = !this.dialogVisible
  }
}
}
</script>

<style>
  .el-main{
    line-height: 0px;
  }
</style>