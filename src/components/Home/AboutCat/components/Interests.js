import React from 'react'
import { InterestOne } from './InterestOne'
import { INTERESES } from '../../../../data/db'

export const Interest = () => {

    return (
        <div className="interest-container">
            <h3> Lista de Intereses </h3>
            <hr />
            <div className="interests-box">
                {
                    INTERESES.map( (item, key) => <InterestOne key={ key } name={ item.name } status={ item.status } /> )
                }
            </div>
        </div>
    )
}