import styles from './index.less';
import {Button} from 'antd';
import { history } from 'umi';
import {getInfo} from '@/services/user'

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>home</h1>
      <Button onClick ={
            () => {
                // history.push('/list?a=b');
                history.push({
                    pathname: '/admin',
                    query: {
                        a: 'b',
                    },
                });
                getInfo({}).then((res) =>{
                    
                })
        }
      }>跳转</Button>
    </div>
  );
}