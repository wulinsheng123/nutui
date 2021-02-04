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
    <!-- <view>
      <nut-cell>
        <nut-countdown :endTime="end" @on-end="onend" millisecond />
      </nut-cell>
    </view> -->

    <h2>自定义样式</h2>
    <view>
      <nut-cell>
        <nut-countdown @on-restTime="onrestTime">
          <template #default>
            <span class="block">{{ restTime.h }}33</span>
            <span class="colon">:</span>
            <span class="block">{{ restTime.m }}</span>
            <span class="colon">:</span>
            <span class="block">{{ restTime.s }}</span>
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

      <view @click="onreset" class="operate">
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
    const restTime = reactive({});
    const paused = ref(false);
    const reset = ref(false);

    watch(
      ov => restTime,
      ov => {
        console.log('22restTime', ov);
      }
    );
    const start = () => {
      console.log('paused.value', paused.value);
      paused.value = false;
    };

    const stop = () => {
      console.log('paused.value', paused.value);
      paused.value = true;
    };

    const onend = () => {
      console.log('countdown: ended.', end);
    };
    const onpaused = v => {
      console.log('paused: ', v);
    };
    const onrestart = v => {
      console.log('restart: ', v);
    };
    const onreset = () => {
      reset.value = !reset.value;
      console.log('reset.value: ', reset.value);
    };

    const onrestTime = restTime => {
      console.log('&&&&&', restTime);
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
      onrestTime,
      restTime,
      reset,
      asyncEnd,
      paused,
      start,
      stop
    };
  }
});
</script>

<style lang="scss" scoped>
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
</style>
