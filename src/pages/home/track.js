import data from "../dummy-data";

const Track = () => {
	return (
		<div className="track-info">
			<img src={data.album.images[0].url} />
			<p>{data.name}</p>
			<p>{data.artists[0].name}</p>
			<p>{data.album.name}</p>
			<button type="submit">Select</button>
		</div>
	);
};

export default Track;
