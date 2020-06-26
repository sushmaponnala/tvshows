import { shallowMount, createLocalVue } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import { BootstrapVue } from 'bootstrap-vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('Header.vue', () => {
    it('renders correctly', () => {
        const wrapper = shallowMount(Header, {
            stubs: ['router-link', 'router-view'],
            data(){
                return{
                    query: 'fargo'
                }
            },
            mocks: {
                $router: []
            },
            localVue
        })
        wrapper.vm.onSubmit();
        expect(wrapper.element).toMatchSnapshot();
    })

    it('when search string is empty', () => {
        const wrapper = shallowMount(Header, {
            stubs: ['router-link', 'router-view'],
            data(){
                return{
                    query: ''
                }
            },
            mocks: {
                $router: []
            },
            localVue
        })
        wrapper.vm.onSubmit();
        expect(wrapper.element).toMatchSnapshot();
    })
})
