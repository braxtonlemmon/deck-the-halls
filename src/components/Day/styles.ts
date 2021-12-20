import styled from "styled-components";
import "@fontsource/mountains-of-christmas";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  box-shadow: 0px 2px 2px grey;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.four};
  padding: 15px;
`;

export const Divider = styled.div`
  height: 1px;
  border-top: 2px dashed black;
  width: 90%;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px 0;
  gap: 20px;
  background-color: white;
`;

export const TopRow = styled(Row)`
  background-color: ${(props) => props.theme.colors.one};
`;

export const BottomRow = styled(Row)`
  color: white;
  background-color: ${(props) => props.theme.colors.two};
`;
