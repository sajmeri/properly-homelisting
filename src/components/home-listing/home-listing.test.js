import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import HomeListing from './home-listing';

describe('Home listing form tests', ()=>{

  beforeEach(() => {
    render(<HomeListing />)
  });

  test('Submitting an incomplete form throws an error', async () => {
    userEvent.click(screen.getByRole('button', { name: /submit/i }))
    await waitFor(() =>
      expect(screen.getByText("Please select your home type")).toBeInTheDocument()
    )
  })
  
  test('correct value for hoem type is selected', async () => {
    userEvent.selectOptions(screen.getByTestId('homeType'), ['detached'])
    userEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() =>
      expect(screen.getByTestId('detached').selected).toBe(true)
    )
  
  })

  test('Square feet field accepts only a numeic value', async () => {
    // render(<HomeListing />)
    userEvent.type(screen.getByTestId("squareFeet"), 'NAN');
    userEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() =>
      expect(screen.getByText("Square footage should contain numbers only")).toBeInTheDocument()
    )
  
  })

  test('form validates and submit is successful', async () => {
    // render(<HomeListing />)
    userEvent.selectOptions(screen.getByTestId('homeType'), ['detached']);
    userEvent.selectOptions(screen.getByTestId('bedrooms'), ['3']);
    userEvent.selectOptions(screen.getByTestId('bathrooms'), ['3'])
    userEvent.type(screen.getByTestId("squareFeet"), '2300');
    userEvent.click(screen.getByTestId('acceptedTerms'))
    userEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() =>
      expect(screen.getByTestId('acceptedTerms').checked).toBe(true)
    )
  
  })
  
})
