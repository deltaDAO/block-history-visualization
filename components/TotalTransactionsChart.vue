<template>
  <client-only>
    <div class="p-4">
      <h2
        class="text-6xl font-semibold text-gray-900 mb-4 leading-none md:w-1/2"
      >
        Live Stats from the Gaia-X network
      </h2>
      <div
        class="h-fit max-h-screen bg-white drop-shadow-lg rounded-2xl p-4 mb-4"
      >
        <div class="btn-group">
          <button
            v-for="option in groupByOptions"
            :key="option.value"
            :class="[
              'btn w-1/3',
              {
                'btn-active': selectedGroup === option.value,
                loading: isLoading && selectedGroup === option.value,
              },
            ]"
            @click="selectedGroup = option.value"
          >
            {{ option.label }}
          </button>
        </div>
        <div class="h-fit max-h-screen w-full">
          <Apexchart
            ref="transactionsChart"
            :options="chartOptions"
            :series="series"
          />
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import Vue from 'vue'
import _ from 'lodash'
import { format, getWeek } from 'date-fns'
import blockHistory from '~/static/blockHistory.json'

export default Vue.extend({
  asyncData() {
    return { blockHistory }
  },
  data() {
    return {
      groupByOptions: [
        { label: 'Day', value: 'day' },
        { label: 'Week', value: 'week' },
        { label: 'Month', value: 'month' },
      ],
      selectedGroup: 'day',
      isLoading: false,
      series: [],
      chartOptions: {
        chart: {
          type: 'area',
        },
        colors: ['#7300f3'],
        stroke: {
          width: 5,
          curve: 'smooth',
        },
        xaxis: {
          categories: [],
          tickAmount: 5,
          labels: {
            rotate: 0,
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        dataLabels: {
          enabled: false,
        },
      },
    }
  },
  watch: {
    selectedGroup(value) {
      this.groupByNode(value)
    },
  },
  mounted() {
    this.groupByNode(this.selectedGroup)
  },
  methods: {
    groupByNode(groupBy) {
      this.isLoading = true
      const nodes = []

      const groupedBySelection = _.groupBy(blockHistory.blocks, (block) => {
        // Find unique nodes
        if (!nodes.includes(block.node)) nodes.push(block.node)
        // Create timestamp and format based on selection
        return groupBy === 'month'
          ? format(new Date(block.timestamp * 1000), 'MM.yyyy')
          : groupBy === 'week'
          ? `${getWeek(new Date(block.timestamp * 1000), {
              weekStartsOn: 1,
            })}.${format(new Date(block.timestamp * 1000), 'yyyy')}`
          : format(new Date(block.timestamp * 1000), 'dd.MM.yyyy - hh')
      })

      const timeStamps = Object.keys(groupedBySelection)
      const overallValues = Object.values(groupedBySelection).map((group) =>
        // summarize transaction count
        group.reduce((pv, cv) => (pv += cv.transactions.length), 0)
      )

      const groupedByNode = nodes.map((node) =>
        Object.values(groupedBySelection).map((group) =>
          // summarize transaction count per group & hour, while filtering for a given node
          group.reduce(
            (pv, cv) =>
              cv.node === node ? (pv += cv.transactions.length) : pv,
            0
          )
        )
      )
      // update chart data
      if (this.$refs.transactionsChart) {
        this.$refs.transactionsChart.updateOptions({
          series: [
            {
              name: 'Transactions',
              data: overallValues,
            },
          ],
          xaxis: {
            ...this.chartOptions.xaxis,
            categories: timeStamps,
          },
        })
        this.isLoading = false
        return
      }
      // initialize with overall data during mount
      this.series = [
        {
          name: 'Transactions',
          data: overallValues,
        },
      ]
      this.chartOptions.xaxis.categories = timeStamps

      this.isLoading = false
    },
  },
})
</script>
