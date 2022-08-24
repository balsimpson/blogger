<template>
  <div>
    <!-- carousel -->
    <div class="relative carousel h-[500px] mx-auto w-full">
      <div class="h-full transition carousel-inner">
        <!-- left button -->
        <button
          @mouseover="pauseSlider()"
          @mouseout="startSlider()"
          ref="prevBtn"
          @click.prevent="prevBtnHandler"
          class="absolute top-0 bottom-0 z-10 text-white left-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <div class="relative h-full overflow-hidden rounded-lg carousel-track">
          <ul
            class="h-full transition duration-500 ease-in-out"
            ref="slidesElement"
          >
            <li
              @mouseover="pauseSlider()"
              @mouseout="startSlider()"
              v-for="(item, index) in items"
              class="absolute w-full h-full"
              :id="index"
            >
              <img
                loading="lazy"
                :src="item.source"
                :alt="item.alt"
                class="object-cover w-full h-full"
              />
              <div
                class="absolute z-20 max-w-md px-5 py-4 bg-black/20 bottom-12 left-12 backdrop-blur-lg "
              >
                <!-- <NuxtLink
                  :to="{
                    name: 'list-slug',
                    params: {
                      slug: createSlug(item.title || item.name, item.uid),
                      item: item,
                    },
                  }"
                > -->
                <div class="text-4xl font-bold text-white capitalize">
                  {{ item.title }}
                </div>
                <!-- </NuxtLink> -->
                <!-- <div class="mt-2 text-sm text-white">
                  {{ item.description }}
                </div> -->
              </div>
            </li>
          </ul>
        </div>
        <!-- right button -->
        <button
          @mouseover="pauseSlider()"
          @mouseout="startSlider()"
          ref="nextBtn"
          @click.prevent="nextBtnHandler"
          class="absolute top-0 bottom-0 z-10 text-white right-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <!-- carousel nav -->
        <div
          @mouseover="pauseSlider()"
          @mouseout="startSlider()"
          ref="dotsNav"
          class="absolute flex flex-wrap justify-center space-x-2 -translate-x-1/2 bottom-2 left-1/2 "
        >
          <button
            v-for="(item, index) in items"
            :id="index"
            @click.prevent="dotNavHandler(index)"
            class="w-3 h-3 m-1 transition rounded-full bg-gray-500/50 hover:bg-brand-500/50 focus:outline-none focus:shadow-outline "
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array
  }
})
const items = [
  {
    title: "10 Best Episodes of monica",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi assumenda mollitia eaque asperiores quas ullam tempore ut fugit obcaecati atque?",
    source: "https://source.unsplash.com/random?subway",
    tags: ["subway", "transit", "travel"],
  },
  {
    title: "The Park",
    description: "A podcast about the park",
    source: "https://source.unsplash.com/random?park",
    tags: ["park", "nature", "travel"],
  },
  {
    title: "The Beach",
    description: "A podcast about the beach",
    source: "https://source.unsplash.com/random?beach",
    tags: ["beach", "nature", "travel"],
  },
  {
    title: "The Bench",
    description: "A podcast about the beach",
    source: "https://source.unsplash.com/random?bench",
    tags: ["beach", "nature", "travel"],
  },
  {
    title: "The Chair",
    description: "A podcast about the beach",
    source: "https://source.unsplash.com/random?chair",
    tags: ["beach", "nature", "travel"],
  },
];
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
  } else if (targetSlide.id == items.length - 1) {
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
  setSlideWidth();
  dotsNav.value.children[0].classList.add("bg-brand-500/50", "current-slide");
  slidesElement.value.children[0].classList.add("current-slide");

  // sliderAutomation.value = setInterval(() => {
  //   if (activeSlide.value == props.items.length - 1) {
  //     moveToSlide(
  //       slidesElement.value.querySelector('.current-slide'),
  //       slidesElement.value.children[0]
  //     )
  //   } else {
  //     nextBtnHandler()
  //   }

  //   showHideArrows(slidesElement.value.querySelector('.current-slide'))
  // }, 2000)

  startSlider();
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