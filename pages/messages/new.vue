<template>
  <div>
    <h1>メッセージ投稿ページ</h1>

    <!-- `submitData`はメソッド。メソッドもpropsで渡すことができる。 -->
    <form-component :message='message' :submitEvent='submitData'></form-component>
  </div>
</template>

<script>
import axios from 'axios';
import FormComponent from './_form.vue';

export default {
  layout: 'application',
  components: { FormComponent },
  data: function () {
    return {
      message: {}
    }
  },
  methods: {
    submitData: function () {
      let params = { message: this.message };
      // alert(this.message.title + this.message.text);
      axios.post('https://nuxt-api.herokuapp.com/messages', params);
      alert("登録しました。");
      this.$nuxt.$router.push({ path: '/messages' })
    }
  }
}
</script>