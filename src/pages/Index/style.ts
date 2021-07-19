import styled from 'styled-components';

export const Container = styled.div`
    width: 70vw;
    margin: 30px auto;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 8px #ccc;
    @media (max-width: 680px){
        width: 90vw;
    }

    span{
        margin: 10px;
    }

    .container-tags {
        display: flex;
        flex-wrap: wrap;
    }
`;
