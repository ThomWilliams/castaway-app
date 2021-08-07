import React from "react";
import PodcastItem from "../components/PodcastItem";
import AudioPlayer from "react-modular-audio-player";

let iconStyle = { width: "fit-content" },
  rearrangedPlayer = [
    {
      className: "tier-top",
      style: { padding: "5px 0" },
      innerComponents: [
        {
          type: "play",
          style: iconStyle,
        },
        {
          type: "rewind",
          style: iconStyle,
        },
        {
          type: "forward",
          style: iconStyle,
        },
        {
          type: "volume",
        },
      ],
    },
    {
      className: "tier-bottom",
      innerComponents: [
        {
          type: "time",
          style: iconStyle,
        },
        {
          type: "seek",
        },
      ],
    },
  ];

const audioFiles = [
  { src: "https://www.listennotes.com/e/p/ea09b575d07341599d8d5b71f205517b/" },
];
const podcastImage = "https://production.listennotes.com/podcasts/the-rough-cut-PmR84dsqcbj-53MLh7NpAwm.1400x1400.jpg";
const podcastTitle = "The Rough Cut";
const podcastPublisher = "Matt Feury";
const podcastDescription = "In this episode of The Rough Cut we close out our study of the final Skywalker trilogy with a look back on the film that helped the dormant franchise make the jump to lightspeed, Episode VII - The Force Awakens.  Recorded in Amsterdam in front of a festival audience in 2018, editor Maryann Brandon ACE recounts her work on The Force Awakens just as she was about to begin editing what would come to be known as Episode IX - The Rise of Skywalker.   Go back to the beginning and listen to our podcast with Star Wars and 'Empire' editor, Paul Hirsch. Hear editor Bob Ducsay talk about cutting The Last Jedi. Listen to Maryann Brandon talk about her work on The Rise of Skywalker. Get your hands on the non-linear editor behind the latest Skywalker trilogy,  Avid Media Composer! Subscribe to The Rough Cut for more great interviews with the heroes of the editing room!";


export default function Podcast() {
  return (
    <div>
      <section>
      <PodcastItem displayAll = {true} />
        <div className="title">
          <h1>Podcast</h1>
        </div>
        <img className="cover" src={podcastImage} alt={podcastTitle} />
        <AudioPlayer
          audioFiles={audioFiles}
          rearrange={rearrangedPlayer}
          padding="20px"
          margin="20px"
          playerWidth="auto"
          className="audio-player"
        />
        <div className="podcast-info">
        <h1>{podcastTitle}</h1>
        <h2>{podcastPublisher}</h2>
        <h2>Language / Country</h2>
        <h2>Last episode release</h2>
        <h2>Total episodes</h2>
        <p className="podcast-info-description">{podcastDescription}</p>
        </div>
      </section>
    </div>
  );
}