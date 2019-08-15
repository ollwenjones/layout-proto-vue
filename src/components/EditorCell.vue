<template>
  <div :id="'cell-config-' + index" class="dp-flex-layout__cell-config">
    <input
      type="number"
      min="1"
      class="dp-flex-layout__cell-config__entry"
      :value="cell.columns.desktop"
      @input="onEditDesktop"
    />
    <input
      type="number"
      min="1"
      class="dp-flex-layout__cell-config__entry"
      :value="cell.columns.tablet"
      @input="onEditTablet"
    />
    <input
      type="number"
      min="1"
      class="dp-flex-layout__cell-config__entry"
      :value="cell.columns.phone"
      @input="onEditPhone"
    />
    <button v-if="!only" :id="`cell-config-${index}-drop`" @click="dropCell">x</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import { FlexGridCellConfig, UpdateCellPayload } from "../store";

@Component
export default class EditorCell extends Vue {
  @Prop() private index!: number;
  @Prop() private cell!: FlexGridCellConfig;
  @Prop() private only?: boolean;

  onEditDesktop(e: any) {
    this.cellChange("desktop", e.target.value);
  }

  onEditTablet(e: any) {
    this.cellChange("tablet", e.target.value);
  }

  onEditPhone(e: any) {
    this.cellChange("phone", e.target.value);
  }

  @Emit() // will emit a "cell-change" event
  cellChange(
    breakpointName: "desktop" | "tablet" | "phone",
    value: string
  ): UpdateCellPayload {
    return {
      index: this.index,
      breakpointName,
      value
    };
  }

  // will emit a "drop-cell" event
  @Emit() dropCell() {
    return this.index;
  }
}
</script>

<style lang="less">
.dp-flex-layout__cell-config {
  width: 100%;
  display: flex;
  flex-direction: row;
  border: solid 1px #999;
  border-top: none;

  &:nth-child(1) {
    border-top: solid 1px #999;
  }

  &__entry {
    max-width: 50%;
    width: 25%;
    flex: 1;
    margin: 0.25rem;
  }
}
</style>