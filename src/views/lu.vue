<template>
  <div>
    <navvue></navvue>
    <hr>
    <h1>【Python】 第一课：初识python</h1>
    <h6>2021-05-20 17:00:16  上传</h6>
    <viedopart></viedopart>
    <h2>讨论区：</h2>
    <conver></conver>
    <footervue></footervue>

  </div>
</template>
<script>
import navvue from "../components/home/nav"
import viedopart from "../components/lubo/vedio"
import conver from "../components/lubo/conver"
import footervue from "../components/home/footer"

export default {
    components:{
    navvue,
    viedopart,
    conver,
    footervue,
  }
}
</script>
<style scoped>

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
hr{
  height: 1px;
  border:0px;
  background-color: rgba(172, 172, 172, 0.212);
}
h2{
  text-align: left;
  margin-left: 4rem;
  margin-top: 3rem;
  font-size: 1.4rem;
  font-weight: 100;
}

.submitcom{
  margin-top: 1rem;

}
</style>