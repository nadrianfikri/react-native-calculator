import * as React from 'react';

// import navitebase comp
import { Ionicons } from '@expo/vector-icons';
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, IconButton, HStack, Divider } from 'native-base';

const Calculator = () => {
  return (
    <Box safeArea bg="dark.100" flex={1} p={7} w="100%" alignItems="center" justifyContent="space-evenly">
      <VStack mb="10" bg="blueGray.100" w="full" h="40" p={5} space={1} justifyContent="center" alignItems="flex-end" borderRadius={10}>
        <Text fontSize="6xl">12345</Text>
        <Text fontSize="4xl" color="muted.400">
          0
        </Text>
      </VStack>
      {/* button */}
      <VStack space="1">
        <HStack w="full" space="1" justifyContent="space-between">
          <OptButton value="C" />
          <OptButton value="+/-" />
          <OptButton value="%" />
          <OptButton value="x" />
        </HStack>
        <HStack w="full" space="1" justifyContent="space-between">
          <NumButton value="1" />
          <NumButton value="2" />
          <NumButton value="3" />
          <OptButton value="/" />
        </HStack>
        <HStack w="full" space="1" justifyContent="space-between">
          <NumButton value="4" />
          <NumButton value="5" />
          <NumButton value="6" />
          <OptButton value="+" />
        </HStack>
        <HStack w="full" space="1" justifyContent="space-between">
          <NumButton value="7" />
          <NumButton value="8" />
          <NumButton value="9" />
          <OptButton value="-" />
        </HStack>
        <HStack w="full" space="1" justifyContent="space-between">
          <NumButton value="." />
          <NumButton value="0" />
          <EqualButton value="=" />
        </HStack>
      </VStack>

      {/* footer */}
      <Heading size="xs" mt={10} color="primary.300">
        Calculator by Nadrian
      </Heading>
    </Box>
  );
};

function NumButton(props) {
  return (
    <Button bg="dark.300" rounded="full" justifyContent="center" alignItems="center" style={{ width: 72, height: 72 }}>
      <Text bold color="white" fontSize="4xl">
        {props.value}
      </Text>
    </Button>
  );
}
function OptButton(props) {
  return (
    <Button bg="primary.600" rounded="full" justifyContent="center" alignItems="center" style={{ width: 72, height: 72 }}>
      <Text bold color="white" fontSize="4xl">
        {props.value}
      </Text>
    </Button>
  );
}
function EqualButton(props) {
  return (
    <Button bg="primary.600" rounded="full" justifyContent="center" alignItems="center" style={{ width: 144, height: 72 }}>
      <Text bold color="white" fontSize="4xl">
        {props.value}
      </Text>
    </Button>
  );
}

export default Calculator;
