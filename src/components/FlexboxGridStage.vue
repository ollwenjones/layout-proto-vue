<template>
  <div class="stage">
    <flexbox-grid></flexbox-grid>
    <p>
      A grid with "cells" that reflow, rather than fixed rows &amp; columns.
      This allows true "responsiveness", vs fluidity of fixed layouts.
      <br />Users can specify:
    </p>
    <ul>
      <li>How many columns the layout has, per screen size</li>
      <li>How many columns wide each cell is, per screen size</li>
      <li>Horizontal margins &amp; Gutters (add break-points?)</li>
      <li>Vertical Margins and gutters (add break-points?)</li>
    </ul>
    <strong>Compress window to see break-points in action.</strong>
    <br />Delegating these calculations to CSS should also produce more
    reliable results than extant "responsive layout" JS measurements.
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import FlexboxGrid from "./FlexboxGrid.vue";

@Component({
  components: {
    FlexboxGrid
  }
})
export default class FlexboxGridStage extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="less" scoped>
.editor .stage {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
