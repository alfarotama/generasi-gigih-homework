import React from "react";
import data from "./dummy-data";
import Song from "./song";
import Artist from "./artist";
import Album from "./album";
import ImageMusic from "./image";

const MusicPlaylist = () => {
	return (
		<div>
			<h1>My playlist</h1>
			<ImageMusic image={data.album.images[0].url} />
			<Song title={data.name} />
			<Artist artist={data.artists[0].name} />
			<Album album={data.album.name} />
			<button>Select</button>
		</div>
	);
};

export default MusicPlaylist;
