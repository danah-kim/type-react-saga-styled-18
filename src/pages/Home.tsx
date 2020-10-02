import PageTemplate from 'components/PageTemplate';
import useTypedSelector from 'hooks/useTypedSelector';
import i18next from 'lib/i18n';
import logo from 'logo.svg';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'store';
import styled from 'styled-components';

const AppComponent = styled.div`
  text-align: center;

  @media (prefers-reduced-motion: no-preference) {
    img {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const AppHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.colors.white};
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

const AppLogoLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
`;

function Home() {
  const { name } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!name) {
      dispatch(userActions.load());
    }
  }, [dispatch, name]);

  return (
    <PageTemplate>
      <AppComponent>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <p>
            {i18next.t('hello')} {name || ''} Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <AppLogoLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </AppLogoLink>
        </AppHeader>
      </AppComponent>
    </PageTemplate>
  );
}

export default Home;
