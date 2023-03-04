import { useState, useEffect, useRef, RefObject } from "react";
import { useEventListener } from "usehooks-ts";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const useHover = (elmRef) => {
	const [value, setValue] = useState(false);

	const handleMouseEnter = () => setValue(true);
	const handleMouseLeave = () => setValue(false);

	useEventListener("mouseenter", handleMouseEnter, elmRef);
	useEventListener("mouseleave", handleMouseLeave, elmRef);

	return value;
};

const TopLeft = ({ setHoverPosition, hoverPosition }) => {
	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);
	let is_active =
		hoverPosition === "top_left" || hoverPosition == null ? true : false;

	useEffect(() => {
		if (isHover) {
			setHoverPosition("top_left");
		}
	}, [isHover]);

	return (
		<div
			className={`flex flex-col relative w-[50%] h-full rounded-tl-full border-2 border-black ${
				is_active ? "bg-red-200" : "bg-white"
			}`}
			ref={hoverRef}
		>
			<div
				className={`flex flex-col w-[80%] h-[80%] absolute right-0 bottom-0 rounded-tl-full border-t-2 border-l-2 border-black ${
					is_active ? "bg-red-300" : "bg-white"
				}`}
			>
				<div
					className={`flex flex-col w-[80%] h-[80%] absolute right-0 bottom-0 rounded-tl-full border-t-2 border-l-2 border-black ${
						is_active ? "bg-red-400" : "bg-white"
					}`}
				>
					<div
						className={`flex flex-col w-[80%] h-[80%] absolute right-0 bottom-0 rounded-tl-full border-t-2 border-l-2 border-black ${
							is_active ? "bg-red-500" : "bg-white"
						}`}
					></div>
				</div>
			</div>
		</div>
	);
};

const TopRight = ({ setHoverPosition, hoverPosition }) => {
	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);

	let is_active =
		hoverPosition === "top_right" || hoverPosition == null ? true : false;

	useEffect(() => {
		if (isHover) {
			setHoverPosition("top_right");
		}
	}, [isHover]);

	return (
		<div
			className={`flex flex-col relative w-[50%] h-full rounded-tr-full border-2 border-black  ${
				is_active ? "bg-yellow-200" : "bg-white"
			}`}
			ref={hoverRef}
		>
			<div
				className={`flex flex-col w-[80%] h-[80%] absolute left-0 bottom-0 rounded-tr-full border-t-2 border-r-2 border-black ${
					is_active ? "bg-yellow-300" : "bg-white"
				}`}
			>
				<div
					className={`flex flex-col w-[80%] h-[80%] absolute left-0 bottom-0 rounded-tr-full border-t-2 border-r-2 border-black ${
						is_active ? "bg-yellow-400" : "bg-white"
					}`}
				>
					<div
						className={`flex flex-col w-[80%] h-[80%] absolute left-0 bottom-0 rounded-tr-full border-t-2 border-r-2 border-black ${
							is_active ? "bg-yellow-500" : "bg-white"
						}`}
					></div>
				</div>
			</div>
		</div>
	);
};

const BottomLeft = ({ setHoverPosition, hoverPosition }) => {
	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);

	let is_active =
		hoverPosition === "bottom_left" || hoverPosition == null ? true : false;

	useEffect(() => {
		if (isHover) {
			setHoverPosition("bottom_left");
		}
	}, [isHover]);

	return (
		<div
			className={`flex flex-col relative w-[50%] h-full rounded-bl-full border-2 border-black  ${
				is_active ? "bg-green-200" : "bg-white"
			}`}
			ref={hoverRef}
		>
			<div
				className={`flex flex-col w-[80%] h-[80%] absolute right-0 top-0 rounded-bl-full border-b-2 border-l-2 border-black ${
					is_active ? "bg-green-300" : "bg-white"
				}`}
			>
				<div
					className={`flex flex-col w-[80%] h-[80%] absolute right-0 top-0 rounded-bl-full border-b-2 border-l-2 border-black ${
						is_active ? "bg-green-400" : "bg-white"
					}`}
				>
					<div
						className={`flex flex-col w-[80%] h-[80%] absolute right-0 top-0 rounded-bl-full border-b-2 border-l-2 border-black ${
							is_active ? "bg-green-500" : "bg-white"
						}`}
					></div>
				</div>
			</div>
		</div>
	);
};

const BottomRight = ({ setHoverPosition, hoverPosition }) => {
	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);

	let is_active =
		hoverPosition === "bottom_right" || hoverPosition == null
			? true
			: false;

	useEffect(() => {
		if (isHover) {
			setHoverPosition("bottom_right");
		}
	}, [isHover]);

	return (
		<div
			className={`flex flex-col relative w-[50%] h-full rounded-br-full border-2 border-black bg-blue-200 ${
				is_active ? "bg-blue-200" : "bg-white"
			}`}
			ref={hoverRef}
		>
			<div
				className={`flex flex-col w-[80%] h-[80%] absolute left-0 top-0 rounded-br-full border-b-2 border-r-2 border-black ${
					is_active ? "bg-blue-300" : "bg-white"
				}`}
			>
				<div
					className={`flex flex-col w-[80%] h-[80%] absolute left-0 top-0 rounded-br-full border-b-2 border-r-2 border-black ${
						is_active ? "bg-blue-400" : "bg-white"
					}`}
				>
					<div
						className={`flex flex-col w-[80%] h-[80%] absolute left-0 top-0 rounded-br-full border-b-2 border-r-2 border-black ${
							is_active ? "bg-blue-500" : "bg-white"
						}`}
					></div>
				</div>
			</div>
		</div>
	);
};

