import React from "react";
require('./Fishing.css')
class Fishing extends React.Component{
    render(){
        return(
            <div className="orientation">
            <div className="left1">
                <h1>My Favorite Sport</h1>
                <h1>Fishing</h1>
            </div>
            <div className="right2">
                    <img src='assets/f2.jpeg' className="fp" alt='me' />
            </div>
            
            
        </div>
        )
    }
}
export default Fishing