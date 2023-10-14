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
      border: 1px solid hsla(199, 17%, 18%, 0.2);
  /* animation: ${appearFromBottom} 0.7s; */
  
  & img {
    width: 100%;
    height: 201px;
    border-radius: 0.2rem;
    box-shadow: 0 0 10px hsla(199, 17%, 18%, 0.1);
    margin-bottom: 0.5rem;
  }

  & h3 {
    display: flex;
    align-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 0.7rem;
    min-height: 120px;
    color: #1E2325;
  }

`;

export const ResumeIntro = styled.p`
  min-height: 140px;
  font-size: 0.8rem;
  line-height: 1.1rem;
  margin-bottom: 0.7rem;
  color: #32373B;

`;

export const DaysParagraph = styled.p`
  font-size: 0.9rem;
  line-height: 1.1rem;
  margin-bottom: 0.7rem;
  color: #32373B;
`;

export const FavoritWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.7rem;
`;
