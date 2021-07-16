import React from "react";
import data from "../components/dummy-data";
import ImageMusic from "../components/image/index";
import Song from "../components/song/index";

const MusicPlaylist = () => {
	return (
		<div>
			<h1>My playlist</h1>
			<ImageMusic image={data.album.images[0].url} />
			<Song
				title={data.name}
				artist={data.artists[0].name}
				album={data.album.name}
			/>
			<button>Select</button>
		</div>
	);
};

export default MusicPlaylist;
