import React, { useState } from "react";
import styled from "styled-components";
import { Icon, message, Button, Typography } from "antd";

import { useAxiosMutation } from "@src/lib/services/Api";
import LogoIcon from "@src/components/atoms/icon/logo";
import Space from "@src/components/atoms/space";
import Colors from "@src/components/atoms/colors";

const { Title, Text } = Typography;

export type StartProps = {
  imageFile: File | null;
  setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
  setImageFileSrc: React.Dispatch<React.SetStateAction<any>>;
  handleSubmit: () => void;
};

export default function Main({
  imageFile,
  setImageFile,
  setImageFileSrc,
  handleSubmit
}: StartProps) {
  const handleUpload = e => {
    const file = e.target.files[0];
    setImageFile(file);
    message.success("파일 선택 완료");
    let reader = new FileReader();
    reader.onloadend = () => {
      console.log(reader.result);
      setImageFileSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Wrapper>
      <Space level={15} />
      <LogoIcon
        style={{ width: "20rem", height: "20rem" }}
        fill={Colors.Black}
      />
      <Title>멍탐정</Title>
      <Space level={10} />
      <ButtonArea>
        <ImageInputButton>
          <ImageInputLabel htmlFor="imageFile">사진 선택하기</ImageInputLabel>
        </ImageInputButton>
        <ImageInput id="imageFile" type="file" onChange={handleUpload} />
        {imageFile && (
          <>
            <Space />
            <ImageInfo>
              <ImageIcon type="file-image" />
              <Space direction="ROW" />
              <ImageName ellipsis>{imageFile.name}</ImageName>
            </ImageInfo>
            <Space level={1} />
            <ImageAnalyzeButton onClick={handleSubmit}>
              분석 시작하기
            </ImageAnalyzeButton>
          </>
        )}
      </ButtonArea>
      <Space level={30} />
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

const ButtonArea = styled.div`
  width: 30rem;
`;
const ImageInputButton = styled(Button)`
  width: 100%;
`;

const ImageInputLabel = styled.label`
  width: 100%;
  display: inline-block;
`;

const ImageInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ImageIcon = styled(Icon)`
  font-size: 1rem;
`;

const ImageName = styled(Text)`
  font-size: 1rem;
`;

const ImageInput = styled.input`
  display: none;
`;
const ImageAnalyzeButton = styled(Button)`
  width: 100%;
`;
