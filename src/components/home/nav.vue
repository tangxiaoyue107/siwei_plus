<template>
  <div class="bigbox">
    <div class="logo">
      <img src="../../assets/img/LOGO.png" alt="" @click="backtohome()">
    </div>
    <div class="search">
      <div class="border">
        <input type="text" style="padding-left:0.4rem;">
        <div class="searchgo">
          <i class="el-icon-search"></i>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="loginsign" v-if="!this.$cookie.get('username')">
        <router-link to="/"><span>主页</span></router-link> |
        <router-link to="/sign"><span>直播</span></router-link>   |
        <router-link to="/lubo"><span>录播</span></router-link>   |
        <router-link to="/sign"><span>历史</span></router-link>   |
        <router-link to="/sign"><span>会员</span></router-link>   |
        <router-link to="/login/psw"><span>登录</span></router-link> |
        <router-link to="/sign"><span>注册</span></router-link>
        <div style="margin-left:1rem;margin-right:2rem;">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div> 
      </div>
      <div class="loginsign" v-else>
        <router-link to="/"><span>主页</span></router-link> |
        <router-link to="/sign"><span>直播</span></router-link>   |
        <router-link to="/lubo"><span>录播</span></router-link>   |
        <router-link to="/sign"><span>历史</span></router-link>   |
        <router-link to="/sign"><span>会员</span></router-link>   |
        <router-link to="/mine"><span>我的</span></router-link> |
        <router-link to="/"><span @click="loginout()">退出</span></router-link>
        <div style="margin-left:1rem;margin-right:2rem;">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div> 
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    backtohome(){
      this.$router.push('/');
    },
    loginout(){
      alert('退出成功');
      this.$cookie.delete('username');
      this.$router.push('/');
      window.location.reload();
    }
  },
  created(){
    // console.log(this.$cookie.get('username'));
  }
}
</script>
<style scoped>
.bigbox{
  width: 100%;
  /* background-color: #FEF7F4; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* margin-right: 2rem; */
  padding: 0.5rem 0;
}
.logo{
  margin-right: 2rem;
  margin-left: 2rem;
}
.logo img{
  cursor: pointer;
}
.search{
  margin-right: 30vw;
}
.search .border{
  width: 25vw;
  height: 2.3rem;
  border: 1px solid #FAA979;
  border-right: 0px;
  border-radius: 5px;
  overflow: hidden;
}
.border input{
  background-color: inherit;
  width: 86%;
  border:0px;
  outline: none;
  height: 100%;
}
.searchgo{
  background-color: #FAA979;
  width: 3rem;
  height: 100%;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchgo i{
  transform: scale(1.5);
  color: rgb(255, 255, 255);
  position: relative;
  /* top:0.6rem; */
  cursor: pointer;
  /* left:1rem */
}
.loginsign{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.loginsign span{
  color: rgb(116, 116, 116);
  padding-right: 0 1rem;
}
.loginsign span:hover{
  color: green;
  cursor: pointer;
}
.loginsign a{
  width: 3rem;
}
.loginsign a{
  text-align: center;
}
</style>