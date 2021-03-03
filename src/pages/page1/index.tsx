import { useEffect , useState} from "react";
import { withRouter } from 'react-router-dom';
import styles from './index.less';
import { useObserver, Observer, useLocalStore, observer } from 'mobx-react';
import {store} from '@/store/index';

function IndexPage(props:any) {
    const localStore = useLocalStore(() => store);
    const [count, setCount] = useState(localStore.count)
    console.log('1113', store,typeof store, store.count, typeof store.count)
    useEffect(() => {
        console.log('111',props.history.location.query, localStore)
    }, [store])
    useEffect(() => {
        console.log('1112',props.history.location.query, localStore)
    }, [store.count])
    return <button onClick={() => {
        store.setCount()
        console.log('1114', store, store.count)
        // setCount(localStore.count)
    }}>{store.count}</button>
    // return <Observer>{() => <span>{localStore.count}</span>}</Observer>
    // return <button onClick={localStore.increaseTimer}>Seconds passed: {localStore.secondsPassed} </button>
}

export default withRouter(observer(IndexPage))