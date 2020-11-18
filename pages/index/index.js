//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
  },
  bindTryBtn() {
    app.mtl.sm("Click to try!").btn(() => {
      console.log("click button!");
      app.mtl.smc("Do you like this?", "Modal").left(() => {
        console.log("click left button!");
      }).right(() => {
        console.log("click right button!");
      });
    });
  },
  onLoad: function () { },
})
