import styled from 'styled-components';


export const HighlightNewsWrapper = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;

  & img {
    width: 100%;
    border-radius: 0.2rem;
    box-shadow: 0 0 10px hsla(199, 17%, 18%, 0.1);
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

  & a {
    padding: 0.5rem;
    text-decoration: none;
    border-radius: 0.2rem;
    background-color: #0095DA;
    color: #263136;
    font-size: 0.9rem;
    font-weight: 500;
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
 
`