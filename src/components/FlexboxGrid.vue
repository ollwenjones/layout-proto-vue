<template>
  <div id="grid" class="dp-flex-layout as-base-layout" :style="styleObj">
    <!-- iterate the grid model entries -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState } from 'vuex';
import { FlexGridConfig } from '../store';

@Component({
  computed: mapState<FlexGridConfig>({
    styleObj: ({ width, height }) => ({ maxWidth: width + "px", height: height + "px"})
  })
})
export default class FlexboxGrid extends Vue {
  @Prop() private msg!: string;
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
