import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'
import axios from 'axios'
import { BootstrapVue } from 'bootstrap-vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)
localVue.use(VueRouter)

describe('Dashboard.vue', () => {
    it('renders correctly', () => {
        const wrapper = shallowMount(Dashboard, {
            propsData: {},
            localVue
        })
        expect(wrapper.element).toMatchSnapshot();
    })
    it('should call axios get', () => {
        const wrapper = shallowMount(Dashboard, {
            propsData: {},
            localVue
        })
        expect(wrapper.element).toMatchSnapshot();
        expect(axios.get).toBeCalledWith('https://api.tvmaze.com/shows')
    })
    
})
