import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import FunnelPreview from "../app/components/funnel-preview";
import PreviewPage from "../app/components/preview-page";

describe("FunnelPreview", () => {
  it("renders", () => {
    const { container } = render(
      <FunnelPreview bgColor="white">
        <PreviewPage></PreviewPage>
        <PreviewPage></PreviewPage>
      </FunnelPreview>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders msg when no children", () => {
    const { container } = render(
      <FunnelPreview bgColor="white">
      </FunnelPreview>
    );

    const textElement = screen.queryByText("No funnel data to show.", {exact: false});
    expect(textElement).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
