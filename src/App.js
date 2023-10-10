import HomePage from './pages/HomePage'
import { store } from './store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <div className=' relative'>
        <HomePage />
      </div>
    </Provider>
  )
}

export default App
