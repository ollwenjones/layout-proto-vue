<template>
  <div class="cell-config-labels">
    <label class="cell-config-label">Desktop</label>
    <label class="cell-config-label">Tablet</label>
    <label class="cell-config-label">Phone</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CellConfigLabels extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="less">
.cell-config-labels {
  width: 100%;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
}

.cell-config-label {
  display: block;
  flex: 1;
}
</style>
