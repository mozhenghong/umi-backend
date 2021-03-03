import { useEffect } from "react";
import styles from './index.less';
import { useObserver, Observer, useLocalStore } from 'mobx-react';
import {store } from '@/store/index';

export default function IndexPage(props:any) {
    const localStore = useLocalStore(() => store);
    useEffect(() => {
        console.log('111',props.history.location.query, localStore)
    }, [])
    return useObserver(() => <button onClick={localStore.setCount}>{localStore.count}</button>)
    // return <Observer>{() => <span>{localStore.count}</span>}</Observer>
}