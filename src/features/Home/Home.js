import React from 'react';
import Background from '../../assets/jpg/china2.jpg'

const Home = (props) => {
    if (props.loginState === "home") {
        return (
            <div>
                <img className="w-100" src={Background} alt="Background" />
            </div>
        )
    }
}

export default Home;
