import { shallowMount, createLocalVue } from '@vue/test-utils'
import SearchResults from '@/components/SearchResults.vue'
import { BootstrapVue } from 'bootstrap-vue'

const localVue = createLocalVue()
const searchAPIData = [
    {
        "score": 30.5671,
        "show": {
            "id": 32,
            "url": "http://www.tvmaze.com/shows/32/fargo",
            "name": "Fargo",
            "type": "Scripted",
            "language": "English",
            "genres": [
                "Drama",
                "Crime"
            ],
            "status": "Running",
            "runtime": 60,
            "premiered": "2014-04-15",
            "officialSite": "http://www.fxnetworks.com/fargo",
            "schedule": {
                "time": "22:00",
                "days": [
                    "Wednesday"
                ]
            },
            "rating": {
                "average": 9
            },
            "weight": 100,
            "network": {
                "id": 13,
                "name": "FX",
                "country": {
                    "name": "United States",
                    "code": "US",
                    "timezone": "America/New_York"
                }
            },
            "webChannel": null,
            "externals": {
                "tvrage": 35276,
                "thetvdb": 269613,
                "imdb": "tt2802850"
            },
            "image": {
                "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/248/620754.jpg",
                "original": "http://static.tvmaze.com/uploads/images/original_untouched/248/620754.jpg"
            },
            "summary": "<p><b>Fargo </b>is a seasonal anthology crime drama with some dark comical elements, inspired by the film <i>Fargo</i> written by the Coen brothers. Each season follows a new case and new characters, all entrenched in the trademark humor, murder and \"Minnesota nice\" that has made the film an enduring classic.</p>",
            "updated": 1587870550,
            "_links": {
                "self": {
                    "href": "http://api.tvmaze.com/shows/32"
                },
                "previousepisode": {
                    "href": "http://api.tvmaze.com/episodes/1104774"
                }
            }
        }
    }
]

localVue.use(BootstrapVue)


describe('SearchResults.vue', () => {
    it('renders correctly', () => {
        const wrapper = shallowMount(SearchResults, {
            propsData: {},
            data() {
                return {
                    details: searchAPIData
                }
            },
            mocks: {
                $route: {
                    path: '/search?q=fargo',
                    query: {
                        query: 'fargo'
                    }
                }
            },
            localVue
        })
        expect(wrapper.element).toMatchSnapshot();
    })
})
