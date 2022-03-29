<template>
  <div>
    <hero-section :total-transactions="stats.totalTransactions" />
    <chain-statistics
      :total-wallet-addresses="stats.totalWalletAddresses"
      :total-published-assets="stats.totalAssets"
      :total-blocks="stats.totalBlocks"
    />
    <total-transactions-chart :chart-data="stats.totalTransactionsChartData" />
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import ChainStatistics from '~/components/ChainStatistics.vue'
import HeroSection from '~/components/HeroSection.vue'
import TotalTransactionsChart from '~/components/TotalTransactionsChart.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { HeroSection, ChainStatistics, TotalTransactionsChart },
  // async asyncData() {
  //   try {
  //   const { data } = await axios.get(`${process.env.baseUrl}/api/statistics`)
  //   return { stats: data } }
  //   catch (e) {
  //   }
  // },
  data() {
    return {
      stats: {
        totalTransactions: 0,
        totalWalletAddresses: 0,
        totalAssets: 0,
        totalBlocks: 0,
        totalTransactionsChartData: {
          groupedByDay: { timeStamps: [], overallValues: [] },
          groupedByWeek: { timeStamps: [], overallValues: [] },
          groupedByMonth: { timeStamps: [], overallValues: [] },
        },
      },
    }
  },
  mounted() {
    axios
      .get(`${process.env.baseUrl}/api/statistics`)
      .then((response) => {
        this.stats = response.data})
  },
})
</script>
