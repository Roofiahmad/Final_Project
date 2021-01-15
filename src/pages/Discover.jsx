import React from 'react'
import CategoryButton from "../components/CategoryButton";
import Newest from "../components/Newest";
import MostUrgent from "../components/MostUrgent";
import GainedMomentum from "../components/GainedMomentum";


export default function Discover() {
    return (
        <div>
            <CategoryButton/>
            <Newest />
            <MostUrgent />
            <GainedMomentum />
        </div>
    )
}
