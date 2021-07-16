const Song = ({ title, artist, album }) => {
	return (
		<div>
			<p>{title}</p>
			<p>{artist}</p>
			<p>{album}</p>
		</div>
	);
};

export default Song;
