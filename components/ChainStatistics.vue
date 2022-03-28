<template>
  <div class="flex justify-end flex-col m-4 my-32">
    <div>
      <h2 class="text-6xl font-semibold text-gray-900 leading-none md:w-1/2">
        Gaia-X Testnet statistics
      </h2>
      <div
        class="mt-6 text-xl font-light text-true-gray-500 antialiased md:w-1/2"
      >
        Here you can see the on-chain statistics from the test network.
      </div>
    </div>

    <div
      class="stats stats-vertical md:stats-horizontal drop-shadow-lg my-4 w-4/5"
    >
      <div class="stat">
        <div class="stat-title">Total Wallet Addresses</div>
        <div class="stat-value text-primary text-6xl">
          {{ totalWalletAddresses.toLocaleString() }}
        </div>
      </div>

      <div class="stat">
        <div class="stat-title">Total Published Assets</div>
        <div class="stat-value text-primary text-6xl">
          {{ totalPublishedAssets.toLocaleString() }}
        </div>
      </div>

      <div class="stat">
        <div class="stat-title">Total blocks</div>
        <div class="stat-value text-primary text-6xl">{{ totalBlocks.toLocaleString() }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    totalWalletAddresses: { type: Number, default: 0 },
    totalPublishedAssets: { type: Number, default: 0 },
    totalBlocks: { type: Number, default: 0 },
  },
})
</script>

<style></style>
