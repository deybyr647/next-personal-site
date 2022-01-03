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

const validateUser = async (email: string | null | undefined) => {
  const req = await fetch(`/api/users?email=${email}`);
  const res = await req.json();
  return res.authorized;
};

export { updateProject, addProject, validateUser };
