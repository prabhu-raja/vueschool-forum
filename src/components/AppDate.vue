<template>
  <span
      class="post-date text-faded"
      v-bind:title="timestamp | humanFriendlyDate">
      {{timestamp | diffFromHumans}}
  </span>
</template>

<script>

import moment from 'moment'

export default {
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },
  filters: {
    humanFriendlyDate (date) {
      return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a')
    },
    diffFromHumans (date) {
      return moment.unix(date).fromNow()
    }
  }
}
</script>
