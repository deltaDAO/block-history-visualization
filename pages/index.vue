<template>
  <div>
    <hero-section :total-transactions="232323" />
    <chain-statistics
      :total-wallet-addresses="232323"
      :total-published-assets="232323"
      :total-blocks="232323"
    />
    <total-transactions-chart />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import ChainStatistics from '~/components/ChainStatistics.vue'
import HeroSection from '~/components/HeroSection.vue'
import TotalTransactionsChart from '~/components/TotalTransactionsChart.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { HeroSection, ChainStatistics, TotalTransactionsChart },
  data() {
    return {
      stats: null,
    }
  },
  // mounted() {
  //   axios
  //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //     .then((response) => (this.stats = response))
  // },
})
</script>
