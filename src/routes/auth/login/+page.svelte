<script>
  import { goto } from "$app/navigation";
  import cookie from "js-cookie";
  import "../../../app.css";

  let formData = {
    email: "",
    password: "",
  };

  const sendData = async () => {
    try {
      const send = await fetch("http://localhost:5000/api/v1/auth/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!send) {
        return "error";
      }

      const tokenSession = await send.json();
      cookie.set("jwt", tokenSession.token, {
        path: "/",
        sameSite: "None",
        secure: true,
      });

      console.log(tokenSession);
      console.log(send);

      await goto("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };
</script>

<!-- component -->
<!-- Container -->
<div class="flex flex-col h-screen bg-gray-100">
  <!-- Auth Card Container -->
  <div class="grid place-items-center mx-2 my-20 sm:my-auto">
    <div class="flex">
      <span class="text-center font-bold my-20 mx-auto">
        <a
          href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
          target="_blank"
          class="text-blue-600"
        >
          Convetert to SASS
        </a>
      </span>
    </div>

    <!-- Auth Card -->
    <div
      class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg"
    >
      <!-- Card Title -->
      <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
        Login
      </h2>

      <form class="mt-10" on:submit|preventDefault={sendData}>
        <!-- Email Input -->
        <label
          for="email"
          class="block text-xs font-semibold text-gray-600 uppercase"
          >E-mail</label
        >
        <input
          id="email"
          type="email"
          name="email"
          bind:value={formData.email}
          placeholder="e-mail address"
          autocomplete="email"
          class="block w-full py-3 px-1 mt-2
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />

        <!-- Password Input -->
        <label
          for="password"
          class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >Password</label
        >
        <input
          id="password"
          type="password"
          name="password"
          bind:value={formData.password}
          placeholder="password"
          autocomplete="current-password"
          class="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
          required
        />

        <!-- Auth Buttton -->
        <button
          type="submit"
          class="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
        >
          Login
        </button>

        <!-- Another Auth Routes -->
        <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
          <a href="#" class="flex-2 underline"> Forgot password? </a>

          <p class="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">or</p>

          <a href="#" class="flex-2 underline"> Create an Account </a>
        </div>
      </form>
    </div>
  </div>
</div>
