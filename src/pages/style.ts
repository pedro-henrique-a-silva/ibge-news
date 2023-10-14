import styled, { keyframes } from 'styled-components';

type FilterWrapperProps = {
  filterHighlight: number;
};

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

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  /* margin: 1rem 0; */

   /* @media (max-width: 768px) {
    flex-direction: column;
  } */

  @media (min-width: 769px) {
    align-items: center;
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
  }

  @media (min-width: 769px) {
    flex-direction: row;
    max-width: 1126px;

    & img {
      width: 50vw;
      max-width: 550px;
    }
  }
 

  & h3 {
    font-size: 1.5rem;
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

export const FilterWrapper = styled.section<FilterWrapperProps>`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  /* margin-bottom: 1rem; */
  background-color: #FDFDFD;
  box-shadow: 0 0 10px hsla(199, 17%, 18%, 0.1);

  @media (min-width: 769px) {
    max-width: 1126px;
    width: 100%;

  }

  & button {
    padding: 0.7rem 0;
    border: none;
    color: #1E2325;
    font-size: 0.9rem;
    font-weight: 700;
    background-color: transparent;
    cursor: pointer;
  }

  & button:nth-of-type(${(props) => (props.filterHighlight)}) {
    border-bottom: 2px solid #0095DA;
  }
`;
