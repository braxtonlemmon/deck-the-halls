import styled from "styled-components";
import { H1 } from "../Headings";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.five};
  position: relative;
`;

export const Stretch = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Intro = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.five};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  height: 100px;
  width: 200px;
  background: ${(props) => props.theme.colors.two};
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  box-shadow: 0 5px 5px rgba(255, 255, 255, 0.5);
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 8px rgba(255, 255, 255, 0.8);
    transform: scale(1.08);
  }
`;

export const Title = styled(H1)`
  padding: 40px;
  background: ${(props) => props.theme.colors.four};
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
  font-size: 3.2em;
  z-index: 500;
`;
