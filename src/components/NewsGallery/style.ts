import styled from 'styled-components';

export const NewsGalleryWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  /* margin: 2rem 0; */
  /* justify-content: center; */
  flex: 1;
  

  @media (max-width: 768px) {
    justify-content: center;
    align-items: stretch;
    
    & img {
      width: 100%;
    }
  }

  @media (min-width: 769px) {
    max-width: 1126px;
    justify-content: space-between;
    align-items: stretch;
  }
 
  & li {
    width: 350px;
  }
`;
