<template>
  <!-- <editor-content :editor="editor" /> -->
  <div v-if="editor" class="flex flex-col w-full h-full border rounded-lg">
    <!-- <div
      class="sticky top-0 z-20 flex justify-between prose-sm prose bg-white border-b text-neutral-400 sm:prose lg:prose-lg xl:prose-2xl focus:outline-none " -->
    <div
      class="sticky top-0 z-20 flex justify-between bg-white border-b text-neutral-400 focus:outline-none "
    >
      <div class="flex flex-wrap items-center px-4">
        <div class="flex flex-wrap items-center gap-3 mr-3 rounded">
          <IconHeadingH1
            @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            class="cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive('heading', { level: 1 })
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />

          <IconHeadingH2
            @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            class="cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive('heading', { level: 2 })
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />

          <IconHeadingH3
            @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            class="cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive('heading', { level: 3 })
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

          <IconItalic
            @click="editor.chain().focus().toggleItalic().run()"
            class="cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive('italic')
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />

          <IconQuote
            @click="editor.chain().focus().toggleBlockquote().run()"
            class="cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive('blockquote')
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

          <IconCodeBlock
            @click="editor.chain().focus().toggleCodeBlock().run()"
            class="cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive('codeBlock')
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
        </div>
        <div class="flex space-x-3">
          <IconAlignLeft
            @click="editor.chain().focus().setTextAlign('left').run()"
            class="cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive({ textAlign: 'left' })
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />
          <IconAlignMiddle
            @click="editor.chain().focus().setTextAlign('center').run()"
            class="cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive({ textAlign: 'center' })
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />
          <IconAlignRight
            @click="editor.chain().focus().setTextAlign('right').run()"
            class="cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive({ textAlign: 'right' })
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />

          <IconYoutube
            @click="showAddYTLink = !showAddYTLink"
            class="relative cursor-pointer hover:text-teal-500"
            :class="[
              showAddYTLink ? 'is-active text-teal-500' : 'text-neutral-400',
            ]"
          />

          <label
            class="flex flex-col items-center transition-colors cursor-pointer"
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
            class="cursor-pointer hover:text-teal-500"
            :class="[
              editor.isActive({ textAlign: 'right' })
                ? 'is-active text-teal-500'
                : 'text-neutral-400',
            ]"
          />
          <IconRedo
            @click="editor.chain().focus().redo().run()"
            class="cursor-pointer hover:text-teal-500"
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

    <!-- <div
      class="relative flex-grow h-full overflow-y-scroll prose-sm prose sm:prose lg:prose-lg xl:prose-2xl " -->
    <div class="relative flex-grow w-full h-full overflow-y-scroll">
      <editor-content :editor="editor" class="h-full" />
      <!-- add youtube link -->
      <div
        v-if="showAddYTLink"
        @keydown.esc="showAddYTLink = !showAddYTLink"
        class="absolute top-0 z-10 w-full p-2 pb-4 bg-white shadow-xl"
        tabindex="0"
      >
        <div class="relative px-2">
          <label class="text-sm text-stone-500"
            >Paste a YouTube Link

            <input
              v-model="ytLink"
              v-focus
              type="url"
              class="form-input"
              placeholder="https://www.youtube.com/watch?v=aRx4-fsJ5uE"
            />
            <button
              @click="addVideo"
              class="absolute px-3 py-1 text-sm font-semibold uppercase bg-white rounded top-1/2 right-3 "
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
        class="absolute top-0 z-10 w-full p-2 pb-4 bg-white shadow-xl"
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
              placeholder="https://www.youtube.com/watch?v=aRx4-fsJ5uE"
            />
            <button
              @click="addLink"
              class="absolute px-3 py-1 text-sm font-semibold uppercase bg-white rounded top-1/2 right-3 "
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
        class="flex items-center px-2 py-1 space-x-2 bg-black border rounded shadow border-stone-300 "
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
// import Heading from "@tiptap/extension-heading";
import Document from "@tiptap/extension-document";
import Underline from "@tiptap/extension-underline";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Code from "@tiptap/extension-code";
// import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Highlight from "@tiptap/extension-highlight";
// import Blockquote from "@tiptap/extension-blockquote";
import Youtube from "@tiptap/extension-youtube";
import CharacterCount from "@tiptap/extension-character-count";
import { BubbleMenu, useEditor, EditorContent } from "@tiptap/vue-3";
// import { lowlight } from "lowlight/lib/core";
import { lowlight } from "lowlight/lib/common.js";
import {
  IconHeadingH1,
  IconHeadingH2,
  IconHeadingH3,
  IconBold,
  IconItalic,
  IconQuote,
  IconCode,
} from "@iconify-prerendered/vue-gridicons";

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
      },
      // textAlign: {
      //   types: ["heading", "paragraph"]
      // }
    }),
    Image,
    // Link,
    Link.configure({
      openOnClick: false,
    }),
    // Code,
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    Highlight,
    CharacterCount,
    // Blockquote,
    // BulletList,
    // ListItem,
    Youtube,
    // Youtube.configure({
    //   width: "100%",
    // }),
    // CodeBlockLowlight.configure({
    //   lowlight,
    //   languageClassPrefix: "language-",
    // }),
    // TextAlign,
    // TextAlign.configure({
    //   types: ["heading", "paragraph"],
    // }),

    // Placeholder.configure({
    //   emptyEditorClass: "is-editor-empty",
    //   placeholder: ({ node }) => {
    //     // return "Write something …" + node.type.name;
    //     if (node.type.name == "heading") {
    //       return "What’s the title?";
    //     } else {
    //       return "Write something …";
    //     }
    //   },
    // }),
  ],
  editorProps: {
    attributes: {
      class:
        "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none p-5 overflow-y-scroll",
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
  /* min-height: 60vh; */
  background: #ffffff;
  /* height: 100%;
  max-width: 100%;
  padding: 1em;
  border-left: 1px solid #6f6f6f;
  border-right: 1px solid #6f6f6f;
  border-bottom: 1px solid #6f6f6f;
  background: #e9e9e9; */
  border-radius: 0 0 8px 8px;
  transition: color 0.3s ease-in-out;
}
/* .ProseMirror:focus {
  background: #ffffff;
} */
.toolbar {
  border-radius: 8px 8px 0 0;
  border-left: 1px solid #6f6f6f;
  border-right: 1px solid #6f6f6f;
  border-top: 1px solid #6f6f6f;
  /* background: #0d0d0d; */
}
.ProseMirror:focus .toolbar {
  outline: none;
  border-left: 1px solid #5896e7;
  border-right: 1px solid #ca4141;
  border-bottom: 1px solid #af1b1b;
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
  color: #ced4da;
  pointer-events: none;
  height: 0;
}

/* pre {
  background: #a31313;
  color: #fff;
  
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
} */

/* .ProseMirror code {
  font-size: 0.9rem;
  padding: 0.5em;
  border-radius: 0.25em;
  background-color: rgb(213, 213, 213);
  color: #616161;
  box-decoration-break: clone;
} */

.ProseMirror .prose {
  font-size: 0.9rem;
  padding: 0.5em;
  border-radius: 0.25em;
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

/* pre {
  background: #0d0d0d;
  color: #fff;
  font-family: "JetBrainsMono", monospace;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
} */

/* pre {
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 3px solid #f36d33;
  color: #666;
  page-break-inside: avoid;
  font-family: monospace;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 1.6em;
  max-width: 100%;
  overflow: auto;
  padding: 1em 1.5em;
  display: block;
  word-wrap: break-word;
} */

/* code {
  font-size: 0.9rem;
  padding: 0.5em;
  border-radius: 0.25em;
  background-color: rgb(213, 213, 213);
  color: #616161;
  box-decoration-break: clone;
} */

/* .prose :where(code):not(:where([class~="not-prose"] *))::before {
  content: "";
}

.prose :where(code):not(:where([class~="not-prose"] *))::after {
  content: "";
} */

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

.prose pre code {
  color: rgb(255, 255, 255);
  background-color: transparent;
  font-family: "JetBrainsMono", monospace;
  border: none;
}

.hljs-comment,
.hljs-quote {
  color: #616161;
}

.hljs-variable,
.hljs-template-variable,
.hljs-attribute,
.hljs-tag,
.hljs-name,
.hljs-regexp,
.hljs-link,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class {
  color: #f98181;
}

.hljs-number,
.hljs-meta,
.hljs-built_in,
.hljs-builtin-name,
.hljs-literal,
.hljs-type,
.hljs-params {
  color: #fbbc88;
}

.hljs-string,
.hljs-symbol,
.hljs-bullet {
  color: #b9f18d;
}

.hljs-title,
.hljs-section {
  color: #faf594;
}

.hljs-keyword,
.hljs-selector-tag {
  color: #70cff8;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: 700;
}
</style>