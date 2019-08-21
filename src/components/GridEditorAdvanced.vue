<template>
  <label class="field rows" for="advanced-columns">
    <span class="field__label">Advanced Cells</span>
    row per cell, separate break-points
    <textarea
      name="columns"
      id="advanced-columns"
      cols="30"
      rows="10"
      :value="cellModelsAsText"
      @input.passive="onInput"
    ></textarea>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({})
export default class GridEditorAdvanced extends Vue {
  @Getter cellModelsAsText!: string;
  @Action updateCellsFromText!: (cells: string) => void;

  onInput(e: any) {
    // realistically, debounce this.
    this.updateCellsFromText(e.target.value);
  }
}
</script>
