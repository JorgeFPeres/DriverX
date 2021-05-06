import React from 'react';
import {Text, Image} from 'react-native';

import {
  Container,
  Button,
  ButtonText,
  Title,
  SubTitle,
  PickerButton,
} from '../../styles';
import car from '../../assets/car.png';
import hand from '../../assets/hand.png';

export default function Cart() {
  return (
    <Container padding={30} justify="flex-start">
      <Container align="flex-start" height={60}>
        <Title>Passageiro ou Motorista</Title>
        <SubTitle>Selecione qual será a sua função no DriverX</SubTitle>
      </Container>
      <Container>
        <PickerButton active>
          <Image source={car} />
          <Title>Motorista</Title>
        </PickerButton>
        <PickerButton>
          <Image source={hand} />
          <Title>Passageiro</Title>
        </PickerButton>
      </Container>
      <Container height={50} justify="flex-end">
        <Button>
          <ButtonText>Próximo Passo</ButtonText>
        </Button>
      </Container>
    </Container>
  );
}
