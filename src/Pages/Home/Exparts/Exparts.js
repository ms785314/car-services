import React from 'react';
import { Row } from 'react-bootstrap';
import ex1 from '../../../images/experts/expert-1.jpg'
import ex2 from '../../../images/experts/expert-2.jpg'
import ex3 from '../../../images/experts/expert-3.jpg'
import ex4 from '../../../images/experts/expert-4.jpg'
import ex5 from '../../../images/experts/expert-5.jpg'
import ex6 from '../../../images/experts/expert-6.png'
import Expart from '../Expart/Expart';

const Exparts = () => {
    const exparts =[
        {id:1, name:'smith', img:ex1},
        {id:2, name:'smith', img:ex2},
        {id:3, name:'smith', img:ex3},
        {id:4, name:'smith', img:ex4},
        {id:5, name:'smith', img:ex5},
        
        {id:6, name:'smith', img:ex6}
    ]
    return (
        <div className='container'>
            <h1 className='my-5'>hello from exparts</h1>
            <Row xs={1} md={3} className="g-4 align-items-center">
            {
               exparts.map(expart => <Expart key={expart.id} expart={expart}></Expart>) 
            }
            </Row>
        </div>
    );
};

export default Exparts;