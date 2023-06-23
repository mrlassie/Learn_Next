// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { delay } from "@/lib/delay";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const country = req.query.country as string;
  // check if country is in param and return resort list accordingly
  const resort = await prisma.resort.findMany({
    where: {
      countrySlug: country,
    },
  });

  res.status(200).json(resort);
}
