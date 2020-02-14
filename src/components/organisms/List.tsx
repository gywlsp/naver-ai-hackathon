import React, { useState } from "react";
import styled from "styled-components";
import { Typography, Button, Modal } from "antd";
import Space from "../atoms/space";
import Link from "next/link";

const { Text } = Typography;

export default function List(props) {
  const { diseases, foods } = props;
  const ListItems = diseases ? diseases : foods;
  const [visible, setVisible] = useState(-1);
  const handleCancel = () => {
    setVisible(-1);
  };
  return (
    <Wrapper>
      {ListItems &&
        ListItems.map((item, index) => (
          <div key={item.name}>
            <BoxButton>
              <Info>
                <Name>{item.name}</Name>
                <Space direction="ROW" />
                <Button
                  shape="circle"
                  icon="info"
                  size="small"
                  onClick={() => setVisible(index)}
                />
              </Info>
              <Link
                href={
                  "https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=강아지+" +
                  item.name
                }
              >
                <a>
                  <NaverSearch src="/naver.png" />
                </a>
              </Link>
            </BoxButton>
            <Space level={1} />
            <Modal
              title={item.name}
              visible={visible === index}
              footer={null}
              onCancel={handleCancel}
            >
              <Text>{item.explanation}</Text>
            </Modal>
          </div>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const BoxButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.08);
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  margin-right: auto;
`;

const Name = styled(Text)`
  font-size: 1.4rem;
  color: black;
`;

const NaverSearch = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: cover;
`;
