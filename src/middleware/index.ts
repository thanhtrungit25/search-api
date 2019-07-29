import {
  handleCors,
  handleBodyRequestParsering,
  handleCompression
} from "./common";

export default [handleCors, handleBodyRequestParsering, handleCompression];
