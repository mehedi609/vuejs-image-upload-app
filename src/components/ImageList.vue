<template>
  <div>ImageList.vue</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ImageList",
  methods: {
    ...mapActions(["fetchImages"]),
  },
  created() {
    this.fetchImages();
  },
};
</script>

<style scoped></style>
