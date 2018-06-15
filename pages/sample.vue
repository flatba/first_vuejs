<template>
  <div>
    <!-- メッセージと表示される -->
    <h1>{{message}}</h1>

    <!-- 属性名のprefixに「:」をつけると属性の値をVue.jsの変数として認識する -->
    <div :class='className'><!-- この場合だと`class="active"`と同じ状態 -->
      動的にclassを変えられる。
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: 'メッセージ',
      className: 'active'
    }
  }
};
</script>