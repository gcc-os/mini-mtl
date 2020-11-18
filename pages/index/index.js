//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
  },
  bindTryCustomBtn() { // 自定义样式
    // 此初始化一次即可
    app.mtl.init({
      sm1: {
        title: 'SM1',
        content: '请点击确定按钮',
        showLeft: true,
        left: {
          text: '取消',
          color: '#FF0000',
        },
        right: {
          text: '确定',
          color: '#0000FF',
        }
      },
      sm2: {
        title: 'SM2',
        showLeft: true,
        left: {
          text: '取消',
          color: '#000000',
        },
        right: {
          text: '确定',
          color: '#0000FF',
        }
      },
      sm5: {
        title: 'SM5',
        content: '您点击了按钮',
        showLeft: false,
      },
    });
    // 使用
    app.mtl.sm1().btn(() => {
      app.mtl.sm2('您点击了右边的按钮').left(() => {
        app.mtl.sm5('左边的按钮！');
      }).right(() => {
        app.mtl.sm5('右边的按钮！');
      })
    });
  },
  bindTryBtn() { // 使用默认的
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
