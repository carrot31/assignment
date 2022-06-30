import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as todoActions } from "../redux/modules/todo";
import ToDoOne from "../components/ToDoOne";

const ToDo = () => {
  const dispatch = useDispatch();

  //전역저장소에서 todoList 데이터 가져오기
  const todoList = useSelector((state) => state.todo.list);

  //todo state값 선언
  const [text, setText] = React.useState("");

  //todo state 입력값
  const writeText = (e) => {
    //글자 수 제한
    if (e.target.value.length >= 80) {
      alert("80자 이하로 작성해주세요.");
      e.target.value = e.target.value.substr(0, 80);
    }
    setText(e.target.value);
  };

  //todoList 추가 & input창 초기화
  const addList = () => {
    if (text === "" || text === undefined) {
      alert("내용을 입력해주세요!");
    } else {
      dispatch(todoActions.addList(text));
      setText("");
    }
  };

  return (
    <Container>
      {/* 제목 */}
      <Title>ToDo-List</Title>
      {/* 작성칸 */}
      <Content>
        <Write autoFocus onChange={writeText} value={text} />
        <AddBtn onClick={addList}>ADD</AddBtn>
      </Content>
      {/* 할일 리스트 */}
      <ListBox>
        {todoList.map((v, i) => {
          return <ToDoOne key={v + i} value={v} number={i} />;
        })}
      </ListBox>
    </Container>
  );
};

export default ToDo;

const Container = styled.div`
  height: 100vh;
  padding: 50px;
  background: #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Content = styled.div`
  width: 60vw;
  height: 8vh;
  margin-top: 5%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const Write = styled.input.attrs({
  placeholder: "오늘의 할 일을 입력해 주세요.",
})`
  width: 60vw;
  height: 6vh;
  padding: 5px 15px;
  font-size: 1.5rem;
  border-bottom: 1px solid black;
`;

const AddBtn = styled.button`
  width: 10vw;
  height: 6vh;
  margin-left: 3%;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ListBox = styled.div`
  width: 59vw;
  height: 60vh;
  padding: 20px;
  margin-top: 3%;
  background-color: white;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;
