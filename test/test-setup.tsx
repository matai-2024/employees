import { beforeEach, expect } from 'vitest'
import { cleanup } from '@testing-library/react/pure'
import * as matchers from '@testing-library/jest-dom/matchers'
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'

declare module 'vitest' {
  interface JestAssertion<T>
    extends TestingLibraryMatchers<
      ReturnType<typeof expect.stringContaining>,
      T
    > {}
}

beforeEach(cleanup)
expect.extend(matchers)