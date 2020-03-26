import styled from 'styled-components';
import palette from '../constants/palette';

const BREAK_POINT = '700px';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    width: 100%;
    height: 60px;
    background-color: ${palette.primary};
    @media (min-width: ${BREAK_POINT}) {
        height: 80px;
        padding: 0 32px;
    }
`;
