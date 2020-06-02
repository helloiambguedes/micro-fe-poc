<template>
  <iframe :src="url" style="width: 100%; height: 800px; border: none;" />
</template>

<script>
import eventManager from "../utils/eventManager";

export default {
  name: "streamPortal",
  data() {
    return { url: "https://mozantech.com" };
  },
  mounted() {
    eventManager.addEvent("UPDATE_VUE_IFRAME", (newUrl) => {
      this.url = newUrl;
    });
  },
};
</script>
