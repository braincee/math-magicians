import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import Calculator from './components/Calculator';
import Home from './route-pages/Home';
import Quotes from './route-pages/Quotes';
import operate from './logic/operate';

afterEach(() => {
  cleanup();
});

describe('All components', () => {
  it('should render Home component', () => {
    render(<Home />);
    const userElement = screen.getByTestId('user-id');
    expect(userElement).toBeInTheDocument();
    expect(userElement).toHaveTextContent('History');
  });

  it('should render Calculator component', () => {
    render(<Calculator />);
    screen.getAllByRole('button');
  });

  it('should match HOME snapshot', () => {
    const home = renderer.create(<Home />).toJSON();
    expect(home).toMatchSnapshot();
  });

  it('should match QUOTES snapshot', () => {
    const quotes = renderer.create(<Quotes />).toJSON();
    expect(quotes).toMatchSnapshot();
  });
});

describe('Conduct simple calculations', () => {
  const number1 = 9;
  const number2 = 3;

  it('Click number to display', () => {
    render(<Calculator />);
    const number = screen.getByTestId('cal-answer');
    userEvent.click(screen.getByText('2'));
    expect(number.innerHTML).toMatch('2');
  });

  const addition = operate(number1, number2, '+');
  it('should perform an addition', () => {
    expect(addition).toBe('12');
  });

  const subtraction = operate(number2, number1, '-');
  it('should perform a subtraction', () => {
    expect(subtraction).toBe('-6');
  });

  const multiplication = operate(number1, number2, 'x');
  it('should perform a multiplication', () => {
    expect(multiplication).toBe('27');
  });

  const division = operate(number1, number2, '÷');
  it('should perform a division', () => {
    expect(division).toBe('3');
  });
});
