import React from "react";
import data from "../components/dummy-data";
import ImageMusic from "../components/image/index";
import Song from "../components/song/index";

const MusicPlaylist = () => {
	const musicList = data.map((music) => {
		if (music) {
			return (
				<div key={music.id}>
					<ImageMusic image={music.album.images[1].url} />
					<Song
						title={music.name}
						artist={music.artists[0].name}
						album={music.album.name}
					/>
					<button>Select</button>
				</div>
			);
		} else return null;
	});
	return (
		<div>
			<h1>Old Rock</h1>
			{musicList}
		</div>
	);
};

export default MusicPlaylist;
