import { render, screen } from "@testing-library/react";
import { Jjj } from ".";

test('renders Jjj component', () => {
  render(<Jjj />);

  const titleElement = screen.getByRole( "heading", { level: 1, name: /Jjj Component/i });

  expect(titleElement).toBeInTheDocument();
});
