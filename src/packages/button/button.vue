<template>
  <button :class="clsStyle" :disabled="disabled" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script>
import './button.scss';
export default {
  name: 'nut-button',
  props: {
    type: {
      type: String,
      default: '',
    },
    shape: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'big',
    },
    label: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      msg: 'Hello world!',
    };
  },
  computed: {
    clsStyle() {
      let cls = `nut-button ${this.type} ${this.shape} 
            ${this.size} 
            ${this.block ? ' block' : ''} 
            ${this.label ? ' label' : ''}
            ${!this.$slots.default ? `no-txt-${this.size}` : ''}`;
      return cls;
    },
  },
  methods: {
    clickHandler(event) {
      // 如果是loading就阻止点击
      if (this.disabled) {
        return;
      }
      this.$emit('click', event);
    },
  },
};
</script>