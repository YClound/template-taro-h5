import type { UserConfigExport } from "@tarojs/cli";

export default {
  env: {
    NODE_ENV: '"production"',
    API: '"http://ipsponsorprod.k8s01.shuli.com"', // 在这里修改小程序接口请求地址，注意单引号的双引号为必须
    TRACE_URL: '"https://dataplatform-k8s01.laiytech.com/track/batch-receive"', // 小程序埋点接口请求地址
    APP_ID: '"2021004161680399"', // 鉴权appId
    SOURCE: '"ipsponsorprodH5"', // 鉴权source
  },
  logger: {
    quiet: false,
    stats: true,
  },
  mini: {},
  h5: {},
} satisfies UserConfigExport;
