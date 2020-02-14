import React from "react";
import App from "next/app";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import cookies from "next-cookies";

import styled from "styled-components";

class Dog extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <style jsx global>{`
          @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
          @media (max-width: 262px) {
            html {
              font-size: 7px;
            }
          }
          @media (min-width: 263px) and (max-width: 300px) {
            html {
              font-size: 8px;
            }
          }
          @media (min-width: 301px) and (max-width: 337px) {
            html {
              font-size: 9px;
            }
          }
          @media (min-width: 338px) and (max-width: 375px) {
            html {
              font-size: 10px;
            }
          }
          @media (min-width: 376px) and (max-width: 412px) {
            html {
              font-size: 11px;
            }
          }
          @media (min-width: 413px) and (max-width: 450px) {
            html {
              font-size: 12px;
            }
          }
          @media (min-width: 451px) {
            html {
              font-size: 13px;
            }
          }
          html {
            margin: 0;
            padding: 0;
            position: relative;
            z-index: -1;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: "Noto Sans KR", sans-serif;
            font-size: 1rem;
            overflow-x: hidden;
            background-color: transparent;
            width: 100%;
            height: fit-content;
            min-height: 100vh;
          }
          ::-webkit-scrollbar {
            display: none;
          }
          input {
            -webkit-appearance: none;
            -webkit-border-radius: 0;
          }
          html,
          body,
          body > div:nth-child(2) {
            height: 100%;
          }
          *,
          ::after,
          ::before {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }
        `}</style>
        <Head>
          <title>멍탐정</title>
        </Head>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 37.5rem;
  height: fit-content;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  z-index: 100;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
`;

export default Dog;
