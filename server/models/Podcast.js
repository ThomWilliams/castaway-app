const mongoose = require('mongoose');

const { Schema } = mongoose;

const podcastSchema = new Schema({
  id: {
    type: String,
  },
  description: {
    type: String,
  },
  //saved book id from GoogleBooks
  image: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  title: {
    type: String,
  },
  country: {
    type: String,
  },
  language: {
    type: String,
  },
  country: {
    type: String,
  },
  publisher: {
    type: String,
  },
  website: {
    type: String,
  },
  itunes_id: {
    type: Number,
  },
  total_episodes: {
    type: Number,
  },
  latest_pub_date_ms: {
    type: Number,
  },
  earliest_pub_date_ms: {
    type: Number,
  },
  explicit_content: {
    type: Boolean,
  },
  extra: {
    type: Object,
    properties: {
      url1: {
        type: String,
        required: false,
      },
      url2: {
        type: String,
        required: false,
      },
      url3: {
        type: String,
        required: false,
      },
      google_url: {
        type: String,
        required: false,
      },
      spotify_url: {
        type: String,
        required: false,
      },
      youtube_url: {
        type: String,
        required: false,
      },
    },
  },
  // CHECK THIS
  genre_ids: {
    type: Array,
    items: {
      type: Number,
    },
    example: [],
  },
  episodes: {
    type: Array,
    items: {
      type: Object,
      properties: {
        id: {
          type: String,
        },
        link: {
          type: String,
        },
        audio: {
          type: String,
          // "description": "Audio url of this episode, which can be played directly."
        },
        image: {
          type: String,
        },
        title: {
          type: String,
        },
        thumbnail: {
          type: String,
        },
        description: {
          type: String,
        },
        pub_date_ms: {
          type: Number,
        },
      },
    },
  },
});


const Podcast = mongoose.model('Podcast', podcastSchema);

module.exports = Podcast;





