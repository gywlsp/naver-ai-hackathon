import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import Space from "@src/components/atoms/space";
import LogoIcon from "@src/components/atoms/icon/logo";
import { Upload, message, Button, Typography } from "antd";
import Colors from "@src/components/atoms/colors";
import { useAxiosMutation } from "@src/lib/services/Api";

const { Title } = Typography;

const props = {
  name: "file",
  action: "http://211.218.53.149:5000/image/",
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success("파일이 성공적으로 업로드되었습니다.");
    } else if (info.file.status === "error") {
      message.error("파일 업로드에 실패하였습니다.");
    }
  }
};

export default function Home() {
  const [imageFile, setImageFile] = useState(null);
  const [handleImageSubmit, loading, error] = useAxiosMutation(
    "POST",
    "/test",
    {
      variables: {
        id: "123",
        image: imageFile
      }
    }
  );

  const handleImageUpload = e => {
    const file = e.target.files[0];
    setImageFile(file);
    console.log(file);
    () => handleImageSubmit;
  };

  const handleUpload = e => {
    const file = e.target.files[0];
    console.log(file);
    setImageFile(file);
    const axios = require("axios");
    const FormData = require("form-data");

    const form_data = new FormData();
    form_data.append("id", "123");
    form_data.append("image", imageFile);
    console.log(form_data);
    let url = "http://211.218.53.149:5000/test";
    axios
      .post(url, form_data)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <Wrapper>
      <Space level={20} />
      <LogoIcon
        style={{ width: "20rem", height: "20rem" }}
        fill={Colors.Black}
      />
      <Title>멍탐정</Title>
      <Space level={10} />

      <ImageInput
        id="imageFile"
        name="image"
        type="file"
        onChange={handleUpload}
      ></ImageInput>
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

const ImageInput = styled.input``;

const ImgUpload = styled(Upload)`
  width: 30rem;
  overflow: hidden;
`;
const StartButton = styled(Button)`
  width: 30rem;
`;
