<template>
  <!-- <editor-content :editor="editor" /> -->
  <div
    v-if="editor"
    class="flex flex-col w-full h-full rounded-none sm:rounded-lg"
  >
    <div
      class="sticky top-0 z-20 flex justify-between text-neutral-500 focus:outline-none toolbar "
    >
      <div class="flex flex-wrap items-center p-4">
        <div class="flex flex-wrap items-center">
          <IconHeadingH1
            @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            class="w-8 h-8 cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive('heading', { level: 1 })
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />

          <IconHeadingH2
            @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            class="w-8 h-8 cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive('heading', { level: 2 })
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />

          <IconHeadingH3
            @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            class="w-8 h-8 cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive('heading', { level: 3 })
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />

          <IconBold
            @click="editor.chain().focus().toggleBold().run()"
            class="w-6 cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive('bold')
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />

          <IconItalic
            @click="editor.chain().focus().toggleItalic().run()"
            class="w-6 cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive('italic')
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />

          <IconQuote
            @click="editor.chain().focus().toggleBlockquote().run()"
            class="w-6 cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive('blockquote')
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />

          <!-- <IconCode
            @click="editor.chain().focus().toggleCode().run()"
            class="w-8 cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive('code')
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          /> -->

          <IconCodeBlock
            @click="editor.chain().focus().toggleCodeBlock().run()"
            class="w-8 cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive('codeBlock')
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />

          <IconHighlight
            @click="editor.chain().focus().toggleHighlight().run()"
            class="w-8 cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive('highlight')
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />
          <IconAlignLeft
            @click="editor.chain().focus().setTextAlign('left').run()"
            class="w-8 cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive({ textAlign: 'left' })
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />
          <IconAlignMiddle
            @click="editor.chain().focus().setTextAlign('center').run()"
            class="w-8 cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive({ textAlign: 'center' })
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />
          <IconAlignRight
            @click="editor.chain().focus().setTextAlign('right').run()"
            class="w-8 cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive({ textAlign: 'right' })
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />

          <IconYoutube
            @click="showAddYTLink = !showAddYTLink"
            class="relative w-8 h-8 cursor-pointer hover:text-teal-500"
            :class="[
              showAddYTLink ? 'is-active text-teal-500' : 'text-neutral-400',
            ]"
          />

          <label
            class="flex flex-col items-center w-8 transition-colors cursor-pointer "
          >
            <IconImageAdd
              :class="[
                editor.isActive('image')
                  ? 'is-active text-teal-500'
                  : 'text-neutral-400 hover:text-teal-500',
              ]"
            />
            <input
              @change="uploadImage"
              type="file"
              accept=".jpeg,.jpg,.png,image/jpeg,image/png,image/gif"
              class="sr-only"
            />
          </label>
        </div>
      </div>
      <div class="flex flex-col items-center justify-around p-4 space-y-2">
        <div class="flex justify-between space-x-3">
          <IconUndo
            @click="editor.chain().focus().undo().run()"
            class="w-8 h-8 cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive({ textAlign: 'right' })
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />
          <IconRedo
            @click="editor.chain().focus().redo().run()"
            class="w-8 h-8 cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive({ textAlign: 'right' })
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />
        </div>
        <div class="flex items-center space-x-1 text-sm">
          <span class="text-sm font-bold text-center text-teal-600">{{
            editor.storage.characterCount.words()
          }}</span>
          <span class="text-sm">words</span>
        </div>
      </div>
    </div>

    <div class="relative flex-grow w-full h-full overflow-y-scroll">
      <editor-content :editor="editor" class="h-full" />
      <!-- add youtube link -->
      <div
        v-if="showAddYTLink"
        @keydown.esc="showAddYTLink = !showAddYTLink"
        class="absolute top-0 z-10 w-full p-2 pb-4 bg-white border shadow-xl dark:bg-stone-800 border-stone-700 "
        tabindex="0"
      >
        <div class="relative px-2">
          <label class="text-sm text-stone-500 dark:text-stone-300"
            >Paste a YouTube Link

            <input
              v-model="ytLink"
              v-focus
              type="url"
              class="form-input dark:bg-stone-800 dark:text-stone-400 dark:border-stone-700"
              placeholder="https://www.youtube.com/watch?v=aRx4-fsJ5uE"
            />
            <button
              @click="addVideo"
              class="absolute px-3 py-1 text-sm font-semibold uppercase bg-white rounded top-1/2 right-5 text-stone-600"
            >
              add
            </button>
          </label>
        </div>
      </div>
      <!-- add link -->
      <div
        v-if="showAddLink"
        @keydown.esc="showAddLink = !showAddLink"
        class="absolute top-0 z-10 w-full p-2 pb-4 bg-white border shadow-xl dark:bg-stone-800 border-stone-700 "
        tabindex="0"
      >
        <div class="relative px-2">
          <label class="text-sm text-stone-500"
            >Paste a URL

            <input
              v-model="urlLink"
              v-focus
              type="url"
              class="form-input"
              placeholder="https://www.example.com/"
            />
            <button
              @click="addLink"
              class="absolute px-3 py-1 text-sm font-semibold uppercase bg-white rounded top-1/2 right-5 "
              :class="{ 'is-active': editor.isActive('link') }"
            >
              add
            </button>
          </label>
        </div>
      </div>
    </div>

    <div class="relative">
      <bubble-menu
        class="flex items-center px-2 py-1 space-x-2 bg-black border rounded shadow border-stone-300 dark:border-stone-700 "
        :editor="editor"
        :tippy-options="{ duration: 100 }"
        v-if="editor"
      >
        <IconHeadingH2
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          class="cursor-pointer hover:text-teal-500"
          :class="[
            editor.isActive('heading', { level: 2 })
              ? 'is-active text-teal-500'
              : 'text-neutral-400',
          ]"
        />
        <IconBold
          @click="editor.chain().focus().toggleBold().run()"
          class="cursor-pointer hover:text-teal-500"
          :class="[
            editor.isActive('bold')
              ? 'is-active text-teal-500'
              : 'text-neutral-400',
          ]"
        />
        <IconCode
          @click="editor.chain().focus().toggleCode().run()"
          class="cursor-pointer hover:text-teal-500"
          :class="[
            editor.isActive('code')
              ? 'is-active text-teal-500'
              : 'text-neutral-400',
          ]"
        />
        <IconHighlight
          @click="editor.chain().focus().toggleHighlight().run()"
          class="cursor-pointer hover:text-teal-500"
          :class="[
            editor.isActive('highlight')
              ? 'is-active text-teal-500'
              : 'text-neutral-400',
          ]"
        />
        <IconLink
          @click="addLink"
          class="cursor-pointer hover:text-teal-500"
          :class="[
            editor.isActive('link')
              ? 'is-active text-teal-500'
              : 'text-neutral-400',
          ]"
        />
      </bubble-menu>
    </div>

    <!-- <div>{{ editor.getHTML() }}</div>
    <div v-html="editor.getHTML()"></div> -->
  </div>
