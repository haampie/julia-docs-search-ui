<template>
    <a :href="'https://docs.julialang.org/en/stable/' + item.url" class="list-group-item list-group-item-action flex-column align-items-start">
        <h5 class="mb-1"><code>{{item.full}}</code></h5>
        <Footer type="Definition" :path="item.breadcrumb" />
    </a>
</template>

<script>
import Footer from './Footer'

export default {
  props: ['item'],
  components: { Footer }
}
</script>