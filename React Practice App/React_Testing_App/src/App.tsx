
import './App.css'
// import FormControlledComponent from './components/ControlledComponent/FormControlledComponent'
import FormUncontrolledComponent from './components/ControlledComponent/FormUncontrolledCpmponent'
// import Counter from './components/Counter'
import { createContext, useState } from 'react'
import WidthComponent from './components/useEffect_vs_useLayout_Effect/WidthComponent'
import Counter from './components/dependancyArray/Counter'
import { Users } from './components/dependancyArray/Users'
import { Focus } from './components/Focus'
import Counter1 from './components/example_UseCallback/Counter1'
import { Factorial } from './components/example_useMemo/Factorial'
import { Counter_useReducer } from './components/example_useReducer/Counter_useReducer'


export const UserContext = createContext()
function App() {
  const [user, setUser] = useState('Razal')

  return (
    <>
      {/* <Counter /> */}
      {/* <FormControlledComponent /> */}
      {/* <UserContext.Provider value={{ user, setUser }}> */}
      {/* <FormUncontrolledComponent /> */}
      {/* </UserContext.Provider> */}

      {/* <WidthComponent/> */}
      {/* <Counter/> */}
      {/* <Users/> */}
      {/* <Focus /> */}

      {/* <Counter1/> */}
      {/* <Factorial/> */}

      <Counter_useReducer />
    </>
  );

}

export default App;