</template>

<script setup>
import Document from "@tiptap/extension-document";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import Youtube from "@tiptap/extension-youtube";
import CharacterCount from "@tiptap/extension-character-count";
import { BubbleMenu, useEditor, EditorContent } from "@tiptap/vue-3";

import {
  IconHeadingH1,
  IconHeadingH2,
  IconHeadingH3,
  IconBold,
  IconItalic,
  IconQuote,
  IconCode,
} from "@iconify-prerendered/vue-gridicons";

import { IconTypeH1 } from "@iconify-prerendered/vue-bi";

import {
  IconHighlight,
  IconAlignLeft,
  IconAlignRight,
  IconAlignMiddle,
  IconAlignJustify,
  IconUndo,
  IconRedo,
  IconImageAdd,
  IconCodeBlock,
  IconLink,
} from "@iconify-prerendered/vue-bx";
import { IconYoutube } from "@iconify-prerendered/vue-bxl";

const props = defineProps(["content"]);
const emit = defineEmits();
const showAddYTLink = ref("");
const showAddLink = ref("");
const ytLink = ref("");
const urlLink = ref("");
const runtimeConfig = useRuntimeConfig();

const vFocus = {
  mounted: (el) => el.focus(),
};

const CustomDocument = Document.extend({
  content: "heading block*",
});

const editor = useEditor({
  extensions: [
    CustomDocument,
    StarterKit.configure({
      document: false,
      heading: {
        levels: [1, 2, 3, 4, 5, 6],
      }
    }),
    Image,
    Link.configure({
      openOnClick: false,
    }),
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    Highlight,
    CharacterCount,
    Youtube,
    Placeholder.configure({
      emptyEditorClass: "is-editor-empty",
      placeholder: ({ node }) => {
        // return "Write something …" + node.type.name;
        if (node.type.name == "heading") {
          return "What’s the title?";
        } else {
          return "Write something …";
        }
      },
    }),
  ],
  editorProps: {
    attributes: {
      class:
        "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none p-5 overflow-y-scroll dark:bg-stone-800",
    },
  },
  content: props.content,
  autofocus: true,
  onUpdate: ({ editor }) => {
    emit("update", editor.getJSON());
  },
});

const readData = (f) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(f);
  });
};

