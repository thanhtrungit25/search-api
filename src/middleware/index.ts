import {
  handleCors,
  handleBodyRequestParsering,
  handleCompression
} from "./common";

import { handleAPIDocs } from "./apiDocs";

export default [
  handleCors,
  handleBodyRequestParsering,
  handleCompression,
  handleAPIDocs
];
