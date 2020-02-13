import React from "react";
import { Button, message } from "antd";

import { CopyToClipboard } from "react-copy-to-clipboard";

export default function ShareButton() {
  return (
    <CopyToClipboard
      text="https://naver-ai-hackathon.gywls517.now.sh/result"
      onCopy={() => {
        message.success("클립보드에 복사되었습니다.");
      }}
    >
      <Button shape="circle" icon="share-alt" />
    </CopyToClipboard>
  );
}
