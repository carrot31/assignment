import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as todoActions } from "../redux/modules/todo";
import ToDoOne from "../components/ToDoOne";

const ToDo = () => {
  const dispatch = useDispatch();

  //전역저장소에서 todoList 데이터 가져오기
  const todoList = useSelector((state) => state.todo.list);
  console.log(todoList);

  //todo state값 선언
  const [text, setText] = React.useState();

  //todo state 입력값
  const writeText = (e) => {
    setText(e.target.value);
  };

  //todoList 추가
  const addList = () => {
    if (text === "" || text === undefined) {
      alert("할일을 작성해주세요!");
    } else {
      dispatch(todoActions.addList(text));
      return text === "";
    }
  };

  //Enter누를 시 todoList 추가
  React.useEffect(() => {
    const press = (e) => {
      if (e.key === "Enter") {
        if (text === "" || text === undefined) {
          alert("할일을 작성해주세요!");
        } else {
          dispatch(todoActions.addList(text));
        }
      }
    };
    window.addEventListener("keydown", press);

    return () => {
      window.removeEventListener("keydown", press);
    };
  }, []);

  return (
    <Container>
      {/* 제목 */}
      <Title>ToDo-List</Title>
      {/* 작성칸 */}
      <Content>
        <Write autoFocus onChange={writeText} />
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
  max-width: 500px;
  height: 90vh;
  margin: 30px auto;
  padding: 20px;
  background: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 10%;
`;

const Content = styled.div`
  width: 400px;
  height: 5vh;
  background: red;
  margin-top: 5%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const Write = styled.input.attrs({ placeholder: "내용을 입력해 주세요." })`
  width: 300px;
  height: 3vh;
  padding: 5px;
`;

const AddBtn = styled.button`
  width: 100px;
  height: 3vh;
  margin-left: 3%;
`;

const ListBox = styled.div`
  width: 400px;
  height: 50vh;
  padding: 20px;
  margin-top: 10%;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.h3``;
