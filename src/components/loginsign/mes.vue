<template>
  <div>
    <div class="oneline">
      <div>
        <i class="el-icon-phone"></i>
      </div>
        <input type="text" placeholder="手机号" v-model="phone">
    </div>
    <div class="oneline">
      <div>
        <i class="el-icon-chat-line-square"></i>        
      </div>
        <input type="text" placeholder="验证码">
        <div style="width:5rem;">
          <a>发送验证码</a>
        </div>
    </div>
    <div class="remember">
      <input type="checkbox"><span>记住我</span>
      <div style="width:18rem;text-align:right;">
        <span style="cursor: pointer;" @click="tosign()">没有账号？点击注册</span>
      </div>
    </div>
    <div class="loginbutton">
      <button @click="logingo()">登录</button>
    </div>
    <div class="another">
      <div class="oneop">

      </div>
    </div>


  </div>
</template>
<script>
export default {
  data(){
    return {
      phone:11,
    }
  },
  methods:{
    tosign(){
      this.$router.push('/sign');
    },
    logingo(){
      alert('登录成功',this.phone);
      // window.localStorage.setItem('username',this.phone)
      this.$cookie.set('username',this.phone);
      this.$router.push('/');
    }
  }
}
</script>
<style scoped>
.oneline{
  margin-top: 2rem;
  width: 25rem;
  height: 3rem;
  background-color: #F2F7FE;
  border:0px;
  border-radius: 5rem;
  display: flex;
}
.oneline>div{
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.oneline i{
  color: rgba(158, 158, 158, 0.596);
  transform: scale(1.5);
}
.oneline a{
  color: rgb(160, 160, 160);
}
.oneline a:hover{
  color: #F5BECB;
  cursor: pointer;
}
.oneline input{
  outline: none;
  width: 15rem;
  border:0px;
  border-radius: 5rem;
  background-color: inherit;
}
.remember{
  margin-top: 2rem;
  display: flex;
  align-items: center;
}
.remember input{
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  margin-left: 1rem;
}
.remember span{
  color: #f3a0b3;
}
.remember>span{
  color: black;
}
.loginbutton{
  width: 25rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
.loginbutton button{
  width: 10rem;
  height: 2.3rem;
  border:0px;
  font-size: 1.1rem;
  border-radius: 5px;
  background-color: #F5C5CE;
  cursor: pointer;
  color: white;
}
.loginbutton button:hover{
  background-color: #f6b4c4;
}
</style>