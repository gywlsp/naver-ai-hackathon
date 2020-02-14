import React, { useState } from "react";
import styled from "styled-components";
import { Button, Typography, Spin } from "antd";
import Link from "next/link";

import Space from "@src/components/atoms/space";
import { useAxios } from "@src/lib/services/Api";

const { Title } = Typography;

export type LoadProps = {
  imageFileSrc: any;
  reportId: string;
  isDataSet: boolean;
};

export default function Load({ imageFileSrc, reportId, isDataSet }: LoadProps) {
  return (
    <Wrapper>
      <Space level={10} />
      <CircleImg src={imageFileSrc} />
      <Space level={15} />
      <Space />
      <AnalyzeState>
        {!isDataSet && (
          <>
            <AnalyzeStateLabel>분석 중 ...</AnalyzeStateLabel>
            <Space direction="ROW" level={1} />
            <Spin />
          </>
        )}
        {isDataSet && <AnalyzeStateLabel>분석 완료!</AnalyzeStateLabel>}
      </AnalyzeState>
      <Space level={2} />
      <Link href={{ pathname: "result", query: { id: `${reportId}` } }}>
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
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
`;

const AnalyzeState = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
`;

const AnalyzeStateLabel = styled(Title)`
  && {
    margin-bottom: 0rem;
  }
`;

const GotoResultButton = styled(Button)`
  width: 30rem;
`;
