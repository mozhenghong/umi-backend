import { makeAutoObservable , runInAction } from 'mobx'
//构造响应式对象
const store = makeAutoObservable({
    //响应属性
    count: 0,
    //计算属性
    get double() {
        return this.count * 2
    },
    //action
    increment() {
        this.count += 1
    },
    decrement() {
        this.count -= 1
    },
    setCount(count:number) {
        this.count = count
    },
    //异步操作在修改属性时，需要将赋值操作放到 runInAction 中。
    async initCount() {
        // 模拟获取远程的数据
        const count:number = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(10)
          }, 500)
        })
        // 获取数据后，将赋值操作放到 runInAction 中
        runInAction(() => {
          this.count = count
        })
        //如果不调用 runInAction ，则可以直接调用本身已经存在的 action。
        // this.setCount(count)
    }
})

export default store;