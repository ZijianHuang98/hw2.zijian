import React from 'react'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'
require ('./Navigation.css')

class Navigation extends React.Component {
    render() {
        return (
            <div className='nav'>
                <Link to='/'>
                <Button variant="contained" size ='large'className= "btn">Home</Button>
                </Link>
                <Link to='/orientation'>
                <Button variant="contained" size ='large' className= "btn">Orientation</Button>
                </Link>
                <Link to='/fishing'>
                <Button variant="contained" size ='large' className= "btn">Fishing</Button>
                </Link>
                <Link to='/traveling'>
                <Button variant="contained" size ='large' className= "btn">Traveling</Button>
                </Link>
            </div>
        )
    }
}
export default Navigation