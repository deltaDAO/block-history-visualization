<template>
  <div class="m-4 min-h-screen">
    <div class="mt-20 lg:mt-40 text-left">
      <div class="flex justify-start flex-col lg:flex-row gap-4">
        <div>
          <h1 class="text-6xl font-semibold text-gray-900 leading-none">
            Gaia-X Test Network Hackathon
          </h1>
          <div class="mt-6 text-xl font-light text-true-gray-500 antialiased">
            See the on-chain statistics.
          </div>
          <nuxt-link to="#data">
            <button
              class="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out"
            >
              Check out the data
            </button>
          </nuxt-link>
        </div>
        <img src="@/static/images/dolphin.svg" alt="dolphin" class="max-w-sm" />
      </div>
    </div>
    <div class="mt-12 lg:mt-32 lg:ml-20 text-left">
      <div
        class="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
