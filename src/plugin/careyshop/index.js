// Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// flex 布局库
import 'flex.css'

// 组件
import '@/components'

// svg 图标
import '@/assets/svg-icons'

// 功能插件
import pluginAxios from '@/plugin/axios'
import pluginError from '@/plugin/error'
import pluginLog from '@/plugin/log'
import pluginOpen from '@/plugin/open'
import pluginHas from '@/plugin/has'

export default {
  async install(Vue, options) {
    // 插件
    Vue.use(ElementUI)
    Vue.use(pluginAxios)
    Vue.use(pluginError)
    Vue.use(pluginLog)
    Vue.use(pluginOpen)
    Vue.use(pluginHas)

    // 设置为 false 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false
    // 当前环境
    Vue.prototype.$env = process.env.NODE_ENV
    // 当前的 baseUrl
    Vue.prototype.$baseUrl = process.env.BASE_URL
  }
}
