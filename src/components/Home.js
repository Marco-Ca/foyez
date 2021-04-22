import React, { Component } from 'react';



import Navigation from './Navigation'


class Home extends Component {

  render() {

    return (
      <>
        <Navigation />
        <div id="imgWrapper">
        <img id="homeImage" src="https://media-exp1.licdn.com/dms/image/C4E12AQHMamSOHGb-cA/article-cover_image-shrink_720_1280/0/1548048230519?e=1623888000&v=beta&t=BJW4PAtnLoSp_K_6r2_FR-yexldSipxl7SWPHxU3nag" alt="foyez" />   
        </div>

        </>   
    );
  }
}

export default Home;