import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  start (folder) {
    return Api().post('start', folder)
  }
}
