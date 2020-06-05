import React, { useState, useEffect } from 'react';
import './Dropdown.css';
import functions from '../functions/functions';
import { Redirect } from 'react-router-dom';

function Dropdown({ title, items = false }) {
    const [open, setOpen] = useState(false); //changes if dd is open /closed
    const [selection, setSelection] = useState([]); //willl hold selected items
    const toggle = () => setOpen(!open); //
    const [producers, setProducers] = useState();
    //const [arrayIsLoaded, setArrayIsLoaded] = useState(false);
    const [carregaram, setCarregaram] = useState(false);
    const [renderMsg, setRenderMsg] = useState('');
    const [initialNotSend, setInitialNotSend] = useState('Ainda não enviou pedido para nenhum produtor. Selecione na lista o Produtor pretendido.');
    const [renderApiResults, setRenderApiResults] = useState([]);
    const [backHome, setBackHome] = useState(false);
    const [recebi, setRecebi] = useState(false);

    useEffect(() => {
        functions.giveMeTheProducers(callbackProducers);
    }, []);

    const callbackProducers = (data) => {
        setProducers(data);
        setRecebi(true);
    }

    function handleOnClick(item) { // not including multiselection possibility
        setSelection([item]);
        // console.log(item['Produtor'], ' item');
        setOpen(false);
        setRenderMsg(`O Produtor selecionado é: ${item['Produtor']}. Para mais informações, clique em Enviar`)
    }

    function alguemClicouNoBotao() {
        var prodToSend;
        if (selection.length === 0) {
            // console.log('Não selecionou nada ainda');
            setRenderMsg('Por favor selecione um Produtor na lista.');
            setInitialNotSend('');
            return;
        }
        prodToSend = selection[0]['Produtor'];
        functions.searchByProducerWithDropdown(prodToSend, callback);
        //console.log(JSON.stringify(selection));
        setCarregaram(true);
        setRenderMsg('Os dados referentes à sua seleção são os seguintes:');
    }

    const callback = (data) => {
        console.log(data);
        setRenderApiResults([...data]);
    }

    const back = () => {
        setBackHome(true);
    }

    return (
        <div className="contentor-de-fora">

            {recebi ? /*dropdown only renders if already received API response*/
                <div className="dd-wrapper">
                    <div tabIndex={0}
                        className="dd-header"
                        role="button"
                        onKeyPress={() => toggle(!open)}
                        onClick={() => toggle(!open)} >
                        <div className="dd-header-title">
                            <p className="dd-header-title-bold">{title} </p>
                        </div>

                        <div className="dd-header-action">
                            <p>{open ? 'Fechar' : 'Abrir'}</p>
                        </div>
                    </div>
                    {
                        open && (
                            <ul className="dd-list">
                                {producers.map(item => (
                                    <div className="dd-list-item"
                                        key={item._id}>
                                        <button id="list-api" type="button" onClick={() => handleOnClick(item)}>
                                            <span className="category">{item['Produtor']}</span>
                                        </button>
                                    </div>
                                ))}
                            </ul>
                        )
                    }
                </div>
                :
                <div className="out">
                    <div className="please-wait-loading-data">
                        Por favor aguarde...
                </div>
                </div>

            }


            {recebi ? /*button only renders if we already have API response*/
                <div className="row">
                    <div className="button-container">
                        <button className="btn btn-default send"
                            onClick={alguemClicouNoBotao}>Enviar</button>
                        <button className="btn btn-default send"
                            onClick={back}
                        >Voltar</button>
                    </div>
                </div>
                : null
            }

            <div className="info-selected">
                {renderMsg}
            </div>

            <div>{renderApiResults ?
                <div className="flatlist">
                    {
                        renderApiResults.map(function (elem) {
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
                : null
            }</div>

            {backHome ? <Redirect to="/menu" /> : null}
        </div>
    )
}
export default Dropdown;