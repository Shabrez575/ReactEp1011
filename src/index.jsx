import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// Normal Import of Grocery Component
// import Grocery from "./components/Grocery";
import App from "./App";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { useContext } from "react";

// Chunking
// Code Splitting
// Dynamically Budling
// Lazy loading
// On Demand Loading

// Lazy Loading of Grocery Component.
const Grocery = lazy(() => import("./components/Grocery"));

// App - component composition happened here
const AppLayout = () => {
	const [UserName, setUserName] = useState();
	useEffect(() => {
		const data = {
			name: "Md.Shabrez",
		};
		setUserName(data.name);
	}, []);

	return (
		<div className="app">
			{/* <UserContext.Provider value={{ loggedInUser: "Md.Sameer" }}> */}
			<UserContext.Provider value={{ loggedInUser: UserName, setUserName }}>
				<Header />
				<Outlet />
			</UserContext.Provider>
			{/* </UserContext.Provider> */}
			{/* <Body /> */}
		</div>
	);
};

// Routing
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/grocery",
				// With Normal way to do
				// element: <Grocery />,
				// With Lazy loading we have to use suspense component.
				element: (
					<Suspense>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/restaurants/:resId",
				element: <RestaurantMenu />,
			},
		],
		errorElement: <Error />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={appRouter} />
	</React.StrictMode>,
);
