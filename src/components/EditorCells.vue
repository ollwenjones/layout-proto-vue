<template>
    <div id="editor__cells-area">Hi, I'm cells editor</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EditorCells extends Vue {

}
</script>

<style lang="less">
.dp-flex-layout__cell-config {
  width: 100%;
  display: flex;
  flex-direction: row;
  border: solid 1px #999;
  border-top: none;
}

.dp-flex-layout__cell-config:nth-child(1) {
  border-top: solid 1px #999;
}

.dp-flex-layout__cell-config__entry {
  max-width: 50%;
  width: 25%;
  flex: 1;
  margin: 0.25rem;
}

#editor__cells-area {
  max-height: 200px;
  overflow-y: auto;
}

</style>

