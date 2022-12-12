<template>
  <div class="w-full min-h-screen bg-stone-900">
    
    <nav class="w-full py-6 mx-auto text-center text-stone-400">
      <div>
        <span class="text-2xl font-bold"><span class="font-light">film</span><span class="text-amber-500">fight</span>
          <div class="px-4 mt-3 text-base font-normal">Pit movies or TV shows against each other. Who will win?
          </div>
        </span>
      </div>
    </nav>

    <main class="max-w-5xl mx-auto text-zinc-400">

      <div class="grid grid-cols-2 gap-2 px-2 sm:gap-8 sm:px-6">
        <div>
          <!-- enter movie name -->
          <div>
            <!-- <label for="movie1">Movie 1</label> -->
            <div class="relative">
              <input @keypress.enter="searchMovie(movie1name, 1)" v-model="movie1name" type="text"
                class="flex items-center w-full p-3 pr-12 mb-5 text-base font-normal border-2 rounded placeholder-stone-600 text-stone-300 border-stone-600 focus:outline-none focus:border-amber-500 bg-stone-800 focus-within:border-amber-500"
                placeholder="enter movie or show name">
              <IconSearch @clock.prevent="searchMovie(movie1name, 1)"
                class="absolute w-10 h-10 p-2 -translate-y-1/2 cursor-pointer right-1 top-1/2 text-stone-600 hover:text-amber-500" />
            </div>
          </div>

          <!-- error message -->
          <div class="text-amber-500">{{ search1Message }}</div>

          <!-- show search results -->
          <FilmSearchResults @clicked="getMovie($event, 1)" :items="movie1results" />

          <div v-if="movie1">
            <!-- <pre>{{movie1}}</pre> -->
            <!-- show movie details -->
            <FilmDetails :item="movie1" :isWinner="calculateWinner(movie1?.Ratings, movie2?.Ratings)" />
          </div>

          <!-- movie reviews -->
          <FilmReviews v-if="movie1 && movie1.Reviews" :items="movie1.Reviews" />
        </div>

        <!-- movie 2 -->
        <div>
          <!-- enter movie name -->
          <div class="relative">
            <!-- <label for="movie2">Movie 2</label> -->
            <input @keypress.enter="searchMovie(movie2name, 2)" v-model="movie2name" type="text"
              class="flex items-center w-full p-3 pr-12 mb-5 text-base font-normal border-2 rounded placeholder-stone-600 text-stone-300 border-stone-600 focus:outline-none focus:border-amber-500 bg-stone-800 focus-within:border-amber-500"
              placeholder="enter movie or show name">
            <IconSearch @clock.prevent="searchMovie(movie1name, 1)"
              class="absolute w-10 h-10 p-2 -translate-y-1/2 cursor-pointer right-1 top-1/2 text-stone-600 hover:text-amber-500" />
          </div>

          <div class="text-amber-500">{{ search2Message }}</div>
          <!-- show search results -->
          <FilmSearchResults @clicked="getMovie($event, 2)" :items="movie2results" />

          <div v-if="movie2">
            <!-- <pre>{{movie2}}</pre> -->
            <!-- show movie details -->
            <FilmDetails :item="movie2" :isWinner="calculateWinner(movie2?.Ratings, movie1?.Ratings)" />

          </div>
          <!-- movie reviews -->
          <FilmReviews v-if="movie2 && movie2.Reviews" :items="movie2.Reviews" />
        </div>

      </div>

      <div v-if="!movie1 && !movie2" class="flex justify-center mt-6">
        <img :src="loadingPoster" alt="" class="max-h-[500px] object-cover shadow-lg shadow-amber-500 rounded-lg">
      </div>
    </main>
  </div>
</template>

<script setup>
import { IconSearch } from "@iconify-prerendered/vue-bx";

definePageMeta({
  layout: false
})

useHead({
  title: "Film Fight",
  meta: [
    {
      name: "description",
      content: "Pit movies or TV shows against each other. Who will win?"
    },
    {
      property: "og:title",
      content: "Film Fight"
    },
    {
      hid: "og:description",
      property: "og:description",
      content: "Pit movies or TV shows against each other. Who will win?"
    },
    {
      property: "og:image",
      content: "/filmfight_twitter.png"
    },
    {
      property: "og:url",
      content: "https://tinkr.in/filmfight/"
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      name: "twitter:title",
      content: "Film Fight"
    },
    {
      name: "twitter:description",
      content: "Pit movies or TV shows against each other. Who will win?"
    },
    {
      name: "twitter:image",
      content: "/filmfight_twitter.png"
    },
  ],
  link: [{ rel: 'icon', type: "image/x-icon", href: '/filmfight.png' }]
});

const movie1name = ref("")
const movie2name = ref("")
const movie1results = ref([])
const movie2results = ref([])

const search1Message = ref("");
const search2Message = ref("");

const loadingPoster = ref("");

// const movie1 = reactive({
//   title: "",
//   year: "",
//   synopsis: "",
//   duration: "",
//   genres: "",
//   cast: "",
//   director: "",
//   score_imdb: "",
//   score_rt: "",
//   score_meta: "",
//   reviews: []
// })
const movie1 = ref()
const movie2 = ref()

