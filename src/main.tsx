import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";  // HashRouter 
import { store } from './shared-kernel/store'
import { Provider } from 'react-redux'
import './FIREBASE.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <BrowserRouter>
         <App/>
      </BrowserRouter>
    </Provider>
)
