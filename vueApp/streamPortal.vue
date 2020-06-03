<template>
  <section>
    <iframe :src="url" style="width: 100%; height: 800px; border: none;" />
    <button v-on:click="onClick">UPDATE IFRAME SRC</button>
  </section>
</template>

<script>
import eventManager from "../utils/eventManager";

export default {
  name: "streamPortal",
  data() {
    return {
      url: "https://mozantech.com",
      streamUrl: "https://www.youtube.com/embed/e1-rr969y4U",
    };
  },
  methods: {
    onClick() {
      this.url = this.streamUrl;
    },
  },
  mounted() {
    eventManager.addEvent("UPDATE_VUE_IFRAME", (newUrl) => {
      this.url = newUrl;
    });
  },
};
</script>
