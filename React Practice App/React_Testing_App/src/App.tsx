
import './App.css'
// import FormControlledComponent from './components/ControlledComponent/FormControlledComponent'
import FormUncontrolledComponent from './components/ControlledComponent/FormUncontrolledCpmponent'
// import Counter from './components/Counter'
import { createContext, useState } from 'react'


export const UserContext = createContext()
function App() {
  const [user, setUser] = useState('Razal')

  return (
    <>
      {/* <Counter /> */}
      {/* <FormControlledComponent /> */}
      <UserContext.Provider value={{ user, setUser }}>
        <FormUncontrolledComponent />
      </UserContext.Provider>
    </>
  );

}

export default App;
