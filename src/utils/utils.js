let handleError = function (err) {
    let errMsg = (err ? err.errMsg : '') || '网络错误'

    console.log('Promise rejected:', err)
    wx.showToast({
        title: errMsg,
        icon: 'none',
        duration: 1500
    })
}

export default { handleError }