import { parser, Schema } from "@exodus/schemasafe";

const funnelDataSchema: Schema = {
  $schema: "http://json-schema.org/draft/2020-12/schema#",
  type: "object",
  additionalProperties: false,
  properties: {
    name: {
      pattern: "^.*$",
      type: "string",
    },
    bgColor: {
      pattern: "^.*$",
      type: "string",
    },
    pages: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          id: {
            pattern: "^.*$",
            type: "string",
          },
          blocks: {
            type: "array",
            items: {
              unevaluatedProperties: false,
              anyOf: [
                {
                  $comment: "image element subschema",
                  type: "object",
                  properties: {
                    id: {
                      pattern: "^.*$",
                      type: "string",
                    },
                    type: {
                      pattern: "^.*$",
                      type: "string",
                    },
                    alt: {
                      pattern: "^.*$",
                      type: "string",
                    },
                    src: {
                      pattern: "^.*$",
                      type: "string",
                    },
                  },
                  required: ["src"],
                },
                {
                  $comment: "text element subschema",
                  type: "object",
                  properties: {
                    "id": {
                      pattern: "^.*$",
                      type: "string",
                    },
                    "type": {
                      pattern: "^.*$",
                      type: "string",
                    },
                    text: {
                      pattern: "^.*$",
                      type: "string",
                    },
                    color: {
                      pattern: "^.*$",
                      type: "string",
                    },
                    align: {
                      pattern: "^.*$",
                      type: "string",
                    },
                  },
                  required: ["id", "type", "text", "color", "align"],
                },
                {
                  $comment: "button element subschema",
                  type: "object",
                  properties: {
                    id: {
                      pattern: "^.*$",
                      type: "string",
                    },
                    type: {
                      pattern: "^.*$",
                      type: "string",
                    },
                    text: {
                      pattern: "^.*$",
                      type: "string",
                    },
                    color: {
                      pattern: "^.*$",
                      type: "string",
                    },
                    bgColor: {
                      pattern: "^.*$",
                      type: "string",
                    },
                  },
                  required: ["id", "type", "text", "color", "bgColor"],
                },
                {
                  $comment: "list element subschema",
                  type: "object",
                  properties: {
                    id: {
                      pattern: "^.*$",
                      type: "string",
                    },
                    type: {
                      pattern: "^.*$",
                      type: "string",
                    },
                    items: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          id: {
                            pattern: "^.*$",
                            type: "string",
                          },
                          title: {
                            pattern: "^.*$",
                            type: "string",
                          },
                          description: {
                            pattern: "^.*$",
                            type: "string",
                          },
                          src: {
                            pattern: "^.*$",
                            type: "string",
                          },
                        },
                        required: ["id", "title", "description", "src"],
                        additionalProperties: false
                      },
                    },
                  },
                  required: ["id", "type", "items"],
                },
              ],
            },
          },
        },
        required: ["id", "blocks"],
      },
    },
  },
  required: ["name", "bgColor", "pages"],
};

const parseFunnelData = parser(funnelDataSchema, { includeErrors: true });
export default parseFunnelData;

// I wish this was generated from the schema, but I haven't found a quick and easy way to do it.
export type TextElementJson = {
  id: string;
  type: string;
  text: string;
  color: string;
  align: string;
}

export type ImageElementJson = {
  id: string;
  type: string;
  src: string;
  alt: string;
}

export type ButtonElementJson = {
  id: string;
  type: string;
  text: string;
  color: string;
  bgColor: string;
}

export type ListItemJson = {
  id: string;
  title: string;
  description: string;
  src: string;
}

export type ListElementJson = {
  id: string;
  type: string;
  items: ListItemJson[];
}

export type BlockJson = TextElementJson | ImageElementJson | ButtonElementJson | ListElementJson;

export type PageJson = {
  id: string;
  blocks: BlockJson[];
}

export type FunnelJson = {
  name: string;
  bgColor: string;
  pages: PageJson[];
}