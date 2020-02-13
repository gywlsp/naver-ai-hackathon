import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Space from "@src/components/atoms/space";
import LogoIcon from "@src/components/atoms/icon/logo";
import { Upload, message, Button, Typography } from "antd";
import Colors from "@src/components/atoms/colors";
import Link from "next/link";

const { Title } = Typography;

export default function Analyze() {
  return (
    <Wrapper>
      <Space level={10} />
      <CircleImg src="https://i.pinimg.com/564x/08/af/50/08af50fe71fd804ccdfd2e1478e5a50e.jpg" />
      <Space level={20} />
      <Title>분석 완료!</Title>
      <Space level={2} />
      <Link href="/result">
        <a>
          <GotoResultButton size="large">결과 확인하기</GotoResultButton>
        </a>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const CircleImg = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  border-radius: 20rem;
`;

const GotoResultButton = styled(Button)`
  width: 30rem;
`;
