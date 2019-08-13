<template>
  <label class="field" :for="label">
    <span class="field__label">{{ label }}</span>
    <input
      class="field__input"
      :id="label"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TextField extends Vue {
  @Prop() private label!: string;
  @Prop() private value!: string;

  mounted() {}
}
</script>

<style lang="less">
.field {
  display: block;
  width: 50%;
  padding: 0.5rem;
  box-sizing: border-box;

  &__label {
    display: block;
  }

  &__input {
    display: block;
    width: 100%;
  }
}
</style>
