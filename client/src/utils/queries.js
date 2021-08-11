import { gql } from "@apollo/client";

export const QUERY_PODCASTS = gql`
  query getPodcasts($podcastId: ID) {
    podcasts(podcastId: $podcastId) {
      description
      image
      thumbnail
      title
      country
      language
      publisher
      website
      itunes_id
      total_episodes
      latest_pub_date_ms
      earliest_pub_date_ms
      explicit_content
      extra {
        properties {
          url1
          url2
          url3
          google_url
          spotify_url
          youtube_url
        }
      }
      genre_ids {
        items
        example
      }
      episodes {
        items {
          properties {
            id
            link
            audio
            image
            title
            thumbnail
            description
            pub_date_ms
          }
        }
      }
    }
  }
`;

export const QUERY_ALL_PODCASTS = gql`
  {
    description
    image
    thumbnail
    title
    country
    language
    publisher
    website
    itunes_id
    total_episodes
    latest_pub_date_ms
    earliest_pub_date_ms
    explicit_content
    extra {
      properties {
        url1
        url2
        url3
        google_url
        spotify_url
        youtube_url
      }
    }
    genre_ids {
      items
      example
    }
    episodes {
      items {
        properties {
          id
          link
          audio
          image
          title
          thumbnail
          description
          pub_date_ms
        }
      }
    }
  }
`;

export const QUERY_GENRES = gql`
  {
    genres {
      id
      name
      parent_id
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      username
      email
      password
      gender
      dob
    }
    podcasts {
      description
      image
      thumbnail
      title
      country
      language
      publisher
      website
      itunes_id
      total_episodes
      latest_pub_date_ms
      earliest_pub_date_ms
      explicit_content
      extra {
        properties {
          url1
          url2
          url3
          google_url
          spotify_url
          youtube_url
        }
      }
      genre_ids {
        items
        example
      }
      episodes {
        items {
          properties {
            id
            link
            audio
            image
            title
            thumbnail
            description
            pub_date_ms
          }
        }
      }
    }
  }
`;