// {
//     "id": {
//       "type": "string",
//       "example": "4d3fe717742d4963a85562e9f84d8c79",
//       "description": "Podcast id."
//     },
//     "rss": {
//       "type": "string",
//       "example": "https://sw7x7.libsyn.com/rss",
//       "description": "RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan."
//     },
//     "type": {
//       "enum": [
//         "episodic",
//         "serial"
//       ],
//       "type": "string",
//       "example": "episodic",
//       "description": "The type of this podcast - episodic or serial."
//     },
//     "email": {
//       "type": "string",
//       "example": "hello@example.com",
//       "description": "The email of this podcast's producer. This field is available only in the PRO/ENTERPRISE plan."
//     },
//     "extra": {
//       "type": "object",
//       "properties": {
//         "url1": {
//           "type": "string",
//           "description": "Url affiliated with this podcast"
//         },
//         "url2": {
//           "type": "string",
//           "description": "Url affiliated with this podcast"
//         },
//         "url3": {
//           "type": "string",
//           "description": "Url affiliated with this podcast"
//         },
//         "google_url": {
//           "type": "string",
//           "example": "https://play.google.com/music/listen?u=0#/ps/I7gdcrqcmvhfnhh2cyqkcg32tkq",
//           "description": "Google Podcasts url for this podcast"
//         },
//         "spotify_url": {
//           "type": "string",
//           "example": "https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV",
//           "description": "Spotify url for this podcast"
//         },
//         "youtube_url": {
//           "type": "string",
//           "example": "https://www.youtube.com/sw7x7",
//           "description": "YouTube url affiliated with this podcast"
//         },
//         "linkedin_url": {
//           "type": "string",
//           "description": "LinkedIn url affiliated with this podcast"
//         },
//         "wechat_handle": {
//           "type": "string",
//           "description": "WeChat username affiliated with this podcast"
//         },
//         "patreon_handle": {
//           "type": "string",
//           "example": "sw7x7",
//           "description": "Patreon username affiliated with this podcast"
//         },
//         "twitter_handle": {
//           "type": "string",
//           "example": "SW7x7podcast",
//           "description": "Twitter username affiliated with this podcast"
//         },
//         "facebook_handle": {
//           "type": "string",
//           "example": "sw7x7",
//           "description": "Facebook username affiliated with this podcast"
//         },
//         "instagram_handle": {
//           "type": "string",
//           "example": "sw7x7",
//           "description": "Instagram username affiliated with this podcast"
//         }
//       }
//     },
//     "image": {
//       "type": "string",
//       "example": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
//       "description": "Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's\na high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,\nlow resolution image (300x300).\n"
//     },
//     "title": {
//       "type": "string",
//       "example": "Star Wars 7x7 | Star Wars News, Interviews, and More!",
//       "description": "Podcast name."
//     },
//     "country": {
//       "type": "string",
//       "example": "United States",
//       "description": "The country where this podcast is produced."
//     },
//     "website": {
//       "type": "string",
//       "example": "http://sw7x7.com/",
//       "description": "Website url of this podcast."
//     },
//     "episodes": {
//       "type": "array",
//       "items": {
//         "type": "object",
//         "properties": {
//           "id": {
//             "type": "string",
//             "example": "4d82e50314174754a3b603912448e812",
//             "description": "Episode id."
//           },
//           "link": {
//             "type": "string",
//             "example": "https://www.npr.org/2020/01/22/798532179/soleimanis-iran",
//             "description": "Web link of this episode."
//           },
//           "audio": {
//             "type": "string",
//             "example": "https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/",
//             "description": "Audio url of this episode, which can be played directly."
//           },
//           "image": {
//             "type": "string",
//             "example": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg",
//             "description": "Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's\na high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,\nlow resolution image (300x300).\n"
//           },
//           "title": {
//             "type": "string",
//             "example": "Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101",
//             "description": "Episode name."
//           },
//           "thumbnail": {
//             "type": "string",
//             "example": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
//             "description": "Thumbnail image url for this podcast's artwork (300x300)."
//           },
//           "description": {
//             "type": "string",
//             "example": "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
//             "description": "Html of this episode's full description"
//           },
//           "pub_date_ms": {
//             "type": "integer",
//             "example": 1474873200000,
//             "description": "Published date for this episode. In millisecond."
//           },
//           "listennotes_url": {
//             "type": "string",
//             "example": "https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/",
//             "description": "The url of this episode on [ListenNotes.com](https://www.ListenNotes.com)."
//           },
//           "audio_length_sec": {
//             "type": "integer",
//             "example": 567,
//             "description": "Audio length of this episode. In seconds."
//           },
//           "explicit_content": {
//             "type": "boolean",
//             "example": false,
//             "description": "Whether this podcast contains explicit language."
//           },
//           "maybe_audio_invalid": {
//             "type": "boolean",
//             "example": false,
//             "description": "Whether or not this episode's audio is invalid. Podcasters may delete the original audio."
//           },
//           "listennotes_edit_url": {
//             "type": "string",
//             "example": "https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit",
//             "description": "Edit url of this episode where you can update the audio url if you find the audio is broken."
//           }
//         }
//       }
//     },
//     "language": {
//       "type": "string",
//       "example": "English",
//       "description": "The language of this podcast. You can get all supported languages from `GET /languages`."
//     },
//     "genre_ids": {
//       "type": "array",
//       "items": {
//         "type": "integer",
//         "description": "Genre ids."
//       },
//       "example": [
//         138,
//         86,
//         160,
//         68,
//         82,
//         100,
//         101
//       ]
//     },
//     "itunes_id": {
//       "type": "integer",
//       "example": 896354638,
//       "description": "iTunes id for this podcast."
//     },
//     "publisher": {
//       "type": "string",
//       "example": "Planet Broadcasting",
//       "description": "Podcast publisher name."
//     },
//     "thumbnail": {
//       "type": "string",
//       "example": "https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg",
//       "description": "Thumbnail image url for this podcast's artwork (300x300)."
//     },
//     "is_claimed": {
//       "type": "boolean",
//       "example": true,
//       "description": "Whether this podcast is claimed by its producer on [ListenNotes.com](https://www.ListenNotes.com)."
//     },
//     "description": {
//       "type": "string",
//       "example": "<p>The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed!</p>",
//       "description": "Html of this episode's full description"
//     },
//     "looking_for": {
//       "type": "object",
//       "properties": {
//         "guests": {
//           "type": "boolean",
//           "example": true,
//           "description": "Whether this podcast is looking for guests."
//         },
//         "cohosts": {
//           "type": "boolean",
//           "example": true,
//           "description": "Whether this podcast is looking for cohosts."
//         },
//         "sponsors": {
//           "type": "boolean",
//           "example": true,
//           "description": "Whether this podcast is looking for sponsors."
//         },
//         "cross_promotion": {
//           "type": "boolean",
//           "example": true,
//           "description": "Whether this podcast is looking for cross promotion opportunities with other podcasts."
//         }
//       }
//     },
//     "listen_score": {
//       "type": "integer",
//       "example": 81,
//       "description": "The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.\nIf the score is not available, it'll be null. Learn more at listennotes.com/listen-score\n"
//     },
//     "total_episodes": {
//       "type": "integer",
//       "example": 324,
//       "description": "Total number of episodes in this podcast."
//     },
//     "listennotes_url": {
//       "type": "string",
//       "example": "https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/",
//       "description": "The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com)."
//     },
//     "explicit_content": {
//       "type": "boolean",
//       "example": false,
//       "description": "Whether this podcast contains explicit language."
//     },
//     "latest_pub_date_ms": {
//       "type": "integer",
//       "example": 1557499770000,
//       "description": "The published date of the latest episode of this podcast. In milliseconds"
//     },
//     "earliest_pub_date_ms": {
//       "type": "integer",
//       "example": 1470667902000,
//       "description": "The published date of the oldest episode of this podcast. In milliseconds"
//     },
//     "next_episode_pub_date": {
//       "type": "integer",
//       "example": 1470667902000,
//       "description": "Passed to the **next_episode_pub_date** parameter of `GET /podcasts/{id}` to paginate through episodes of that podcast."
//     },
//     "listen_score_global_rank": {
//       "type": "string",
//       "example": "0.5%",
//       "description": "The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.\nFor example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.\nIf the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score\n"
//     }
//   }

