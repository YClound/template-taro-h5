import { PropsWithChildren } from 'react';
import dayjs from 'dayjs';
import dayjsUTCPlugin from "dayjs/plugin/utc";
import { useLaunch } from '@tarojs/taro';
import { capture } from '@/public/excepture';
import './app.scss';

window.addEventListener('error', capture);
window.addEventListener('unhandledrejection', capture);

dayjs.extend(dayjsUTCPlugin);

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return children
}

export default App
