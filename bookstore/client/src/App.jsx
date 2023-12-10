// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBook from "./pages/CreateBook.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import Home from "./pages/Home.jsx";
import ShowBook from "./pages/ShowBook.jsx";
import EditBook from "./pages/EditBook.jsx";

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/books/create' element={<CreateBook />} />
			<Route path='/books/edit/:id' element={<EditBook />} />
			<Route path='/books/delete/:id' element={<DeleteBook />} />
			<Route path='/books/details/:id' element={<ShowBook />} />
		</Routes>
	);
};

export default App;
