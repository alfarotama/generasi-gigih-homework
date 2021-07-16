import React from "react";
import data from "../components/dummy-data";
import ImageMusic from "../components/image/index";
import Song from "../components/song/index";

const MusicPlaylist = () => {
	return (
		<div>
			<h1>My playlist</h1>
			<ImageMusic image={data[0].album.images[0].url} />
			<Song
				title={data[0].name}
				artist={data[0].artists[0].name}
				album={data[0].album.name}
			/>
			<button>Select</button>
		</div>
	);
};

export default MusicPlaylist;
