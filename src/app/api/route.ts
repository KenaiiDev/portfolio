import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import mongoConnection from "@/utils/mongoConnection";
import Project from "@/models/projectModel";

export const GET = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    await mongoConnection();
    const projects = await Project.find();
    res.statusCode = 200;
    return NextResponse.json({ projects });
  } catch (error) {
    console.log(error);
  }
};
