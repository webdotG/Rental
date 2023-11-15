import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { HashRouter } from "react-router-dom";  //BrowserRouter,
import { store } from './shared-kernel/store'
import { Provider } from 'react-redux'
import './FIREBASE.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <HashRouter>
         <App/>
      </HashRouter>
    </Provider>
)
