<template>
  <div>
    <input name='id' type='hidden' v-model='message.id'>

    <div class='form-group'>
      <label for='title'>タイトル</label>
      <input id='title' name='title' type='text' placeholder='タイトル' class='form-control' v-model='message.title' />
    </div>

    <div class='form-group'>
      <label for='textarea'>内容</label>
      <textarea id='textarea' name='textarea' placeholder='内容' class='form-control' v-model='message.text'></textarea>
    </div>

    <!-- フォームがSubmitされないようにtypeをbuttonに設定する -->
    <button type='button' class='btn' @click='submitEvent'>送信</button>
  </div>
</template>

<style>
.btn {
  color: #ffffff;
  background: #41b883;
}
</style>

<script>
// propsの中に呼び出し元から渡される変数の名前を**文字列**で定義
export default {
  props: ['message', 'submitEvent']
}
</script>