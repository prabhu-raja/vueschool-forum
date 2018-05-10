<template>

  <div class="post">
    <div class="user-info">
      <a href="#" class="user-name">{{user.name}}</a>

      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="">
      </a>

      <p class="desktop-only text-small">{{userPostsCount}} posts</p>
    </div>

    <div class="post-content">
      <div>
        {{post.text}}
      </div>
    </div>

    <!-- <div
      class="post-date text-faded"
      v-bind:title="post.publishedAt | humanFriendlyDate">
      {{post.publishedAt | diffFromHumans}}
    </div> -->
    <AppDate v-bind:timestamp="post.publishedAt"></AppDate>
  </div>

</template>

<script>

import sourceData from '@/data'
console.log('hi from postlistitem')

export default {
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  computed: {
    user () {
      return sourceData.users[this.post.userId]
    },
    userPostsCount () {
      return Object.keys(this.user.posts).length
    }
  }
}
</script>

