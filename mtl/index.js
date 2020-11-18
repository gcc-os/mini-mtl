// 微信原生弹窗的封装
let IS_Loading = false; // 是否正在加载

// 模拟promise函数，处理弹窗按钮点击状态管理，提高代码可读性.
function CCPromise(handle) {
  this._left = null;
  this._right = null;
  this._btn = null;
  // 左边按钮点击的事件监听
  this.left = function (leftHandle) {
    this._left = leftHandle;
    if (this._isLeft) leftHandle && leftHandle();
    return this;
  };
  // 右边按钮点击的事件监听
  this.right = function (rightHandle) {
    this._right = rightHandle;
    if (this._isRight) rightHandle && rightHandle();
    return this;
  };
  // 右边按钮点击的事件监听
  this.btn = function (btnHandle) {
    this._btn = btnHandle;
    if (this._isRight) btnHandle && btnHandle();
    return this;
  };
}

let mtlParams = {
  sl: {
    defaultTitle: '载入中',
  },
  sm: {
    defaultTitle: '提示'
  }
};

const MTL = {
  // *@params customImage: 自定义图片
  st(title, customImage, isMask = true) { // show toast for success —— 显示成功的toast，
    this.cl(); // 关闭Loading
    wx.showToast({
      title: title, // 提示的内容 7个汉字长度
      image: customImage || '', // 自定义图片
      mask: isMask, // 是否mask，禁止交互穿透
      success() { },
      fail() { },
      complete() { }
    });
  },
  /* showModal 确认对话框
    *@param content：提示内容  
    *@param title：提示标题  
    *@param showLft：是否显示左边按钮 (取消按钮)
    *@param left：左边按钮的样式 {text:'',color:''}    
    *@param right：右边按钮的样式{text:'',color:''}
    *@return CCPromise
    使用简介：
    MTL.sm('确定删除吗?').right(()=>{ "点击了右边的按钮" }).left(()=>{ “点击了左边的按钮” });
    MTL.sm('记录已删除!').btn(()=>{ "点击了右边的按钮，或唯一的确定按钮 " });
  */
  sm(content, title, showLeft = false, left = {}, right = {}) { // showModal
    let _promise = new CCPromise();
    wx.showModal({
      title: title || '提示',
      content: content,
      showCancel: showLeft,
      cancelText: left.text || '取消', //  最多四个字符
      cancelColor: left.color || '#000000',
      confirmText: right.text || '确定', //  最多四个字符
      confirmColor: right.color || '#576B95',
      success(res) {
        if (res.confirm) { // 用户点击了确定
          _promise._isRight = 1;
          _promise._right && _promise._right();
          _promise._btn && _promise._btn();
        } else if (res.cancel) { // 用户点击了取消
          _promise._isLeft = 2;
          _promise._left && _promise._left();
        }
      }
    })
    return _promise;
  },
  // showModal with cancel 显示“取消按钮”
  smc(content, title, left = {}, right = {}) { // showModal
    return this.sm(content, title, true, left, right);
  },
  smgreen(content, title, left_text, right_text) {
    return this.smc(content, title || '',
      { text: left_text || '确定', color: '#02bb00' },
      { text: right_text || '取消', color: '#000' });
  },
  // show loading 默认不带文字的加载动画
  sl(text, isMask = true) {// 显示加载动画
    if (IS_Loading) return; // 如果正在加载，就不需要“显示加载”操作
    IS_Loading = true;
    wx.showLoading({
      title: text || '',
      mask: isMask,
      success() { },
      fail() { },
      complete() { }
    });
  },
  //  show loading with title 带默认文字："载入中 的加载动画
  slt(text, isMask = true) {// 显示加载动画
    this.sl(text || mtlParams.sl.defaultTitle, isMask);
  },
  // close loading
  cl() {// 关闭加载动画
    if (!IS_Loading) return; // 如果没有在加载，就不需要“关闭加载”操作
    IS_Loading = false;
    wx.hideLoading({
      success() { },
      fail() { },
      complete() { }
    });
  },
  init(params) {
    mtlParams = params ? Object.assign(mtlParams, params) : mtlParams;
  }
}

export default MTL;
