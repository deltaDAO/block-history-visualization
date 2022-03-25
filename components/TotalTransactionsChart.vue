<template>
  <div class="p-4">
    <h2 class="text-6xl font-semibold text-gray-900 mb-4 leading-none md:w-1/2">
      Live Stats from the Gaia-X network
    </h2>
    <div
      class="h-fit max-h-screen bg-white drop-shadow-lg rounded-2xl p-4 mb-4"
    >
      <div class="btn-group">
        <button class="btn btn-active">Monthly</button>
        <button class="btn">Weekly</button>
        <button class="btn">Daily</button>
      </div>
      <div class="h-fit max-h-screen w-full">
        <line-chart
          v-if="showLine"
          :data="blockdata"
          :options="{ responsive: true, maintainAspectRatio: false }"
        ></line-chart>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { format } from 'date-fns'
import blockHistory from '~/static/blockHistory.json'

export default {
  asyncData() {
    return { blockHistory }
  },
  data() {
    return {
      blockdata: null,
      showLine: false,
      graphTension: 0.2,
    }
  },
  mounted() {
    this.groupByNode()
    this.showLine = true // showLine will only be set to true on the client. This keeps the DOM-tree in sync.
  },
  methods: {
    groupByNode() {
      const nodes = []
      const groupedByHour = _.groupBy(blockHistory.blocks, (block) => {
        // Find unique nodes
        if (!nodes.includes(block.node)) nodes.push(block.node)
        // Create timestamp for each hour
        return format(new Date(block.timestamp * 1000), 'dd.MM - HH:00')
      })

      const timeStamps = Object.keys(groupedByHour)
      const overallValues = Object.values(groupedByHour).map((group) =>
        // summarize transaction count of each hourly group
        group.reduce((pv, cv) => (pv += cv.transactions.length), 0)
      )

      const groupedByNode = nodes.map((node) =>
        Object.values(groupedByHour).map((group) =>
          // summarize transaction count per group & hour, while filtering for a given node
          group.reduce(
            (pv, cv) =>
              cv.node === node ? (pv += cv.transactions.length) : pv,
            0
          )
        )
      )

      // initialize with overall data
      const datasets = [
        {
          label: 'Overall',
          data: overallValues,
          borderColor: '#000094',
          tension: this.graphTension,
        },
      ]
      this.blockdata = {
        labels: timeStamps,
        datasets,
      }
    },
  },
}
</script>
