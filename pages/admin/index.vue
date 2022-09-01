<template>
  <div class="sm:p-6">
    <!-- hero -->
    <div class="p-6 sm:p-0">
      <div class="mt-12 text-xl font-bold">Hero</div>
      <div>
        To edit this component, change the contents of
        <code>~/content/hero.md</code>
      </div>
    </div>
    <AppHero :hero="hero"/>

    <!-- articles -->
    <div>
      <div class="mt-12 font-bold">Articles</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati
        illum aperiam doloremque sequi? Necessitatibus maiores fugit magni
        consequatur harum!
      </div>
      <div>Articles list</div>
    </div>

    <!-- poems -->
    <div>
      <div class="mt-12 font-bold">Poems</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati
        illum aperiam doloremque sequi? Necessitatibus maiores fugit magni
        consequatur harum!
      </div>
      <div>Poems list</div>
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

const { pending, data: hero } = await useAsyncData("hero", async() =>
  queryContent("/hero").findOne()
);

</script>