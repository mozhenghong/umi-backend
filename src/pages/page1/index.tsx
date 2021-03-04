import { useEffect , useState} from "react";
import { withRouter } from 'react-router-dom';
import styles from './index.less';
import { autorun } from 'mobx';
import {observer} from 'mobx-react'
import store from '@/store/index';

const IndexPage = () => {
    return(
        <div>
            <span id="count">{store.count}</span>
            <span>{autorun(() => {store.count})}</span>
            <button onClick={() => {
                store.increment()
                }}> 点击+1</button> 
            <button onClick={() => store.decrement()}> 点击-1</button> 
            <button onClick={() => store.setCount(10)}> 点击设置count</button> 
        </div>        
    )
} 
export default observer(IndexPage)