import { isBuiltin } from "node:module";
import { dirname } from "node:path";
import { promisify } from "node:util";
import { fileURLToPath, pathToFileURL } from "node:url";

import resolveCallback from "resolve";
import { resolve as resolveTs, load } from "ts-node/esm";
import { loadConfig, createMatchPath } from "tsconfig-paths";

const resolveAsync = promisify(resolveCallback);
const tsExtensions = new Set([".tsx", ".ts", ".mts", ".cts"]);

const { absoluteBaseUrl, paths } = loadConfig();
const matchPath = createMatchPath(absoluteBaseUrl, paths);

async function resolve(specifier, ctx, defaultResolve) {
  const { parentURL = pathToFileURL(absoluteBaseUrl) } = ctx;

  if (isBuiltin(specifier)) return defaultResolve(specifier, ctx);

  if (specifier.startsWith("file://")) specifier = fileURLToPath(specifier);
  const resolution = await resolveAsync(matchPath(specifier) || specifier, {
    basedir: dirname(fileURLToPath(parentURL)),
    extensions: [".js", ".json", ".node", ".mjs", ...tsExtensions],
  });

  return resolveTs(pathToFileURL(resolution).href, ctx, defaultResolve);
}

export { load, resolve };
