import React from 'react';
import { Button, Text } from 'native-base';

export function NumButton(props) {
  return (
    <Button mr="1" mb="1" onPress={props.onPress} bg="dark.300" rounded="full" justifyContent="center" alignItems="center" style={{ width: 72, height: 72 }}>
      <Text bold color="white" fontSize="4xl">
        {props.value}
      </Text>
    </Button>
  );
}
export function OptButton(props) {
  return (
    <Button onPress={props.onPress} mr="1" mb="1" bg="primary.600" rounded="full" justifyContent="center" alignItems="center" style={{ width: 72, height: 72 }}>
      <Text bold color="white" fontSize="4xl">
        {props.value}
      </Text>
    </Button>
  );
}
export function EqualButton(props) {
  return (
    <Button onPress={props.onPress} mr="1" bg="primary.600" rounded="full" justifyContent="center" alignItems="center" style={{ width: 144, height: 72 }}>
      <Text bold color="white" fontSize="4xl">
        {props.value}
      </Text>
    </Button>
  );
}
