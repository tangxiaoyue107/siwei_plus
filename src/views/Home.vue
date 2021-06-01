<template>
  <div class="home">
    <navvue></navvue>
    <div style="display:flex;justify-content:center;">
      <lunbo></lunbo>
    </div>
    <div class="part" style="margin-top:2rem;">
      <div class="title">
        <div class="titleline">
          <img src="../assets/img/01.png" alt="">
          <h2>关于我们</h2>          
        </div>
        <div class="aboutus">
          <div class="aboutuspart">
            <h3>Python</h3>
            <img src="../assets/img/python.png" alt="">
            <p>Python由荷兰数学和计算机科学研究学会的Guido van Rossum于1990年代初设计,
            作为一门叫做ABC语言的替代品。Python提供了高效的高级数据结构。
            Python语法和动态类型,逐渐被用于独立的、大型项目的开发。
            </p>
          </div>
          <div class="aboutuspart">
            <h3>Scratch</h3>
            <img src="../assets/img/scrath.png" alt="">
            <p>Scratch是麻省理工学院开发的一款
            简易图形化编程工具。
            这个软件的开发团队称为“终身幼儿园团队”
            (Lifelong Kindergarten Group)。几乎所有的孩子都会一眼喜欢上这个软件。
            建立起做编程的欲望。
            </p>
          </div>
          <div class="aboutuspart">
            <h3>C++</h3>
            <img src="../assets/img/C++.png" alt="" style="width:13rem;">
            <p>
              C++是C语言的继承,它既可以进行
              C语言的过程化程序设计,
              又可以进行以抽象数据类型为特点的
              基于对象的程序设计,
              还可以进行以继承和多态为特点的
              面向对象的程序设计。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="part">
      <div class="title">
        <div class="titleline" style="margin-bottom:1rem;">
          <img src="../assets/img/02.png" alt="">
          <h2>特色课程</h2>          
        </div>
        <div class="special">
          <div class="onebox">
            <img src="../assets/img/index3.png" alt="">
          </div>
          <div class="onebox">
            <img src="../assets/img/index1.png" alt="">
          </div>
          <div class="onebox">
            <img src="../assets/img/index4.png" alt="">
          </div>
          <div class="onebox">
            <img src="../assets/img/index2.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="part">
      <div class="title">
        <div class="titleline">
          <img src="../assets/img/03.png" alt="">
          <h2>课程介绍</h2>          
        </div>
        <div class="intro">
          <div class="leftimg">
            <img src="../assets/img/indexperson.png" alt="">
          </div>
          <div class="righttxt">
            <div class="txtbox">
              <p>我们选择分阶段性学习scratch语言,Py thon语言和C++语言。</p>
              <p>我们将采取循环直播授课,录播课程复习课后练习巩固.直播答疑解惑的教学模式，</p>
              <p>通过老师线上实时监督提高学习效率,坚持“启发式教学",充分调动学生的主动性和积极性，同时,课程后期将进行部分算法的深入学习,使编程学习趋于系统化。</p>
            </div>
            <div class="txtbox" style="  background-color: #E2E2EB;
                border-left:0.8rem solid #80A2CB;">
                <p>思维PLUS是面向7-18岁青少年儿童群体的编程课程软件开发设计。</p>
                <p>以“优质教育,学玩结合,灵活便捷,具有前瞻性"为定位指导原则,</p>
                <p>通过一系列编程课程的学习,使不同年龄段的孩子了解、学习.掌握编程。</p>
            </div>
            <div class="txtbox" style="  background-color: #F9ECEB;
                border-left:0.8rem solid #E7C2C7;">
                <p>思维PLUS不仅有利于培养孩子的编程思维能力,</p>
                <p>也能帮助孩子参加相关学科竞赛获取高考降分录取的资格，</p>
                <p>更能帮助孩子推开当代信息社会背后程序世界的大门,为未来的职业提供一种选择。</p>
            </div>
          </div>          
        </div>

      </div>
    </div>
    <div class="part" style="display:flex;">
      <img src="../assets/img/index02.png" alt="" class="img01">
      <img src="../assets/img/index01.png" alt="" class="img02">
    </div>
    <footervue></footervue>
    <router-view/>
  </div>
</template>

<script>
import navvue from "../components/home/nav"
import lunbo from "../components/home/lunbo"
import footervue from "../components/home/footer"
import "../assets/css/global.css"
export default {
  name: 'Home',
  components: {
    navvue,
    lunbo,
    footervue,
  }
}
</script>
<style scoped>
.titleline{
  display: flex;
  align-items: center;
  justify-content: center;
}
.titleline>img{
  width: 4.3rem;
  margin-right: 2rem;
}
.home{
  background-color: #FEF7F4;
  text-align: center;
}
.part{
  margin:5rem 0;
}
.part h2{
  font-size: 3.5rem;
  margin:3rem 0;
  font-weight:500;
  letter-spacing: 0.5rem;
  font-family:monospace;
  color: rgb(122, 122, 122);
}
.aboutus{
  display: flex;
  justify-content: center;
  align-items: center;
}
.aboutus .aboutuspart{
  width: 33.3%;
  /* height: 30rem; */
  padding:0 6rem;
  /* background-color: blueviolet; */
}
.aboutuspart h3{
  font-size: 2.4rem;
  color: gray;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-family:fantasy;
  margin:2rem 0;
  letter-spacing: 0.3rem;
  font-weight: 100;
}
.aboutuspart img{
  width: 10rem;
  height: 10rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
}
.aboutuspart p{
  color: gray;
  font-family:monospace;
  font-weight: 500;
  font-size: 1.1rem;
  /* line-height: 1.5rem; */
}
.special{
  width: 100%;
  height: 44rem;
  background-image: url(../assets/img/indexbg.png);
  background-size: 100% 100%;
}
.onebox{
  display: inline-block;
  width: 30%;
  margin:2rem 6.4rem;
  cursor: pointer;
}
.intro{
  display: flex;
}
.leftimg{
  width: 32vw;
  /* height: 33vw; */
  margin-left: 7rem;
  margin-right: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.leftimg img{
  width: 32vw;
  height: 32vw;
}
.righttxt{
  width: 45vw;
  /* background-color: khaki; */
}
.txtbox{
  /* width: 100%; */
  /* height: 7rem; */
  padding:1rem 1rem;
  background-color: #FDE8DC;
  border-left:0.8rem solid #F7AA7A;
  margin:3rem 0;
}
.txtbox p{
  text-align: justify;
  color: gray;
}
.part .img01{
  width: 68%;
  margin: 0 2rem;
  cursor: pointer;
}
.part .img02{
  width: 20.5%;
  margin:0 2rem;
  cursor: pointer;
}
</style>
