import React from "react";
import { Button } from "antd";
import Link from "next/link";

export default function CloseButton() {
  return (
    <Link href="/">
      <a>
        <Button shape="circle" icon="close" />
      </a>
    </Link>
  );
}
