import Titulo from "../Titulo/index.jsx";
import Tags from "./Tags/index.jsx";
import Populares from "./Populares/index.jsx";
import styled from "styled-components";
import CardFoto from "./CardFoto/index.jsx";

const ContainerTitulo = styled.div`
    display: flex;
    flex-direction: row;
`
const ContainerMain = styled.section`
    flex-grow: 1;
`

const ContainerFotos = styled.section`
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    gap: 20px;
    border: none;
`
const Galeria = ({fotos = [], fotosPopulares = [], setFotoSelecionada, aoFavoritar}) =>{
    return(
        <>
            <Tags/>
            <ContainerTitulo>
                <ContainerMain>
                    <Titulo $alinhamento = "center" > Navegue pela galeria </Titulo>
                    <ContainerFotos>
                        {fotos.map(foto => {
                            return(
                                <CardFoto key={foto.id} foto={foto} setFotoSelecionada={setFotoSelecionada} aoFavoritar={aoFavoritar}/>
                            )
                        })}
                    </ContainerFotos>
                </ContainerMain>
                <Populares fotosPopulares={fotosPopulares}/>
            </ContainerTitulo>

        </>
    )
}

export default Galeria;