import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
    return (
        <div className="App">
            <header aria-label="banner">
                <h1>React + TS Card</h1>
                <p>by Anthony Chavis</p>
                <p>for practice</p>
            </header>
            <main>
                {/* <Card /> */}
                <Card
                    name="my name"
                    bio="some good bio"
                    quote="super quote"
                    quoteAuthor="best author"
                    quoteURL="url"
                />
            </main>
        </div>
    );
}

export default App;
