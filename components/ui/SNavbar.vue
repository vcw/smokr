<template>
  <div :class="b()">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SNavbar',
};
</script>

<style>
.s-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  padding: .6rem .9rem;

  width: 100%;

  border-radius: 0 0 1.2rem 1.2rem;

  background: #fff;

  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, .1);

  z-index: 1000;
}
</style>
