<template>
    <a :href="'https://docs.julialang.org/en/stable/' + item.url" class="list-group-item list-group-item-action flex-column align-items-start">
        <h5 class="mb-1" v-if="item.header"><ais-snippet :result="item" attribute-name="content"></ais-snippet></h5>
        <p class="mb-1" v-else><ais-snippet :result="item" attribute-name="content"></ais-snippet></p>
        <Footer type="Section" :path="item.breadcrumb" />
    </a>
</template>

<script>
import Footer from './Footer'

export default {
  props: ['item'],
  components: { Footer }
}
</script>
