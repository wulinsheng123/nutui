<template>
  <div class="nut-step clearfix" :class="`${currentStatus ? currentStatus : ''}`">
    <div v-if="timeForward && time" class="nut-step-time-forward">{{ time }}</div>
    <div class="nut-step-node">
      <div class="nut-step-icon">
        <span v-if="type === 'mini'" class="default-icon"></span>
        <slot v-else name="status-icon">
          <nut-icon v-if="currentStatus.indexOf('nut-step-status-finish') > -1" type="self" :url="require('../../assets/svg/finish.svg')"></nut-icon>
          <span v-else class="default-icon"></span>
        </slot>
      </div>
      <div class="nut-step-line"></div>
    </div>
    <div class="nut-step-main">
      <div v-if="title" class="nut-step-title">{{ title }}</div>
      <div v-if="content" class="nut-step-content">{{ content }}</div>
      <div v-if="!timeForward && time" class="nut-step-time">{{ time }}</div>
    </div>
  </div>
</template>
<script>
import locale from '../../mixins/locale';
export default {
  name: 'nut-step',
  mixins: [locale],
  inject: ['timeForward', 'type', 'steps', 'getCurrentIndex', 'pushStep', 'delStep'],
  props: {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    time: {
      type: String,
    },
  },
  data() {
    return {
      currentStatus: '',
      index: -1,
    };
  },
  computed: {
    current() {
      return this.getCurrentIndex();
    },
  },
  created() {
    this.pushStep(this);
  },
  beforeDestroy() {
    this.delStep(this);
  },
  methods: {
    getCurrentStatus() {
      let currentStatus = '';
      if (this.current === this.index + 1) {
        currentStatus += ' nut-step-status-process';
      }
      if (this.type === 'process') {
        if (this.index < this.current) {
          currentStatus += ' nut-step-status-finish';
        }
        if (this.index > this.current) {
          currentStatus += ' nut-step-status-wait';
        }
      }
      if (this.index + 1 === this.steps.length) {
        currentStatus += ' nut-step-last';
      }
      this.currentStatus = currentStatus;
    },
  },
  mounted() {
    const unwatch = this.$watch('index', (val) => {
      this.$watch('current', this.getCurrentStatus, { immediate: true });
      unwatch();
    });
  },
};
</script>
