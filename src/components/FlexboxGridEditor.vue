<template>
  <div class="editor__properites">
    <editor-category-label>Size</editor-category-label>
    <text-field label="width" :value="gridWidth" @input="onWidthChange" type="number"></text-field>
    <text-field label="height" :value="gridHeight" @input="onHeightChange" type="number"></text-field>
    <editor-category-label>Layout Columns</editor-category-label>(How many columns per screen size?)
    <cell-config-labels></cell-config-labels>
    <div class="column-fields">
      <input
        name="columns"
        id="columns"
        cols="30"
        rows="10"
        :value="desktopColumns"
        @input="updateDesktopColumns($event.target.value)"
        type="number"
      />
      <input
        name="tablet-columns"
        id="tablet-columns"
        cols="30"
        rows="10"
        :value="tabletColumns"
        @input="updateTabletColumns($event.target.value)"
        type="number"
      />
      <input
        name="phone-columns"
        id="phone-columns"
        cols="30"
        rows="10"
        :value="phoneColumns"
        @input="updatePhoneColumns($event.target.value)"
        type="number"
      />
    </div>
    <editor-category-label>Cells</editor-category-label>
    <grid-editor-advanced></grid-editor-advanced>
    <cell-config-labels></cell-config-labels>
    <editor-cells></editor-cells>
    <button id="editor__add-cell-button" @click="addCell">Add Cell</button>
    <editor-category-label>Gutters</editor-category-label>
    <text-field label="row-gap" :value="rowGap" @input="updateRowGap" type="number"></text-field>
    <text-field label="column-gap" :value="colGap" @input="onColumnGapChange" type="number"></text-field>
    <text-field
      label="horizontal-margin"
      :value="horizontalMargin"
      type="number"
      @input="onMarginHorizontalChange"
    ></text-field>
    <text-field
      label="vertical-margin"
      :value="verticalMargin"
      @input="onMarginVerticalChange"
      type="number"
    ></text-field>
  </div>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from "vue-property-decorator";
import Store, { FlexGridConfig } from "../store";
import EditorCategoryLabel from "./EditorCategoryLabel.vue";
import TextField from "./TextField.vue";
import { State, Action, Getter } from "vuex-class";
import CellConfigLabels from "./CellConfigLabels.vue";
import EditorCells from "./EditorCells.vue";
import GridEditorAdvanced from "./GridEditorAdvanced.vue";

@Component({
  components: {
    EditorCategoryLabel,
    EditorCells,
    TextField,
    CellConfigLabels,
    GridEditorAdvanced
  }
})
export default class FlexboxGridEditor extends Vue {
  @Getter gridWidth?: number;
  @Getter gridHeight?: number;
  @Getter rowGap?: number;
  @Getter colGap?: number;
  @Getter horizontalMargin?: number;
  @Getter verticalMargin!: number;
  @Getter desktopColumns!: number;
  @Getter tabletColumns!: number;
  @Getter phoneColumns!: number;

  @Action updateWidth!: Function;
  @Action updateHeight!: Function;
  @Action updateRowGap!: Function;
  @Action updateColumnGap!: Function;
  @Action updateMarginHorizontal!: Function;
  @Action updateMarginVertical!: Function;
  @Action updateDesktopColumns!: Function;
  @Action updateTabletColumns!: Function;
  @Action updatePhoneColumns!: Function;
  @Action addCell!: Function;

  onWidthChange(value: number) {
    this.updateWidth(value);
  }

  onHeightChange(value: number) {
    this.updateHeight(value);
  }
  onRowGapChange(value: number) {
    this.updateRowGap(value);
  }
  onColumnGapChange(value: number) {
    this.updateColumnGap(value);
  }
  onMarginHorizontalChange(value: number) {
    this.updateMarginHorizontal(value);
  }
  onMarginVerticalChange(value: number) {
    this.updateMarginVertical(value);
  }
}
</script>

<style lang="less">
.editor__properites {
  width: 300px;
  height: 100%;
  background: #cdcdcd;
  margin: 0 10px;
  padding: 0.5rem;
  box-sizing: border-box;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
}

.rows,
.columns {
  width: 100%;
}

.column-fields {
  display: flex;
  flex-direction: row;
  padding-right: 15px;
}

.column-fields input {
  width: 25%;
  flex: 1;
  margin-right: 0.5rem;
}
</style>
