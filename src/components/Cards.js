import React from 'react'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className='cards'>
            <h1>check Out the Destiation</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={"images/img-9.jpg"}
                            text="explore the witer fall"
                            label="Adventurwe"
                            path='/services'
                        />
                        <CardItem
                            src={"images/img-9.jpg"}
                            text="explore the witer fall"
                            label="Adventurwe"
                            path='/services'
                        />
                        <CardItem
                            src={"images/img-9.jpg"}
                            text="explore the witer fall"
                            label="Adventurwe"
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
