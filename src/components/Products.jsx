import React from "react";

function Productos() {
    return(
        <div>
        <h2>Otras Opciones</h2>
        <div>
            <img src="./Roscon.jpg" width={150} alt="" />
            <p>Roscon</p>
            <p>$600</p>
        </div>
        <div>
            <img src="./Lenguas.jpg" width={150} alt="" />
            <p>Lenguas</p>
            <p>$800</p>
        </div>
        <div>
            <img src="./Galletas.jpg" width={150} alt="" />
            <p>Galletas</p>
            <p>$1.000</p>
        </div>
        </div>
    )
}

export default Productos;