const Logo = () => {
	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);
	const [hoverPosition, setHoverPosition] = useState(null);

	useEffect(() => {
		if (!isHover) {
			setHoverPosition(null);
		}
	}, [isHover]);

	return (
		<div className="logo w-[200px] h-[200px]" ref={hoverRef}>
			<div className="flex flex-row w-full h-[50%]">
				<TopLeft
					setHoverPosition={setHoverPosition}
					hoverPosition={hoverPosition}
				/>
				<TopRight
					setHoverPosition={setHoverPosition}
					hoverPosition={hoverPosition}
				/>
			</div>
			<div className="flex flex-row w-full h-[50%]">
				<BottomLeft
					setHoverPosition={setHoverPosition}
					hoverPosition={hoverPosition}
				/>
				<BottomRight
					setHoverPosition={setHoverPosition}
					hoverPosition={hoverPosition}
				/>
			</div>
		</div>
	);
};

const TopNav = () => {
	return (
		<Disclosure as="nav" className="bg-white shadow">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<img
										className="block h-8 w-auto lg:hidden"
										src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
										alt="Your Company"
									/>
									<img
										className="hidden h-8 w-auto lg:block"
										src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
										alt="Your Company"
									/>
								</div>
								<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
									{/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
									<a
										href="#"
										className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
									>
										Dashboard
									</a>
									<a
										href="#"
										className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
									>
										Team
									</a>
									<a
										href="#"
										className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
									>
										Projects
									</a>
									<a
										href="#"
										className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
									>
										Calendar
									</a>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<button
									type="button"
									className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									<span className="sr-only">
										View notifications
									</span>
									<BellIcon
										className="h-6 w-6"
										aria-hidden="true"
									/>
								</button>

								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-3">
									<div>
										<Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
											<span className="sr-only">
												Open user menu
											</span>
											<img
												className="h-8 w-8 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-200"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? "bg-gray-100"
																: "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? "bg-gray-100"
																: "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? "bg-gray-100"
																: "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Sign out
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 pt-2 pb-4">
							{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
							<Disclosure.Button
								as="a"
								href="#"
								className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
							>
								Dashboard
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
							>
								Team
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
							>
								Projects
							</Disclosure.Button>
							<Disclosure.Button
								as="a"
								href="#"
								className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
							>
								Calendar
							</Disclosure.Button>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

const Example = () => {
	return (
		<div className="flex flex-col w-full items-center">
			<div className="max-w-xl flex flex-col lg:max-w-5xl mb-20">
				<p className="text-base font-semibold leading-7 text-indigo-600">
					Deploy faster
				</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					A better workflow
				</h1>
				<p className="mt-6 text-xl leading-8 text-gray-700">
					Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
					sem. At arcu, sit dui mi, nibh dui, diam eget aliquam.
					Quisque id at vitae feugiat egestas.
				</p>
			</div>

			<div className="flex flex-col lg:flex-row max-w-7xl">
				<div className="flex flex-col items-center mb-20 lg:mb-0 lg:mr-40">
					<Logo />
				</div>

				<div className="flex flex-col max-w-7xl items-center">
					<div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
						<p>
							Faucibus commodo massa rhoncus, volutpat. Dignissim
							sed eget risus enim. Mattis mauris semper sed amet
							vitae sed turpis id. Id dolor praesent donec est.
							Odio penatibus risus viverra tellus varius sit neque
							erat velit. Faucibus commodo massa rhoncus,
							volutpat. Dignissim sed eget risus enim. Mattis
							mauris semper sed amet vitae sed turpis id.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const Background = () => {
	return (
		<div className="absolute inset-0 -z-10 overflow-hidden">
			<svg
				className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
				aria-hidden="true"
			>
				<defs>
					<pattern
						id="e813992c-7d03-4cc4-a2bd-151760b470a0"
						width={200}
						height={200}
						x="50%"
						y={-1}
						patternUnits="userSpaceOnUse"
					>
						<path d="M100 200V.5M.5 .5H200" fill="none" />
					</pattern>
				</defs>
				<svg x="50%" y={-1} className="overflow-visible fill-gray-50">
					<path
						d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
						strokeWidth={0}
					/>
				</svg>
				<rect
					width="100%"
					height="100%"
					strokeWidth={0}
					fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
				/>
			</svg>
		</div>
	);
};

export default function Index() {
	return (
		<div className="relative isolate overflow-hidden bg-white w-full h-full">
			<Background />
			<TopNav />
			<div className="flex flex-col h-full justify-center -mt-[60px]">
				<Example />
			</div>
		</div>
	);
}
