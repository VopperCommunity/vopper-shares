<script lang="ts">
  import { browser } from "$app/environment";
  import Navbar from "../../components/navbar/Navbar.svelte";
  import devshares from "$lib/images/devshares.avif";
  import Details from "../../components/pricing/DetailsComponent.svelte";
  import Plans from "../../components/pricing/PlansComponent.svelte";

  let freeOptions = ["Read unlimited", "Publish 1 article"];
  let monthlyOptions = [
    "Read 30 articles per month",
    "Publish 30 articles per month",
    "No ads",
  ];
  let annuallyOptions = [
    "Read 30 articles per month",
    "Publish 30 articles per month",
    "Save articles to read offline",
    "No ads",
  ];

  if (browser) {
    const form = document.querySelector("form") as HTMLFormElement;

    form.addEventListener("submit", (event) => {
      // prevent default action form
      event.preventDefault();
      // get plan selected of the input of type radio
      const selected = document.querySelector(
        'input[name="pricing"]:checked'
      ) as HTMLInputElement;

      console.log(selected.value);
    });
  }
</script>

<!--Remove comment if you want to enable this navbar:
  <Navbar />
-->

<!--General structure-->
<div class="ml-32 mt-10">
  <!--Logo and name of the section page-->
  <div id="name" class="flex items-center">
    <img
      src={devshares}
      alt="devshares"
      class="flex top-[60px] left-[300px] w-[48px] h-[48px]"
    />
    <span class="block font-[Bitter] font-semibold text-[32px]">Quili</span>
  </div>
  <!--Messages with question-->
  <div id="questions" class="flex flex-nowrap">
    <div class="mt-24 ml-16 w-screen-md h-screen-md">
      <h3 class="text-[#6c69f6] mb-5 font-principal">WELCOME TO QUIL!</h3>
      <h1 class="text-[32px] font-bold">Select your subscription plan</h1>

      <div class="mx-auto">
        <!-- El truco está en usar el selector avanzado [&_svg]:open:-rotate-180 -->
        <Details
          title="Can I switch between different subscription plans?"
          message="Yes, our platform provides the flexibility for users to switch between different subscription plan."
        />
        <Details
          title="How do I cancel my subscription if I am not interested anymore?"
          message="Yes, our platform provides the flexibility for users to switch between different subscription plan."
        />
        <Details
          title="Can I get refund after cancelling subscription?"
          message="Yes, our platform provides the flexibility for users to switch between different subscription plan."
        />
      </div>
    </div>
    <!--Offers plans with the values -->
    <div class="pl-48">
      <form class="flex flex-col w-80" method="post">
        <Plans title="Free" options={freeOptions} price="0.00" />
        <Plans title="Monthly" options={monthlyOptions} price="5.49" />
        <Plans title="Annually" options={annuallyOptions} price="50.00" />
        <button
          id="submit"
          class="w-full border text-white bg-[#6c69f6] p-5 rounded-[12px]"
          type="submit">CONTINUE</button
        >
      </form>
    </div>
  </div>
</div>

<!--Move this script to another file if is necessary-->
