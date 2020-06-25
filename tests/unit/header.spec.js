import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Header from '@/components/Header.vue'
import { BootstrapVue } from 'bootstrap-vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)
localVue.use(VueRouter)

describe('Header.vue', () => {
    it('renders correctly', () => {
        const wrapper = shallowMount(Header, {
            propsData: {},
            localVue
        })
        expect(wrapper.element).toMatchSnapshot();
    })
})
