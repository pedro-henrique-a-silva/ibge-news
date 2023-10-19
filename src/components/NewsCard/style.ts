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
  padding: 1rem 1rem 0.5rem 1rem ;
  border-radius: 0.2rem;
  box-shadow: 0 0 10px hsla(199, 17%, 18%, 0.1);
  border: 1px solid hsla(199, 17%, 18%, 0.2);
  animation: ${appearFromBottom} 0.7s;
  
  & img {
    width: 100%;
    height: 150px;
    border-radius: 0.2rem;
    box-shadow: 0 0 10px hsla(199, 17%, 18%, 0.1);
    margin-bottom: 0.5rem;
  }

  & h3 {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 500;
    min-height: 120px;
    color: #1E2325;
    line-height: 1.1;
  }

`;

export const ResumeIntro = styled.p`
  min-height: 150px;
  font-size: 0.7rem;
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
  border-top: 1px solid rgba(38, 49, 54, 0.1);
  padding-top: 10px;

  & svg {
    cursor: pointer;
  }
`;
