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

export const HighlightNewsWrapper = styled.section`
  display: flex;
  gap: 2rem;
  margin: 0 1rem;
  animation: ${appearFromBottom} 0.7s;

  & img {
    border-radius: 0.2rem;
    box-shadow: 0 0 10px hsla(199, 17%, 18%, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    
    & img {
      width: 100%;
    }

    & h3 {
      font-size: 1.5rem;
    }

    & p {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;
    max-width: 1126px;

    & img {
      width: 50vw;
      max-width: 550px;
    }

    & h3 {
      font-size: 2rem;
    }

    & p {
      font-size: 0.8rem;
    }
  }
 

  & h3 {
    font-weight: 500;
    margin-bottom: 0.7rem;
    color: #1E2325;
  }

  & p {
    line-height: 1.1rem;
    margin-bottom: 0.7rem;
    color: #32373B;
  }

`;

export const ReadMoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  width: 100%;
`;
