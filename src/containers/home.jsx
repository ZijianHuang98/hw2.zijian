import React from "react";
require('./Home.css')
class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="left">
                    <div className="imgContainer">
                        <img src='assets/z1.png' alt='me' />
                    </div>
                </div>
                <div className="right">
                <h1>Hi!</h1>
                <h2>My name is Zijian Huang</h2>
                <h2>Welcome to my first React App</h2>
                </div>
                
            </div>
        )
    }
}
export default Home