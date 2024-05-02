import styled from "styled-components";
import CardFoto from "../Galeria/CardFoto/index.jsx";

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogStyled = styled.dialog`
    position: absolute;
    top: 10%;
    background: transparent;
    border: none;
    width: 700px;
    
`
const FormStyled = styled.form`
    position: absolute;
    top: 30px;
    text-align: right;
    width: 95%;
`
const ButtonStyled = styled.button`
    background-color: transparent;
    border: none;
`

const Modal = ({foto, setFotoSelecionada, aoFavoritar}) => {

    const aoClickBotao = () =>{
        setFotoSelecionada(null);
    }

    return (
        <>
            {foto &&
                <Overlay>
                        <DialogStyled open={foto}>
                            <CardFoto foto={foto} expandida={true} aoFavoritar={aoFavoritar}/>
                            <FormStyled method="dialog">
                                <div>
                                    <ButtonStyled onClick={aoClickBotao}>
                                        <img
                                            src="/icones/fechar.png"
                                        />
                                    </ButtonStyled>
                                </div>
                            </FormStyled>
                        </DialogStyled>
                </Overlay>
            }
        </>
    )
}

export default Modal;