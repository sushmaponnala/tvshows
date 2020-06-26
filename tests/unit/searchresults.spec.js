import { shallowMount, createLocalVue } from '@vue/test-utils'
import SearchResults from '@/components/SearchResults.vue'
import { BootstrapVue } from 'bootstrap-vue'
import searchAPIData from "./data/search.json";
import axios from 'axios';

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('SearchResults.vue', () => {
    it('renders correctly', async () => {
        const wrapper = shallowMount(SearchResults, {
            data() {
                return {
                    query: 'fargo',
                    details: searchAPIData
                }
            },
            mocks: {
                $route: {
                    path: '/search?q=fargo',
                    query: {
                        q: 'fargo'
                    }
                }
            },
            localVue
        });
        expect(wrapper.element).toMatchSnapshot();
    })

    it('when query is empty', async () => {
        const wrapper = shallowMount(SearchResults, {
            data() {
                return {
                    query: '',
                    details: []
                }
            },
            mocks: {
                $route: {
                    path: '/search?q=',
                    query: {
                        q: ''
                    }
                }
            },
            localVue
        });
        wrapper.setData({query: null});
        wrapper.vm.$route = {};
        expect(SearchResults.data().query).toBe('');
    })

    it('search with fargo param', async () => {
        const wrapper = shallowMount(SearchResults, {
            data() {
                return {
                    query: 'fargo',
                    details: searchAPIData
                }
            },
            mocks: {
                $route: {
                    path: '/search?q=fargo',
                    query: {
                        q: 'fargo'
                    }
                }
            },
            localVue
        });
        const beforeRouteUpdate = wrapper.vm.$options.beforeRouteUpdate;
        const nextFun = jest.fn();
        beforeRouteUpdate.call(wrapper.vm, {
            query: { q: "fargo" }
        }, {}, nextFun);
        expect(axios.get).toHaveBeenCalledWith(
            'http://api.tvmaze.com/search/shows?q=fargo',
        );
    })

    it('search with error param', async () => {
        const wrapper = shallowMount(SearchResults, {
            data() {
                return {
                    query: 'fargo',
                    details: searchAPIData
                }
            },
            mocks: {
                $route: {
                    path: '/search?q=fargo',
                    query: {
                        q: 'fargo'
                    }
                }
            },
            localVue
        });
        const beforeRouteUpdate = wrapper.vm.$options.beforeRouteUpdate;
        const nextFun = jest.fn();
        beforeRouteUpdate.call(wrapper.vm, {
            query: { q: "error" }
        }, {}, nextFun);
        expect(axios.get).toHaveBeenCalledWith(
            'http://api.tvmaze.com/search/shows?q=error',
        );
    })

    it('search API error on load', async () => {
        shallowMount(SearchResults, {
            data() {
                return {
                    query: 'error',
                    details: searchAPIData
                }
            },
            mocks: {
                $route: {
                    path: '/search?q=error',
                    query: {
                        q: 'error'
                    }
                }
            },
            localVue
        });
        expect(axios.get).toHaveBeenCalledWith(
            'http://api.tvmaze.com/search/shows?q=error',
        );
    })
})
