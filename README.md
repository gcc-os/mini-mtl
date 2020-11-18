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

### st(title, customImage, isMask = true)

显示 Toast，1.5 秒后消失(微信默认时间)

##### title

类型 string 提示的内容 最多 7 个汉字，超出会被切割

##### customImage

类型 string 自定义 toast 显示的图片

##### isMask

类型 boolean 是否启用 mask（禁止触摸遮罩穿透）默认启用

### sm(content, title, showLeft = false, left = {}, right = {})

showModal 确认对话框，默认不显示“取消按钮”

##### content

类型 string
提示内容

##### title

类型 string
提示的标题

##### showLft

类型 boolean
是否显示左边按钮（取消按钮），默认不显示

##### left

类型 object
左边按钮的样式 {text:'按钮名称',color:'颜色值'}

##### right

类型 object
右边按钮的样式{text:'按钮名称',color:'颜色值'}

### smc(content, title, left = {}, right = {})

showModal 带两个按钮的确认对话框

##### content

类型 string
提示内容

##### title

类型 string
提示的标题

##### left

类型 object
左边按钮的样式 {text:'按钮名称',color:'颜色值'}

##### right

类型 object
右边按钮的样式{text:'按钮名称',color:'颜色值'}

### sl(text, isMask = true)

showLoading 默认不带文字的加载动画

##### text

类型 string
内容

##### isMask

类型 boolean 是否启用 mask（禁止触摸遮罩穿透）默认启用

### cl()

closeLoading 关闭加载动画