const uploadImage = async (event) => {
  let file = event.target.files[0];
  // const data = await readData(file);

  let formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", runtimeConfig.CLOUDINARY_UPLOAD_PRESET);
  formData.append("folder", "blog");

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${runtimeConfig.CLOUDINARY_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const res = await response.json();

  if (res.secure_url) {
    editor.value.chain().focus().setImage({ src: res.secure_url }).run();
  }
};

// add YouTube video
const addVideo = (url) => {
  if (ytLink.value) {
    editor.value.commands.setYoutubeVideo({
      src: ytLink.value,
    });
    ytLink.value = "";
    showAddYTLink.value = false;
  }
};

// add URL video
const addLink = (url) => {
  const previousUrl = editor.value.getAttributes("link").href;
  // console.log(previousUrl)

  if (previousUrl) {
    editor.value.commands.unsetLink({
      href: urlLink.value,
    });
    return;
  }

  showAddLink.value = !showAddLink.value;

  if (urlLink.value) {
    editor.value.commands.setLink({
      href: urlLink.value,
    });
    urlLink.value = "";
    showAddLink.value = false;
  }
};

// onBeforeUnmount(() => {
//   editor.value.destroy();
// });
</script>

<style>
.ProseMirror {
  height: inherit;
  max-width: 100%;
  min-height: 20vh;
  background: #ffffff;
  color: #303030;
  /* height: 100%; */
  /* max-width: 100%; */
  /* padding: 1em; */
  border-left: 1px solid #b6b6b6;
  border-right: 1px solid #b6b6b6;
  border-bottom: 1px solid #b6b6b6;
  /* background: #d6d6d6; */
  border-radius: 0 0 10px 10px;
  transition: color 0.3s ease-in-out;
}

.prose h1 {
  margin-top: 0.25em;
  margin-bottom: 0.25em;
}

.prose h2 {
  margin-top: 1em;
  margin-bottom: 0.25em;
}

.prose h3 {
  margin-top: 1em;
  margin-bottom: 0.25em;
}

@media (prefers-color-scheme: dark) {
  .ProseMirror {
    background: #303030;
    color: #adb5bd;
    border-left: 1px solid #3e3e3e;
    border-right: 1px solid #3e3e3e;
    border-bottom: 1px solid #3e3e3e;
  }
}

.toolbar {
  /* border-radius: 8px 8px 0 0; */
  border-left: 1px solid #b6b6b6;
  border-right: 1px solid #b6b6b6;
  border-top: 1px solid #b6b6b6;
  background: #ececec;
}

@media (prefers-color-scheme: dark) {
  .toolbar {
    background: #212121;
    border-left: 1px solid #3e3e3e;
    border-right: 1px solid #3e3e3e;
    border-top: 1px solid #3e3e3e;
  }
}

.prose :where(h1):not(:where([class~="not-prose"] *)) {
  color: #424242;
  font-weight: 800;
  font-size: 2.25em;
  margin-top: 0;
  margin-bottom: 0.8888889em;
  line-height: 1.1111111;
}

@media (prefers-color-scheme: dark) {
  .prose :where(h1):not(:where([class~="not-prose"] *)) {
    color: rgb(194, 194, 194);
    font-weight: 800;
    font-size: 2.25em;
    margin-top: 0;
    margin-bottom: 0.8888889em;
    line-height: 1.1111111;
  }
}

/* Placeholder (at the top) */
.ProseMirror is-empty:first::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}

/* Placeholder (on every new line) */
.ProseMirror h1.is-empty::before {
  content: attr(data-placeholder);
  float: left;
  color: #d2d2d2;
  pointer-events: none;
  height: 0;
}

@media (prefers-color-scheme: dark) {
  .ProseMirror h1.is-empty::before {
    color: #676767;
  }
}

.prose :where(a):not(:where([class~="not-prose"] *)) {
  color: rgb(28, 113, 174);
  text-decoration: none;
  font-weight: 500;
}

@media (prefers-color-scheme: dark) {
  .prose :where(a):not(:where([class~="not-prose"] *)) {
    color: rgb(28, 113, 174);
    text-decoration: none;
    font-weight: 500;
  }
}

@media (prefers-color-scheme: dark) {
  .prose :where(h2):not(:where([class~="not-prose"] *)) {
    color: #adb5bd;
  }
}

@media (prefers-color-scheme: dark) {
  .prose :where(h3):not(:where([class~="not-prose"] *)) {
    color: #adb5bd;
  }
}

.ProseMirror .prose {
  font-size: 0.9rem;
  padding: 0.5em;
  background-color: rgb(213, 213, 213);
  color: #616161;
  box-decoration-break: clone;
}

img {
  max-width: 100%;
  height: auto;
}

blockquote {
  padding-left: 1rem;
  border-left: 3px solid rgba(#0d0d0d, 0.1);
}

hr {
  border: none;
  border-top: 2px solid rgba(#0d0d0d, 0.1);
  margin: 2rem 0;
}

.prose :where(pre):not(:where([class~="not-prose"] *)) {
  background-color: #000000;
  color: #adb5bd;
}

.prose code {
  word-wrap: break-word;
  box-decoration-break: clone;
  border-radius: 0.2rem;
  border: 1px solid #dedede;
  color: crimson;
  background-color: #e7e7e7;
  padding-left: 4px;
  padding-right: 4px;
}

@media (prefers-color-scheme: dark) {
  .prose code {
    border: 1px solid #575757;
    color: #e19428;
    background-color: #575757;
  }
}

.prose pre code {
  color: rgb(255, 255, 255);
  background-color: transparent;
  font-family: "JetBrainsMono", monospace;
  border: none;
}

.prose :where(code):not(:where([class~="not-prose"] *))::before {
  content: "";
}

.prose :where(code):not(:where([class~="not-prose"] *))::after {
  content: "";
}
</style>