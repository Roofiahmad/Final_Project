import React from 'react';
import CategoryButton from '../components/CategoryButton';
import Newest from '../components/Newest';
import MostUrgent from '../components/MostUrgent';
import GainedMomentum from '../components/GainedMomentum';


const Discover = () => {
  return (
    <div className="">
      <CategoryButton />
      <Newest />
      <MostUrgent />
      <GainedMomentum />
    </div>
  )
}

export default Discover;