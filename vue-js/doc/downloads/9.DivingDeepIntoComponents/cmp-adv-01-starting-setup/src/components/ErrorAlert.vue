<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style>
dialog{
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 30%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.26);
  padding: 1rem;
  border-radius: 8px;
}
</style>