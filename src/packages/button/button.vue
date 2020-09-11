<template>
  <view class="button">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import './button.scss'

export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>
