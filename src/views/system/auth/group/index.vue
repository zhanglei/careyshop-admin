<template>
  <cs-container>
    <page-header
      slot="header"
      :loading="loading"
      @submit="handleSubmit"
      ref="header"/>
    <page-main
      :table-data="table"
      :loading="loading"
      @sort="handleSort"/>
  </cs-container>
</template>

<script>
import { getAuthGroupList } from '@/api/auth/group'

export default {
  name: 'system-auth-group',
  components: {
    'PageHeader': () => import('./componnets/PageHeader'),
    'PageMain': () => import('./componnets/PageMain')
  },
  data() {
    return {
      table: [],
      loading: false,
      order: {
        order_type: undefined,
        order_field: undefined
      }
    }
  },
  mounted() {
    this.handleSubmit()
  },
  methods: {
    // 提交查询请求
    handleSubmit(form) {
      this.loading = true
      getAuthGroupList({
        ...form,
        ...this.order
      })
        .then(res => {
          this.table = res.data.length ? res.data : []
        })
        .finally(() => {
          this.loading = false
        })
    },
    // 排序刷新
    handleSort(val) {
      this.order = val
      this.$nextTick(() => {
        this.$refs.header.handleFormSubmit()
      })
    }
  }
}
</script>
