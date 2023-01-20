import React from "react";

function Navigation() {
    return(
        <div className="container">
            <img className="logo" src="./Logo.png" alt="" />
            <h1 className="titulo">La Puentanita</h1>
            <nav>
                <div className="menu">
                    <a href="#"></a>
                    <div>
                        <ul>
                            <li>
                                <a aria-current="page" href="#">¿Quienes Somos?</a>
                            </li>
                            <li>
                                <a href="#">Productos</a>
                            </li>
                            <li>
                                <a href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;