<template>
  <div class="m-4 min-h-screen">
    <div class="mt-4 lg:mt-4 text-left">
      <div class="flex justify-start flex-col lg:flex-row gap-4">
        <div class="flex justify-end flex-col">
          <div class="pb-8">
            <div class="mt-6 text-xl font-light text-black antialiased">
              Hackathon #3
            </div>
            <h1 class="text-6xl font-semibold text-black leading-none">
              Gaia-X Testnet statistics
            </h1>
          </div>
          <div
            class="stats stats-vertical sm:stats-horizontal bg-primary text-primary-content my-4 drop-shadow-lg max-w-fit"
          >
            <div class="stat">
              <div class="stat-title">Total Transactions</div>
              <div class="stat-value">8,432</div>
            </div>

            <div class="stat">
              <div class="stat-title">Total Blocks</div>
              <div class="stat-value">289,400</div>
            </div>
          </div>
        </div>
        <img
          src="@/static/images/data.svg"
          alt="data illustration"
          class="w-full"
        />
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
