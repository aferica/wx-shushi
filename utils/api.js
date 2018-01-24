const ApiConfig = {

  API: 'http://39.108.63.38:3000/api/getNoEncode/byurl?url=',
  EncodeAPI: 'http://39.108.63.38:3000/api/getWithEncode/byurl?mainurl=',
  IMGAPI: 'http://39.108.63.38:3000/api/getimg/byurl?url=',

  staticUrl: 'http://statics.zhuishushenqi.com',
  category: {
    // 带书籍数量的父分类
    categoryWithBookCount: 'http://api.zhuishushenqi.com/cats/lv2/statistics',
    // 带子分类的父分类
    categoryWithSubCategories: 'http://api.zhuishushenqi.com/cats/lv2',
    // 分类详情: 带着书籍
    categoryInfo: 'http://api.zhuishushenqi.com/book/by-categories'
    // categoryInfo: 'http://novel.juhe.im/category-info'
  },
  book: {
    // 书籍详情
    bookInfo: 'http://api.zhuishushenqi.com/book', // id 书籍id
    // 相关推荐
    relatedRecommendedBooks: 'http://api.zhuishushenqi.com/book', // http://api.zhuishushenqi.com/book/56d0b60dfb51235c3a7a2739/recommend
    // 作者名下的书籍
    authorBooks: 'http://api.zhuishushenqi.com/book/accurate-search', // query ?author=忘语
    // 书籍章节内容
    bookChapters: 'http://api.zhuishushenqi.com/mix-atoc',
    // 书源
    bookSources: 'http://api.zhuishushenqi.com/atoc', // query ?view=summary&book=5779b38d3b433dd647d95da2
    // 章节内容:id 单章id
    chapterContent: 'http://chapter2.zhuishushenqi.com/chapter/', //id: chapter id
    // 书籍搜索 可以搜索作者但是不精确
    bookSearch: 'http://api.zhuishushenqi.com/book/fuzzy-search' //query ?query=凡人修仙传
  },
  rank: {
    // 排名分类
    rankCategory: 'http://api.zhuishushenqi.com/ranking/gender',
    // 排名详情
    rankInfo: 'http://api.zhuishushenqi.com/ranking' // id: rank id
  },
  comment: {
    /**评论详情
     * @param book: {bookId},
     * @param sort: (updated|created|comment-count),
     * @param start,
     * @param limit
     */
    commentInfo: 'http://api.zhuishushenqi.com/post/review/by-book',

    //
  },
  bookList: {
    //书单
    /**
     * query string: {
     *     sort: (collectorCount|created),
     *     duration: (last-seven-days|all),
     *    gender: (male|female),
     *     tag: (有点多),
     *     start
     *   }
     *
     *            说明:
     *
     *            本周最热的query是: sort=collectorCount&duration=last-seven-days&start=0
     *            最新发布是: sort=created&duration=all
     *            最多收藏是: sort=collectorCount&duration=all
     *
     */
    bookList: 'http://api.zhuishushenqi.com/book-list',
    //书单详情
    bookListInfo: 'http://api.zhuishushenqi.com/book-list/' //书单ID
  },
  photo: {
    getPictureByTagsOr: 'http://39.108.63.38:3000/api/picture/getPictureByTagsOr',
    getPictureByTagsAnd: 'http://39.108.63.38:3000/api/picture/getPictureByTagsAnd',
    getPictureById: 'http://39.108.63.38:3000/api/picture/getPicture',
    getPictureNumber: 'http://39.108.63.38:3000/api/picture/getPictureNumber'
  }

}

module.exports = {
  ApiConfig: ApiConfig
}