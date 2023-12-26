import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import '@/assets/css/index.less'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Suspense fallback="loading">
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </Provider>


  // </React.StrictMode>
)
