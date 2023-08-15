import Banner from 'components/Banner'
import Cabecalho from 'components/Cabecalho'
import Card from 'components/Card'
import Rodape from 'components/Rodape'
import Titulo from 'components/Titulo'
import React from 'react'

export default function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>

            <Card id='1' titulo='Gato bonifácio' capa='https://thecatapi.com/api/images/get?format-src&type=png' />
            <Rodape />
        </>
    )
}
