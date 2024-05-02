import styled from "styled-components";

const TituloStyled = styled.h2`
    color: #7B78E6;
    font-size: 32px;
    text-align: ${props => props.$alinhamento ? props.$alinhamento : "left"};
    
`

const Titulo = (props) => {
    return(
        <TituloStyled>
            {props.children}
        </TituloStyled>
    )
}

export default Titulo;