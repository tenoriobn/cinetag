import Cabecalho from 'components/Cabecalho'
import Container from 'components/Container'
import Rodape from 'components/Rodape'
import FavoritosProvider from 'context/Favoritos'
import Favoritos from 'pages/Favoritos'
import Inicio from 'pages/Inicio'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                    </Routes>
                </FavoritosProvider>
            </Container>

            <Rodape />   
        </BrowserRouter>
    )
}
