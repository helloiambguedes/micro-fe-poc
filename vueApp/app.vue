<template>
  <div id="vueApp">
    <h1 style="color: red;">This is a Vue App</h1>
    <StreamPortal></StreamPortal>
  </div>
</template>

<script>
import StreamPortal from "./streamPortal.vue";

export default {
  name: "vueApp",
  components: { StreamPortal },
};
</script>