/// GENRE SCHEMA
// {
//     "genres": [
//       {
//         "id": 144,
//         "name": "Personal Finance",
//         "parent_id": 67
//       },
//       {
//         "id": 151,
//         "name": "Locally Focused",
//         "parent_id": 67
//       },
//       {
//         "id": 88,
//         "name": "Health & Fitness",
//         "parent_id": 67
//       },
//       {
//         "id": 77,
//         "name": "Sports",
//         "parent_id": 67
//       },
//       {
//         "id": 68,
//         "name": "TV & Film",
//         "parent_id": 67
//       },
//       {
//         "id": 133,
//         "name": "Comedy",
//         "parent_id": 67
//       },
//       {
//         "id": 111,
//         "name": "Education",
//         "parent_id": 67
//       },
//       {
//         "id": 168,
//         "name": "Fiction",
//         "parent_id": 67
//       },
//       {
//         "id": 100,
//         "name": "Arts",
//         "parent_id": 67
//       },
//       {
//         "id": 117,
//         "name": "Government",
//         "parent_id": 67
//       },
//       {
//         "id": 125,
//         "name": "History",
//         "parent_id": 67
//       },
//       {
//         "id": 82,
//         "name": "Leisure",
//         "parent_id": 67
//       },
//       {
//         "id": 122,
//         "name": "Society & Culture",
//         "parent_id": 67
//       },
//       {
//         "id": 99,
//         "name": "News",
//         "parent_id": 67
//       },
//       {
//         "id": 132,
//         "name": "Kids & Family",
//         "parent_id": 67
//       },
//       {
//         "id": 69,
//         "name": "Religion & Spirituality",
//         "parent_id": 67
//       },
//       {
//         "id": 93,
//         "name": "Business",
//         "parent_id": 67
//       },
//       {
//         "id": 107,
//         "name": "Science",
//         "parent_id": 67
//       },
//       {
//         "id": 127,
//         "name": "Technology",
//         "parent_id": 67
//       },
//       {
//         "id": 135,
//         "name": "True Crime",
//         "parent_id": 67
//       },
//       {
//         "id": 134,
//         "name": "Music",
//         "parent_id": 67
//       }
//     ]
//   }
