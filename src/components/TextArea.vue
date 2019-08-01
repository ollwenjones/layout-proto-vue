<template>
  <label class="field rows" for="{{id}}">
    <span class="field__label">{{label}}</span>
    <slot></slot>
    <!-- row per cell, separate break-points -->
    <textarea name="columns" id="{{id}}" cols="{{cols}}" rows="{{rows}}" value="{{value}}"></textarea>
  </label>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    id: String,
    value: String,
    label: String,
    rows: Number,
    cols: Number
  }
});
</script>

