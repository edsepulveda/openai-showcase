import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

import { Route, Routes } from 'react-router-dom'
import {
  PrincipalMenuHandler,
  Banner,
  CreateImages,
  Home,
  CreateText
} from './components/index'

function App() {
  return (
    <div className='App'>
      <Banner />
      <PrincipalMenuHandler />
      <Routes>
        <Route exact path='/' index element={<Home />} />
        <Route exact path='/dalle' element={<CreateImages />} />
        <Route exact path='/help' element={<CreateText />} />
      </Routes>
    </div>
  )
}

export default App
