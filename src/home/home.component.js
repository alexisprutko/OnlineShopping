import React from 'react';
import '../css/main.css';
import {Switch,Route} from  'react-router-dom';

import {TopHeader} from '../shared/top-header/top-header.component';
import {BottomFooter} from '../shared/bottom-footer/bottom-footer.component';
import {MainWrapper} from './main-wrapper/main-wrapper.component';
import {Cart} from '../cart/cart.component';
import {BrandsList} from '../brands/brands-list.component';
import {ProductDetails} from '../products/product-details.component';
import {ProductsList} from '../products/products-list.component';


let menuItems = ['Men','Women','Kids','Brands']
export class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <TopHeader menuItems = {menuItems}></TopHeader>
                     <Switch>
                        <Route exact path = '/'  component = {MainWrapper}/>
                        <Route path = '/details' component = {ProductDetails}/>
                        <Route path = '/cart' component = {Cart}/>
                        <Route path = '/brands' component = {BrandsList}/>
                        <Route path = '/productlist' component = {ProductsList}/>
                    </Switch>                  
                {/* <BottomFooter menuItems = {menuItems}></BottomFooter> */}
            </>
        )
    }
}