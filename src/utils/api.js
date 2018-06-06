/**
 * API 接口配置
 */

let host = ''

// console.log('process.env.NODE_ENV', process.env.NODE_ENV)

export default {
    /**
     * 说明: 获取openid接口
     * 参数:
     *    code: 
     * 返回:
     *    {
     *      message: "成功",     //是否获取接口成功
     *      code: 0,            //成功为0，异常为微信返回的错误码
     *      openId: XXXX        //当前用户的openid
     *    }
     */
    getOpenId: `${host}/demo/openid`
}