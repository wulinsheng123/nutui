<template>
  <span class="nut-cd-timer">
    <template v-if="showPlainText">
      <span class="nut-cd-block">{{ plainText }}</span>
    </template>

    <template v-else>
      <slot name="default" v-if="ownStyle"></slot>
      <template v-if="resttime.d >= 0 && showDays && !ownStyle">
        <span class="nut-cd-block">{{ resttime.d }}</span>
        <span class="nut-cd-dot">天</span>
      </template>
      <span v-if="!ownStyle" class="nut-cd-block">{{ resttime.h }}</span>
      <span v-if="!ownStyle" class="nut-cd-dot">:</span>
      <span v-if="!ownStyle" class="nut-cd-block">{{ resttime.m }}</span>
      <span v-if="!ownStyle" class="nut-cd-dot">:</span>
      <span v-if="!ownStyle" class="nut-cd-block">{{ resttime.s }}</span>
      <template v-if="millisecond">
        <span class="nut-cd-dot">:</span>
        <span class="nut-cd-block">{{ resttime.mms }}</span>
      </template>
    </template>
  </span>
</template>
<script>
import { computed, ref, watch, onMounted, onUnmounted } from 'vue';
import { createComponent } from '@/utils/create';
const { create } = createComponent('countdown');

export default create({
  props: {
    ownStyle: {
      default: false,
      type: Boolean
    },
    millisecond: {
      default: false,
      type: Boolean
    },
    paused: {
      default: false,
      type: Boolean
    },
    reset: {
      default: false,
      type: Boolean
    },
    showDays: {
      default: false,
      type: Boolean
    },
    showPlainText: {
      default: false,
      type: Boolean
    },
    restTimess: {
      defalut: {},
      type: Object
    },
    startTime: {
      // 可以是服务器当前时间
      type: [Number, String],
      validator(v) {
        const dateStr = new Date(v).toString().toLowerCase();
        return dateStr !== 'invalid date';
      }
    },

    endTime: {
      type: [Number, String],
      validator(v) {
        const dateStr = new Date(v).toString().toLowerCase();
        return dateStr !== 'invalid date';
      }
    }
  },

  emits: ['on-paused', 'on-end', 'on-restart', 'on-reset', 'on-restTime'],

  setup(props, { emit }) {
    // console.log('props', props);

    const restTime = ref(0);
    const p = ref(0);
    const curr = ref(0);

    function fill2(v) {
      v += '';
      while (v.length < 2) {
        v = '0' + v;
      }
      return v;
    }

    function restTimeFunc(t) {
      const ts = t;
      let rest = {
        d: '-',
        h: '--',
        m: '--',
        s: '--',
        mms: '--'
      };

      if (ts === 0) {
        rest = {
          d: '0',
          h: '00',
          m: '00',
          s: '00',
          mms: '00'
        };
      }

      if (ts) {
        const ds = 24 * 60 * 60 * 1000;
        const hs = 60 * 60 * 1000;
        const ms = 60 * 1000;
        // const mss = 1000;

        const d = ts >= ds ? parseInt(ts / ds) : 0;
        const h = ts - d * ds >= hs ? parseInt((ts - d * ds) / hs) : 0;
        const m =
          ts - d * ds - h * hs >= ms
            ? parseInt((ts - d * ds - h * hs) / ms)
            : 0;

        const s = Math.round((ts - d * ds - h * hs - m * ms) / 1000);
        const mms = Math.floor(ts % 100);

        if (d >= 0) rest.d = d + '';
        if (h >= 0) rest.h = fill2(h);
        if (m >= 0) rest.m = fill2(m);
        if (s >= 0) rest.s = fill2(s);
        if (mms >= 0) rest.mms = fill2(mms);
      }
      return rest;
    }

    //计算时间值
    const resttime = computed(() => {
      const rest = restTimeFunc(restTime.value);
      const { d, h, m, s, mms } = rest;
      if (!props.showDays && d > 0) {
        rest.h = fill2(Number(rest.h) + d * 24);
        rest.d = 0;
      }
      // emit('on-restTime', rest);
      emit('on-end', rest);
      return rest;
    });

    const plainText = computed(() => {
      const { d, h, m, s } = resttime.value;
      return `${d > 0 && showDays ? d + '天' + h : h}小时${m}分${s}秒`;
    });

    function getTimeStamp(timeStr) {
      if (!timeStr) return Date.now();
      let t = timeStr;
      t = t > 0 ? +t : t.toString().replace(/\-/g, '/');
      return new Date(t).getTime();
    }

    //初始化时间值
    function initTimer() {
      console.log('执行initTimer');
      const delay = 1000;
      const curr = Date.now();
      const serverTime = Date.now() - 1 * 1000;
      const endTime = Date.now() + 50 * 1000;
      const start = getTimeStamp(serverTime || curr);
      const end = getTimeStamp(endTime || curr);
      // const start = getTimeStamp(props.startTime || curr);
      // const end = getTimeStamp(props.endTime || curr);
      const diffTime = curr - start;
      restTime.value = end - (start + diffTime);
      const timer = setInterval(() => {
        if (!props.paused && !props.reset) {
          const restTimee = end - (Date.now() - p.value + diffTime);
          restTime.value = restTimee;
          if (restTime.value < delay) {
            restTime.value = 0;
            emit('on-end');
            clearInterval(timer);
          }
        } else {
          // 暂停
        }
      }, delay);
    }

    function initTimers() {
      console.log('执行initTimers');
      console.log('props.paused', props.paused);
      console.log('props.reset', props.reset);

      const delay = 1000;
      const serverTime = Date.now() - 1 * 1000;
      const endTime = Date.now() + 50 * 1000;
      const curr = Date.now();
      const start = getTimeStamp(serverTime || curr);
      const end = getTimeStamp(endTime || curr);

      //   const start = getTimeStamp(props.startTime || curr);
      // const end = getTimeStamp(props.endTime || curr);

      const diffTime = curr - start;
      restTime.value = end - (start + diffTime);
      const timer = setInterval(() => {
        if (!props.paused && props.reset) {
          console.log('执行initTimers 倒计时');
          let restTimee = end - (Date.now() - p.value + diffTime);
          restTime.value = restTimee;
          if (restTime.value < delay) {
            restTime.value = 0;
            emit('on-end');
            clearInterval(timer);
          }
        } else {
          // 暂停
        }
      }, delay);
    }

    onMounted(() => {
      initTimer();
    });

    watch(
      ov => resttime,
      ov => {
        console.log(1123123123);
        // if (ov) {
        //   emit('on-restTime', resttime);
        // }
      }
    );

    watch(
      ov => props.paused,
      //  o => props.reset,
      ov => {
        if (ov) {
          //暂停
          curr.value = getTimeStamp();
          props.reset == false;
          emit('on-paused', restTime.value);
          console.log('暂停');
        } else if (!ov) {
          //重启
          p.value += getTimeStamp() - curr.value;
          props.reset == false;
          emit('on-restart', restTime.value);
          console.log('继续');
        }
      }
    );

    watch(
      ov => props.reset,
      ov => {
        console.log('监听到reset值', props.reset);
        // initTimers();
        // console.log('reset 重新计时',)
        if (ov) {
          //暂停
          // curr.value = getTimeStamp();
          // props.paused == false;
          emit('on-reset', restTime.value);
          console.log('重新');
          initTimers();
          //重启
          // p.value += getTimeStamp();
          // // props.reset == false;
          // emit('on-reset', restTime.value);
        }
      }
    );

    watch(
      v => props.endTime,
      v => {
        if (v) {
          initTimer(v);
        }
      }
    );

    watch(
      v => props.startTime,
      v => {
        if (v) {
          initTimer(v);
        }
      }
    );

    onUnmounted(() => {
      timer && clearInterval(timer);
    });

    return {
      fill2,
      restTime,
      getTimeStamp,
      initTimer,
      p,
      curr,
      plainText,
      resttime
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
