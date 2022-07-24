import db from "../../components/admin/firebaseConfig";

const updateProject = async (url: string, data: object) => {
  const res = await fetch(url, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

  return res.json();
};

const addProject = async (url: string, data: object) => {
  const res = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

  return res.json();
};

const authorizeUser = async (email: string) => {
  const usersCollection = db.collection("auth-users");
  const allUsers = await usersCollection.get();

  const isAuthorized: boolean = allUsers.docs.some((u) => {
    const userDetails = u.data();
    return userDetails.email === email;
  });

  return isAuthorized;
};

export { updateProject, addProject, authorizeUser };
