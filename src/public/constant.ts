// 常量
// import { genSessionId } from '@/public/util';

function genRandomStr(hashLength) {
  if (!hashLength || typeof Number(hashLength) !== "number") return "";
  const ar = "1234567890abcdefghijklmnopqrstuvwxyz";
  const hs: string[] = [];
  const hl = Number(hashLength);
  const al = ar.length;

  for (let i = 0; i < hl; i++) {
    hs.push(ar[Math.floor(Math.random() * al)]);
  }

  return hs.join("");
}

const sessionId = +new Date() + genRandomStr(16);

console.log(process.env.NODE_ENV)

export default {
  requestMode: "rpc", // rpc http mock
  TRACE_ENV: process.env.NODE_ENV === "development" ? "development" : "production",
  TRACE_URL: process.env.TRACE_URL,
  URL: process.env.API,
  APP_ID: process.env.APP_ID, // online
  AUTH_APP_ID: process.env.APP_ID, //
  SESSION_ID: sessionId,
  NODE_ENV: process.env.NODE_ENV,
  APP_KEY: process.env.SOURCE,
  projectVersion: "v1.0.0", // 每个版本都要改, 埋点侧统计用
  // 接口版本号，后端使用
  clientVersion: "1.0.0",
  APP_TYPE: "h5",
  USER: {
    userId: "",
    uid: "",
    token: "",
    authCode: "",
  },
};
