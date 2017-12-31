<template>
    <div class="d-lg-flex justify-content-between text-muted">
        <ol class="path">
            <li v-for="item in shortendBreadcrumb" class="breadcrumb-item">{{item}}</li>
        </ol>
        <small>{{type}}</small>
    </div>
</template>

<script>
export default {
    props: ['type', 'path'],

    computed: {
        shortendBreadcrumb: function () {
            let n = this.path.length

            if (n < 4)
                return this.path
            
            return [this.path[0], '...', this.path[n - 2], this.path[n - 1]]
        }
    }
}
</script>