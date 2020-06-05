
import React, { useState } from 'react';
import './Menu.css';
import { Redirect } from 'react-router-dom';

function Menu() {
    const [goName, setGoName] = useState(false);
    const [goProducer, setGoProducer] = useState(false);
    const [goQuality, setGoQuality] = useState(false);
    const [goComplete, setGoComplete] = useState(false);

    const goToNameSearch = () => {
        setGoName(true);
    }

    const goToProducerSearch = () => {
        setGoProducer(true);
    }

    const goToQualitySearch = () => {
        setGoQuality(true);
    }

    const goToCompleteResults = () => {
        setGoComplete(true);
    }

    return (

        <div className="container-teste">
            <div id="envolvente-menu">  {/*ORANGE Div */}

                <div className="row">
                    <div className="col-sm" id="buttons-stack">
                        <button type="button" id="name-button"
                            className="btn btn-primary btn-lg btn-block"
                            onClick={goToNameSearch}
                        >Pesquisa por Nome</button>
                        {goName ? <Redirect to="/nome" /> : null}

                        <button type="button"
                            id="prod-button"
                            className="btn btn-primary btn-lg btn-block"
                            onClick={goToProducerSearch}
                        >Pesquisa por Produtor
                        </button>
                        {goProducer ? <Redirect to="/produtor" /> : null}

                        <button type="button"
                            id="qual-button"
                            className="btn btn-primary btn-lg btn-block"
                            onClick={goToQualitySearch}
                        >Pesquisa por Qualidade
                         </button>
                        {goQuality ? <Redirect to="/qualidade" /> : null}

                        <button type="button"
                            id="all-button"
                            className="btn btn-primary btn-lg btn-block"
                            onClick={goToCompleteResults}
                        >Pesquisa completa </button>

                        {goComplete ? <Redirect to="/todos-os-resultados" /> : null}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu;



