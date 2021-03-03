import { useEffect , useState} from "react";
import styles from './index.less';
import { useObserver, Observer, useLocalStore, observer } from 'mobx-react';
import {store} from '@/store/index';

export default observer(function IndexPage(props:any) {
    const localStore = useLocalStore(() => store);
    const [count, setCount] = useState(localStore.count)

    useEffect(() => {
        console.log('111',props.history.location.query, localStore)
    }, [localStore.count])
    return <button onClick={() => {
        localStore.setCount()
        setCount(localStore.count)
    }}>{count}</button>
    // return <Observer>{() => <span>{localStore.count}</span>}</Observer>
    // return <button onClick={localStore.increaseTimer}>Seconds passed: {localStore.secondsPassed} </button>
})