import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {Provider} from "react-redux";
import {store} from "./app/store";

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <QueryClientProvider client={queryClient}>
              <App />
              <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
          </QueryClientProvider>
      </Provider>
  </React.StrictMode>,
)
