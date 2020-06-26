import show from "../data/shows.json";
import search from "../data/search.json";
import showDetail from "../data/showDetail.json";

module.exports = {
    get: jest.fn((url) => {
        let promise;
        switch (url) {
            case "https://api.tvmaze.com/shows":
                promise = Promise.resolve({
                    data:show
                })
            break;
            case "https://api.tvmaze.com/shows/169":
                promise = Promise.resolve({
                    data:showDetail
                })
            break;
            case "http://api.tvmaze.com/search/shows?q=fargo":
                promise = Promise.resolve({
                    data:search
                })
            break;
            case "http://api.tvmaze.com/search/shows?q=error":
                promise = Promise.reject({})
            break;
        }
        return promise;
    })
};