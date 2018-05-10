<template>
  <div class="col-full">
    <h1>Not Found.  </h1>
    <p class="text-large">
      Oooops we couldn't find what you are looking for. Why don't you
      <router-link :to="{name: 'home'}">go home instead?</router-link>
    </p>

  </div>
</template>

<style scoped>
h1 {
  font-size: 100px;
}
.text-large {
  font-size: 50px;
  font-weight: 100;
}
div {
  text-align: center;
}
</style>
