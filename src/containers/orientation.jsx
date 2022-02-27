import React from "react";
require('./Orientation.css')
class Orientation extends React.Component{
    render(){
        return(
            <div className="orientation">
                <div className="left1">
                    <h1>Golbal Orientation 2022</h1>
                </div>
                <div className="right1">
                        <img src='assets/o1.jpg' alt='me' className="op"/>
                        <img src="assets/o2.jpg" className="op" alt="" />
                </div>
                
                
            </div>
        )
    }
}
export default Orientation