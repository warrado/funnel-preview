import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PreviewButton from "../app/components/preview-button";
import PreviewImage from "../app/components/preview-image";
import PreviewList, { PreviewListItem } from "../app/components/preview-list";
import PreviewPage from "../app/components/preview-page";
import PreviewText from "../app/components/preview-text";

describe("PreviewText", () => {
  it("renders", () => {
    const { container } = render(
      <PreviewText color={"blue"} align={"right"}>
        test
      </PreviewText>
    );

    const textElement = screen.queryByText("test");
    expect(textElement).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});

describe("PreviewButton", () => {
  it("renders unchanged", () => {
    const { container } = render(
      <PreviewButton textColor={"blue"} bgColor={"black"}>
        test button
      </PreviewButton>
    );

    const buttonElement = screen.queryByText("test button");
    expect(buttonElement).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});

describe("PreviewImage", () => {
  it("renders unchanged", () => {
    const { container } = render(
      <PreviewImage src={"https://via.placeholder.com/150"} alt={"test"} />
    );

    const imageElement = screen.queryByAltText("test");
    expect(imageElement).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});

describe("PreviewList", () => {
  it("renders all children", () => {
    const { container } = render(
      <PreviewList>
        <PreviewListItem
          title={"title1"}
          description={"description1"}
          src={"https://via.placeholder.com/150"}
        />
        <PreviewListItem
          title={"title2"}
          description={"description2"}
          src={"https://via.placeholder.com/250"}
        />
      </PreviewList>
    );

    let listItemElement = container.querySelector('[alt="title1"]');
    expect(listItemElement).toBeInTheDocument();
    listItemElement = container.querySelector('[alt="title2"]');
    expect(listItemElement).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("renders with no children", () => {
    const { container } = render(<PreviewList></PreviewList>);
    expect(container).toMatchSnapshot();
  });

  it("renders all children with mixed children", () => {
    const { container } = render(
      <PreviewList>
        <PreviewListItem
          title={"title1"}
          description={"description1"}
          src={"https://via.placeholder.com/150"}
        />
        <p>Test</p>
      </PreviewList>
    );

    let listItemElement = container.querySelector('[alt="title1"]');
    expect(listItemElement).toBeInTheDocument();
    listItemElement = screen.queryByText("Test");
    expect(listItemElement).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});

describe("PreviewPage", () => {
  it("renders unchanged", () => {
    const { container } = render(
      <PreviewPage>
        <PreviewText color={"blue"} align={"right"}>
          test
        </PreviewText>
        <PreviewButton textColor={"blue"} bgColor={"black"}>
          test button
        </PreviewButton>
        <PreviewImage src={"https://via.placeholder.com/150"} alt={"test"} />
        <PreviewList>
          <PreviewListItem
            title={"title1"}
            description={"description1"}
            src={"https://via.placeholder.com/150"}
          />
          <PreviewListItem
            title={"title2"}
            description={"description2"}
            src={"https://via.placeholder.com/250"}
          />
        </PreviewList>
      </PreviewPage>
    );
    expect(container).toMatchSnapshot();
  });
});