const searchMovie = async (val, movieNum) => {
  console.log(val, movieNum);
  const url = `https://www.omdbapi.com/?apikey=ba58d588&s=${val}`;

  const { data, pending, refresh, error } = await useFetch(`https://www.omdbapi.com/?apikey=ba58d588&s=${val}`, { initialCache: false });
  // res = res.json();
  console.log(movieNum, data.value)

  if (data.value && data.value.Error) {
    if (movieNum == 1) {
      movie1results.value = [];
      search1Message.value = "No results found!"

      setTimeout(() => {
        search1Message.value = ""
      }, 4000);
    } else {
      movie2results.value = [];
      search2Message.value = "No results found!"

      setTimeout(() => {
        search2Message.value = ""
      }, 4000);
    }
    console.log("no results")
  } else {

    if (data && data.value) {
      if (movieNum == 1) {
        movie1results.value = data.value.Search;

      } else {
        movie2results.value = data.value.Search;

      }
    }
  }

  // console.log(movieNum, data)
}

const getMovie = async (imdbID, movieNum) => {

  const url = `https://www.omdbapi.com/?apikey=ba58d588&i=${imdbID}`;
  let res = await useFetch(url, { initialCache: false });


  if (res && res.data.value) {
    if (movieNum == 1) {
      movie1.value = res.data.value;
      movie1name.value = ""
      movie1results.value = []
    } else {
      movie2.value = res.data.value;
      movie2name.value = "";
      movie2results.value = []
    }
  }
  let reviews = await getReviews(imdbID);

  if (reviews) {
    if (movieNum == 1) {
      movie1.value["Reviews"] = reviews;
    } else {
      movie2.value["Reviews"] = reviews;
    }
  }
  // console.log(res);
}

const getReviews = async (imdbID) => {
  let url = `https://wrapapi.com/use/balsimpson/movies/imdb_reviews/0.0.2?imdbID=${imdbID}&wrapAPIKey=rnobhyu0QNyehnOCXtY1y7yatP4CkjKF`;

  const { data, pending, refresh, error } = await useFetch(url, { initialCache: false });
  // res = res.json();
  // console.log(data.value)

  return data.value
}

const calculateWinner = (movie1_scores, movie2_scores) => {
  if (movie1_scores && movie2_scores) {
    // console.log(movie1_scores, movie2_scores);
    let movie1_imdb = 0;
    let movie1_rotten = 0;
    let movie1_meta = 0;
    let movie2_imdb = 0;
    let movie2_rotten = 0;
    let movie2_meta = 0;

    for (let i = 0; i < movie1_scores.length; i++) {
      if (movie1_scores[i].Value && i == 0) {
        movie1_imdb = parseFloat(movie1_scores[i].Value.split('/')[0]) * 10;
      }
      if (movie1_scores[i].Value && i == 1) {
        movie1_rotten = parseInt(movie1_scores[i].Value.split('%')[0]);
      }
      if (movie1_scores[i].Value && i == 2) {
        movie1_meta = parseInt(movie1_scores[i].Value.split('/')[0]);
      }
    }
    for (let i = 0; i < movie2_scores.length; i++) {
      if (movie2_scores[i].Value && i == 0) {
        movie2_imdb = parseFloat(movie2_scores[i].Value.split('/')[0]) * 10;
      }
      if (movie2_scores[i].Value && i == 1) {
        movie2_rotten = parseInt(movie2_scores[i].Value.split('%')[0]);
      }
      if (movie2_scores[i].Value && i == 2) {
        movie2_meta = parseInt(movie2_scores[i].Value.split('/')[0]);
      }
    }

    // console.log(movie1_imdb, movie1_rotten, movie1_meta);
    // console.log(movie2_imdb, movie2_rotten, movie2_meta);

    let movie1_score_normalised = (movie1_imdb + movie1_rotten + movie1_meta) / 3;
    let movie2_score_normalised = (movie2_imdb + movie2_rotten + movie2_meta) / 3;
    // console.log(movie1_score_normalised, movie2_score_normalised);

    if (movie1_score_normalised > movie2_score_normalised) {
      return true;
      // document.getElementById(`movie1_winner`).style.display = 'block';
      // document.getElementById(`movie2_winner`).style.display = 'none';
      // } else if (movie1_score_normalised < movie2_score_normalised) {
      // return 2;
      // document.getElementById(`movie1_winner`).style.display = 'none';
      // document.getElementById(`movie2_winner`).style.display = 'block';
      // } else if (movie1_score_normalised == movie2_score_normalised) {
      //   return 0;
      // }
    } else {
      return false;
    }
  }
}

onMounted(() => {
  getPoster()
})

const getPoster = async () => {
  try {
    let res = await useFetch("https://www.reddit.com/r/MoviePosterPorn/top.json", { initialCache: false })
    // console.log(res);

    if (res) {
      let items = res.data.value.data.children;
      // console.log(items[0].data.url);

      let randNum = Math.floor(Math.random() * res.data.value.data.children.length);

      loadingPoster.value = items[randNum].data.url
    }
  } catch (error) {
    console.log((error))
  }
}

</script>