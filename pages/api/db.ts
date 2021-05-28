// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import db from '../../components/firebaseConfig';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    let projectList = [];

    let projectsRef = db.collection("projects");
    let allProjects = await projectsRef.get();

    for(const project of allProjects.docs){
        projectList.push({...project.data()});
    }

    res.status(200).json({projectList});
}