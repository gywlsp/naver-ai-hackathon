import React from "react";
import styled from "styled-components";

import Colors from "../colors";

type IProps = {
  className?: string;
  direction?: "COL" | "ROW";
  level?: number;
  length?: number;
  style?: React.CSSProperties;
};

const defaultProps = {
  level: 0,
  direction: "COL"
};

export default function Line(props: IProps) {
  const _Line = styled.div`
    background-color: ${Colors.LightGrey};
    ${props.direction === "COL" &&
      `
            width:100%;
            height:${0.1 + 0.3 * props.level}rem;
            ${props.length &&
              `
              width:${props.length * 0.1}rem;
              height:1px;
            `}
        `}
    ${props.direction === "ROW" &&
      `
            height:100%;
            width:${0.1 + 0.3 * props.level}rem;
            ${props.length &&
              `
              height:${props.length * 0.1}rem;
              width:1px;
            `}
        `}
  `;
  return <_Line className={props.className} style={props.style} />;
}

Line.defaultProps = defaultProps;
