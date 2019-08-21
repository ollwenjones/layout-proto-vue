<template>
  <div :id="id" :class="`dp-flex-layout__preview-cell ${layoutClasses}`"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { FlexGridCellConfig } from "../store";
import { getFlexCellClasses } from "../FlexGridHelpers";

@Component({})
export default class FlexboxGridCell extends Vue {
  @Prop() index!: number;
  @Prop() id!: string;
  @Prop() cell!: FlexGridCellConfig;

  get layoutClasses() {
    return getFlexCellClasses(this.cell);
  }
}
</script>

<style lang="less">
.dp-flex-layout__preview-cell {
  position: relative;
  border: solid 1px rgba(0, 0, 0, 0.08);
  background: rgba(0, 0, 0, 0.04);
  min-height: 40px; /* temporary */
  box-sizing: border-box;
}

.dp-flex-layout__preview-cell:hover {
  background-color: rgba(100, 100, 255, 0.1);
}
</style>