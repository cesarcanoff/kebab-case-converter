import { useState } from 'react';
import { Button, Container, Input, MainTitle, Output } from './App.styles';

import './styles/global.css';

function App() {
  const [hasOutput, setHasOutput] = useState(false);
  const [textToConverter, setTextToConverter] = useState("");
  const [textConverted, setTextConverted] = useState("");

  const handleChange = (event: any) => {
    setTextToConverter(event.target.value);
  };

  const handleOutput = () => {
    setHasOutput(true);
    convertTextToKebabCase();
  }

  const convertTextToKebabCase = () => {
    let convertedTextToKebab = textToConverter.toLowerCase()
      .replace(/ /g, "-")
      .replace("---", "-")
      .replace(",", "");

      setTextConverted(convertedTextToKebab);
  }

  return (
    <Container>
      <MainTitle>Kebab Case Converter</MainTitle>
      <Input
        placeholder='Seu texto...'
        value={textToConverter}
        onChange={handleChange}
      />

      { hasOutput && <Output>{textConverted}</Output> }
      <Button onClick={handleOutput}>Converter</Button>
    </Container>
  )
}

export default App;
