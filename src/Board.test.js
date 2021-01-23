import { render, fireEvent } from '@testing-library/react';

// Square is a "default" export from Square.js, so we don't need
// curly braces around it like we do for render
import Board from './Board';

test('Board should get re-rendered on each click, with X and O appearing on alternating clicks', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>);
    const buttons = board.queryAllByRole('button');
    
    //First Click
    fireEvent.click(buttons[0]);
    expect(buttons[0].innerHTML).toBe('X');

    //Second Click
    fireEvent.click(buttons[1]);
    expect(buttons[1].innerHTML).toBe('O');

    //Third Click
    fireEvent.click(buttons[2]);
    expect(buttons[2].innerHTML).toBe('X');

    //Fourth Click
    fireEvent.click(buttons[3]);
    expect(buttons[3].innerHTML).toBe('O');
}); 

test('Next player status message should alternate between X and O', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>);
    const buttons = board.queryAllByRole('button');
    var msg = board.getByText('Next player: X');
    fireEvent.click(buttons[0]);
    msg = board.getByText('Next player: O');
    fireEvent.click(buttons[1]);
    msg = board.getByText('Next player: X');
    fireEvent.click(buttons[2]);
    msg = board.getByText('Next player: O');
}); 