"use client";

import { useState } from "react";
import { ParseResult } from "@exodus/schemasafe";

import FilePicker from "./components/file-picker";
import FunnelPreview from "./components/funnel-preview";

import parseFunnelData, { FunnelJson } from "./tools/funnel-data";
import PreviewComponentFactory from "./tools/preview-component-factory";

export default function Home() {
  const [fileContent, setFileContent] = useState<FunnelJson | null>(null);
  const [error, setError] = useState("");

  const onTypeError = () => {
    setError("Invalid file type. Please upload a JSON file.");
  };

  const onSizeError = () => {
    setError("File size too large. Please upload a file smaller than 2MB.");
  };

  const onReadError = () => {
    setError("Error reading the file. Please try again.");
  };

  const onJSONError = (e: ParseResult) => {
    // The errors returned by the JSON schema parser are not very user-friendly or useful
    // but we'll try to make it at least a bit better.
    if(e.errors && e.errors.length !== 0) {
      const re = /\#\/pages\/(\d+)blocks\/(\d+)/g;
      const errorMsg = e.errors[0].instanceLocation;
      const matches = [...errorMsg.matchAll(re)][0];

      const pageNo = parseInt(matches[1]) + 1;
      const blockNo = parseInt(matches[2]) + 1;
      setError(
        `Error parsing Funnel definition. Error at page ${pageNo}, block ${blockNo}. Check your funnel definition, and try again.`
      );
    }
  };

  const onJsonLoad = (file: File) => {
    console.log('test');
    const reader = new FileReader();
    reader.onload = () => {
      // here we need to check against the json schema and if that's even a JSON at all
      if (reader.result) {
        // we are 100% sure result is not an ArrayBuffer, as long as we're using `readAsText`
        const parsedContent = parseFunnelData(reader.result as string) as ParseResult;

        if (parsedContent.error) {
          onJSONError(parsedContent);
          return;
        }

        if (parsedContent.value) {
          const content = parsedContent.value as FunnelJson;
          setFileContent(content);
          setError("");
        }
      } else {
        onReadError();
      }
    };
    reader.onerror = onReadError;

    reader.readAsText(file);
  };

  console.log("error", error);

  return (
    <div className="grid grid-cols-2 items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter-sans)]">
      <FilePicker
        uploadHandler={onJsonLoad}
        onTypeError={onTypeError}
        onSizeError={onSizeError}
        error={error}
      />
      <FunnelPreview bgColor={fileContent ? fileContent.bgColor : "white"}>
        {PreviewComponentFactory(fileContent)}
      </FunnelPreview>
    </div>
  );
}
