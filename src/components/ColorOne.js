import React from "react";
import styled from "styled-components";

const ColorOne = (props) => {
  console.log(props);

  return (
    <Container>
      <ColorBox />
      <Text></Text>
    </Container>
  );
};

export default ColorOne;

const Container = styled.div`
  width: 200px;
  height: 200px;
  padding: 10px;
  border: 1px solid black;
  background: white;
`;

const ColorBox = styled.div``;
const Text = styled.div`
  font-size: 1rem;
`;
