import styled from 'styled-components';

type FilterWrapperProps = {
  filterHighlight: number;
};

export const HighlightNewsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 1rem;

  & img {
    width: 100%;
    border-radius: 0.2rem;
    box-shadow: 0 0 10px hsla(199, 17%, 18%, 0.2);
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
  margin-bottom: 1rem;
  background-color: #FDFDFD;
  box-shadow: 0 0 10px hsla(199, 17%, 18%, 0.1);

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
