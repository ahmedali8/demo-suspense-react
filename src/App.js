import React, { Suspense, SuspenseList } from 'react';
import PendingTodos from './components/PendingTodos';
import CompletedTodos from './components/CompletedTodos';
import './App.css';

function App() {
	return (
		<div className="app">
			<h1>Here are your todos for today</h1>
			<p>Click on any todo to view more details about it</p>

			<h3>Pending Todos</h3>
			<Suspense fallback={<h1>Loading Pending Todos... </h1>} >
				<PendingTodos />
				</Suspense>

			<h3>Completed Todos</h3>
			<Suspense fallback={<h1>Loading Completed Todos... </h1>} >
				<CompletedTodos />
			</Suspense>
		</div>
	);
}

export default App;
