import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>hgdlscglgsdilcug</h1>
            <div className='cards__container'>
              <div className='cards__wrapper'>
                 <ul className='cards__items'>
                   <CardItem 
                   src='images/img-9.jpg'
                   text='Explore the hidden waterfall depp inside the Amazon'
                   label='Adventure'
                   path='/servicos' 
                   />
                   <CardItem 
                   src='images/img-2.jpg'
                   text='Explore the hidden waterfall depp inside the Amazon'
                   label='Adventure'
                   path='/servicos' 
                   />
                   
                 </ul>
                 <ul className='cards__items'>
                   <CardItem 
                   src='images/img-4.jpg'
                   text='Explore the hidden waterfall depp inside the Amazon'
                   label='Adventure'
                   path='/servicos' 
                   />
                   <CardItem 
                   src='images/img-5.jpg'
                   text='Explore the hidden waterfall depp inside the Amazon'
                   label='Adventure'
                   path='/servicos' 
                   />
                   <CardItem 
                   src='images/img-6.jpg'
                   text='Explore the hidden waterfall depp inside the Amazon'
                   label='Adventure'
                   path='/servicos' 
                   />
                   
                 </ul>
                </div>  
            </div>
        </div>
    )
}

export default Cards
