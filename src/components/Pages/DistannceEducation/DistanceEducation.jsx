import React from 'react'
import Navbar from '../../../Navbar';
import { useParams, Link } from 'react-router-dom';


const DistanceEducation = () => {
    const { collegeName } = useParams();

    return (
        <div>
            <div className="distance_education">
                <Navbar />

                <h5>{collegeName}</h5>
            </div>
        </div>
    )
}

export default DistanceEducation
