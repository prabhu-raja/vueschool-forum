<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <!-- <ThreadList :threads="threads"></ThreadList> -->
    <!-- <ForumList :forums="forums"></ForumList> -->
    <CategoryList :categories="categories"></CategoryList>
  </div>
</template>

<script>

import sourceData from '@/data'
// import ThreadList from '@/components/ThreadList'
// import ForumList from '@/components/ForumList'
import CategoryList from '@/components/CategoryList'
console.log(sourceData)

export default {
  // components: {
  //   ThreadList
  // },

  // components: {
  //   ForumList
  // },
  components: {
    CategoryList
  },
  data () {
    return {
      forums: Object.values(sourceData.forums),
      threads: Object.values(sourceData.threads),
      posts: sourceData.posts,
      users: sourceData.users,
      categories: Object.values(sourceData.categories)
    }
  }
}
</script>
