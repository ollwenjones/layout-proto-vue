<template>
  <div id="app" class="editor">
    <flexbox-grid-stage></flexbox-grid-stage>
    <flexbox-grid-editor></flexbox-grid-editor>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FlexboxGridStage from "./components/FlexboxGridStage.vue";
import FlexboxGridEditor from "./components/FlexboxGridEditor.vue";

@Component({
  components: {
    FlexboxGridStage,
    FlexboxGridEditor
  }
})
export default class App extends Vue {}
</script>

<style lang="less">

body, .editor {
  font-family: sans-serif;
  height: 100%;
  background: #efefef;
}

.editor {
  display: flex;
  box-sizing: border-box;
  margin: 0;
  padding: 0.5rem;
  flex-direction: row;
  height: 100%;
  align-items: flex-start;
}

</style>
