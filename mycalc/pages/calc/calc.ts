// pages/calc/calc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 存放上次结果（操作数A）；
    result: null,
    // 控制输入的标志值，若为真，则清除后显示，否则追加结果；
    isClear: false,
    // 操作数；
    operand: '0',
    // 操作符；
    operator: '+',
    // 按钮对象数组；
    items: [{
        id: "clear",
        value: "C",
        type: "function"
      },
      {
        id: "divide",
        value: "/",
        type: "operation"
      },
      {
        id: "multiply",
        value: "*",
        type: "operation"
      },
      {
        id: "backspace",
        value: "<-",
        type: "function"
      },
      {
        id: "serven",
        value: "7",
        type: "number"
      },
      {
        id: "eight",
        value: "8",
        type: "number"
      },
      {
        id: "nine",
        value: "9",
        type: "number"
      },
      {
        id: "subtract",
        value: "-",
        type: "operation"
      },
      {
        id: "four",
        value: "4",
        type: "number"
      },
      {
        id: "five",
        value: "5",
        type: "number"
      },
      {
        id: "six",
        value: "6",
        type: "number"
      },
      {
        id: "add",
        value: "+",
        type: "operation"
      },
      {
        id: "one",
        value: "1",
        type: "number"
      },
      {
        id: "two",
        value: "2",
        type: "number"
      },
      {
        id: "three",
        value: "3",
        type: "number"
      },
      {
        id: "history",
        value: "H",
        type: "function"
      },
      {
        id: " percent",
        value: "%",
        type: "number"
      },
      {
        id: "zero",
        value: "0",
        type: "number"
      },
      {
        id: "point",
        value: ".",
        type: "number"
      },
      {
        id: "equal",
        value: "=",
        type: "operation"
      }
    ]
  },

  tapnumber: function(e) {
    var operand = e.target.dataset.value;

    if (this.data.operand === '0' || this.data.isClear) {
      this.setData({
        operand: operand
      });
      this.data.isClear = false;
    } else {
      this.setData({
        operand: this.data.operand + operand
      });
    }
  },

  tapoperation: function(e) {
    // 取出原有操作符；
    var operator = this.data.operator;
    // 用现有操作符替换掉原有操作符；
    this.setData({
      operator: e.target.dataset.value
    });

    // 判断是否为重新输入的状态（当输入了操作符后，状态变为重新输入）；
    if (this.data.isClear) {
      return;
    }
    // 改变状态；
    this.data.isClear = true;
    // 判断是否应该计算结果；
     var operand = Number(this.data.operand);
    if (this.data.result === null) {
      this.data.result = operand;
      return;
    }

   
    console.log(this.data.result);
    console.log(operator);
    console.log(operand);
    if (operator === '+') {
      this.data.result = this.data.result + operand;
    } else if (operator === '-') {
      this.data.result = this.data.result - operand;
    } else if (operator === '*') {
      this.data.result = this.data.result * operand;
    } else if (operator === '/') {
      this.data.result = this.data.result / operand;
    } else {
      return;
    }

    console.log(this.data.result);
    this.setData({
      operand: this.data.result
    });

  },

  tapfunction: function(e) {
    var value = e.target.dataset.value;
    if (value === 'C') {
      this.setData({
        isClear: false,
        result: null,
        operand: '0',
        operator: '+'
      });
    } else {
      return;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})