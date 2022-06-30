import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as todoActions } from "../redux/modules/todo";
import Modal from "../components/Modal/Modal"; //모달 창
import ModalData from "../components/Modal/ModalData";

const ToDoOne = (props) => {
  const dispatch = useDispatch();

  //Modal창
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);

  //수정 state 값
  const [edit, setEdit] = React.useState();
  console.log(edit);

  //todoList 삭제
  const deleteList = () => {
    dispatch(todoActions.deleteList(props.value));
  };

  //todoList 수정
  const editList = () => {
    dispatch(todoActions.editList(edit));
    setIsOpen(false);
  };

  return (
    <Container>
      {/* 번호 */}
      <Number>{props.number + 1}.</Number>
      {/* todoList */}
      <Text>{edit ? edit : props.value}</Text>
      {/* 수정 & 삭제 버튼 */}
      <BtnBox>
        <Btn onClick={() => setIsOpen(true)}>Edit</Btn>
        <Btn onClick={() => setIsOpen2(true)}>Delete</Btn>
      </BtnBox>
      {/* 수정 모달폼 */}
      <Modal open={isOpen}>
        <ModalData
          Edit
          onClose={() => setIsOpen(false)}
          _value={(e) => {
            setEdit(e.target.value);
          }}
          action={() => {
            editList();
          }}
          text={props.value}
        />
      </Modal>
      {/* 삭제 모달폼 */}
      <Modal open={isOpen2}>
        <ModalData
          Delete
          onClose={() => setIsOpen2(false)}
          action={() => {
            deleteList();
          }}
        />
      </Modal>
    </Container>
  );
};

export default ToDoOne;

const Container = styled.div`
  width: 350px;
  height: 50px;
  background: green;
  padding: 5px;
  margin: 5px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Number = styled.h3``;
const Text = styled.h3`
  margin-left: -10px;
`;

const BtnBox = styled.div``;
const Btn = styled.button`
  width: 50px;
  height: 30px;
  margin: 0px 3px;
`;
