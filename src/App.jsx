import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais/index.jsx";
import {useState} from "react";
import HeaderComp from "./componentes/header/index.jsx";
import BarraLateral from "./componentes/BarraLateral/index.jsx";
import Banner from "./componentes/Banner/index.jsx";
import bannerBackground from "./assets/banner.png";
import Galeria from "./componentes/Galeria/index.jsx";

import Fotos from "./assets/fotos.json";
import FotosPopulares from "./assets/fotos-populares.json";
import Modal from "./componentes/Modal/index.jsx";


const FundoGradiente = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    min-height: 100vh;
    width: 100%;
`
const AppContainer = styled.div`
    width: 1440px;
    margin: 0 auto;
`
const MainContainer = styled.div`
    display: flex;
    gap: 60px;
`
const ContainerDentro = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

function App() {

    const [listaFotos, setListaFotos] = useState(Fotos);
    const [listaFotosPopulares, setListaFotosPopulares] = useState(FotosPopulares);
    const [fotoSelecionada, setFotoSelecionada] = useState(null);

    const aoFavoritar = (foto) =>{
        if(foto.id === fotoSelecionada?.id){
            setFotoSelecionada({
                ...fotoSelecionada,
                favorita: !fotoSelecionada.favorita
            })
        }
        setListaFotos(listaFotos.map(
            fotoGaleria => {
                return {
                    ...fotoGaleria,
                    favorita: fotoGaleria.id === foto.id ? !fotoGaleria.favorita : fotoGaleria.favorita
                }
            }
        ))
    }

    return (
        <>
            <FundoGradiente>
                <EstilosGlobais/>
                <AppContainer>
                    <HeaderComp/>
                    <MainContainer>
                        <BarraLateral/>
                        <ContainerDentro>
                            <Banner
                                texto="A galeria mais completa de fotos do espaço!"
                                backgroundImage={bannerBackground}
                            />
                            <Galeria
                                fotos={listaFotos}
                                fotosPopulares={listaFotosPopulares}
                                setFotoSelecionada={foto => {
                                    setFotoSelecionada(foto);
                                }}
                                aoFavoritar={aoFavoritar}/>
                        </ContainerDentro>
                    </MainContainer>
                </AppContainer>
                <Modal
                    foto={fotoSelecionada}
                    setFotoSelecionada={foto => {
                        setFotoSelecionada(foto);
                    }}
                    aoFavoritar={aoFavoritar}
                />
            </FundoGradiente>
        </>
    )
}
export default App;
