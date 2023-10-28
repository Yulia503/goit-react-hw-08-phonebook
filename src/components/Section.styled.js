import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-top: 25px;
  padding-bottom: 80px;
`;

export const StyledLoginSection = styled(StyledSection)`
  background-color: none
`;

export const StyledContactsSection = styled(StyledLoginSection)``;

export const SectionTitle = styled.h1`
  font-size: 72px;
  text-align: center;
  color: #800000;
  margin-bottom: 40px;
`;

export const SectionSecondTitle = styled.h2`
  font-size: 42px;
  text-align: center;
  text-transform: uppercase;
  color: black;
  font-weight: 800;
  margin-bottom: 40px;
`;

export const LoginTitle = styled(SectionSecondTitle)`
  margin-bottom: 80px;
`;

export const SectionText = styled.p`
  font-size: 28px;
  text-align: center;
  color: black;
`;
