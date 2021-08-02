const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event, context) => {
  return await cloud.openapi.security.msgSecCheck({
    content:event.text
  })
}
