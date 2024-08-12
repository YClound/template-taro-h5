
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <div className='index'>
      <span>Hello world!888uwuwwu</span>
      <div>22222</div>
    </div>
  )
}
