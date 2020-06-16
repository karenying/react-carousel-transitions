import React, { useState } from 'react';
import './App.css';
import CarouselSlide from './CarouselSlide';
import { SLIDE_INFO } from './constants';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

    return <div onClick={clickFunction}>{icon}</div>;
}

function App() {
    const [index, setIndex] = useState(0);
    const content = SLIDE_INFO[index];
    const numSlides = SLIDE_INFO.length;

    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        let newIndex = (index + increment + numSlides) % numSlides;
        setIndex(newIndex);
    };

    return (
        <div className='App'>
            <Arrow
                direction='left'
                clickFunction={() => onArrowClick('left')}
            />
            <CarouselSlide content={content} />
            <Arrow
                direction='right'
                clickFunction={() => onArrowClick('right')}
            />
        </div>
    );
}

export default App;
