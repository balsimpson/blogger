<template>
  <!-- <editor-content :editor="editor" /> -->
  <div v-if="editor" class="flex flex-col h-full">
    <div
      class="sticky top-0 z-20 flex justify-between prose-sm prose bg-white text-neutral-400 sm:prose lg:prose-lg xl:prose-2xl focus:outline-none "
    >
      <div class="px-2">
        <div class="flex flex-wrap items-center gap-3 p-2 rounded sm:gap-5">
          <TipTapHeading1
            @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            class="hover:text-blue-500"
            :class="[
              editor.isActive('heading', { level: 1 })
                ? 'is-active text-blue-500'
                : 'text-neutral-400',
            ]"
          />
          <TipTapHeading2
            @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            class="hover:text-blue-500"
            :class="[
              editor.isActive('heading', { level: 2 })
                ? 'is-active text-blue-500'
                : 'text-neutral-400',
            ]"
          />
          <TipTapHeading3
            @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            class="hover:text-blue-500"
            :class="[
              editor.isActive('heading', { level: 3 })
                ? 'is-active text-blue-500'
                : 'text-neutral-400',
            ]"
          />

          <TipTapBold
            @click="editor.chain().focus().toggleBold().run()"
            class="hover:text-blue-500"
            :class="[
              editor.isActive('bold')
                ? 'is-active text-blue-500'
                : 'text-neutral-400',
            ]"
          />

          <TipTapItalic
            @click="editor.chain().focus().toggleItalic().run()"
            class="hover:text-blue-500"
            :class="[
              editor.isActive('italic')
                ? 'is-active text-blue-500'
                : 'text-neutral-400',
            ]"
          />

          <TipTapCode
            @click="editor.chain().focus().toggleCode().run()"
            class="hover:text-blue-500"
            :class="[
              editor.isActive('code')
                ? 'is-active text-blue-500'
                : 'text-neutral-400',
            ]"
          />

          <TipTapCodeBlock
            @click="editor.chain().focus().toggleCodeBlock().run()"
            class="hover:text-blue-500"
            :class="[
              editor.isActive('codeBlock')
                ? 'is-active text-blue-500'
                : 'text-neutral-400',
            ]"
          />

          <!-- blockquote -->
          <TipTapBlockquote
            @click="editor.chain().focus().toggleBlockquote().run()"
            class="hover:text-blue-500"
            :class="[
              editor.isActive('blockquote')
                ? 'is-active text-blue-500'
                : 'text-neutral-400',
            ]"
          />

          <!-- highlight -->
          <TipTapHighlight
            @click="editor.chain().focus().toggleHighlight().run()"
            class="hover:text-blue-500"
            :class="[
              editor.isActive('highlight')
                ? 'is-active text-blue-500'
                : 'text-neutral-400',
            ]"
          />

          <!-- YouTube -->
          <TipTapYoutube
            @click="showAddYTLink = !showAddYTLink"
            class="relative hover:text-blue-500"
            :class="[
              showAddYTLink ? 'is-active text-blue-500' : 'text-neutral-400',
            ]"
          />

          <label
            class="flex flex-col items-center transition-colors cursor-pointer hover:text-neutral-400 "
          >
            <div
              class=""
              :class="[
                editor.isActive('image')
                  ? 'is-active text-blue-500'
                  : 'text-neutral-400',
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993V13h-2V5H4v13.999L14 9l3 3v2.829l-3-3L6.827 19H14v2H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
                />
              </svg>
            </div>
            <input
              @change="uploadImage"
              type="file"
              accept=".jpeg,.jpg,.png,image/jpeg,image/png,image/gif"
              class="sr-only"
            />
          </label>

          <TipTapTextAlignLeft
            @click="editor.chain().focus().setTextAlign('left').run()"
            class="hover:text-blue-500"
            :class="[
              editor.isActive({ textAlign: 'left' })
                ? 'is-active text-blue-500'
                : 'text-neutral-400',
            ]"
          />

          <TipTapTextAlignCenter
            @click="editor.chain().focus().setTextAlign('center').run()"
            class="hover:text-blue-500"
            :class="[
              editor.isActive({ textAlign: 'center' })
                ? 'is-active text-blue-500'
                : 'text-neutral-400',
            ]"
          />

          <TipTapTextAlignRight
            @click="editor.chain().focus().setTextAlign('right').run()"
            class="hover:text-blue-500"
            :class="[
              editor.isActive({ textAlign: 'right' })
                ? 'is-active text-blue-500'
                : 'text-neutral-400',
            ]"
          />

          <div class="text-sm">
            <span class="font-bold text-blue-400">{{
              editor.storage.characterCount.words()
            }}</span>
            words
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-around px-4">
        <div class="flex justify-between">
          <TipTapUndo @click="editor.chain().focus().undo().run()" />
          <TipTapRedo @click="editor.chain().focus().redo().run()" />
        </div>
      </div>
      <!-- <div class="flex flex-wrap items-center justify-center gap-3 p-2 rounded">
        <span class="inline-block space-x-3"> </span>
      </div> -->

      <!-- undo -->
      <!-- <div class="flex p-2 space-x-3 rounded">
      </div> -->
    </div>

    <div class="relative flex-grow h-full overflow-y-scroll prose-sm prose sm:prose lg:prose-lg xl:prose-2xl">
      <editor-content :editor="editor" class="h-full"/>
      <div
        v-if="showAddYTLink"
        class="absolute top-0 z-10 w-full p-2 pb-4 bg-white shadow-xl"
      >
        <div class="relative px-2">
          <label class="text-sm text-stone-500">Paste a YouTube Link
            
            <input
            v-model="ytLink"
            type="text"
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
    </div>

    <div class="relative">
      <bubble-menu
        class="flex items-center px-2 py-1 space-x-2 bg-white border rounded shadow border-stone-300 "
        :editor="editor"
        :tippy-options="{ duration: 100 }"
        v-if="editor"
      >
        <TipTapHeading1
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          class="hover:text-blue-500"
          :class="[
            editor.isActive('heading', { level: 1 })
              ? 'is-active text-blue-500'
              : 'text-neutral-400',
          ]"
        />
        <TipTapBold
          @click="editor.chain().focus().toggleBold().run()"
          class="hover:text-blue-500"
          :class="[
            editor.isActive('bold')
              ? 'is-active text-blue-500'
              : 'text-neutral-400',
          ]"
        />
        <TipTapCode
          @click="editor.chain().focus().toggleCode().run()"
          class="hover:text-blue-500"
          :class="[
            editor.isActive('code')
              ? 'is-active text-blue-500'
              : 'text-neutral-400',
          ]"
        />
        <TipTapHighlight
          @click="editor.chain().focus().toggleHighlight().run()"
          class="hover:text-blue-500"
          :class="[
            editor.isActive('highlight')
              ? 'is-active text-blue-500'
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
import Underline from "@tiptap/extension-underline";
// import ListItem from "@tiptap/extension-list-item";
// import BulletList from "@tiptap/extension-bullet-list";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Code from "@tiptap/extension-code";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Document from "@tiptap/extension-document";
import Highlight from "@tiptap/extension-highlight";
// import Blockquote from "@tiptap/extension-blockquote";
import Youtube from "@tiptap/extension-youtube";
import CharacterCount from "@tiptap/extension-character-count";
import { BubbleMenu, useEditor, EditorContent } from "@tiptap/vue-3";
// import { lowlight } from "lowlight/lib/core";
import { lowlight } from "lowlight/lib/common.js";

