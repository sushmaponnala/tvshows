import { shallowMount, createLocalVue } from '@vue/test-utils'
import ShowDetail from '@/components/ShowDetail.vue'
import { BootstrapVue } from 'bootstrap-vue'
// import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('ShowDetail.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(ShowDetail, {
      propsData: {},
      data() {
        return {
          details: {
            name: "Breaking Bad",
            summary: "<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>",
            image: {
              medium: "http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg"
            },
            genres: [
              "Drama",
              "Crime",
              "Thriller"
            ],
            rating: {
              average: 9.3
            }
          },
        }
      },
      mocks: {
        $route: {
          path: '/showdetail/169',
          params: {
            id: 169
          }
        }
      },
      localVue
    })
    expect(wrapper.element).toMatchSnapshot();
  })
})
