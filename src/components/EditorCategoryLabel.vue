<template>
    <h4 class="editor__category">
        <slot></slot>
    </h4>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EditorCategoryLabel extends Vue {
  @Prop() private title!: string;
}

</script>

<style lang="less">
.editor__category {
  width: 100%;
  margin-bottom: 4px;
}
</style>
