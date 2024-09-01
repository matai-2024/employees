import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { router } from './router.tsx'
import { RouterProvider } from 'react-router-dom'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
    domain="dev-matai-2024-amy.au.auth0.com"
    clientId="L7YEwAsNS5EJcx7VlKnvx0F0fkAE6iQe"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'https://employees/api',
    }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Auth0Provider>
  )
})
