import React, { useState } from 'react';
// import navitebase comp
import { Box, Text, VStack, FlatList } from 'native-base';

// import component
import { NumButton, EqualButton, OptButton } from '../components/Button';
import Footer from '../components/Footer';

const Calculator = () => {
  //
  const [result, setResult] = useState('');
  const [lastOperation, setLastOperation] = useState('');

  // init buttons with an array
  const buttons = ['C', 'Del', '%', '*', 1, 2, 3, '/', 4, 5, 6, '+', 7, 8, 9, '-', '.', 0, '='];

  //create function handle button pressed for input
  const handleInput = (btn) => {
    if (btn === '+' || btn === '-' || btn === '*' || btn === '/') {
      setResult(result + btn);
      return;
    }

    // clasification the button by case
    switch (btn) {
      case 'Del':
        setResult(result.substring(0, result.length - 1));
        return;
      case 'C':
        setLastOperation('');
        setResult('');
        return;
      case '%':
        setLastOperation(result + btn);
        setResult((result / 100).toString());
        return;
      case '=':
        setLastOperation(result + '=');
        performCalculate();
        return;
    }
    setResult(result + btn);
  };

  // function calculate when equal is pressed
  const performCalculate = () => {
    let lastArr = result[result.length - 1];
    if (lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+' || lastArr === '.') {
      setResult(result);
    } else {
      let equals = eval(result).toString();
      setResult(equals);
      return;
    }
  };

  return (
    <Box safeArea bg="dark.100" flex={1} p={7} w="100%" alignItems="center" justifyContent="space-evenly">
      <VStack mb="10" bg="blueGray.100" w="full" h="40" p={5} space={1} justifyContent="center" alignItems="flex-end" borderRadius={10}>
        <Text fontSize="4xl" color="gray.400">
          {lastOperation}
        </Text>
        <Text fontSize="6xl">{result === '' ? '0' : result}</Text>
      </VStack>

      <FlatList
        data={buttons}
        keyExtractor={(item) => item.id}
        numColumns={4}
        renderItem={({ item }) =>
          item === 'C' || item === '%' || item === '+' || item === '-' || item === '*' || item === '/' || item === 'Del' ? (
            <OptButton onPress={() => handleInput(item)} key={item} value={item} />
          ) : item === '=' ? (
            <EqualButton onPress={() => handleInput(item)} value={item} />
          ) : (
            <NumButton onPress={() => handleInput(item)} key={item} value={item} />
          )
        }
      />

      <Footer color="primary.200" desc="Calculator by Fikri Nadrian" />
    </Box>
  );
};

export default Calculator;
