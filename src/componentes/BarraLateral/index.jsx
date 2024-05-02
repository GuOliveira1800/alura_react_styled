import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao/index.jsx";

const ListaStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
    a{
        text-decoration: none;
    }
`

const BarraLateral = ()=>{
    return(
            <aside>
                <nav>
                    <ListaStyled>
                        <ItemNavegacao
                            iconeAtivo="/icones/home-ativo.png"
                            iconeInativo="/icones/home-inativo.png"
                            ativo
                        >
                            Inicio
                        </ItemNavegacao>

                        <ItemNavegacao
                            iconeAtivo="/icones/mais-vistas-ativo.png"
                            iconeInativo="/icones/mais-vistas-inativo.png"
                        >
                            Mais Vistas
                        </ItemNavegacao>

                        <ItemNavegacao
                            iconeAtivo="/icones/mais-curtidas-ativo.png"
                            iconeInativo="/icones/mais-curtidas-inativo.png"
                        >
                            Mais Curtidas
                        </ItemNavegacao>

                        <ItemNavegacao
                            iconeAtivo="/icones/novas-ativo.png"
                            iconeInativo="/icones/novas-inativo.png"
                        >
                            Novas
                        </ItemNavegacao>

                        <ItemNavegacao
                            iconeAtiva="/icones/surpreenda-me-ativo.png"
                            iconeInativo="/icones/surpreenda-me-inativo.png"
                        >
                            Surpreenda-se
                        </ItemNavegacao>
                    </ListaStyled>
                </nav>
            </aside>
    )
}

export default BarraLateral;