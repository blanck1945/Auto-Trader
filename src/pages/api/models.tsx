import { NextApiRequest, NextApiResponse } from "next";
import * as db from "../../../Helpers/Helpers";
import { getString } from "../../../Helpers/func";

export default async function models(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const make = getString(req.query.make);
  const models = await db.findByModelAndCount(make);
  res.json(models);
}
