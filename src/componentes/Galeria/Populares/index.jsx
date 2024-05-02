import Titulo from "../../Titulo/index.jsx";
import styled from "styled-components";

const Container = styled.div`
    padding: 15px;
`
const ContainerImagem = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    gap: 10px;
`
const ImagemStyled = styled.img`
    width: 100%;
    border-radius: 5px;
`

const Populares = ({fotosPopulares}) => {
    return(
        <Container>
            <Titulo $alinhamento = "center" >
                populares
            </Titulo>
            <ContainerImagem>
                {fotosPopulares.map(foto =>{
                    return(
                        <ImagemStyled
                            src={foto.path}
                            alt={foto.alt}
                            key={foto.id}
                        >
                        </ImagemStyled>
                    )
                })}
            </ContainerImagem>
        </Container>
    )
}

export default Populares;