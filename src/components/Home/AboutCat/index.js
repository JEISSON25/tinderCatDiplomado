import React, { useContext } from 'react'
import { Interest } from './components/Interests'
import { MsiContext } from '../../../contexts/MsiContext'
import { AboutContext } from '../../../contexts/AboutContext'


const showAboutPanel = {
    display: 'block'
}

const hideAboutPanel = {
    display: 'none'
}

export const AboutCat = () => {

    const mensaje = useContext(MsiContext)

    const { aboutPanel } = useContext(AboutContext)

      return (
        <div className="about-cat" style={ aboutPanel ? showAboutPanel: hideAboutPanel }>
            Acerca del Gato
            <br /><br />
            { mensaje }
            <Interest />
        </div>
    )
}