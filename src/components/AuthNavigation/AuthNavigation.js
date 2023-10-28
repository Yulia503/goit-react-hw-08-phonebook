import { AuthNavWrap, StyledNavLink } from './AuthNavigation.styled';

//права панель навігації, реєстрація + вхід

export const AuthNavigation = () => {
  return (
    <AuthNavWrap>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </AuthNavWrap>
  );
};
