<template>
  <view class="nutui-taro-demo">
    <text class="title">{{name}}</text>
    <text class="desc">{{description}}</text>
    <view class="comp-list">
      <text class="comp-text">Button</text>
      <nut-button>button</nut-button>
    </view>
    <text class="footer">京东零售用户体验设计部 · 前端开发部 · v{{ version }}</text>
  </view>

</template>

<script>
import { version, name, description } from '../../../package.json';
import Button from '../../packages/button/button.vue';
import '../../packages/button/button.scss';
export default {
  components:{
    'nut-button':Button
  },
  data() {
    return {
      msg: 'Hello world!',
      description,
      name,
      version,
    };
  },
};
</script>


<style lang="scss">
.nutui-taro-demo {
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background: #f7f7f7;

  .title {
    font-size: 48px;
    color: #2e2d2d;
    margin-top: 200px;
  }
  .desc {
    text-align: center;
    color: #848484;
    margin: 40px 0 60px;
    font-size: 24px;
  }

  .comp-list {
    margin: 30px auto;
    width: 95%;
    background: #fff;
    -webkit-border-radius: 30px;
    border-radius: 30px;
    overflow: hidden;

    padding: 0 30px;

    .comp-text {
      font-size: 32px;
    }
  }

  .footer {
    font-size: 20px;
    color: #bbb;
    text-shadow: 1px 1px #fff;
    text-align: center;
    margin: 20px 0;
  }
}
</style>
