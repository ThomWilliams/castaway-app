// request search results from the API
const URL = `https://listen-api.listennotes.com/api/v2/search?`
// + `q=${query}`
// + `&sort_by_date=${sort_by_date}`
// + `&type=${type}`
// + `&offset=${offset}`
// + `&len_min=${len_min}`
// + `&len_max=${len_max}`
// + `&episode_count_min=${episode_count_min}`
// + `&episode_count_max=${episode_count_max}`
// + `&genre_ids=${genre_ids}`
// + `&published_before=${published_before}`
// + `+&published_after=${published_after}`
// + `&only_in=${only_in}`
// + `&language=${language}`
// + `&region=${region}`
// + `&ocid=${ocid}`
// + `&ncid=${ncid}`
// + `&safe_mode=${safe_mode}`;

const searchResults = () =>
  fetch(URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      "X-ListenAPI-Key": "ffd40c4878f547648e7bf10c4351a68f",
    },
    })
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());


export { searchResults };
