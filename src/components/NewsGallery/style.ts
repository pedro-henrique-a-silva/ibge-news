import styled from 'styled-components';

export const NewsGalleryWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 1rem;
 
  & li {
    width: 100%;
  }
`;

export const NewsCard = styled.li`
  background-color: #FDFDFD;
  list-style: none;
  padding: 1rem;
  border-radius: 0.2rem;
  box-shadow: 0 0 10px hsla(199, 17%, 18%, 0.1);
  
  & img {
    width: 100%;
    border-radius: 0.2rem;
    box-shadow: 0 0 10px hsla(199, 17%, 18%, 0.1);
    margin-bottom: 0.5rem;
  }

  & h3 {
    font-size: 1.2rem;
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
