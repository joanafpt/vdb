import React, { useEffect, useState } from 'react';
import { CSSTransition } from "react-transition-group";
import './Init.css';
import { Redirect } from 'react-router-dom';


function Init() {
    const [repo, setRepo] = useState(false);
    const [wines, setWines] = useState(false);
    const [veg, setVeg] = useState(false);
    const [welcome, setWelcome] = useState(false);
    const [showRedirectButton, setShowRedirectButton] = useState(false);
    const [enterTheSite, setEnterTheSite] = useState(false);

    useEffect(() => {
        setTimeout(() => { setRepo(true) }, 500);
        setTimeout(() => { setWines(true) }, 1000);
        setTimeout(() => { setVeg(true) }, 1500);
        setTimeout(() => { setWelcome(true) }, 2000);
        setTimeout(() => { setShowRedirectButton(true) }, 3000);
        setTimeout(() => { setEnterTheSite(true) }, 4000)

    }, []);


    const go = () => {
        setEnterTheSite(true);
    }


    return (
        <div className="container vertical-center">
            <div className="col-md">
                <div className="envolvente">
                    <CSSTransition in={repo} appear={true} timeout={500} classNames="fade">
                        <div className="text-to-render">
                            {repo ? <div className="transition-text">Repositório </div>
                                :
                                null}
                        </div>
                    </CSSTransition>

                    <CSSTransition in={wines} appear={true} timeout={500} classNames="fade">
                        <div className="text-to-render">
                            {wines ? <div className="transition-text">de vinhos </div>
                                :
                                null}</div>
                    </CSSTransition>

                    <CSSTransition in={veg} appear={true} timeout={500} classNames="fade">
                        <div className="text-to-render">  {veg ? <div className="transition-text"> Vegan </div> : null}</div>
                    </CSSTransition>

                    <CSSTransition in={welcome} appear={true} timeout={500} classNames="fade">
                        <div className="#wilkommen">  {welcome ? <div className="transition-text"> Seja bem-vindo/a!  </div>
                            :
                            null}
                        </div>
                    </CSSTransition>

                    <CSSTransition in={showRedirectButton} appear={true} timeout={1000} classNames="fade">
                        <div className="#show-me-the-button">
                            {showRedirectButton ?
                                <div id="redirect-not-aut">
                                    <button className="btn btn-default enter"
                                        onClick={go}

                                    >Entrar</button>
                                    <div id="text-redir">
                                        Se não for diretamente redirecionado, clique aqui
                                </div>
                                </div>
                                :
                                null}
                        </div>
                    </CSSTransition>
                    {enterTheSite ? <Redirect to="/menu" /> : null}

                </div>
            </div>
        </div>
    )
}
export default Init;