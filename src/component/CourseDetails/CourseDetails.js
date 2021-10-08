

import { useEffect } from 'react';
import { useState } from 'react';

import { useParams } from 'react-router';
import './CourseDetails.css'
const CourseDetails = () => {
    // find the specific selected item
    const { courseid } = useParams()
    // const [found, setFound] = useState([])
    // useEffect(() => {
    //     fetch('/data.JSON')
    //         .then(res => res.json())
    //         .then(data => setFound(data))
    // }, [])
    // // temporary store
    // let resData = {};
    // // iterat hol data
    // for (const iterator of found) {
    //     if (iterator.id === parseFloat(courseid)) {
    //         resData = iterator
    //     } else {
    //         console.log('message2')
    //     }
    // }
    // const { name, img, price, id} = resData
    return (
       <div>
           <h1>There are  Course Details</h1>
       </div>
    )
};

export default CourseDetails;