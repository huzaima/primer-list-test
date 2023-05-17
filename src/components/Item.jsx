import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.li`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid black;
  padding-left: 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
  font-family: monospace;
`;

export const Item = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
