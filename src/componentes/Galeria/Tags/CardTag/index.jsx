import styled from "styled-components";

const Card = styled.div`
    border: solid 1px white;
    color: white;
    font-size: 14px;
    background: #b19eec;
    padding: 5px;
    border-radius: 5px;
`

const CardTag = (props) => {
    return(
        <Card>
            {props.children}
        </Card>
    )
}

export default CardTag;