import styled from "styled-components";
import {useState} from "react";

const Container = styled.div`
    flex-grow: 1;
    width: ${props => props.$expandida ? "100%" : "46%"} ;    
    padding: 0;
    border: none;
`
const ImagemStyled = styled.img`
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    border: none;
`

const ContainerInfo = styled.div`
    margin: -4px auto;
    text-align: left;
    flex-grow: 1;
    background: rgba(5, 6, 67, 0.38);
    border: none;
    margin-bottom: 10px;
    color: white;
    font-size: 18px;
    padding: 15px 5px;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    flex-direction: row;
    border: none;
`
const ContainerImageInfo = styled.div`
    text-align: right;
    flex-grow: 1;
    border: none;
    img{
        padding: 10px 5px 0px 5px;
    }
`

const CardFoto = ({foto, setFotoSelecionada = false, expandida = false, aoFavoritar}) =>{

    return(
        <Container $expandida={expandida}>
            <ImagemStyled
                src={foto.path}
                alt={foto.fonte}
            />
            <ContainerInfo>
                {foto.titulo}
                <ContainerImageInfo>
                    <img
                        src= {foto.favorita ? "icones/favorito-ativo.png" : "icones/favorito.png"}
                        alt="favorito"
                        onClick={() => {
                            aoFavoritar(foto)
                        }}
                    />
                    {!expandida &&
                        <img
                            src="icones/expandir.png"
                            alt="favorito"
                            onClick={() => {
                                setFotoSelecionada(foto);
                            }}
                        />
                    }

                </ContainerImageInfo>
            </ContainerInfo>
        </Container>
    )
}

export default CardFoto;