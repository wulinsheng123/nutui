<template>
  <view class="demo-list">
    <h2>基本样式</h2>
    <view>
      <nut-cell>
        <nut-countdown :endTime="end" @on-end="onend" />
      </nut-cell>
    </view>

    <h2>自定义格式</h2>
    <view>
      <nut-cell>
        <nut-countdown showPlainText :endTime="end" />
      </nut-cell>
    </view>

    <h2>毫秒级渲染</h2>
    <view>
      <nut-cell>
        <nut-countdown :endTime="end" @on-end="onend" millisecond />
      </nut-cell>
    </view>

    <h2>自定义样式</h2>
    <view>
      <nut-cell>
        <nut-countdown :endTime="end" @on-end="onend" ownStyle>
          <template #default>
            <span class="block">{{ restTimes.h }}</span>
            <span class="colon">:</span>
            <span class="block">{{ restTimes.m }}</span>
            <span class="colon">:</span>
            <span class="block">{{ restTimes.s }}</span>
          </template>
        </nut-countdown>
      </nut-cell>
    </view>

    <h2>手动控制</h2>
    <view>
      <nut-cell>
        <nut-countdown
          :endTime="end"
          :paused="paused"
          @on-reset="onreset"
          :reset="reset"
          @on-paused="onpaused"
          @on-restart="onrestart"
        />
      </nut-cell>
    </view>

    <view>
      <view @click="start" class="operate">
        <nut-icon size="24px" class="icon" name="play-circle-fill"></nut-icon>
      </view>

      <view @click="stop" class="operate">
        <nut-icon
          size="24px"
          class="icon"
          name="poweroff-circle-fill"
        ></nut-icon>
      </view>

      <view @click="resets" class="operate">
        <nut-icon size="24px" class="icon" name="retweet"></nut-icon>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { reactive, onMounted, ref, watch } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('countdown');
export default createDemo({
  setup(props, { emit }) {
    const serverTime = (Date.now() - 30 * 1000) as number;
    const end = (Date.now() + 50 * 1000) as number;
    const asyncEnd = 0 as number;
    const restTimes = reactive({ d: '', h: '', m: '', s: '', mms: '' });
    const paused = ref(false);
    const reset = ref(false);

    const onend = restTime => {
      // console.log('countdown: ended.', end);
      restTimes.h = restTime.h;
      restTimes.m = restTime.m;
      restTimes.s = restTime.s;
    };

    const start = () => {
      console.log('paused.value', paused.value);
      paused.value = false;
    };

    const stop = () => {
      console.log('paused.value', paused.value);
      paused.value = true;
    };

    const resets = () => {
      console.log('reset.value: ', reset.value);
      reset.value = true;
      paused.value = false;
    };

    const onpaused = v => {
      //暂停
      console.log('paused: ', v);
    };
    const onrestart = v => {
      //继续
      console.log('restart: ', v);
    };
    const onreset = v => {
      //重启
      console.log('onreset: ', v);
    };

    onMounted(() => {
      setTimeout(asyncEnd => {
        asyncEnd = Date.now() + 30 * 1000;
      }, 3000);
    });

    return {
      end,
      onend,
      onpaused,
      onrestart,
      onreset,
      restTimes,
      reset,
      asyncEnd,
      paused,
      start,
      stop,
      resets
    };
  }
});
</script>

<style lang="scss" scoped>
.colon {
  width: 4px;
  height: 20px;
  line-height: 20px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(73, 130, 242, 1);
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: linear-gradient(
    315deg,
    rgba(73, 143, 242, 1) 0%,
    rgba(73, 101, 242, 1) 100%
  );
}
</style>
