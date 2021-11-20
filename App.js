import React from 'react';

// import provider
import { NativeBaseProvider, extendTheme } from 'native-base';

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
