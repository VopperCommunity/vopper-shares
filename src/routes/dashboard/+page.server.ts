import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import jwt from "jsonwebtoken";

export const load: PageServerLoad = async ({ cookies }) => {
  const token = cookies.get("jwt");
  const decodeToken = jwt.decode(token || "");
  console.log(token, decodeToken);

  try {
    if (cookies === undefined) throw new Error("no existe el token");
    const validateSessionUser = await fetch(
      "http://localhost:5000/api/v1/info",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Cookie: `jwt=${token};`,
        },
        credentials: "include",
      }
    );

    console.log(validateSessionUser);
    if (!validateSessionUser.ok) throw new Error("error al intentar acceder");

    // return {
    //     user: decodeToken as MessageJwT
    // }
  } catch (error) {
    return redirect(303, "auth/login");
  }
};
