<template>
  <div style="text-align:center;">
    <navvue></navvue>
    <div class="loginbg">
        <div class="logintitle">
          <h1>————————————<span>注册</span>————————————</h1>
        </div>
        <div class="loginbody">
          <div class="leftimg">
            <img src="../assets/img/login.png" alt="">
          </div>
          <div class="righttxt">
            <div class="oneline">
              <div>
                <i class="el-icon-s-custom"></i>
              </div>
                <input type="text" placeholder="账号">
            </div>
            <div class="oneline">
              <div>
                <i class="el-icon-key"></i>        
              </div>
                <input type="password" placeholder="密码">
                <div style="width:5rem">
                  <a>忘记密码</a>
                </div>
            </div>
            <div class="oneline">
              <div>
                <i class="el-icon-phone"></i>
              </div>
                <input type="text" placeholder="手机号">
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
              <input type="checkbox"><span>我已同意<a>《思维Plus用户使用协议》</a>和<a>《思维Plus隐私政策》</a></span>
            </div>
            <div class="loginbutton">
              <button>注册</button>
            </div>
            <h5 class="yiyou" @click="tologin()">已有账号，直接登录></h5>
          </div>
        </div>
    </div>
    <footer>
      <h2>Copyright ©思维Plus</h2>
    </footer>
  </div>
</template>
<script>
import navvue from "../components/home/nav"
export default {
  components:{
    navvue,
  },
  methods:{
    tologin(){
      this.$router.push('/login/psw');
    }
  }
}
</script>
<style scoped>
.loginbg{
  width: 100%;
  height: 100vh;
  background-image: url(../assets/img/loginbg.png);
  background-size: 100% 100%;
}
footer{
  padding:1rem 0;
  background-color: #626262;
}
footer h2{
  color: white;
  letter-spacing: 0.15rem;
  font-weight: 100;
}
.logintitle{
  padding-top:120px;
  padding-bottom: 20px;
}
.logintitle h1{
  font-size: 2rem;
  font-weight: 10;
  color: #a8a8a854;
}
.logintitle h1 span{
  padding: 0 2rem;
  color: black;
}
.loginbody{
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 90%;
  margin:0 auto;
}
.loginbody .leftimg{
  width: 40vw;
  height: 27vw;
  /* background-image: url(../assets/img/sign.png); */
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5rem;
}
.loginbody .righttxt{
  width: 40vw;
  height: 100%;
}
.righttxt{
  min-height: 25vw;
  margin-top: 2rem;
  text-align: left;
  margin-left: 2rem;
}
.righttitle{
  margin:1rem 0;
}
.righttitle .router-link{
  color: black;
}
.righttitle .router-link-active{
  color: #f8a0b4;
}
.righttitle a{
  color: black;
}
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
  font-size: 0.94rem;
}
.remember a{
  color: #f3a0b3;
  cursor: pointer;
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
.yiyou{
  text-align: right;
  font-weight: 100;
  padding-right: 15rem;
  margin-top: 1rem;
  cursor: pointer;
  color:#f3a0b3;
  font-size: 0.9rem;
}
</style>