import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/NotFound'
import Layout from './components/layout/Layout'
import Shop from './pages/shop'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App