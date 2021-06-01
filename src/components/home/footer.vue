<template>
  <div class="black">
    <div class="left">
      <a href="">关于我们</a>
      <a href="">联系我们</a>
      <a href="">帮助中心</a>
      <a href="">编程系统</a>
      <a href="">哔哩哔哩</a>
      <a href="">会员中心</a>
      <a href="">付费渠道</a>
      <p>@思维Plus 版权所有</p>
    </div>
    <div class="right">
        <div style="margin-bottom:1rem;display:flex;">
          <div class="box">
            <img src="../../assets/img/andriod.png" alt="">
            <span>Andriod下载</span>

          </div>
          <div class="box">
            <img src="../../assets/img/apple.png" alt="">
            <span>App Store下载</span>
          </div>
        </div>
        <div style="display:flex;margin:1rem 6rem;">
          <span>联系我们：</span>
          <img src="../../assets/img/email.png" alt="">
          <img src="../../assets/img/github.png" alt="">
          <img src="../../assets/img/weixin.png" alt="">
          <img src="../../assets/img/weibo.png" alt="">          
        </div>

    </div>
  </div>
</template>
<style scoped>
.black{
  width: 100%;
  background-color: #474443;
  /* height: 150px; */
  display: flex;
}
.left{
  width: 60%;
  padding-top: 3rem;
  text-align: center;
  /* height: 100%; */
}
.left a{
  color: white;
  margin:0 1rem;
}
.left a:hover{
  color: green;
}
.left p{
  color: gray;
  margin-top: 2rem;
}
.right{
  width:40%;
  padding-top: 2rem;
  /* height: 100%; */
}
.right span{
  color: white;
}
.right img{
  width: 1.7rem;
  height: 1.7rem;
  margin:0 0.7rem;
  cursor: pointer;
}
.box{
  /* width: 11rem; */
  /* height: 3rem; */
  margin:0.5rem 2rem;
  background-color: rgba(0, 0, 0, 0.445);
  border:1rem unset gray;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.box img{
  margin-left: 1rem;
  margin-right: 1rem;
}
.box{
  padding:0.5rem 0rem;
  padding-right: 2rem;
}
</style>