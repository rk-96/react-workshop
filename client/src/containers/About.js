import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () =>{
    return(
        <div>
            <Header />
            <div className="container col-md-5">
            <h3>
                Greeting
            </h3>
            <p className="title text-justify mt-4 mb-4">
                this is paragraph text.
            </p>
            <h4 className="text-success">
                From Healty Cafe
            </h4>
            </div>

            <Footer company="New" email="new.com" />
        </div>
    )
}

export default About;