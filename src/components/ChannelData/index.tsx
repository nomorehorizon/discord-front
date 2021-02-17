import React from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage 
            key={n}
            author="nomorehorizon"
            date="16/12/2021"
            content="Hoje é o meu aniversário"
          />
        ))}

        <ChannelMessage 
          author="nomorehorizon"
          date="16/12/2021"
          content={
            <>
              <Mention>@nomorehorizon</Mention>, Teste
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
