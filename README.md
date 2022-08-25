# Nuxt 3 Blogger

```
# install tiptap
npm install @tiptap/vue-3 @tiptap/starter-kit @tiptap/extension-underline @tiptap/extension-text-align @tiptap/extension-placeholder @tiptap/extension-image @tiptap/extension-heading @tiptap/extension-code @tiptap/extension-character-count @tiptap/extension-bubble-menu @tiptap/extension-link @tiptap/extension-highlight @tiptap/extension-youtube @tiptap/extension-code-block-lowlight

npm install -D @tailwindcss/typography

# update tailwind.config.js
plugins: [require('@tailwindcss/typography'),],
```

## Install @iconify-prerendered
```
npm i @iconify-prerendered/vue-fa6-solid
npm i @iconify-prerendered/vue-fa6-regular
npm i @iconify-prerendered/vue-fa6-brands
```

```
<script setup>
import { IconAccount } from '@iconify-prerendered/vue-mdi' 
</script>

<template>
<a>
  <IconAccount/>
  Go to account
</a>
</template>
```
