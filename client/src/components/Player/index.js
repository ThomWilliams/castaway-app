import AudioPlayer from "react-modular-audio-player";

let audioFiles = [
  {
    src: "/heyJude.mp3",
    title: "Hey Jude",
    artist: "The Beatles"
  },
  {
    src: "/uptownFunk.mp3",
    title: "Uptown Funk ft. Bruno Mars",
    artist: "Mark Ronson"
  },
  {
    src: "/rollingInTheDeep.mp3",
    title: "Rolling In The Deep",
    artist: "Adele"
  }
];

<AudioPlayer
  audioFiles={audioFiles}/>