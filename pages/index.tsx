import React, { useState } from "react";
import styled from "styled-components";
import { message } from "antd";

import Start from "@src/components/templates/Start";
import Load from "@src/components/templates/Load";

export default function Home() {
  const [phase, setPhase] = useState<number>(1);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageFileSrc, setImageFileSrc] = useState(null);
  const [reportId, setReportId] = useState(null);
  const [isDataSet, setIsDataSet] = useState(false);

  const handleSubmit = () => {
    const axios = require("axios");
    const FormData = require("form-data");
    const form_data = new FormData();
    form_data.append("image", imageFile);
    const url = process.env.API_HOST + "/test";
    axios
      .post(url, form_data)
      .then(res => {
        console.log(res.data);
        setReportId(res.data.report_id);
        setPhase(2);
        checkIsDataSet(res.data.report_id);
      })
      .catch(err => {
        console.log(err);
        message.error("파일 업로드 실패");
      });
  };

  const checkIsDataSet = report_id => {
    const axios = require("axios");
    const FormData = require("form-data");
    const form_data = new FormData();
    form_data.append("report_id", report_id);
    const url = process.env.API_HOST + "/check";
    axios
      .post(url, form_data)
      .then(res => {
        console.log(res.data.is_data_set);
        if (res.data.is_data_set === false)
          setTimeout(checkIsDataSet(report_id), 500);
        else setIsDataSet(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      {phase === 1 && (
        <Start
          {...{ imageFile, setImageFile, setImageFileSrc, handleSubmit }}
        />
      )}
      {phase === 2 && <Load {...{ imageFileSrc, reportId, isDataSet }} />}
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
