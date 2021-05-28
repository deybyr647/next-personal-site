// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import db from "../../components/firebaseConfig";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    let projectsRef = db.collection("projects");
    let outList = [];

    if(req.query.name) {
        let query = await projectsRef.where("projectName", "==", req.query.name);
        let queryResult = await query.get();

        try {
            let data = queryResult.docs[0].data();

            let out = {
                project: data
            }

            res.status(200).json(out);
        }

        catch (err) {
            if(err.message === "Cannot read property 'data' of undefined"){

                let out = {
                    project: null,
                    error: "Project Not Found!"
                }

                res.status(404).json(out);
            }

            else {

                let out = {
                    project: null,
                    error: err.message
                }

                res.status(500).json(out);
            }
        }
    }

    else {
        let allProjects = await projectsRef.get();

        for(const project of allProjects.docs){
            outList.push({...project.data()});
        }

        res.status(200).json(outList);
    }
}