<template>
  <div id="grid" class="dp-flex-layout as-base-layout" :style="styleObj">
    <flexbox-grid-cell v-for="(cell, index) in cellModels"
      :key="`preview-cell-${index}`"
      :id="`preview-cell-${index}`"
      :index="index"
      :cell="cell"
    ></flexbox-grid-cell>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import { FlexGridConfig, FlexGridCellConfig } from "../store";
import { Action, Getter } from "vuex-class";
import FlexboxGridCell from "./FlexboxGridCell.vue";

@Component({
  components: {
    FlexboxGridCell
  },
  computed: mapState<FlexGridConfig>({
    styleObj: ({ width, height, margins }) => ({
      maxWidth: width + "px",
      height: height + "px",
      paddingLeft: margins.horizontal + "px",
      paddingRight: margins.horizontal + "px",
      paddingTop: margins.vertical + "px",
      paddingBottom: margins.vertical + "px"
    })
  })
})
export default class FlexboxGrid extends Vue {
  @Prop() private msg!: string;
  @Getter cellModels!: FlexGridCellConfig[];
}
</script>

<style lang="less" scoped>
.dp-flex-layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  justify-items: stretch;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.as-base-layout {
  background: white;
  min-width: 50px;
  min-height: 50px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
}
</style>
