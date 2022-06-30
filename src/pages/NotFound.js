import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const NotFound = (props) => {
  const history = useHistory();
  return (
    <Container>
      <Text>주소가 올바르지 않습니다.</Text>
      <Btn
        onClick={() => {
          history.goBack();
        }}
      >
        뒤로가기
      </Btn>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  font-weight: bold;
  margin-top: 300px;
`;

const Btn = styled.button`
  margin-top: 30px;
  font-size: 2rem;
`;
