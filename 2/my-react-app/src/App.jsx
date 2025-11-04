import React from "react";
import Counter from "./Counter";
import "./App.css";

function App() {
  const topics = [
    { id: 1, name: "Introduction to React", detail: "Learn about React basics and components." },
    { id: 2, name: "State and Props", detail: "Understand how state and props work in React." },
    { id: 3, name: "Hooks", detail: "Explore React hooks like useState and useEffect." },
  ];

  return (
    <div className="container">
      <header className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" className="logo" />
        <h1>React Tutorial</h1>
      </header>

      <div className="content">
        <div className="topics">
          <h2>Topics</h2>
          <ul>
            {topics.map(topic => <li key={topic.id}>{topic.name}</li>)}
          </ul>
        </div>

        <div className="details">
          {topics.map(topic => (
            <div key={topic.id} className="topic-detail">
              <h3>{topic.name}</h3>
              <p>{topic.detail}</p>
              <Counter />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
