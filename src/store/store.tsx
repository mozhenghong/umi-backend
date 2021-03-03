import { observable } from 'mobx'

const store = observable({
    count: 20
})
export interface Store {
    counts: { count: number; }; 
    setCount(): void; 
}

export function createStore() {
  return {
    // todoList: store,
    // get pendingTodos() {
    //   return Object.keys(this.todoList).filter(
    //     todo => this.todoList[todo] === false,
    //   )
    // },
    // get doneTodos() {
    //   return Object.keys(this.todoList).filter(
    //     todo => this.todoList[todo] === true,
    //   )
    // },
    // ADD_TODOLIST(todo:string) {
    //   this.todoList[todo] = false
    // },
    // TOGGLE_TODOLIST(todo:string) {
    //   this.todoList[todo] = !this.todoList[todo]
    // }
    counts: store,
    setCount() {
        this.counts.count++
    }
  }
}