<template>
  <div class="col-full">
    <h1>{{category.name}}</h1>
    <CategoryListItem
      :category="category">
    </CategoryListItem>
  </div>
</template>

<script>

import sourceData from '@/data'
import CategoryListItem from '@/components/CategoryListItem'

export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },
  components: {
    CategoryListItem
  },
  computed: {
    category () {
      return sourceData.categories[this.id]
    }
  }
}
</script>
