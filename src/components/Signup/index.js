import React from 'react'
import Logo from '../../static/logo-login.png'

export const Signup = () => (
<div className="center">
    <div className="complex">
            {/* LOGO */}
            <div id="logo">
            <img src={Logo} className="app-logo" alt="Logotipo" />
            </div>
            
           {/*FORMULARIO*/}
            
    <section id="content">

               <h1 className="subheader">Registro</h1>

               <form className="mid-form">
                    <div className="form-group">
                        <label for="nombre">Nombre  </label>
                        <input id="name" type="text" name="nombre" />
                    </div>

                    <div className="form-group">
                        <label for="apellidos">Apellidos</label>
                        <input id="name" type="text" name="apellidos" />
                    </div>

                        <div className="form-group-l radibuttons">
                        <input type="radio" name="genero" value="hombre" /> Gato 
                        <input type="radio" name="genero" value="mujer" /> Gata 
                        <input type="radio" name="genero" value="otro" /> Otro
                    </div>

                    <input type="submit" value="Enviar" className="btn-success" />

               </form>           
        </section>
    </div>  
</div>
)