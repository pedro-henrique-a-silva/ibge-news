import styled from 'styled-components';

export const MoreNewsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  & button {
    background: transparent;
    color: #263136;
    padding: 0.5rem 1.2rem;
    margin: 1rem 0;
    border: 1px solid #263136;
    cursor: pointer;
    transition: all 0.5s ease;
  }

  & button:hover {
    transform: scale(1.1);
    background: #263136;
    color: #fff;
  }
`;
