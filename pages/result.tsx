import React from "react";
import styled from "styled-components";
import { Icon, Button, Typography } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

import CloseButton from "@src/components/molecules/CloseButton";
import ShareButton from "@src/components/molecules/ShareButton";
import Space from "@src/components/atoms/space";
import Colors from "@src/components/atoms/colors";
import { useAxios } from "@src/lib/services/Api";
const { Title } = Typography;

export default function Analyze() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useAxios("GET", "/getreport", {
    variables: {
      report_id: id
    }
  });

  if (loading) {
    console.log("loading");
    return <div>loading</div>;
  }
  if (error) {
    console.log(error);
    return <div>error</div>;
  }
  if (data) {
    console.log(data);
    const imageSrc =
      "data:image/" + data.image_extension + ";base64," + data.image;
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
        <TitleImg src={imageSrc} />
      </Wrapper>
    );
  }

  return <div>hi</div>;
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
