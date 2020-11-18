# mini-mtl

miniprogram Modal+Toast+Loading
封装了微信交互的操作，将调用化繁为简，提高编程效率

## Useage

使用 npm 安装
`npm install mini-mtl`

#### 1.在项目中引入

app.js

```
import mtl from 'mini-mtl'
App({
    get mtl() { return mtl; },
    onLaunch: function () {},
})
```

#### 2.在项目使用

index.js

```
const app = getApp()
Page({
    data: {},
    onLoad: function () {
        app.mtl.sm("Click to try!").btn(() => {
            console.log("click button!");
            app.mtl.smc("Do you like this?", "Modal").left(() => {
                console.log("click left button!");
            }).right(() => {
                console.log("click right button!");
            });
        });
    },
})

```
