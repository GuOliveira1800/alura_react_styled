import tags from "./tags.json";
import CardTag from "./CardTag/index.jsx";
import styled from "styled-components";

const ContainerTag = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
    align-items: center;
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 40px;
`
const TituloStyled = styled.section`
    color: white;
    font-size: 20px;
    
`

const Tags = () => {
    return(
        <Container>
            <TituloStyled>
                Busque por tags:
            </TituloStyled>
            <ContainerTag>
                {tags.map(tag => {
                    return (
                        <CardTag key={tag.id} >{tag.titulo}</CardTag>
                    )
                })}
            </ContainerTag>
        </Container>
    )
}

export default Tags;