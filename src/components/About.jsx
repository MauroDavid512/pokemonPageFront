import React from "react"
import { Link } from "react-router-dom"



export const Autor = () => {
    return (
        <div class="superconteiner">
        <div class="contenedor">
            <div class="titulo">
            <h1>Hola!</h1>
            <br />
            <div class="superconteiner">
            <img className="image3" src="https://res.cloudinary.com/maurodavid/image/upload/v1665554699/Redes%20personales/Sin_t%C3%ADtulo-1_rtmwbi.png" alt="" />
            </div>
            <h3>Soy Mauro David</h3>
            <h3>Soy Desarrollador Web FullStack</h3>
            <h3>Esta página fue realizada utilizando las tecnologías:</h3>
            
                <h3>React</h3>
                <h3>Redux</h3>
                <h3>Express</h3>
                <h3>PostgreSQL</h3>
                <h3>Javascript</h3>
                <h3>HTML</h3>
                <h3>CSS</h3>

            <h3>Si deseás ver el codigo te dejo el link al repositorio aquí: <a href="https://github.com/MauroDavid512/pokemonPage">Repositorio</a></h3>

            <h3> Si tenés cualquier consulta te invito a contactarme! </h3>

            <h3><a href="https://www.linkedin.com/in/mauro-david-89432b193/">LinkedIn</a></h3>

            <h3><a href="https://github.com/MauroDavid512">GitHub</a></h3>



            <Link to="/home"><button className="btn">Volver</button></Link>
            </div>
        </div>
        </div>
    )
}