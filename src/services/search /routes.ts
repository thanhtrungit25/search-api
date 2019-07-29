import { Request, Response } from "express";
import { HTTP401Error } from "../../utils/httpErrors";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      // res.send("Hello World!!!");
      let err = new HTTP401Error();
      console.log('err:', err)
      throw err;
    }
  }
];
