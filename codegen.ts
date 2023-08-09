import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    ["./schema.gql"]: {},
  },
  documents: [
    "src/**/*.{ts,tsx,graphql,gql}",
    "!src/generated/graphql/**/*.{ts,tsx}",
  ],
  ignoreNoDocuments: true,
  generates: {
    "./src/generated/graphql/": {
      preset: "client",
    },
  },
};

export default config;
