import React, { ReactNode } from 'react'
import { useLocalStore } from 'mobx-react-lite'
import { createStore , Store} from './store'

const StoreContext = React.createContext<Store|null>(null);

export const useStore = () => {
  const store = React.useContext(StoreContext)
  if (!store) {
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}

interface Iprops {
    children: ReactNode,
}

export function Provider({ children }: Iprops ) {
  const store:Store  = useLocalStore(createStore)

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
}