<template>
<div class="container mx-auto px-4">
  <hero-section />
  <total-transactions/>
  <chart-data/>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import ChartData from '~/components/ChartData.vue'
import HeroSection from '~/components/HeroSection.vue'
import TotalTransactions from '~/components/TotalTransactions.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { HeroSection, TotalTransactions, ChartData },
})
</script>
