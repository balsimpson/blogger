<template>
    <div class="p-6">
      <!-- hero -->
      <div>
        <div class="mt-12 font-bold">Hero</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati illum aperiam doloremque sequi? Necessitatibus maiores fugit magni consequatur harum!</div>
      </div>

      <!-- articles -->
      <div>
        <div class="mt-12 font-bold">Articles</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati illum aperiam doloremque sequi? Necessitatibus maiores fugit magni consequatur harum!</div>
        <div>Articles list</div>
      </div>
      
      <!-- poems -->
      <div>
        <div class="mt-12 font-bold">Poems</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati illum aperiam doloremque sequi? Necessitatibus maiores fugit magni consequatur harum!</div>
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
const router = useRouter();

const signOut = async () => {
  console.log("signOut");
  router.push("/admin/signin");
  signOutUser();
};
</script>