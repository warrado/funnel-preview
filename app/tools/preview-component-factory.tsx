import React, { Suspense } from "react";

import { Loader2 } from "lucide-react";

import {
  BlockJson,
  PageJson,
  FunnelJson,
  ListElementJson,
  TextElementJson,
  ButtonElementJson,
  ImageElementJson,
} from "../tools/funnel-data";

// We could probably gather those under one file
import PreviewButton from "../components/preview-button";
import PreviewImage from "../components/preview-image";
import PreviewList, { PreviewListItem } from "../components/preview-list";
import PreviewPage from "../components/preview-page";
import PreviewText from "../components/preview-text";

export default function PreviewComponentFactory(funnelJson: FunnelJson | null) {
  if (!funnelJson) {
    return undefined;
  }

  const pagesList = funnelJson.pages;
  return pagesList.map((pageJson: PageJson) => {
    const blocks = pageJson.blocks.map(createBlock);
    return (
      <Suspense
        key={pageJson.id}
        fallback={<Loader2 size={32} className="text-blue-700 animate-spin" />}
      >
        <PreviewPage key={pageJson.id}>{blocks}</PreviewPage>
      </Suspense>
    );
  });
}

function createBlock(blockJson: BlockJson) {
  switch (blockJson.type) {
    case "button":
      const buttonJson = blockJson as ButtonElementJson;
      return (
        <PreviewButton
          key={buttonJson.id}
          textColor={buttonJson.color}
          bgColor={buttonJson.bgColor}
        >
          {buttonJson.text}
        </PreviewButton>
      );
    case "image":
      const imageJson = blockJson as ImageElementJson;
      return (
        <div className="flex justify-center w-full mt-2 mb-2">
          <PreviewImage
            key={imageJson.id}
            src={imageJson.src}
            alt={imageJson.alt}
          />
        </div>
      );
    case "list":
      const listJson = blockJson as ListElementJson;
      return (
        <PreviewList key={listJson.id}>
          {listJson.items.map((item) => (
            <PreviewListItem
              key={item.id}
              title={item.title}
              description={item.description}
              src={item.src}
            />
          ))}
        </PreviewList>
      );
    case "text":
      const textJson = blockJson as TextElementJson;
      return (
        <PreviewText
          key={textJson.id}
          textColor={textJson.color}
          align={textJson.align}
        >
          {textJson.text}
        </PreviewText>
      );
  }
}
