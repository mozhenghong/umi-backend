import styles from './index.less';

export default function IndexPage(props:any) {
    console.log('111',props.history.location.query)
  return (
    <div>
      <h1 className={styles.title}>Page index  1111</h1>
    </div>
  );
}
