import React from "react";
import { public_url, root_url } from "../values";

import { useSelector, useDispatch } from "react-redux";
import { setActiveMenu, selectActiveMenu } from "../redux/activeMenuSlice";

function Menu(props) {
	const dispatch = useDispatch();
	const activeMenu = useSelector(selectActiveMenu);

	function goTo(menu, e) {
		e.preventDefault();
		dispatch(setActiveMenu(menu));
		props.set_view(menu);
	}

	const menu_list = [
		{
			name: "home",
			text: "Home",
			icon: "fa-home",
		},
		{
			name: "search",
			text: "Search",
			icon: "fa-search",
		},
		{
			name: "playlists",
			text: "Playlists",
			icon: "fa-headphones-alt",
		},
	];

	return (
		<div className="bg-sptf_card rounded-xl h-5/6 text-left shadow">
			<center className="px-5 py-10">
				<a href={root_url}>
					<img
						src={public_url + "/img/spotify.png"}
						className="w-24"
						alt="logo"
					/>
				</a>
			</center>

			{menu_list.map((item) => {
				return (
					<div
						className={`${
							activeMenu === item.name ? "border-l-4 border-me_primary" : ""
						} mb-2 py-1 px-4`}
					>
						<a
							className={`text-lg font-medium mb-5 text-sptf_dark_half hover:text-sptf_primary`}
							onClick={(e) => {
								goTo(item.name, e);
							}}
							href={`${item.name}`}
						>
							<i className={`fa m-2 ${item.icon}`}></i>
							{item.text}
						</a>
					</div>
				);
			})}
		</div>
	);
}

export default Menu;
