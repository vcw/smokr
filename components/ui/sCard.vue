<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;

  width: 100%;
  height: 10rem;
  
  border-radius: .6rem;

  background-color: #fff;

  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, .1);

}
</style>