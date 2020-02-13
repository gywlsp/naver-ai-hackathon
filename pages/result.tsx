import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Space from "@src/components/atoms/space";
import LogoIcon from "@src/components/atoms/icon/logo";
import { Icon, Button, Typography } from "antd";
import Colors from "@src/components/atoms/colors";
import Link from "next/link";
import CloseButton from "@src/components/molecules/CloseButton";
import ShareButton from "@src/components/molecules/ShareButton";

const { Title } = Typography;

export default function Analyze() {
  return (
    <Wrapper>
      <AbsoluteArea>
        <ButtonRow>
          <CloseButton />
          <ShareButton />
        </ButtonRow>
        <TitleRow>
          <Species>골든리트리버</Species>
          <Space level={1} direction="ROW" />
          <Age level={3}>7개월</Age>
        </TitleRow>
      </AbsoluteArea>
      <TitleImg src="https://i.pinimg.com/564x/08/af/50/08af50fe71fd804ccdfd2e1478e5a50e.jpg" />
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

const AbsoluteArea = styled.div`
  width: 100%;
  height: 22rem;
  padding: 1rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Species = styled(Title)`
  && {
    margin: 0rem;
    color: ${Colors.White};
  }
`;

const Age = styled(Title)`
  && {
    margin: 0rem;
    color: ${Colors.RegularGrey};
  }
`;
const TitleImg = styled.img`
  && {
    width: 100%;
    height: 22rem;
    object-fit: cover;
    object-position: top;
  }
`;
