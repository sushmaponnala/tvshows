import { shallowMount, createLocalVue } from '@vue/test-utils'
import Show from '@/components/Show.vue'
import { BootstrapVue } from 'bootstrap-vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('Show.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Show, {
      propsData: {
        id: 169,
        name: "Breaking Bad",
        image: "http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
        rating: 9.3,
        genres: [
          "Drama",
          "Crime",
          "Thriller"
        ]
      },
      localVue
    })
    expect(wrapper.element).toMatchSnapshot();
  })
})
