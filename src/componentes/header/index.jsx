import styled from "styled-components";
import CampoTexto from "../CampoText/index.jsx";

const HeaderStyled = styled.header`
    padding:  60px 0;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 211px;
    }
`

const HeaderComp = () =>{
    return(
        <HeaderStyled>
            <img
                src="/imagens/logo.png"
                alt="imagem"
            />
            <CampoTexto/>
        </HeaderStyled>
    );
}

export default HeaderComp;