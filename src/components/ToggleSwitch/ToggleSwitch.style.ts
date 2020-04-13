import styled from '@emotion/styled';

export const Container = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 16px;

    > input {
        display: none;
    }
`;

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: lightgray;
    transition: 0.4s;
    border-radius: 15px;

    &:before {
        position: absolute;
        content: '';
        height: 25px;
        width: 25px;
        background-color: darkgray;
        transition: 0.2s;
        border-radius: 50%;
        top: -4.5px;
    }
`;

export const SliderInput = styled.input`
    &:checked + span {
        background-color: #0365b2;
        &:before {
            transform: translateX(25px);
            background-color: white;
        }
    }
`;
