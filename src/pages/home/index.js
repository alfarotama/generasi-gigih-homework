const Home = () => {
	return (
		<div class="submit-form">
			<h1 class="header">Create Playlist</h1>
			<form>
				<label for="title">Title:</label>
				<br />
				<input type="text" id="title" name="title" value="" />
				<br />
				<label for="description">Description:</label>
				<br />
				<input type="text" id="description" name="description" value="" />
				<br />
				<input type="submit" />
			</form>
		</div>
	);
};

export default Home;
