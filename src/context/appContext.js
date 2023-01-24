import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Profile from '../routes/Profile';
import ProfileSearch from '../routes/ProfileSearch';
import Ranking from '../routes/Ranking';
import RankingSearch from '../routes/RankingSearch.js';
import { 
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

export const AppContext = createContext(null);

export function AppProvider() {
  const router = createBrowserRouter([
    {
      path: '/profilesearch',
      element: <ProfileSearch />,
    },
    {
      path: '/profile/:puuid',
      element: <Profile />,
    },

    {
      path: '/',
      element: <App />,
    },
    {
      path: '/rankingsearch',
      element: <RankingSearch />,
    },
    /* {
      path: '/ranking/:div',
      element: <Ranking />,
    }, */
  ]);

  return (
    <ChakraProvider theme={theme}>
      <AppContext.Provider value="">
        <RouterProvider router={router} />
      </AppContext.Provider>
    </ChakraProvider>
  );
}
