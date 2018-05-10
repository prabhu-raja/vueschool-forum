<template>
  <div class="post-list">
    <PostListItem
      v-for="post in posts"
      :post="post"
      :key="post['.key']">
    </PostListItem>
  </div>
</template>

<script>

import PostListItem from '@/components/PostListItem'

export default {
  props: {
    posts: {
      required: true,
      type: Array
    }
  },
  components: {
    PostListItem
  }
}
</script>
