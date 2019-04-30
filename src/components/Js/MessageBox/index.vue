<template>
  <div class="box">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <div>
      <div @touchstart="handleCancel">{{ cancel }}</div>
      <div @touchstart="handleOk">{{ ok }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentJs'
}
</script>

<style scoped>
.box {
  width: 200px;
  height: 120px;
  border: 1px #ccc solid;
  border-radius: 6px;
  box-shadow: 2px 2px 2px 2px #ccc;
  background: white;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -60px 0 0 -100px;
}
.box h2 {
  text-align: center;
  line-height: 40px;
  font-size: 18px;
}
.box p {
  text-align: center;
  line-height: 40px;
}
.box > div {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px #ccc solid;
}
.box > div div {
  flex: 1;
  border-right: 1px #ccc solid;
  text-align: center;
  line-height: 30px;
  border-radius: 3px;
}
.box > div div:last-child {
  border: none;
}
</style>
