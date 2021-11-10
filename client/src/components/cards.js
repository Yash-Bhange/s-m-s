import React from 'react'
import CardItem from './cardItem.js'
import '../component_css/cards.css'
import allocation from '../static/allocation.jpg'
import subsidy from '../static/subsidy.jpg'
import pay from '../static/pay.jpeg'
import automation from '../static/automation.jpg'
import digi_safety from '../static/digital-safety.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1 >Subsidiary Management System <br></br><small>Using Blockchain</small></h1>
            <div className='cards__container'>
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                        <CardItem
                        src={allocation}
                        text='Allocation of Commodities using Blockchain !'
                        label='Convenient'
                        path='/'
                        />
                        <CardItem
                        src={subsidy}
                        text='Get subsidy from government !'
                        label='Subsidy'
                        path='./'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src={pay}
                        text='Pay digitally at store !'
                        label='Payment'
                        path='/'
                        />
                        <CardItem
                        src={digi_safety}
                        text='Keep your data in a safe place !'
                        label='Safety!!'
                        path='/'
                        />
                        <CardItem
                        src={automation}
                        text='automatic change of category as per criteria!'
                        label='Smart Contract !'
                        path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
