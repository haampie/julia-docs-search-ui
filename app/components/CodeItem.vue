<template>
  <a :href="'https://docs.julialang.org/en/stable/' + item.url" class="list-group-item list-group-item-action">
        <pre><code v-html="item._highlightResult.content.value"></code></pre>
        <Footer type="Code" :path="item.breadcrumb" />
    </a>
</template>

<script>
import Footer from './Footer'

export default {
  props: ['item'],
  components: { Footer }
}
</script>