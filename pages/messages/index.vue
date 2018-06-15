<template>
  <div>
    <h1>メッセージ一覧ページ</h1>

    <ul class='list-group' v-if='messages && messages.length > 0'>
      <li class='list-group-item list-group-item-action' v-for='message in messages'>
        <nuxt-link :to="{ name: 'messages-id-edit', params: { id: message.id }}">
          <p>ID: {{ message.id }}</p>
          <p>タイトル: {{ message.title }}</p>
          <p>説明: {{ message.text }}</p>
        </nuxt-link>
      </li>
    </ul>

    <p class='text-center' v-else-if='messages && messages.length === 0'>メッセージはありません。</p>
  </div>
</template>

<style>
li {
  cursor: pointer;
}
</style>

<script>
// axiosをimportする
import axios from 'axios';

export default {
  layout: 'application',
  data: function () {
    return {
      messages: [] // Ajaxで取得した値が格納される
    }
  },
  // asyncDataは表示後すぐに実行されるNuxtの標準プロパティ
  // returnしたハッシュをdataにmergeする仕様。
  asyncData () {
    let apiUrl = 'https://nuxt-api.herokuapp.com/messages';

    // axiosのgetメソッドを利用
    return axios.get(apiUrl)
      .then(res => {
        // 通信成功時はthenに値が返ってくる
        // 取得した値がres.data.bodyに配列で入っている

        if (res.data.body.length === 0) {
          return { messages: [] };
        }
        // ハッシュ形式でreturnするとasyncDataの特徴でそのままdataにmergeされる
        return { messages: res.data.body };
      })
      .catch(e => {
        // 通信に失敗した場合はcatchに値が返ってくる
        console.error('error:', e);
      });
  }
}
</script>