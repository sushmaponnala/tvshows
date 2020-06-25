import { shallowMount, createLocalVue } from '@vue/test-utils'
import SearchResults from '@/components/SearchResults.vue'
import { BootstrapVue } from 'bootstrap-vue'
import searchAPIData from "./data/search.json";

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('SearchResults.vue', () => {
    it('renders correctly', async () => {
        const wrapper = shallowMount(SearchResults, {
            propsData: {},
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
        })
        expect(wrapper.element).toMatchSnapshot();
    })
})
