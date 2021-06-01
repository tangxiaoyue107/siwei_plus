<template>
  <div class="block lunbo">
    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
    <el-carousel height="32vw">
      <el-carousel-item v-for="(item,index) in imgurl" :key="index">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data(){
    return {
      imgurl:[
        {
          img:require('../../assets/img/lunbo1.png'),
        },
        {
          img:require('../../assets/img/lunbo2.png'),
        },
        {
          img:require('../../assets/img/lunbo3.png'),
        },
      ]
    }
  }
}
</script>
<style> 
/*------*/
.lunbo{
  width: 80vw;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #FEF7F4;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #FEF7F4;
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>