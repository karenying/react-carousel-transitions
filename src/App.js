import React from 'react';
import './App.css';
import CarouselSlide from './CarouselSlide';

function App() {
    return (
        <div className='App'>
            <CarouselSlide
                content={{ backgroundColor: '#ff7c7c', title: 'Slide 1' }}
            />
        </div>
    );
}

export default App;