const props = defineProps(["content"]);
const emit = defineEmits();
const showAddYTLink = ref("");
const ytLink = ref("");
const runtimeConfig = useRuntimeConfig()

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
    }),
    Image,
    Link,
    // Code,
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    Highlight,
    CharacterCount,
    // Blockquote,
    // BulletList,
    // ListItem,
    Youtube.configure({
      width: "100%",
    }),
    CodeBlockLowlight.configure({
      lowlight,
      languageClassPrefix: "language-",
    }),
    // TextAlign.configure({
    //   types: ["heading", "paragraph"],
    // }),

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
        "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none p-5 ",
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
  formData.append("upload_preset", "custom-upload");
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

const saveDoc = (status) => {
  const json = editor.value.getJSON();
  const words = json.content[0].content[0].text;
  console.log(words)
  console.log(words.length)
  // if (words.length > 3) {
  //   console.log(words);
  //   json.title = words;
  //   json.slug = words.split(" ").slice(0, 5).join("-");
  // } else {
  //   json.title = "title";
  //   json.slug = "slug";
  // }
  // json.status = status;
  // json.added_at = serverTimestamp();

  // emit("save", json);

  console.log(json);
  // let res = addDocToFirestore("posts", json);

  // if (status == "published") {
  //   editor.value.commands.setContent("");
  // } else {
  //   alert("Error saving document");
  // }
};

// onBeforeUnmount(() => {
//   editor.value.destroy();
// });
</script>

<style>
.ProseMirror {
  height: auto;
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

pre {
  background: #0d0d0d;
  color: #fff;
  font-family: "JetBrainsMono", monospace;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}

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

.prose :where(code):not(:where([class~="not-prose"] *))::before {
  content: "";
}

.prose :where(code):not(:where([class~="not-prose"] *))::after {
  content: "";
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

pre {
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
}

/* code {
  font-size: 0.9rem;
  padding: 0.5em;
  border-radius: 0.25em;
  background-color: rgb(213, 213, 213);
  color: #616161;
  box-decoration-break: clone;
} */

code {
  background: #efefef;
  word-wrap: break-word;
  box-decoration-break: clone;
  padding: 0.1rem 0.3rem 0.2rem;
  border-radius: 0.2rem;
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