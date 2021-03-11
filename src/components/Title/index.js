import styled from "styled-components";

const Container = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #460080;
`

const PageTitle = styled.h1 `
    color: red;
`

const Description = styled.p`
    background-color: #f5eded;
`


const Title = ({page_title, description}) => (
    <Container>
        <PageTitle>{page_title}</PageTitle>
        <Description>{description}</Description>
    </Container>
    );

export default Title;