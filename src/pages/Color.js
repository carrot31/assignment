import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { actionCreators as colorAction } from "../redux/modules/color";
import ColorOne from "../components/ColorOne";

const Color = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(colorAction.getColorDB());
  }, []);

  // 색상 데이터 값 가져오기
  const colorList = useSelector((state) => state.color.colorList);

  return (
    <Container>
      {/* 제목 */}
      <Title>Pantone_Color</Title>
      {/* 색상 데이터 나열 */}
      <ColorBox>
        {colorList.map((v, i) => {
          return (
            <div>
              <ColorOne key={v + i} value={v} />
            </div>
          );
        })}
      </ColorBox>
    </Container>
  );
};

export default Color;

const Container = styled.div`
  height: 100vh;
  padding: 50px;
  background: linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 50px;
`;

const ColorBox = styled.div`
  width: auto;
  height: auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-left: 20px;
`;
