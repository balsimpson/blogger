<template>
  <div>
    <!-- carousel -->
    <div class="relative carousel h-[500px] mx-auto w-full">
      <div class="h-full transition carousel-inner">
        <!-- left button -->
        <button @mouseover="pauseSlider()" @mouseout="startSlider()" ref="prevBtn" @click.prevent="prevBtnHandler"
          class="absolute top-0 bottom-0 z-10 text-white left-2">
          <div class="p-2 rounded-lg bg-black/50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clip-rule="evenodd" />
            </svg>
          </div>
        </button>

        <div class="relative h-full overflow-hidden border rounded-lg carousel-track border-cyan-500">
          <ul class="h-full transition duration-500 ease-in-out" ref="slidesElement">
            <li @mouseover="pauseSlider()" @mouseout="startSlider()" @click="navigateTo('/blog/'+ item.slug)"
              v-for="(item, index) in items" class="absolute w-full h-full cursor-pointer" :id="index">
              <img loading="lazy" :src="item.image" :alt="item.alt" class="object-cover w-full h-full " />
              <div class="absolute z-20 max-w-md px-5 py-4 bg-black/80 bottom-12 left-12">
                <div class="text-2xl font-bold text-left text-white capitalize">
                  {{ item.title }}
                </div>
                <!-- </NuxtLink> -->
                <div class="mt-2 text-sm text-left text-white">
                  {{ item.description }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- right button -->
        <button @mouseover="pauseSlider()" @mouseout="startSlider()" ref="nextBtn" @click.prevent="nextBtnHandler"
          class="absolute top-0 bottom-0 z-10 text-white right-2">
          <div class="p-2 rounded-lg bg-black/50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clip-rule="evenodd" />
            </svg>
          </div>
        </button>

        <!-- carousel nav -->
        <div @mouseover="pauseSlider()" @mouseout="startSlider()" ref="dotsNav"
          class="absolute flex flex-wrap justify-center space-x-2 -translate-x-1/2 bottom-2 left-1/2 ">
          <button v-for="(item, index) in items" :id="index" @click.prevent="dotNavHandler(index)"
            class="w-3 h-3 m-1 transition rounded-full bg-gray-500/50 hover:bg-brand-500/50 focus:outline-none focus:shadow-outline "></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IconArrowRightCircle } from '@iconify-prerendered/vue-bi';
const props = defineProps({
  items: {
    type: Array
  }
})
// const items = [
//   {
//     title: "10 Best Episodes of monica",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi assumenda mollitia eaque asperiores quas ullam tempore ut fugit obcaecati atque?",
//     source: "https://source.unsplash.com/random?subway",
//     tags: ["subway", "transit", "travel"],
//   },
//   {
//     title: "The Park",
//     description: "A podcast about the park",
//     source: "https://source.unsplash.com/random?park",
//     tags: ["park", "nature", "travel"],
//   },
//   {
//     title: "The Beach",
//     description: "A podcast about the beach",
//     source: "https://source.unsplash.com/random?beach",
//     tags: ["beach", "nature", "travel"],
//   },
//   {
//     title: "The Bench",
//     description: "A podcast about the beach",
//     source: "https://source.unsplash.com/random?bench",
//     tags: ["beach", "nature", "travel"],
//   },
//   {
//     title: "The Chair",
//     description: "A podcast about the beach",
//     source: "https://source.unsplash.com/random?chair",
//     tags: ["beach", "nature", "travel"],
//   },
// ];
const slideWidth = ref(0);
const slidesElement = ref(null);
const dotsNav = ref(null);

const sliderAutomation = ref();

const activeSlide = ref(null);

const prevBtn = ref(null);
const nextBtn = ref(null);

const moveToSlide = (currentSlide, targetSlide) => {
  setSlideWidth();
  slidesElement.value.style.transform = `translateX(-${targetSlide.style.left})`;

  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");

  activeSlide.value = targetSlide.id;

  dotsNav.value.children[activeSlide.value].classList.add(
    "bg-brand-500/50",
    "current-slide"
  );

  dotsNav.value.children[currentSlide.id].classList.remove(
    "bg-brand-500/50",
    "current-slide"
  );
};

const startSlider = () => {
  sliderAutomation.value = setInterval(() => {
    const currentSlide = slidesElement.value.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;

    if (!nextSlide) {
      moveToSlide(currentSlide, slidesElement.value.firstElementChild);
    } else {
      moveToSlide(currentSlide, nextSlide);
    }
  }, 4000);
};

const pauseSlider = () => {
  clearInterval(sliderAutomation.value);
};

const nextBtnHandler = () => {
  const currentSlide = slidesElement.value.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(currentSlide, nextSlide);
  showHideArrows(nextSlide);
};

const prevBtnHandler = () => {
  const currentSlide = slidesElement.value.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(currentSlide, prevSlide);
  showHideArrows(prevSlide);
};

const showHideArrows = (targetSlide) => {
  console.log(targetSlide)
  if (targetSlide.id == 0) {
    prevBtn.value.classList.add("hidden");
    nextBtn.value.classList.remove("hidden");
  } else if (targetSlide.id == props.items.length - 1) {
    nextBtn.value.classList.add("hidden");
    prevBtn.value.classList.remove("hidden");
  } else {
    prevBtn.value.classList.remove("hidden");
    nextBtn.value.classList.remove("hidden");
  }
};

const dotNavHandler = (dotIndex) => {
  const currentDot = dotsNav.value.querySelector(".current-slide");
  const targetDot = dotsNav.value.children[activeSlide.value];

  const currentSlide = slidesElement.value.querySelector(".current-slide");
  const targetSlide = currentSlide.parentElement.children[dotIndex];
  moveToSlide(currentSlide, targetSlide);
  showHideArrows(targetSlide);
};

const setSlideWidth = () => {
  const children = Array.from(slidesElement.value.children);
  slideWidth.value = children[0].clientWidth;

  // console.log(children)

  // set the width of the slides
  children.forEach((slide, index) => {
    slide.style.left = slideWidth.value * index + "px";
  });
};

onMounted(() => {
  // console.log(props.items)
  setSlideWidth();
  dotsNav.value.children[0].classList.add("bg-brand-500/50", "current-slide");
  slidesElement.value.children[0].classList.add("current-slide");

  // startSlider();
});

const createSlug = (title, id) => {
  return (
    title
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-") +
    "_" +
    id
  );
};
</script>

<style>

</style>