import { render, screen, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";
import Calculator from './components/Calculator';
import Home from './route-pages/Home';
import Quotes from './route-pages/Quotes';
import userEvent from '@testing-library/user-event';
import operate from './logic/operate';


afterEach( () =>
{
  cleanup();
} );

describe( 'All components', () =>
{
  it( "should render Home component", () =>
  {
    render( <Home /> );
    const userElement = screen.getByTestId( "user-id" );
    expect( userElement ).toBeInTheDocument();
    expect( userElement ).toHaveTextContent( "History" );
  } );
   
  it( 'should render Calculator component', () =>
  {
    render( <Calculator /> );
    screen.getAllByRole( 'button' );
  } );

  it( 'should match HOME snapshot', () =>
  {
    const home = renderer.create( <Home /> ).toJSON();
    expect( home ).toMatchSnapshot();
  } );
  
  it( 'should match QUOTES snapshot', () =>
  {
    const quotes = renderer.create( <Quotes /> ).toJSON();
    expect( quotes ).toMatchSnapshot();
  } );

} );
