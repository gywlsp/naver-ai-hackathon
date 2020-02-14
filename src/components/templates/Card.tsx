import React from "react";
import styled from "styled-components";
import { Typography } from "antd";
import List from "../organisms/List";

const { Title, Text } = Typography;

export default function Card(props) {
  const { title, feature, diseases, foods } = props;
  return (
    <Wrapper>
      <Title level={3}>{title}</Title>
      <Content>
        {feature && <Text>{feature}</Text>}
        {diseases && <List {...{ diseases }} />}
        {foods && <List {...{ foods }} />}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Content = styled.div`
  width: 100%;
`;
