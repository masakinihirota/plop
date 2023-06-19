import { render, screen } from "@testing-library/react";
import { Ccc } from ".";

test('renders Ccc component', () => {
  render(<Ccc />);

  const titleElement = screen.getByRole( "heading", { level: 1, name: /Ccc Component/i });

  expect(titleElement).toBeInTheDocument();
});
