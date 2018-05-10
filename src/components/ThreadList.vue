<template>
  <div class="thread-list">
    <h2 class="list-title">Threads</h2>
    <ThreadListItem
      v-for="(thread, thIndex) in threads"
      :thread="thread"
      :key="thIndex">

    </ThreadListItem>
  </div>
</template>
<script>

import ThreadListItem from './ThreadListItem'

export default {
  components: {
    ThreadListItem
  },
  props: {
    threads: {
      required: true,
      type: Array
    }
  }
}
</script>
