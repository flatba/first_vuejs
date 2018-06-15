<template>
  <div>
    <h1>メッセージ編集ページ</h1>

    <!-- `submitData`はメソッド。メソッドもpropsで渡すことができる。 -->
    <form-component :message='message' :submitEvent='submitData'></form-component>
  </div>
</template>

<script>
import axios from 'axios';
import FormComponent from './../_form.vue';
export default {
  layout: 'application',
  head: {
    title: 'Edit Page'
  },
  components: { FormComponent },
  data: function () {
    return {
      message: {}
    }
  },
  asyncData ({ params }) {
    return axios.get(`https://nuxt-api.herokuapp.com/messages/${params.id}`)
      .then(res => {
        return { message: res.data.body };
      })
      .catch(e => {
        console.error('error:', e);
      });
  },
  methods: {
    submitData: function () {
      let params = { message: this.message };
      axios.patch(`https://nuxt-api.herokuapp.com/messages/${this.$nuxt.$route.params.id}`, params)
        .then(res => {
          if (res.data.success) {
            this.$nuxt.$router.push({ path: '/messages', params: { flash: 1 } })
          } else {
          }
        }).catch(e => {
          console.error('error:', e);
        });
    }
  }
}
</script>