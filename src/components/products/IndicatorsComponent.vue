<template>
  <div>
    <h5>Indicators</h5>
    <p>We could retrieve the product indicators from id {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "IndicatorsComponent",
  props: ["id"],
  created() {
    //console.log("Indicators", this.id);
  },
};
</script>

<style scoped></style>
