import React from "react";
import styled from "styled-components";

const ColorOne = (props) => {
  return (
    <Container>
      {/* 색상 */}
      <ColorBox color={props.value.color} />
      {/* 색상 이름, 번호, 연도 */}
      <TextBox>
        <Text>PANTONE</Text>
        <Text>{props.value.pantone_value}</Text>
        <Text>{props.value.name}</Text>
      </TextBox>
    </Container>
  );
};

export default ColorOne;

const Container = styled.div`
  width: 200px;
  height: 280px;
  margin: 20px 30px;
  box-shadow: 0px 0px 10px 1px gray;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorBox = styled.div`
  width: 200px;
  height: 180px;
  background: ${(props) => (props.color ? props.color : "")};
`;

const TextBox = styled.div`
  width: 180px;
  height: 70px;
  padding: 10px 0px;
`;
const Text = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
`;
