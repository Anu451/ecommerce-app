import React, { useState } from 'react';
import { iconsPath, imagesPath } from '../Assets/imaPath';

function Header() {
	const [drowDown, setDropDown] = useState(false);
	const handelDropDown = () => setDropDown(!drowDown);
	return (
		<header className=" flex justify-evenly items-center m-5">
			<div>
				<img src={imagesPath.logo} alt="" width={100} height={100} />
			</div>
			<div className=" w-3/6 border-solid border-[1px] border-cyan-600 p-3 flex  items-center gap-2">
				<div className=" relative">
					<div
						className=" w-fit flex justify-center items-center border-r-[1px] border-gray-300 pr-3 gap-2 cursor-pointer	"
						onClick={handelDropDown}
					>
						<p className=" iconText ">All Catergory</p>
						<img src={iconsPath.arrowDownIcon} alt="" width={15} height={15} />
					</div>
					{drowDown && (
						<div className=" absolute bg-white left-[-13px] top-[36px]  h-[180px] overflow-scroll w-[150px] drop-shadow">
							<ul className=" text-gray-500 text-[12px] flex flex-col">
								<li className=" drowDownHover">Milk and Dairies</li>
								<li className=" drowDownHover">Clothing and Beauty</li>
								<li className=" drowDownHover">Pet Food and Toys</li>
								<li className=" drowDownHover">Backing Materials</li>
								<li className=" drowDownHover">Fresh Fruit</li>
								<li className=" drowDownHover">Fresh Seafood</li>
								<li className=" drowDownHover">Fast Food</li>
								<li className=" drowDownHover">Vegitables</li>
								<li className=" drowDownHover">Bread and Juice</li>
								<li className=" drowDownHover">Wines and Alcohol</li>
							</ul>
						</div>
					)}
				</div>
				<div className=" flex-grow flex justify-between items-center">
					<input
						type="text"
						placeholder="Search for items"
						className=" w-full focus:outline-none "
					/>
					<img src={iconsPath.searchIcon} alt="" width={20} height={20} />
				</div>
			</div>
			<div className=" flex justify-center items-center gap-5">
				<div className=" flex justify-center items-center gap-1">
					<img src={iconsPath.compareIcon} alt="" width={20} height={20} />
					<p className=" iconText">Compare</p>
				</div>
				<div className=" flex justify-center items-center gap-1">
					<img src={iconsPath.heartIcon} alt="" width={20} height={20} />
					<p className=" iconText">Wishlist</p>
				</div>
				<div className=" flex justify-center items-center gap-1">
					<img src={iconsPath.cartIcon} alt="" width={20} height={20} />
					<p className=" iconText">Cart</p>
				</div>
				<div className=" flex justify-center items-center gap-1">
					<img src={iconsPath.accountIcon} alt="" width={20} height={20} />
					<p className=" iconText">Account</p>
				</div>
			</div>
		</header>
	);
}

export default Header;
