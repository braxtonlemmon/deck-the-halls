import styled, { keyframes } from "styled-components";
import "@fontsource/mountains-of-christmas";

const wiggle = keyframes`
    0% { transform: rotate(0deg); }
  80% { transform: rotate(0deg); }
  85% { transform: rotate(5deg); }
  95% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100%; */
  width: 100%;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4), -10px 8px 15px rgba(0, 0, 0, 0.4),
    10px 8px 15px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.gray};
  padding: 15px;
  &:hover {
    animation: 1s ${wiggle} ease-out;
  }
`;

export const Divider = styled.div`
  height: 1px;
  border-top: 2px dashed black;
  width: 90%;
  margin: 15px 0;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px 0;
  gap: 20px;
  box-shadow: 0px 2px 2px grey;
  border-radius: 10px;
  background-color: white;
  font-size: 1.3em;
`;

export const TopRow = styled(Row)`
  background-color: ${(props) => props.theme.colors.three};
`;

export const BottomRow = styled(Row)`
  color: white;
  background-color: ${(props) => props.theme.colors.two};
`;
