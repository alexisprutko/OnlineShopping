import React from 'react';
import '../../css/main.css';
import {Link} from 'react-router-dom';

 export class TopHeader extends React.Component{
     constructor(props){
         super(props)
     }
     render(){
        return(
            <>
                <nav>
                    <div className='cart'>
                    <Link to='/cart'><i class="fas fa-shopping-basket fa-2x"></i><span>Cart</span></Link>
                    </div>
                    <Link to='/'><div className='logo'></div></Link>
                    <ul className='navMenu'>
                        {this.props.menuItems.map(function(menuItems,key){
                            return(
                                <Link to='/productlist' key={key + "key"} ><li>{menuItems}</li></Link>                           
                            )
                        })}
                    </ul>
                </nav>
            </>
        )
     }
 }
