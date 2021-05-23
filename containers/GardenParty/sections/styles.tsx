import styled from 'styled-components';
import { rem } from 'polished';
import ExternalLink from '../../../components/ExternalLink';

export const HeroTitle = styled.span`
  display: flex;
  align-items: center;

  img {
    width: ${rem('64px')};
    margin: ${rem('8px')};
  }
`;

export const AddressGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr ${rem('400px')};
  column-gap: ${rem('40px')};

  img {
    width: 100%;
    border-radius: ${rem('8px')};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.m}) {
    grid-template-columns: 1fr ${rem('240px')};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.s}) {
    grid-template-columns: 1fr;
    row-gap: ${rem('40px')};
  }
`;

export const AddressContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  svg {
    width: ${rem('24px')};
  }
`;

export const AddressLink = styled(ExternalLink)`
  display: block;
  margin-top: ${rem('16px')};

  b {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: ${rem('8px')};
  }
`;

export const Form = styled.form``;
