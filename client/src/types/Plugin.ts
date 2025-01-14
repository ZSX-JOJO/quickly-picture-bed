import { PageReq } from '@/typings/req-res';
import { PluginInter } from '@/typings/interface';
import http from '@/api'

// 筛选条件
interface Filter extends PageReq {
  status?: boolean
}


/**
 * =========== 插件管理 ===========
 * 管理员进行插件管理
 * ===========================================
 */
export default class Plugin {
  // 创建插件
  create (params: PluginInter) {
    return http('/plugin/create', params)
  }
  // 更新插件
  update (params: PluginInter) {
    return http('/plugin/update', params)
  }
  // 删除插件
  delete (id: number) {
    return http('/plugin/delete', { id })
  }
  // 插件详情
  detail (id: number) {
    return http('/plugin/detail', { id })
  }
  // 插件列表
  find (params: Filter) {
    return http('/plugin/list', params)
  }
  // 获取已安装的插件
  installed (params: { status: boolean, type?: string }) {
    return http('/plugin/installed', params)
  }
  // 安装插件
  install (id: number, secret_key: string = '') {
    return http('/plugin/install', { id })
  }
  // 更新安装插件
  updateInstall (id: number) {
    return http('/plugin/updateInstall', { id })
  }
  // 卸载插件
  uninstall (id: number) {
    return http('/plugin/uninstall', { id })
  }
  // 切换安装插件状态
  toggleIntsall (user_plugin_id: number) {
    return http('/plugin/toggleIntsall', { user_plugin_id })
  }
  // 切换插件状态
  toggle (id: number) {
    return http('/plugin/toggle', { id })
  }
  // 排序
  sort (from: number, to: number) {
    return http('/plugin/sort', { from, to })
  }
}