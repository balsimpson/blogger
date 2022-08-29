<template>
  <div class="flex h-screen">
    <NavSidebar :isSidebarActive="isSidebarActive">
      <template #items>
        <li>
          <NuxtLink
            to="/admin"
            class="inline-flex items-center w-full px-4 py-2 mt-1 mb-4 space-x-2 text-base transition duration-200 ease-in-out transform bg-black border rounded-lg text-stone-400 border-stone-700 hover:bg-stone-700 focus:shadow-outline "
          >
            <IconGridAlt />
            <span> Dashboard</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/admin/blog/"
            class="inline-flex items-center w-full px-4 py-2 space-x-2 text-base transition duration-200 ease-in-out transform border rounded-lg text-stone-400 border-stone-700 bg-gblack hover:bg-stone-700 focus:shadow-outline "
          >
            <IconBook />
            <span class="ml-4">Blog</span>
          </NuxtLink>
        </li>

        <div class="py-2 my-2 mt-6 text-xs text-gray-500 border-b border-stone-700">Edit Homepage</div>
        <li class="mb-3">
          <NuxtLink
            to="/admin/edit/hero"
            class="inline-flex items-center w-full space-x-2 text-base font-bold transition duration-200 ease-in-out transform rounded-lg text-stone-500 border-stone-700 bg-gblack hover:text-teal-600 focus:shadow-outline"
          >
            <IconCube />
            <span class="ml-4">Hero</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/admin/edit/features"
            class="inline-flex items-center w-full space-x-2 text-base font-bold transition duration-200 ease-in-out transform rounded-lg text-stone-500 border-stone-700 bg-gblack hover:text-teal-600 focus:shadow-outline"
          >
            <IconCube />
            <span class="ml-4">Features</span>
          </NuxtLink>
        </li>
      </template>
      <template #footer>
        <a
          @click.prevent="signOut"
          href="#"
          class="flex-shrink-0 w-full text-stone-400 group"
        >
          <div class="flex items-center">
            <IconLogOut />
            <div class="ml-3">
              <div class="text-xs text-stone-500">
                {{ userCookie.email }}
              </div>
              <p class="text-sm font-medium text-neutral-200">Sign out</p>
            </div>
          </div>
        </a>
      </template>
    </NavSidebar>

    <div class="w-full h-screen mx-auto overflow-y-scroll bg-stone-300">
      <!-- Main Content -->
      <slot />
    </div>
  </div>
</template>

<script setup>
import {
  IconGridAlt,
  IconTrash,
  IconBook,
  IconMenu,
  IconX,
  IconLogOut,
  IconCube
} from "@iconify-prerendered/vue-bx";
const isSidebarActive = ref(false);
const router = useRouter();

const userCookie = useCookie("userCookie");

const signOut = async () => {
  // console.log("signing out");
  await signOutUser();
  router.push("/admin/signin");
};
</script>

<style>
/* home route and active route will show in bold as it matches / and /about */
/* .nuxt-link-active {
    font-weight: bold;
} */
.router-link-active {
  font-weight: bold;
  color: #059669;
  text-decoration: none;
}
/* a.router-link-active {
  font-weight: bold;
  color: #059669;
  text-decoration: none;
} */
/* exact link will show the primary color for only the exact matching link */
/* a.router-link-exact-active {
  font-weight: bold;
} */
/* exact link will show the primary color for only the exact matching link */
/* a.router-link-hover {
  color: #e1d13c;
} */
</style>

