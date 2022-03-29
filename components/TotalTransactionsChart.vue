<template>
  <client-only>
    <div class="p-4">
      <h2
        class="text-6xl font-semibold text-gray-900 mb-4 leading-none md:w-1/2"
      >
        Total Transactions
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

export default Vue.extend({
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          groupedByDay: { timeStamps: [], overallValues: [] },
          groupedByWeek: { timeStamps: [], overallValues: [] },
          groupedByMonth: { timeStamps: [], overallValues: [] },
        }
      },
    },
  },
  data() {
    return {
      chartLabels: [],
      chartValues: [],
      groupByOptions: [
        { label: 'Daily', value: 'day' },
        { label: 'Weekly', value: 'week' },
        { label: 'Monthly', value: 'month' },
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
    selectedGroup() {
      this.updateChart()
    },
    chartData() {
      this.updateChart()
    }
  },
  mounted() {
    this.chartLabels = this.chartData.groupedByDay.timeStamps
    this.chartValues = this.chartData.groupedByDay.overallValues
    this.updateChart(this.selectedGroup)
  },
  methods: {
    updateChart() {
      switch (this.selectedGroup) {
        case 'week':
          this.chartLabels = this.chartData.groupedByWeek.timeStamps
          this.chartValues = this.chartData.groupedByWeek.overallValues
          break
        case 'month':
          this.chartLabels = this.chartData.groupedByMonth.timeStamps
          this.chartValues = this.chartData.groupedByMonth.overallValues
          break
        default:
          this.chartLabels = this.chartData.groupedByDay.timeStamps
          this.chartValues = this.chartData.groupedByDay.overallValues
          break
      }

      this.isLoading = true

      // update chart data
      if (this.$refs.transactionsChart) {
        this.$refs.transactionsChart.updateOptions({
          series: [
            {
              name: 'Transactions',
              data: this.chartValues,
            },
          ],
          xaxis: {
            ...this.chartOptions.xaxis,
            categories: this.chartLabels,
          },
        })
        this.isLoading = false
        return
      }
      // initialize with overall data during mount
      this.series = [
        {
          name: 'Transactions',
          data: this.chartValues,
        },
      ]
      this.chartOptions.xaxis.categories = this.chartLabels

      this.isLoading = false
    },
  },
})
</script>
