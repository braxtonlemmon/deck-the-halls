import styled from "styled-components";
import "@fontsource/mountains-of-christmas";
import { H2 } from "../Headings";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4), -10px 8px 15px rgba(0, 0, 0, 0.4),
    10px 8px 15px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.gray};
  padding: 15px;
  transform: ${(props) => (props.isToday ? "scale(1.05)" : "none")};
  margin: 0 10px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
`;

export const Divider = styled.div`
  height: 1px;
  border-top: 2px dashed black;
  width: 90%;
  margin: 15px 0;
`;

const Row = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px 10px;
  gap: 20px;
  box-shadow: 0px 2px 2px grey;
  border-radius: 10px;
  background-color: white;
  font-size: 1.3em;
  text-align: center;
  > * {
    flex: 1;
  }
  img {
    width: 150px;
    margin: 0 auto;
  }
`;

export const TopRow = styled(Row)`
  background-color: ${(props) => props.theme.colors.three};
`;

export const BottomRow = styled(Row)`
  color: white;
  background-color: ${(props) => props.theme.colors.two};
`;

export const Title = styled(H2)`
  margin: 10px 0 20px 0;
`;
