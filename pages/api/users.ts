// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import db from "../../components/admin/firebaseConfig";

const users = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(403).json({ error: "Forbidden Request!" });
  }

  const { email } = req.query;
  const usersRef = db.collection("auth-users");
  const allUsers = await usersRef.get();

  const isValidUser: boolean = allUsers.docs.some((u) => {
    const userDetails = u.data();
    return userDetails.email === email;
  });

  if (isValidUser) {
    res.status(200).json({ authorized: true, userEmail: email });
  } else {
    res.status(401).json({ authorized: false, userEmail: email });
  }
};

export default users;
