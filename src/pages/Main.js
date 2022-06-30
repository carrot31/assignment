import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { IoIosArrowForward } from "react-icons/io";

const Main = () => {
  return (
    <Container>
      <Title>
        FrontEnd Developer
        <br />
        최정원
      </Title>
      {/* todoList & Rest-API */}
      <TextBox>
        <Text className="todo" onClick={() => history.push("/todo")}>
          <IoIosArrowForward /> Todo-List
        </Text>
        <Text className="color" onClick={() => history.push("/color")}>
          <IoIosArrowForward /> Rest-API
        </Text>
      </TextBox>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  height: 100vh;
  padding: 50px;
  position: relative;
  background: #eacdae;
`;
const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const TextBox = styled.div`
  position: absolute;
  right: 300px;
  bottom: 400px;
`;
const Text = styled.div`
  font-size: 4rem;
  font-weight: bold;
  &:hover {
    color: #fff;
  }
`;
