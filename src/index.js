import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CounterContextProvider } from './NotificationContext'

import App from './App'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterContextProvider >
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  </CounterContextProvider>
)