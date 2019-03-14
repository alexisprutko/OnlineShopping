import React  from 'react';

import {SliderWrapper} from './slider-wrapper';


export  class MainWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        products: [
            {
                id: 1,
                title: 'Gifts',
                desc: 'Lorem ipsum',
                image: 'images/main_page_images/gift.png',
            },{
                id: 2,
                title: 'Classic',
                desc: 'Lorem ipsum',
                image: 'images/main_page_images/classic.png',
            },{
                id: 3,
                title: 'Colourful',
                desc: 'Lorem ipsum',
                image: 'images/main_page_images/colourful.png',
            }
        ]
    }
} 
  render() {
    return (
      <>
      <section className='mainWrapperContainer'>
        <SliderWrapper data={this.state.products}></SliderWrapper>
        <div>Im MainWrapper</div>
      </section>

      </>
    )
  }
}
