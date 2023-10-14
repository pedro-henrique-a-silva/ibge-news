import styled from 'styled-components';

export const NewsGalleryWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  /* margin: 2rem 0; */
  /* justify-content: center; */
  flex: 1;
  justify-content: space-between;
  align-items: stretch;

  /* @media (max-width: 768px) {
    flex-direction: column;
    
    & img {
      width: 100%;
    }
  } */

  @media (min-width: 769px) {
    max-width: 1126px;
    align-items: center;
  }
 
  & li {
    width: 350px;
  }
`;
