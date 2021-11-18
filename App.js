import React from 'react';

// import provider
import { NativeBaseProvider, extendTheme, Box, Text } from 'native-base';

import AppLoading from 'expo-app-loading';
// import font expo
import { useFonts, Poppins_400Regular, Poppins_400Regular_Italic } from '@expo-google-fonts/poppins';

// import screen
import Calculator from './src/screens/Calculator';

export default function App() {
  // load font with expo
  let [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
  });

  // setupfont
  const fontConfig = {
    Poppins: {
      400: {
        normal: 'Poppins_400Regular',
        italic: 'Poppins_400Regular_Italic',
      },
    },
  };
  // setup theme
  const customColor = {
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    // Redefinig only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  };

  // config native base custom theme
  const theme = extendTheme({
    fontConfig,
    fonts: {
      heading: 'Poppins',
      body: 'Poppins',
      mono: 'Poppins',
    },
    config: {
      inititialColorMode: 'dark',
    },
  });

  // app loading when font loaded
  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    // wrap in the provider native-base
    <NativeBaseProvider theme={theme}>
      <Calculator />
    </NativeBaseProvider>
  );
}
