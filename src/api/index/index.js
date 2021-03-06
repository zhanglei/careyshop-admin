import request from '@/utils/request'

/**
 * 清空所有缓存
 */
export function clearCacheAll() {
  return request({
    url: '/v1/index',
    method: 'post',
    params: {
      method: 'clear.cache.all'
    }
  })
}

/**
 * 调整最优状态(服务端为正式环境有效)
 */
export function setSystemOptimize() {
  return request({
    url: '/v1/index',
    method: 'post',
    params: {
      method: 'set.system.optimize'
    }
  })
}
