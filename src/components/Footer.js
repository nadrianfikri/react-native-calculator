import React from 'react';
import { Heading } from 'native-base';

const Footer = (props) => {
  return (
    <Heading size="xs" mt={10} color={props.color}>
      {props.desc}
    </Heading>
  );
};

export default Footer;
