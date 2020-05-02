import React from 'react'
import { Routers } from './components/Routers'
import { MsgContext } from './contexts/MsgContext'
import { MsiContext } from './contexts/MsiContext'

export const App = () => (

<React.Fragment>
        <MsgContext.Provider value={ 'Hola a todos!!' }>
            <Routers />
        </MsgContext.Provider>

        <MsiContext.Provider value={ 'Hola ABOUT' }>

        </MsiContext.Provider>

</React.Fragment>
 
)