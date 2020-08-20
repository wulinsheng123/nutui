<template>
  <div class="nut-steps" :class="{ horizontal: direction === 'horizontal' }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'nut-steps',
  props: {
    current: {
      type: Number,
      default: 1,
    },
    timeForward: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: 'vertical',
    },
    type: {
      type: String,
    },
  },
  data() {
    return {
      steps: [],
    };
  },
  provide() {
    return {
      timeForward: this.timeForward,
      type: this.type,
      steps: this.steps,
      pushStep: this.pushStep,
      delStep: this.delStep,
      getCurrentIndex: () => this.current,
    };
  },
  methods: {
    pushStep(step) {
      this.steps.push(step);
    },
    delStep(step) {
      const steps = this.steps;
      const index = steps.indexOf(step);
      if (index >= 0) {
        steps.splice(index, 1);
      }
    },
  },
  watch: {
    steps(steps) {
      steps.forEach((child, index) => {
        child.index = index;
      });
    },
  },
};
</script>
