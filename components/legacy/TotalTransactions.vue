<template>
  <div id="data" class="mb-16">
    <h2 class="font-bold text-2xl mb-2">Total transactions by node:</h2>
    <table class="table-auto mb-2">
      <tr>
        <th class="border text-left px-4 py-1">Address</th>
        <th class="border text-left px-4 py-1">Transactions</th>
      </tr>
      <tr v-for="count in counts" :key="count.address">
        <td class="border text-left px-4 py-1">{{ count.address }}</td>
        <td class="border text-right px-4 py-1">{{ count.amount }}</td>
      </tr>
      <tr>
        <td class="font-bold text-left px-4 py-1">Total transactions:</td>
        <td class="font-bold text-right px-4 py-1">{{ totalTransactions }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import _ from 'lodash'
import blockHistory from '~/static/blockHistory.json'

export default {
  asyncData() {
    return { blockHistory }
  },
  data() {
    return {
      counts: [],
      totalTransactions: 0,
    }
  },
  mounted() {
    this.calculateTransactions()
  },
  methods: {
    calculateTransactions() {
      const nodes = []
      const transactionsByNode = _.groupBy(blockHistory.blocks, (block) => {
        // Find unique nodes
        if (!nodes.includes(block.node)) nodes.push(block.node)
        return block.node
      })
      const transactionCounts = new Map()

      for (const node of nodes) {
        // add up transactions
        const transactionCount = transactionsByNode[node].reduce(
          (pv, cv) => (pv += cv.transactions.length),
          0
        )

        transactionCounts.set(node, transactionCount)
      }
      transactionCounts.forEach((value, key) => {
        const countObj = {}
        countObj.address = key
        countObj.amount = value
        this.totalTransactions = this.totalTransactions + value
        this.counts.push(countObj)
      })
    },
  },
}
</script>
