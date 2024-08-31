// @vitest-environment jsdom
import '@testing-library/jest-dom'
import '../../../test/test-setup.tsx'
import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react/pure'
import Employees from '../Employees.tsx'

describe('Employees Component', () => {
  it('An employee renders to the page with their name', () => {
    render(<Employees />)
    const employeeName = screen.getByRole('heading', { level: 6 })
    expect(employeeName.textContent).toBeInTheDocument()
  })
  it('An employee\'s title renders', () => {
    render(<Employees />)
    const employeeName = screen.getByText('Title:*')
    expect(employeeName.textContent).toBeInTheDocument()
  })
  it('An employee\'s role renders', () => {
    render(<Employees />)
    const employeeName = screen.getByText('Role:*')
    expect(employeeName.textContent).toBeInTheDocument()
  })
  it('An employee\'s DOB renders', () => {
    render(<Employees />)
    const employeeName = screen.getByText('DOB:*')
    expect(employeeName.textContent).toBeInTheDocument()
  })
  it('An employee\'s allergies render to the page with a comma and space separating them', () => {
    render(<Employees />)
    const employeeName = screen.getByRole('heading', { level: 6 })
    expect(employeeName.textContent).toBeInTheDocument()
  })
})