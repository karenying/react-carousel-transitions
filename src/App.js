import React from 'react';
import './App.css';
import CarouselSlide from './CarouselSlide';
import { SLIDE_INFO } from './constants';

function App() {
    const content = SLIDE_INFO[3];

    return (
        <div className='App'>
            <CarouselSlide content={content} />
        </div>
    );
}

export default App;
