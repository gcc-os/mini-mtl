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

```
##### title

类型 string 提示的内容 最多 7 个汉字，超出会被切割

##### customImage

类型 string 自定义 toast 显示的图片

##### isMask

类型 boolean 是否启用 mask（禁止触摸遮罩穿透）默认启用
```

### sm(content, title, showLeft = false, left = {}, right = {})

showModal 确认对话框，默认不显示“取消按钮”

```
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

```

return CCPromise 对象
与 promise 对象类似，你可以这样使用

```
const smPromise = mtl.sm("您真的很厉害！",'提示',true);

smPromise.btn(()=>{
    console.log("您点击了右边的按钮");
}).left(()=>{
    console.log("您点击了左边的按钮");
}).right(()=>{
    console.log("您点击了右边的按钮");
});
```

或者简写成：

```
mtl.sm("您真的很厉害！",'提示',true).btn(()=>{
    console.log("您点击了右边的按钮");
});
mtl.sm("您真的很厉害！",'提示',true).left(()=>{
    console.log("您点击了左边的按钮");
}).right(()=>{
    console.log("您点击了右边的按钮");
});

btn 在Modal两个按钮都显示时，始终监听右边按钮的点击事件；只显示一个按钮时监听这一个按钮的点击事件。
left 在Modal两个按钮都显示时，始终监听左边按钮的点击事件；只显示一个按钮时无效。
right 在Modal两个按钮都显示时，始终监听右边按钮的点击事件；只显示一个按钮时监听这一个按钮的点击事件。

```

### smc(content, title, left = {}, right = {})

showModal 带两个按钮的确认对话框

```
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
```

### sl(text, isMask = true)

showLoading 默认不带文字的加载动画

```
##### text

类型 string
内容

##### isMask

类型 boolean 是否启用 mask（禁止触摸遮罩穿透）默认启用
```

### cl()

closeLoading 关闭加载动画

### init(config)

```

config = {
    sl: { // 调用slt时，默认的文案
        defaultTitle: '载入中',
    },
    sm: { // 调用sm相关函数时默认的title字段
        defaultTitle: '提示'
    },
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
    sm3: {
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
    sm4: {
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
}

sm1 自定义sm的样式，sm1的调用和sm没有本质区别，在初始化的时候设置了sm1的几项参数后
在调用的时候可以省略，比如上方设置了sm1的所有参数，调用时可以不传任何参数：
mtl.sm1();
当然你也可以这样：
mtl.sm1("您已付过钱了，请不要重复支付");
类似的，sm2、sm3、sm4、sm5的使用方式跟都与sm相同，只不过可以提前设置他们的参数。

```
