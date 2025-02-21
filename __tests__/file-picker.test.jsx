import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import FilePicker from "../app/components/file-picker";

/* I would love to add some tests with actually loading the file here, 
but I'm not sure how to do that with the react-drag-drop-files. */
describe("FilePicker", () => {
  it("renders with no error", () => {
    const mockFn = jest.fn(() => {});

    const { container } = render(
      <FilePicker
        uploadHandler={mockFn}
        onSizeError={mockFn}
        onTypeError={mockFn}
      />
    );

    const errorElement = screen.queryByText("error message");
    expect(errorElement).not.toBeInTheDocument();
  });

  it("renders error", () => {
    const mockFn = jest.fn(() => {});

    const { container } = render(
      <FilePicker
        error={"error message"}
        uploadHandler={mockFn}
        onSizeError={mockFn}
        onTypeError={mockFn}
      />
    );

    const errorElement = screen.getByText("error message");
    expect(errorElement).toBeInTheDocument();
  });
});
