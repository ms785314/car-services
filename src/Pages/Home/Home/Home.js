import React from 'react';
import Header from '../../Shared/Header/Header';
// import Navbarr from '../../Shared/Navbar/Navbar';

import Exparts from '../Exparts/Exparts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Exparts></Exparts>
        </div>
    );
};

export default Home;