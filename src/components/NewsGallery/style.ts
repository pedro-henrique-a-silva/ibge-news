import styled from 'styled-components';

export const NewsGalleryWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  /* margin: 2rem 0; */
  /* justify-content: center; */
  /* flex: 1; */
  
  & li {
    width: 270px;
  }

  @media (max-width: 768px) {
    align-items: stretch;
    justify-content: center;
    
    & img {
      width: 100%;
    }
    
    & li {
      width: 90%;
    }
  }

  @media (min-width: 769px) {
    max-width: 1126px;
    justify-content: center;
    align-items: stretch;
  }
 
  
`;
