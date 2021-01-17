<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b-alert show>Default Alsert</b-alert>

    <b-button v-b-modal.yeet>Launch demo modal</b-button>

    <b-modal id="yeet" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>
