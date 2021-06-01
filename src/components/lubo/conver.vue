<template>
  <div class="conver">
    <div class="topbox">
      <el-avatar icon="el-icon-user-solid"></el-avatar>
      <div class="mycombox">
        <input type="text" name="" id="">
      </div>
      <button>发表评论</button>
    </div>
    <div class="lotofbox">
      <hr>
      <div class="lastbox">
        <img src="../../assets/img/userimg.png" alt="">
        <div class="righttxt">
          <h3>老师答疑区</h3>
          <p>发表关于作业、测试、课件内容希望能够得到老师回答的疑问。</p>
        </div>
      </div>
      <hr>
      <div class="lastbox">
        <img src="../../assets/img/userimg.png" alt="">
        <div class="righttxt">
          <h3>课堂交流区</h3>
          <p>这里发表的是在课件中作为教学内容的讨论。</p>
        </div>
      </div>
      <hr>
      <div class="lastbox">
        <img src="../../assets/img/taolun.png" alt="">
        <div class="righttxt">
          <h3>综合讨论区</h3>
          <p>发表任何想与大家分享的经验及想法!关于本课程、学习、工作、生活等一般性话题。</p>
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.conver{
  width: 60vw;
  height: 30vw;
  /* background-color: green; */
  margin:0 4rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.topbox{
  width: 100%;
  height: 6vw;
  /* background-color: greenyellow; */
  display: flex;
  align-items: center;
}
hr{
  height: 1px;
  border:0px;
  background-color: rgba(141, 141, 141, 0.315);
}
.mycombox{
  width: 47vw;
  margin-left: 2rem;
  height: 4vw;
  background-color: #F4F5F7;
}
.mycombox input{
  background-color: inherit;
  width: 100%;
  height: 100%;
  border:0px;
  outline: none;
  padding-left: 2rem;
}
.topbox button{
  width: 4rem;
  height: 4rem;
  margin-left: 3rem;
  border:0px;
  background-color: #F2A776;
  color: white;
  font-size: 1.2rem;
  font-weight: 100;
  cursor: pointer;
}
.lotofbox{
  margin-top: 2rem;
  width: 100%;
  height: 23vw;
  padding-left: 1rem;
  /* background-color: hotpink; */
}
.lastbox{
  width: 100%;
  /* background-color: rgb(168, 148, 148); */
  height: 5vw;
  display: flex;
  align-items: center;
}
.lastbox img{
  width: 2.5rem;
  height: 2.5rem;
}
.righttxt{
  margin-left: 2rem;
  width: 30vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: tomato; */
}
.righttxt h3{
  font-size: 1.3rem;
  cursor: pointer;
}
.righttxt p{
  margin-top: 0.5rem;
  color: rgba(128, 128, 128, 0.781);
}
</style>