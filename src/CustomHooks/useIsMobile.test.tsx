import { render, screen, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useIsMobile } from './useIsMobile'

const TestComponent = () => {
  const isMobile = useIsMobile()
  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>
}

describe('useIsMobile', () => {
  const resizeWindow = (width: number) => {
    window.innerWidth = width
    window.dispatchEvent(new Event('resize'))
  }

  test('returns true for mobile', async () => {
    resizeWindow(500)
    render(<TestComponent />)
    
    await waitFor(() => expect(screen.getByText(/mobile/i)).toBeInTheDocument)
  })

  test('returns false for desktop', async () => {
    resizeWindow(1000)
    render(<TestComponent />)

    await waitFor(() => expect(screen.getByText('Desktop')).toBeInTheDocument())
  })

  test('event listener updates on resize', async () => {
    render(<TestComponent />)

    // Initial desktop size
    await act(async () => {
      resizeWindow(1000)
    })
    expect(screen.getByText('Desktop')).toBeInTheDocument()

    // Update to mobile size
    await act(async () => {
      resizeWindow(500)
    })
    expect(screen.getByText('Mobile')).toBeInTheDocument()

    // Update to desktop size
    await act(async () => {
      resizeWindow(1000)
    })
    expect(screen.getByText('Desktop')).toBeInTheDocument()
  })
})
