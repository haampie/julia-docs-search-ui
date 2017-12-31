<template>
    <ais-index :search-store="searchStore">
        <section class="container">
            <div class="row justify-content-md-center mb-4">
                <div class="col-lg-12">
                    <div class="input-group input-group-lg">
                        <ais-input class="form-control" placeholder="Search the Julia docs..." autofocus></ais-input>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-9 order-md-2">
                    <ais-results class="list-group">
                        <template slot-scope="{ result }">
                            <CodeItem :item="result" v-if="result.type === 'Code'" />
                            <DefinitionItem :item="result" v-else-if="result.type === 'Definition'" />
                            <TextItem :item="result" v-else />
                        </template>
                    </ais-results>

                    <nav class="my-2">
                        <ais-pagination :class-names="paginationClasses" padding="2">
                            <template inline slot="first">«</template>
                            <template inline slot="last">»</template>
                            <template inline slot="next">›</template>
                            <template inline slot="previous">‹</template>
                        </ais-pagination>
                    </nav>
                </div>
                <div class="col order-md-1">
                    <ais-refinement-list attribute-name="type">
                        <h2 class="h4" slot="header">Filter by type</h2>
                    </ais-refinement-list>
                </div>
            </div>
        </section>
    </ais-index>
</template>

<script>
import TextItem from './components/TextItem.vue'
import CodeItem from './components/CodeItem.vue'
import DefinitionItem from './components/DefinitionItem.vue'
import { createFromAlgoliaCredentials } from 'vue-instantsearch';

const searchStore = createFromAlgoliaCredentials(
  'DX02JHO02H',
  'd2288cd341e4bd136965d634834e679e'
);

searchStore.indexName = 'testing';

export default {

    data() {
        return {
            paginationClasses: {
                'ais-pagination': 'pagination m-0',
                'ais-pagination__item': 'page-item',
                'ais-pagination__item--active': 'active',
                'ais-pagination__item--disabled': 'disabled',
                'ais-pagination__link': 'page-link'
            },
            searchStore
        }
    },

    created() {
        this.searchStore.queryParameters = this.queryParameters;
    },

    props: {
        queryParameters: {
            type: Object,
            default: '',
        },
    },

    watch: {
        'searchStore.queryParameters'(parameters) {
            const query = parameters;
            delete query.index;
            this.$router.push({
                name: 'home',
                query,
            });
        },
    },

    components: {
        TextItem,
        CodeItem,
        DefinitionItem
    }
}
</script>
