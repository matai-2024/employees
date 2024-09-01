import { beforeEach, expect } from 'vitest'
import { render, cleanup } from '@testing-library/react/pure'
import * as matchers from '@testing-library/jest-dom/matchers'
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import userEvent from '@testing-library/user-event'
import { routes } from '../router'

declare module 'vitest' {
  interface JestAssertion<T = any>
    extends TestingLibraryMatchers<
      ReturnType<typeof expect.stringContaining>,
      T
    > {}
}

beforeEach(cleanup)
expect.extend(matchers)

export function renderRoute(path = '/') {
  const client = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  })

  const router = createMemoryRouter(routes, {
    initialEntries: [path],
  })
  const screen = render(
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  )
  const user = userEvent.setup()
  return { ...screen, user }
}
