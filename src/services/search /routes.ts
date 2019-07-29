import { Request, Response } from "express";
import { HTTP401Error } from "../../utils/httpErrors";
import { getPlacesByName } from './SearchController';

export default [
  {
    path: "/api/v1/search",
    method: "get",
    handler: [
      async ({ query }: Request, res: Response) => {
        const result = await getPlacesByName(query.q);
        res.status(200).send(result);
      }
    ]
  }
];
