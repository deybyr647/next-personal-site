// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import db from "../../components/admin/firebaseConfig";

const projects = async (req: NextApiRequest, res: NextApiResponse) => {
  let projectsRef = db.collection("projects");
  let outList = [];

  if (req.query.name) {
    let query = await projectsRef
      .where("projectName", "==", req.query.name)
      .get();

    try {
      let data = query.docs[0].data();
      let uid = query.docs[0].id;

      let out = {
        ...data,
        uid,
      };

      res.status(200).json(out);
    } catch (err) {
      if (err.message === "Cannot read property 'data' of undefined") {
        let out = {
          project: null,
          error: "Project Not Found!",
        };

        res.status(404).json(out);
      } else {
        let out = {
          project: null,
          error: err.message,
        };

        res.status(500).json(out);
      }
    }
  } else if (req.method === "GET") {
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
    res.status(200).send({ message: "POST Request Succeeded" });
  }
};

export default projects;
