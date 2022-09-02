<template>
  <div class="flex flex-col items-center justify-center w-full h-full p-3">
    <div class="p-6 text-center">
      <div class="flex flex-col items-center justify-center space-x-3 text-3xl font-black tracking-tight font-arvo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-12 h-12 text-emerald-600"
        >
          <path
            fill-rule="evenodd"
            d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>Congratulations!
      </div>
      <div class="text-2xl text-cyan-600">
        Your blog is successfully deployed.
      </div>
      <div class="mt-6 text-md text-stone-500">
        <div class="max-w-md mx-auto">Create an admin user as shown below to sign in to your admin panel at</div>
        <a
          :href="`${$route.query['deployment-url']}/admin`"
          target="_blank"
          class="inline-block font-bold underline"
          >{{ `${$route.query["deployment-url"]}/admin` }}</a
        >
      </div>

      <!-- <div class="mt-12 mb-6 text-2xl font-black">Checklist</div> -->
      <div
        class="flex items-center justify-center p-2 mx-auto mt-6 space-x-2 text-3xl font-semibold text-cyan-600"
      >
        
        <div>Create Admin User</div>

    </div>
    <div class="max-w-md mx-auto mb-3 text-sm">In your Firebase project under Authetication, enable Email/Password sign in method and then add a new user.</div>
      <div class="p-4 text-left border">
        <div class="px-4 border-b">
          <div class="text-xl font-bold">Enable Email/Password</div>
          <div class="max-w-md mb-3 text-sm text-left">
            On the Firebase Console, go to Authentication > Sign-in method and
            click on Add new provider and enable Email/Password.
          </div>
        </div>
        <img src="/demo_auth_email_enable.png" alt="" class="py-2" />
      </div>
      
      <div class="p-4 mt-3 text-left border">
        <div class="px-4 border-b">
          <div class="text-xl font-bold">Add Admin User</div>
          <div class="max-w-md mb-3 text-sm text-left">
            On the Firebase Console, go to Authentication > Users to add a new
          user. You'll use these credentials to sign in to your admin panel.
          </div>
        </div>
        <img src="/demo_auth_add_user.png" alt="" class="py-2" />
      </div>
    </div>
  </div>
</template>