import React from "react";
import styled from "styled-components";

const ModalData = (props) => {
  const { Delete, Edit, onClose, action, text, value, setValue } = props;

  //삭제 확인 창
  if (Delete) {
    return (
      <Container>
        {/* 삭제 확인 메세지 */}
        <Text>
          정말 <br />
          삭제하시겠습니까?
        </Text>
        {/* 취소 & 삭제 버튼 */}
        <BtnBox>
          <Btn onClick={onClose}>취소</Btn>
          <Btn onClick={action}>삭제</Btn>
        </BtnBox>
      </Container>
    );
  }

  //수정 창
  if (Edit) {
    return (
      <Container2>
        {/* 수정 */}
        <Input onChange={setValue} value={value} />
        {/* 취소 & 수정 버튼 */}
        <BtnBox>
          <Btn onClick={onClose}>취소</Btn>
          <Btn onClick={action}>수정</Btn>
        </BtnBox>
      </Container2>
    );
  }
};

export default ModalData;

const Container = styled.div`
  width: 240px;
  height: 156px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const Container2 = styled.div`
  width: 300px;
  height: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const Text = styled.div`
  font-size: 1.2rem;
  text-align: center;
`;

const Input = styled.input`
  font-size: 1.2rem;
  text-align: center;
  border-bottom: 1px solid black;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: left;
`;
const Btn = styled.button`
  font-size: 1rem;
  width: 50px;
  height: 30px;
  margin: 15px 10px 0px 10px;
`;
