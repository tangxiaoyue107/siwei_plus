<template>
  <div style="text-align:center;">
    <navvue></navvue>
    <div class="loginbg">
        <div class="logintitle">
          <h1>————————————<span>登录</span>————————————</h1>
        </div>
        <div class="loginbody">
          <div class="leftimg">
            <img src="../assets/img/sign.png" alt="">
          </div>
          <div class="righttxt">
            <div class="righttitle">
              <router-link to="/login/psw" style="margin-right:1rem;"><span>密码登陆</span></router-link> 
              <router-link to="/login/mes"><span>短信登陆</span></router-link>               
            </div>
            <router-view></router-view>
          </div>
        </div>
        <div class="xieyi">
          <h1>登录即表示你同意<a>用户协议</a>和<a>隐私协议</a></h1>
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
.xieyi h1{
  font-weight: 100;
  margin-top: 2rem;
  color: gray;
}
.xieyi a{
  color: #F5BECB;
  cursor: pointer;
  /* font-weight: 100; */
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
  text-decoration: none;
}
.righttitle .router-link-active{
  color: #f8a0b4;
}
.righttitle a{
  color: black;
}
</style>