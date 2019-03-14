import React from 'react';
import '../../css/main.css';
import {Link} from 'react-router-dom';
export class BottomFooter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <footer>
                <ul>
                    <li>SHOP</li>
                    {this.props.menuItems.map(function(menuItems,key){
                        return(
                        <Link to='/productlist'><li key={key + "key"}>{menuItems}</li></Link>
                        )
                    })}
                </ul>
                <div className='newsletter'>
                    <h5>NEWSLETTER</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <input type='text' placeholder='Your e-mail'></input>
                    <button>OK</button>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> 
                </div>
                <div>
                    <ul className='socialIcon'>
                        <li><a href='https://www.facebook.com/' target='_blank'><i class="fab fa-facebook-f fa-lg"></i></a></li>  
                        <li><a href='https://www.youtube.com/'  target='_blank'><i class="fab fa-youtube fa-lg"></i></a></li> 
                        <li><a href='https://twitter.com/'  target='_blank'><i class="fab fa-twitter fa-lg"></i></a></li> 
                        <li><a href='https://www.instagram.com/'  target='_blank'><i class="fab fa-instagram fa-lg"></i></a></li>                 
                    </ul>
                </div>
            </footer>

            </>
            
        )
    }
}