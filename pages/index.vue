<template>
  <div>
    <hero-section />
    <chain-statistics />
    <total-transactions-chart />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ChainStatistics from '~/components/ChainStatistics.vue'
import HeroSection from '~/components/HeroSection.vue'
import TotalTransactionsChart from '~/components/TotalTransactionsChart.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { HeroSection, ChainStatistics, TotalTransactionsChart },
})
</script>
