<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头部区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt=""/>
      </div>
      <!-- 表单区域 -->
       <el-form  ref="form" :rules="loginFormRules" :model="loginForm" label-width="0" 
       class="login_form">
         <!-- 用户名 -->
         <el-form-item prop="username">
           <el-input v-model="loginForm.username" prefix-icon="el-icon-s-custom"></el-input>
         </el-form-item>
         <!-- 密码 -->
         <el-form-item  prop="password">
           <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-s-goods"></el-input>
         </el-form-item>
          <!-- 按钮区域 -->
         <el-form-item class="btns">
           <el-button type="primary" @click="login">登录</el-button>
           <el-button type="info" @click="resetLoginForm">重置</el-button>
         </el-form-item>
          

       </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name:'Login',
  data(){
      return{
        // 这是登录表单的数据绑定对象
        loginForm: {
          username: '',
          password:''
        },
        // 这是表单的验证
        loginFormRules:{
          username:[ 
           { required: true, message: '请输入用户名', trigger: 'blur' },
           { min: 3, max: 18, message: '长度在 3 到 10 个字符', trigger: 'blur' }
           ],
          password:[
            { required: true, message: '请输入登录密码', trigger: 'blur' },
           { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ]
        },
      }
  },
  methods:{
    resetLoginForm(){
      this.$refs.form.resetFields();
    },
    login(){
      this.$refs.form.validate(async valid =>{
      // 如果为false，不发送请求
        if(!valid) return;
        let params = {
        UserName : this.loginForm.username,
        UserPassword : this.loginForm.password,
      }
      //  const {data:res}  = await this.$http.post("login",params);
      const result  = await this.$http.post("login",params);
      if(result.status !==200) return this.$message.error('登录失败')
      this.$message.success('登录成功')
      // 1、将登录成功之后的token，保存到客户端的sessionStorage中
        // 1.1项目中出了登录之外的其他接口API接口，必须在访问之后才能访问
        // 1.2token只应在当前网站打开期间生效，所以将token保存在SessionStorage中
        //  localStorage.setItem('token', res.data.token);
        sessionStorage.setItem("token",result.data.data.token);
        // console.log("result.data.token", result.data.data.token)
      // 2、通过编程时导航跳转到后台主页。路由地址是'/home'   
        this.$router.push('/home')
      })
    }

  }
}
</script>

<style >
.login_container{
background-color: #2b4b6b;
height: 100%;
}
.login_box{
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius:3px ;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.avatar_box{
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius:50% ;
  padding:  10px ;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color:#fff ;
}
.avatar_box img {
  width: 100%;
  height: 100%;
  border-radius:50% ;
  background-color: #eee;
}
.btns{
  display: flex;
  justify-content: flex-end;
}
.login_form{
  position: absolute ;
  bottom:0;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
</style>