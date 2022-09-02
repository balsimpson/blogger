<template>
  <div class="sm:p-6">
    <!-- hero -->
    <div class="overflow-hidden border rounded  bg-stone-200 dark:border-stone-700 dark:text-stone-400 dark:bg-zinc-700">
      <div class="p-6">
      <div class="text-xl font-bold ">Hero</div>
      <div>
        To edit this component, change the contents of
        <code>~/content/hero.md</code>
      </div>
    </div>
    <AppHero :hero="hero"/>
    </div>
    
    <!-- cta -->
    <div class="mt-12 overflow-hidden border rounded bg-stone-200 dark:border-stone-700 dark:text-stone-400 dark:bg-zinc-700">
      
      <div class="p-6">
        <div class="text-xl font-bold">CTA</div>
        <div>
          To edit this component, change the contents of
          <code>~/content/cta.md</code>
        </div>
      </div>
      <AppCta :cta="cta"/>
    </div>

  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
  layout: "admin",
});
useHead({
  title: "Dashboard",
  meta: [
    {
      name: "description",
      content: "Overview of all posts",
    },
  ],
});

const { data: hero } = await useAsyncData("hero", async() =>
  queryContent("/hero").findOne()
);

const { data: cta } = await useAsyncData("cta", async() =>
  queryContent("/cta").findOne()
);

</script>