// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { authorizeUser } from "../../components/admin/util";
import { ProjectProps } from "../../components/projects/ProjectCard";

import db from "../../components/admin/firebaseConfig";
import { Session } from "next-auth";

const projects = async (req: NextApiRequest, res: NextApiResponse) => {
  const session: Session = await getSession({ req });
  const isAuth = await authorizeUser(session?.user?.email);

  const projectsRef = db.collection("projects");

  const { method, body } = req;

  if (!isAuth && method !== "GET") {
    res.status(401).send({ message: "Unauthorized" });
  }

  if (method === "GET") {
    const outList = [];

    try {
      let allProjects = await projectsRef.get();

      for (const project of allProjects.docs) {
        outList.push({ ...project.data(), uid: project.id });
      }

      res.status(200).json(outList);
    } catch (err) {
      res.status(500).send({ message: "GET Request Failed", error: err });
    }
  }

  if (method === "PUT" && isAuth) {
    const { uid } = body;

    const modifiedProjectData: ProjectProps["project"] = {
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

    try {
      await projectsRef.doc(uid).set(modifiedProjectData);
      console.log(`Updated project "${body.projectName}" successfully`);
      res.status(200).send({ message: "PUT Request Succeeded" });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "PUT Request Failed", error: err });
    }
  }

  if (method === "POST" && isAuth) {
    const data: ProjectProps["project"] = {
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

    try {
      await projectsRef.add(data);
      console.log(`Added project "${body.projectName}" successfully`);
      res.status(200).send({ message: "POST Request Succeeded" });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "POST Request Failed", error: err });
    }
  }
};

export default projects;
