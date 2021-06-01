<template>
    <div class="vedioline">
      <div class="leftvedio">
        <video width="100%" height="100%" controls>
        <source src="../../assets/vedio/python1.mp4">
        </video>
      </div>
      <div class="rightji">
        <div class="topxuanji">
          <img src="../../assets/img/part.png" alt="">
          <span>选集</span>
        </div>
        <div class="bottompart">
  
          <div class="box" style="background-color: rgba(255, 255, 255, 0.608);">
            <h5>P1：初识Python</h5>
          </div>
          <div class="box">
            <h5>P2：Python基础语法</h5>
          </div>
          <div class="box">
            <h5>P3：python应用</h5>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  
}

</script>
<style scoped>
.vedioline{
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding-top: 3rem;
  padding-left: 4rem;
  /* width: 100vw; */
}
.vedioline .leftvedio{
  width: 55vw;
  height: 39vw;
  background-color: rgb(0, 0, 0);
}
h1{
  text-align: left;
  padding-left: 3rem;
  font-size: 1.8rem;
  margin-top: 2rem;
  font-weight: 400;
}
h6{
  text-align: left;
  padding-left: 4rem;
  color: rgb(167, 167, 167);
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: 100;
}
.rightji{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 4rem;
  height: 39vw;
}
.rightji .topxuanji{
  width: 25vw;
  height: 4vw;
  text-align: left;
  background-color:#F4F4F4;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.rightji .topxuanji img{
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1rem;
}
.rightji .topxuanji span{
  margin-left: 1rem;
  font-size: 1.4rem;
  font-weight: 100;
  position: relative;
  cursor: pointer;
  /* top:1rem; */
}

.rightji .bottompart{
  height: 32vw;
  width: 25vw;
  background-color: #F4F4F4;
}
.rightji .bottompart .box{
  /* margin:1rem  0; */
  width: 100%;
  height: 3vw;
  /* background-color: rgba(128, 128, 128, 0.164); */
  /* border: 1px gray solid; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.rightji .bottompart .box h5{
  text-align: left;
  padding-left: 2rem;
  font-size: 1.1rem;
  font-weight: 100;
}
.rightji .bottompart h5:hover{
  /* margin:1rem  0; */
  width: 100%;
  height: 3vw;
  background-color: rgba(255, 255, 255, 0.808);
  transition: linear .3s;
  /* border: 1px gray solid; */
  cursor: pointer;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
</style>