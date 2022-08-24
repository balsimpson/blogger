<template>
  <div class="flex items-center justify-center min-h-screen bg-black">
    <div class="w-full max-w-md px-12 py-12 mx-auto bg-black rounded shadow">
      <div
        class="mt-6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-800 "
      >
        Sign in.
      </div>

      <div class="w-full mx-auto mt-12">
        <form @submit="login" class="space-y-4">
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-left text-gray-500"
            >
              Email
            </label>
            <div class="mt-1">
              <input
                v-model="emailInput"
                type="email"
                autocomplete="email"
                required="true"
                placeholder="john@doe.com"
                class="w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out border rounded outline-none text-stone-200 bg-stone-600 border-stone-600 bg-opacity-20 focus:bg-transparent focus:ring-1 placeholder-stone-700 focus:ring-yellow-500 focus:border-yellow-500 "
              />
            </div>
          </div>
          <div class="space-y-1">
            <label
              for="password"
              class="block text-sm font-medium text-left text-gray-500"
            >
              Password
            </label>
            <div class="mt-1">
              <input
                v-model="passwordInput"
                id="password"
                type="password"
                autocomplete="current-password"
                required="true"
                placeholder="password"
                class="w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out border rounded outline-none text-stone-200 bg-stone-600 border-stone-600 bg-opacity-20 focus:bg-transparent focus:ring-1 placeholder-stone-700 focus:ring-yellow-500 focus:border-yellow-500 "
              />
            </div>
          </div>

          <div class="mt-1">
            <div class="h-2 mb-4 text-sm text-brand-500">
              {{ loginErrorMsg }}
            </div>
            <button
              @click.prevent="login"
              class="w-full px-4 py-2 font-bold text-white rounded"
              :class="[
                emailInput && passwordInput
                  ? 'bg-stone-600'
                  : 'bg-stone-800 text-stone-600 pointer-events-none',
              ]"
            >
              {{btnText}}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { signInUser } from "~/composables/useFirebase";

const loginErrorMsg = ref("");
const emailInput = ref("");
const passwordInput = ref("");
const router = useRouter();
const route = useRoute();

const btnText = ref("Sign in");

const login = async () => {
  try {
    btnText.value = "Signing in...";
    let res = await signInUser(emailInput.value, passwordInput.value);
    // console.log(res);
    if (res.user) {
      router.push("/admin");
    } else {
      loginErrorMsg.value = res;
      setTimeout(() => {
        loginErrorMsg.value = "";
      }, 2000);
    }
  } catch (error) {
    console.log("error", error);
  }
};

const errorMsg = (err) => {
  console.log(typeof err);
  if ((err = "user not found")) {
  }
};

onMounted(() => {
  const userCookie = useCookie("userCookie");
  if (userCookie) {
    router.push("/admin");
  }
});
</script>

<style>
</style>