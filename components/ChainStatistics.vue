<template>
  <div class="flex justify-end flex-col m-4 my-20">
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
      class="stats stats-vertical md:stats-horizontal drop-shadow-lg my-4 w-3/4"
    >
      <div class="stat">
        <div class="stat-title">Total Wallet Addresses</div>
        <div class="stat-value text-primary text-6xl">732</div>
      </div>

      <div class="stat">
        <div class="stat-title">Total Published Assets</div>
        <div class="stat-value text-primary text-6xl">143</div>
      </div>

      <div class="stat">
        <div class="stat-title">Total Consumptions</div>
        <div class="stat-value text-primary text-6xl">3210</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
