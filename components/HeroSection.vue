<template>
  <div class="m-4">
    <div class="mt-4 lg:mt-4 text-left">
      <div class="flex justify-start flex-col lg:flex-row gap-4">
        <div class="flex justify-end flex-col">
          <div class="pb-8">
            <div class="mt-6 text-xl font-light text-black antialiased">
              Hackathon #3
            </div>
            <h1 class="text-6xl font-semibold text-black leading-none">
              Gaia-X Testnet Statistics
            </h1>
          </div>
          <div
            class="stats stats-vertical sm:stats-horizontal bg-primary text-primary-content my-4 drop-shadow-lg max-w-fit"
          >
            <div class="stat">
              <div class="stat-title">Total Transactions</div>
              <div class="stat-value text-6xl">
                {{ totalTransactions.toLocaleString() }}
              </div>
            </div>
          </div>
        </div>
        <div class="w-full max-w-4xl">
          <img
            src="@/static/images/data.svg"
            alt="data illustration"
            class="w-full p-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: { totalTransactions: { type: Number, default: 0 } },
})
</script>
