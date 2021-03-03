import { action, observable, makeAutoObservable } from 'mobx';

class Store {
    @observable
    count = 1;

    @action
    setCount = () => {
        this.count++;
        console.log('11112', this.count)
    }
    // secondsPassed = 0
    // constructor() {
    //     makeAutoObservable(this)
    // }
    // increaseTimer() {
    //     console.log(1111)
    //     // this.secondsPassed += 1
    // }
}
export const store = new Store();