import * as React from 'react';

// import navitebase comp
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, IconButton, HStack, Divider } from 'native-base';

const Calculator = () => {
  return (
    <Box safeArea bg="dark.100" flex={1} p={7} w="100%" alignItems="center">
      <Heading size="sm" mb={10} color="emerald.400">
        Calculator by Nadrian
      </Heading>
      <Heading size="xl" color="white" alignSelf="flex-start">
        <Text>Display</Text>
      </Heading>
      <HStack bg="white" w="full" h={20} p={5} space={2} justifyContent="flex-end" alignItems="center" borderRadius={10}>
        <Text fontSize="4xl">0</Text>
      </HStack>
      <VStack flex={1}>
        <HStack space={2}>
          <Button borderRadius={50}>
            <Text bold color="white" fontSize="4xl">
              1
            </Text>
          </Button>
          <Button borderRadius={50}>
            <Text bold color="white" fontSize="4xl">
              2
            </Text>
          </Button>
          <Button borderRadius={50}>
            <Text bold color="white" fontSize="4xl">
              3
            </Text>
          </Button>
          <Button borderRadius={50}>
            <Text bold color="white" fontSize="4xl">
              +
            </Text>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Calculator;
