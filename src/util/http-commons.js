import axios from "axios";
// import { httpStatusCode } from "./http-status";

// 아래와 같이 VITE_SERVER_API_URL 까지 기입 해줘야한다. + vite에서는 meta를 사용해야 구조할당이 된다.
// .env 파일에서 환경 변수를 설정할떄 모든 변수는 VITE_로 시작해야 Vite가 이 변수를 빌드 시점에 인식해서 사용한다.
// .env 뒤에 폴더 명이 있어도 그냥 import.meta.env를 통해서 접근이 가능하다.

const VITE_SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;

function apiAxios() {
  console.log("VITE_SERVER_API_URL : ", VITE_SERVER_API_URL);

  const instance = axios.create({
    baseURL: VITE_SERVER_API_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}

function authApiAxios() {
  const instance = axios.create({
    baseURL: VITE_SERVER_API_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}

export { apiAxios, authApiAxios };
