<script>
// import api from '@/utils/api'
// import utils from '@/utils/utils'
// import * as wb from '@/utils/index'
// import {VueExt} from '@/utils/index'

// Vue.use(VueExt)

export default {
  created () {
  },
  onLaunch() {
    console.log('launch~~~~~~~~~~~~',this,this.$api)
    // wx.getLocation({
    //   type: 'wgs84',
    //   sucess: function (res) {
    //     console.log(res)
    //   },
    //   fail: function(res) {
    //     wx.navigateTo({url:'/pages/reGetLocation/main'})
    //   }
    // })
    this.fetchOpenId().catch(this.$util.handleError)
  },
  methods: {
    fetchOpenId() {
      let _this = this

      return new Promise(function(resolve, reject) {
        let cachedOpenId = wx.getStorageSync('openId')
        if (cachedOpenId) {
          resolve(cachedOpenId)
        } else {
          wx.login({
            fail: reject,
            success: function (res) {
              wx.request({
                url: _this.$api.getOpenId,
                data: {
                  code: res.code
                },
                fail: reject,
                success: function(res) {
                  let resOpenId = res.data.data
                  if (!resOpenId) {
                    reject({'errMsg': res.data.message})
                  } else {
                    wepy.setStorageSync('openId', resOpenId)
                    resolve(resOpenId)
                  }
                }
              })
            }
          })
        }
      })
    }
  }
}
</script>

<style>

</style>
