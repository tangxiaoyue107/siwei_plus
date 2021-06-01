<template>
  <div class="bg">
      <navvue></navvue> 
      <div class="topbig">
        <div class="topbox">
          <h1>思维PLUS</h1>
        </div>
        <div class="pbox">
            <p>思维PLUS以"优质教育,学玩结合,灵活便捷,具有前瞻性"为定位指导原则,通过一系列编程课程的学习,使不同年龄段的孩子了解、学习、掌握编程。</p>
            <br><br>
            <p>本项目选择分阶段性学习scratchi语言。Python语言和C++语言。本项目将采取循环直播授课。录播课程复习、课后练习巩固,直播答疑解惑的教学模式,通过老师线上实时监督提高学习效率,坚持*启发式教学",充分调动学生的主动性和积极性,同时,课程后期将进行部分算法的深入学习,使编程学习趋于系统化。</p>
        </div>
      </div>
      <div class="kecheng">
        <h1>课程</h1>
        <div class="navme">
          <router-link to="/"><span style="color:orange;">全部</span></router-link> 
          <router-link to="/"><span>正在进行</span></router-link>   
          <router-link to="/"><span>即将开始</span></router-link>   
          <router-link to="/"><span>已结束</span></router-link>   
          <router-link to="/"><span>我的购物车</span></router-link>   
          <input type="text" placeholder="请输入完整课程名搜索">
          <button>查询</button>
        </div>
        <div class="kechengbox">
          <div class="imgbox">
            <img src="../assets/img/index3.png" alt="">
          </div>
          <div class="imgbox">
            <img src="../assets/img/index4.png" alt="">
          </div>
          <div class="imgbox">
            <img src="../assets/img/index3.png" alt="">
          </div>
        </div>
      </div>
      <footervue></footervue>
  </div>
</template>
<script>
import navvue from "../components/home/nav"
import footervue from "../components/home/footer"
export default {
  components:{
    navvue,
    footervue,
  }
}
</script>
<style scoped>
.bg{
  background-color: #F4F5F7;
}
.topbig{
  /* width: 100vw; */
  /* height: 75vh; */
  background-color: blanchedalmond;
  background-image: url(../assets/img/me.png);
  background-size:cover;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.topbox{
  margin-left: 7rem;
  /* margin-top: 3rem; */
  border-width: thick;
  /* border-bottom: 1px orange solid; */
}
.topbig h1{
  font-size: 3rem;
  color: white;
  font-weight: 100;
}
.pbox{
  margin-left: 7rem;
  width: 40vw;
  margin-top: 5rem;
}
.pbox p{
  color: rgba(255, 255, 255, 0.842);
  text-indent: 2rem;
  font-weight: 100;
  font-size: 1.15rem;
  line-height: 2rem;
}
.kecheng{
  padding-top: 3rem;
  width: 80vw;
  /* height: 50px; */
  margin:0 auto;
  /* background-color: wheat; */
}
.kecheng h1{
  font-size: 1.7rem;
  font-weight: 100;
}
.navme{
  margin-top: 2rem;
  width: 100%;
  height: 5rem;
  background-color: white;
  display: flex;
  padding-left: 1rem;
  align-items: center;
}
.navme a{
  margin:0 1rem;
  color: black;
}
.navme input{
  position: relative;
  left:33vw;
  width: 12rem;
  height: 2rem;
  padding-left: 1rem;
  outline: none;
  border:rgba(128, 128, 128, 0.356) 1px solid;
}
.navme button{
  position: relative;
  left:34vw;
  width: 3.5rem;
  height: 2rem;
  background-color: orange;
  cursor: pointer;
  color: white;
  border:0px;
  cursor: pointer;
  border-radius: 0.2rem;
}
.kechengbox{
  margin-top: 2rem;
  min-height: 23rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* height: 40vw; */
  /* margin-bottom: 3rem; */
}
.imgbox{
  margin:1rem 0rem;
  background-color: white;
  cursor: pointer;
  padding:2rem 2rem;
}
.imgbox img{
  width: 20vw;
}
</style>