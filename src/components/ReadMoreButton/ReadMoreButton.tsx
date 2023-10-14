import React, { AnchorHTMLAttributes } from 'react';
import { ReadMoreButtonStyled } from './styles';

type ReadMoreButtonProps = {
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

// LinkHTMLAttributes<HTMLLinkElement>;
// type InputProps = {
//   label: string,
// } & InputHTMLAttributes<HTMLInputElement>;

function ReadMoreButton(props: ReadMoreButtonProps) {
  const { children, href } = props;

  return (
    <ReadMoreButtonStyled
      href={ href }
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </ReadMoreButtonStyled>
  );
}

export default ReadMoreButton;
