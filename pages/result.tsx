import React from "react";
import styled from "styled-components";
import { Skeleton, Typography } from "antd";
import { useRouter } from "next/router";

import CloseButton from "@src/components/molecules/CloseButton";
import ShareButton from "@src/components/molecules/ShareButton";
import Space from "@src/components/atoms/space";
import Colors from "@src/components/atoms/colors";
import { useAxios } from "@src/lib/services/Api";
import Card from "@src/components/templates/Card";
import Line from "@src/components/atoms/space/line";
const { Title, Text } = Typography;

export default function Result() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useAxios("GET", "/getreport", {
    variables: {
      report_id: id
    }
  });

  if (loading) {
    console.log("loading");
    return (
      <Wrapper>
        <AbsoluteArea></AbsoluteArea>
        <EmptySpace />
        <MainCard>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </MainCard>
      </Wrapper>
    );
  }
  if (error) {
    console.log(error);
    return <div>error</div>;
  }
  if (data) {
    const {
      image,
      image_extension,
      species,
      age,
      origin,
      avg_weight,
      feature,
      diseases,
      foods
    } = data;
    console.log(data);
    const imageSrc = "data:image/" + image_extension + ";base64," + image;
    console.log(imageSrc);

    return (
      <Wrapper>
        <AbsoluteArea>
          <ButtonRow>
            <CloseButton />
            <ShareButton />
          </ButtonRow>
          <TitleRow>
            <Species>{species}</Species>
            <Space level={1} direction="ROW" />
            <Age level={3}>{age}</Age>
          </TitleRow>
        </AbsoluteArea>
        <TitleImg src={imageSrc} />
        <MainCard>
          <Row>
            <Title level={4}>평균체중</Title>
            <Text>
              {avg_weight.male}(수) / {avg_weight.female}(암)
            </Text>
          </Row>
          <Row>
            <Title level={4}>출신</Title>
            <Text>{origin}</Text>
          </Row>
        </MainCard>

        <Line level={1} />
        {feature && (
          <>
            <Card title="성격 및 특징" {...{ feature }} />
            <Line level={1} />
          </>
        )}
        {diseases && (
          <>
            <Card title="유의해야 할 질병" {...{ diseases }} />
            <Line level={1} />
          </>
        )}
        {foods && (
          <>
            <Card title="건강에 좋은 음식" {...{ foods }} />
            <Line level={1} />
          </>
        )}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <AbsoluteArea></AbsoluteArea>
      <EmptySpace />
      <Skeleton active />
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

const EmptySpace = styled.div`
  width: 100%;
  height: 22rem;
  object-fit: cover;
  object-position: top;
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

const MainCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
