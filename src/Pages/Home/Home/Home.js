import React from 'react';
import Exparts from '../Exparts/Exparts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h1>Welcome home</h1>
            <Services></Services>
            <Exparts></Exparts>
        </div>
    );
};

export default Home;