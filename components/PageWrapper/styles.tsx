import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      #0e0f11,
      ${(props) => props.theme.colors.darkBlue}
    );
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: 930px;
  margin: 0 auto;
  padding: 0 40px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 0 8px;
  }
`;
