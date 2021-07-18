import styled from 'styled-components';

export const Container = styled.div`
    max-width: 50vw;
    margin: 0 auto; 
    height: 70vh;
    border-radius: 5px;
    border: solid 1px #ccc;
    padding: 20px;
    box-shadow: 0 10 0 #ccc;

    .container-tags {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px
    }
`;
