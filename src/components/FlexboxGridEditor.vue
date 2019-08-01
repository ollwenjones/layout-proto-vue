<template>
  <div class="editor__properites">
    <editor-category-label>Size</editor-category-label>
    <text-field label="width" value="600"></text-field>
    <text-field label="height" value="500"></text-field>
    <editor-category-label>Layout Columns</editor-category-label>(How many columns per screen size?)
    <cell-config-labels></cell-config-labels>
    <div class="column-fields">
      <input name="columns" id="columns" cols="30" rows="10" value="12" type="number" />
      <input name="tablet-columns" id="tablet-columns" cols="30" rows="10" value="8" type="number" />
      <input name="phone-columns" id="phone-columns" cols="30" rows="10" value="4" type="number" />
    </div>
    <editor-category-label>Cells</editor-category-label>
    <editor-cells></editor-cells>
    <cell-config-labels></cell-config-labels>
    <editor-category-label>Gutters</editor-category-label>
    <text-field label="row-gap" value="5"></text-field>
    <text-field label="column-gap" value="8"></text-field>
    <text-field label="horizontal-margin" value="15"></text-field>
    <text-field label="vertical-margin" value="10"></text-field>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditorCategoryLabel from "./EditorCategoryLabel.vue";
import TextField from "./TextField.vue";
import CellConfigLabels from "./CellConfigLabels.vue";
import EditorCells from "./EditorCells.vue";

@Component({
  components: {
    EditorCategoryLabel,
    EditorCells,
    TextField,
    CellConfigLabels
  }
})
export default class FlexboxGridEditor extends Vue {}
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
