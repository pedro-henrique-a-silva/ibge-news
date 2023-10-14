import styled, { keyframes } from 'styled-components';

const appearFromBottom = keyframes`
  from {
    transform: translateY(60%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const NewsCardStyled = styled.li`
  background-color: #FDFDFD;
  padding: 1rem;
  border-radius: 0.2rem;
  box-shadow: 0 0 10px hsla(199, 17%, 18%, 0.1);
  /* animation: ${appearFromBottom} 0.7s; */
  
  & img {
    width: 100%;
    border-radius: 0.2rem;
    box-shadow: 0 0 10px hsla(199, 17%, 18%, 0.1);
    margin-bottom: 0.5rem;
  }

  & h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 0.7rem;
    color: #1E2325;
  }

  & p {
    font-size: 0.9rem;
    line-height: 1.1rem;
    margin-bottom: 0.7rem;
    color: #32373B;
  }

`;

export const FavoritWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;