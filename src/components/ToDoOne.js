import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as todoActions } from "../redux/modules/todo";
import Modal from "../components/Modal/Modal"; //모달 창
import ModalData from "../components/Modal/ModalData";

const ToDoOne = (props) => {
  const dispatch = useDispatch();

  //Modal창
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);

  //수정 state 값
  const [edit, setEdit] = React.useState(props.value ? props.value : "");

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
      {/* 번호 & todoList */}
      <Text>
        {props.number + 1}. {edit ? edit : props.value}
      </Text>
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
          value={edit}
          setValue={(e) => {
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
  width: 55vw;
  height: 50px;
  padding: 5px;
  margin: 5px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.h3`
  margin-left: -10px;
`;

const BtnBox = styled.div``;
const Btn = styled.button`
  width: 80px;
  height: 30px;
  margin: 0px 3px;
  font-size: 1.1rem;
  font-weight: bold;
`;
