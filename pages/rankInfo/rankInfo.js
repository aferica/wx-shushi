// pages/rankInfo/rankInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navtabs: ["日榜", "月榜", "总榜"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    dayBooks: [],
    monthBooks: [],
    totalBooks: [],
    dayRank: '',
    monthRank: '',
    totalRank: '',
    url: 'http://api.zhuishushenqi.com/ranking'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      dayRank: options.dayRank,
      monthRank: options.monthRank,
      totalRank: options.totalRank
    });
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.loadDayRank();  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  tabClick: function (e) {
    var id = e.currentTarget.id
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
    if(id == 0) {
      this.loadDayRank();
    } else if(id == 1) {
      this.loadMonthRank();
    } else {
      this.loadTotalRank();
    }
  },
  loadDayRank: function () {
    var that = this;
    if (that.data.dayBooks.length == 0) {
      wx.showToast({
        title: '数据加载中',
        icon: 'loading'
      });
      wx.request({
        url: this.data.url + '/' + this.data.dayRank, //仅为示例，并非真实的接口地址,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data)
          if (res.data.ok) {
            that.setData({
              dayBooks: res.data.ranking.books
            })
          };
          wx.hideLoading();
        }
      })
    } 
  },
  loadMonthRank: function () {
    var that = this;
    if (that.data.monthBooks.length == 0) {
      wx.showToast({
        title: '数据加载中',
        icon: 'loading'
      });
      wx.request({
        url: this.data.url + '/' + this.data.monthRank, //仅为示例，并非真实的接口地址,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          // console.log(res.data);
          if (res.data.ok) {
            that.setData({
              monthBooks: res.data.ranking.books
            })
          };
          wx.hideLoading();
        }
      })
    }
  },
  loadTotalRank: function () {
    var that = this;
    if (that.data.totalBooks.length == 0) {
      wx.showToast({
        title: '数据加载中',
        icon: 'loading'
      });
      wx.request({
        url: this.data.url + '/' + this.data.totalRank, //仅为示例，并非真实的接口地址,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data)
          if (res.data.ok) {
            that.setData({
              totalBooks: res.data.ranking.books
            })
          };
          wx.hideLoading();
        }
      })
    }
  }
})