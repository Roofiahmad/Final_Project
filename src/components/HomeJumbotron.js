import React, {useState} from 'react';
import JumbotronContent from './JumbotronContent';
import jumbo1 from '../assets/bg-jumbo.png';
import JumbotronImage from './JumbotronImage';
import Glide from '@glidejs/glide';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function HomeJumbotron() {
    const [setItem, Item] = useState();
    return (
        <div>
            <Carousel autoPlay>
            <div className="flex bg-jumbotron h-1/2 lg:h-screen z-0">
                    <JumbotronContent/> 
            </div>
            <div className="flex bg-jumbotron2 h-1/2 lg:h-screen z-0">
                    <JumbotronContent/> 
            </div>
            <div className="flex bg-jumbotron3 h-1/2 lg:h-screen z-0">
                    <JumbotronContent/> 
            </div>
            </Carousel>
        </div>
    )
}

export default HomeJumbotron;
