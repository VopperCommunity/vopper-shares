<script lang="ts">
  /*
  import "../../app.css";
  import cookies from "js-cookie";
  import { jwtDecode } from "jwt-decode";
  import { onMount } from "svelte";

  let id: any;
  let user: any;
  let posts: Array<string>

  let formData = {
    title: "",
  };

  const tokenUser = cookies.get("jwt");

  console.log(tokenUser);

  id = jwtDecode(String(tokenUser));
  console.log(typeof id);
  console.log(id);

  const { userId } = id;
  console.log(userId);

  const createPost = async () => {
    const tokenUser = cookies.get("jwt");

    console.log(tokenUser);

    try {
      const sendData = await fetch(
        `http://localhost:5000/api/v1/posts/create-post/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenUser}`,
          },
          body: JSON.stringify(formData),
        }
      );

      console.log(sendData);
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };

  const getDataUser = async () => {
    try {
      const userData = await fetch(
        `http://localhost:5000/api/v1/user/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenUser}`,
          },
        }
      );

      if (!userData.ok) throw new Error("error al obtener los datos");

      user = await userData.json();
      posts = user.posts
      console.log(user);
      
      console.log(posts);
    } catch (error) {
      throw new Error("error");
    }
  };

  onMount(() => {
    getDataUser();
  });
  */
</script>