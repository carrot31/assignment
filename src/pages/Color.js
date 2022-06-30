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

  const colorList = useSelector((state) => state.color.colorList);
  console.log(colorList);

  return (
    <Container>
      {colorList.map((v, i) => {
        return (
          <Arr>
            <ColorOne key={v + i} value={v} />;
          </Arr>
        );
      })}
    </Container>
  );
};

export default Color;

const Container = styled.div`
  background: green;
  height: 100vh;
`;
