const { readFileSync, writeFileSync } = require("fs");
const path = require("path");
const { print } = require("graphql");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");

const srcDir = path.join(__dirname, "../src");

const schemaModules = loadFilesSync(
  path.join(srcDir, "modules", "**", "*.graphql"),
  "utf-8"
);

const typeDefs = mergeTypeDefs([...schemaModules]);

writeFileSync(path.join(srcDir, "schema.generated.graphql"), print(typeDefs));

console.log("Schema generated successfully.");
