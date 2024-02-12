interface audioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}
interface Details {
    author: string;
    year: number;
}


const audioPlayer: audioPlayer = {
    audioVolume: 90,
    songDuration:36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2017
    }
}

const song = 'New Song';
const {
    song:anotherSong, 
    songDuration:duration,
    details
} = audioPlayer;

const {author} = details;


console.log('Song', anotherSong);
console.log('Author', audioPlayer.details.author);
console.log('year', audioPlayer.details.year);
console.log('duration', duration);












export{};