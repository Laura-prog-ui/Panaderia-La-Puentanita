import React from "react";

function Card() {
    return (
        <div>
            <div className="card" style={{ width: '8.50rem' }}>
                <img className="tarjet" src="./Hojaldrado.png" width={150} alt="" />
                <h5>Pan Hojaldrado</h5>
                <h5>$400</h5>
                <button type="onclick">Añade al carrito</button>
            </div>
            <br></br>
            <div className="card" style={{ width: '8.50rem' }}>
                <img className="tarjet" src="./Rollo.jpg" width={150} alt="" />
                <h5>Pan Rollo</h5>
                <h5>$400</h5>
                <button type="onclick">Añade al carrito</button>
            </div>
            <br></br>
            <div className="card" style={{ width: '8.50rem' }}>
                <img className="tarjet" src="./Queso.jpg" width={150} alt="" />
                <h5>Pan Queso</h5>
                <h5>$400</h5>
                <button type="onclick">Añade al carrito</button>
            </div>
            <br></br>
            <div className="card" style={{ width: '8.50rem' }}>
                <img className="tarjet" src="./mogolla-negra.jpg" width={150} alt="" />
                <h5>Mogolla</h5>
                <h5>$400</h5>
                <button type="onclick">Añade al carrito</button>
            </div>
            <br></br>
            <div className="card" style={{ width: '8.50rem' }}>
                <img className="tarjet" src="./Queso.jpg" width={150} alt="" />
                <h5>Pan Queso</h5>
                <h5>$400</h5>
                <button type="onclick">Añade al carrito</button>
            </div>
        </div>
    );
}

export default Card;