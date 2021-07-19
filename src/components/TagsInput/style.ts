import styled from 'styled-components';

export const Container = styled.div`

    .tagInput {
        &> div{
            flex-wrap: wrap;
            padding: 10px;
            gap: 5px;
            input{
                flex: 1;
                padding: 5px;
            }
        }
    }

    button{
        background-color: #106fdc;
        border-radius: 5px;
        color: #ffffff;
        transition: .5s ease-in-out;
        padding: 10px 60px;
        width: 100%;
        margin: 30px 0;

        &:hover{
            background-color: #00499c;
        }
    }
`;
