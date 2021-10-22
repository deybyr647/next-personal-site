// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import db from "../../components/admin/firebaseConfig";

const projects = async (req: NextApiRequest, res: NextApiResponse) => {
  let projectsRef = db.collection("projects");
  let outList = [];

  if (req.method === "GET") {
    let allProjects = await projectsRef.get();

    for (const project of allProjects.docs) {
      outList.push({ ...project.data(), uid: project.id });
    }

    res.status(200).json(outList);
  }

  if (req.method === "PUT" && req.body.exists) {
    const body = req.body;
    const uid = body.uid;
    console.log(body);

    const data = {
      githubLink: body.githubLink,
      liveDemoLink: body.liveDemoLink,
      longDescription: body.longDescription,
      projectName: body.projectName,
      shortDescription: body.shortDescription,
      tagline: body.tagline,
      techStack: body.techStack,
      imgSrc: body.imgSrc,
      logoSrc: body.logoSrc,
    };

    await db.collection("projects").doc(uid).set(data);
    res.status(200).send({ message: "PUT Request Succeeded" });
  }

  if (req.method === "POST" && !req.body.exists) {
    const body = req.body;
    console.log(body);

    const data = {
      githubLink: body.githubLink,
      liveDemoLink: body.liveDemoLink,
      longDescription: body.longDescription,
      projectName: body.projectName,
      shortDescription: body.shortDescription,
      tagline: body.tagline,
      techStack: body.techStack,
      imgSrc: body.imgSrc,
      logoSrc: body.logoSrc,
    };

    await db.collection("projects").add(data);
    res.status(200).send({ message: "POST Request Succeeded" });
  }
};

export default projects;
