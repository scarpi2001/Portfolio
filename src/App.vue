<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4FZ0i34TuNoE_pURXcdlQLRXFYVPRDCue8w&usqp=CAU" alt="">
    <h1>Praticamente il Cojo</h1>
  </div>

  <div>
    <img src="https://www.focus.it/site_stored/imgs/0004/015/sls_nasa4x3.1020x680.jpg" alt="">
    <h1>il pipo di ste</h1>
  </div>

</template>

<style lang="scss">
@use './style/general' as*;

div {
  width: 1000px;
  margin: 100px auto;
  text-align: center;

  img {
    width: 1000px;
  }
}

/* smartphone version */
@media screen and (max-width: 600px) {

  div {
    width: 300px;
    
    img {
    width: 300px;
    }
  }

}
</style>
