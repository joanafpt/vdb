import React, { useState, useEffect } from 'react';
import './CompleteSearch.css';
import functions from '../functions/functions';
import { Redirect } from 'react-router-dom';

const CompleteSearch = () => {
    const [complete, setComplete] = useState();
    const [backHome, setBackHome] = useState(false);
    const [recebi, setRecebi] = useState(false);

    useEffect(() => {
        functions.completeList(callback);
    }, []);

    const callback = (completedata) => {
        setComplete(completedata);
        setRecebi(true);
    }

    const back = () => {
        setBackHome(true);
    }

    return (
        <div className="centered">
            <div className="square">

                {recebi ?
                    <div>

                        {
                            complete.map(function (elem) {
                                return (
                                    <div className="text-results" key={elem['_id']}>

                                        <ul>
                                            <strong>{'Vinho ou Marca: '}</strong>  {elem['Vinho ou Marca']}  <br />
                                            <strong>{'Produtor: '}</strong>  {elem['Produtor']} <br />
                                            <strong>{'Qualidade: '}</strong>  {elem['Qualidade']} <br />
                                        </ul>
                                    </div>
                                )
                            })
                        }

                    </div>
                    :
                    <div id="inside-square">Por favor aguarde...</div>
                }

            </div>

            {recebi ?
                <div className="square-diff">
                    <button type="button"
                        className="btn btn-light btn-lg btn-block"
                        onClick={back}
                    > Voltar
                </button>
                </div>
                :
                null}


            {backHome ? <Redirect to="/menu" /> : null}

        </div>
    )
}
export default CompleteSearch;