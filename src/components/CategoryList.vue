<template>
<div>
   <CategoryListItem
    v-for="category in categories"
    :category="category"
    :key="category['.key']">
  </CategoryListItem>
</div>
</template>

<script>
import CategoryListItem from '@/components/CategoryListItem'
export default {
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
  components: {
    CategoryListItem
  }
}
</script>
