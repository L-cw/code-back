const upimg = (req, res) => {
  console.log(req.body)
}

const show = (req, res) => {
  res.json({
    'ret': 'yeah!'
  })
}

const indexData = (req, res) => {
  res.json({
    "data": {
      "adList": [
        {
          "picPath": "/home/app.jpg",
          "picTitle": "区跨链落地项目"
        },
        {
          "picPath": "/home/app.jpg",
          "picTitle": "壹诺金融项目演示"
        }
      ],
      "carouselList": [
        {
          "picPath": "/home/index1.jpg",
          "picTitle": "区块链最新技术沙龙活动"
        },
        {
          "picPath": "/home/app.jpg",
          "picTitle": "DAPP开发"
        }
      ],
      "latestNoticeList": [
        {
          "title": "最新技术",
          "topicId": 1
        },
        {
          "title": "最新公告-主网上线",
          "topicId": 2
        }
      ],
      "newsRespDto": {
        "newsRespBoList": [
          {
            "coverPic": "home/cover4.jpg",
            "createTime": 1530605105000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "壹诺金融支持多家核心企业贷款融资",
            "title": "壹诺金融上线",
            "topicId": 4,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          },
          {
            "coverPic": "home/cover2.jpg",
            "createTime": 1530605093000,
            "labelList": [
              "组件设计",
              "意见反馈"
            ],
            "summary": "最新公告奖励发放",
            "title": "最新公告奖励发放",
            "topicId": 3,
            "userId": 20,
            "userNickName": "用户1"
          }
        ],
        "page": {
          "count": 1,
          "curSize": 2,
          "endOfGroup": 1,
          "firstResultNumber": 0,
          "queryTotal": true,
          "size": 20,
          "start": 1,
          "startOfGroup": 1,
          "total": 2,
          "nextFlag": false
        }
      }
    },
    "err_code": "0",
    "msg": "操作成功"
  })
}

const pageTotal = 5
let nextFlag = true
const loadMore = (req, res) => {
  console.log(req.body)
  let {startPage} = req.body
  if (startPage > 5) {
    nextFlag = false
  }
  res.json({
    "err_code": "0",
    "data": {
      "newsRespBoList": [
        {
          "coverPic": "home/cover4.jpg",
          "createTime": 1530605105000,
          "labelList": [
            "组件设计",
            "意见反馈"
          ],
          "summary": "壹诺金融支持多家核心企业贷款融资",
          "title": "壹诺金融上线",
          "topicId": 4,
          "userId": 20,
          "userNickName": "用户1"
        },
        {
          "coverPic": "home/cover2.jpg",
          "createTime": 1530605093000,
          "labelList": [
            "组件设计",
            "意见反馈"
          ],
          "summary": "最新公告奖励发放",
          "title": "最新公告奖励发放",
          "topicId": 3,
          "userId": 20,
          "userNickName": "用户1"
        },
        {
          "coverPic": "home/cover2.jpg",
          "createTime": 1530605093000,
          "labelList": [
            "组件设计",
            "意见反馈"
          ],
          "summary": "最新公告奖励发放",
          "title": "最新公告奖励发放",
          "topicId": 3,
          "userId": 20,
          "userNickName": "用户1"
        },
        {
          "coverPic": "home/cover2.jpg",
          "createTime": 1530605093000,
          "labelList": [
            "组件设计",
            "意见反馈"
          ],
          "summary": "最新公告奖励发放",
          "title": "最新公告奖励发放",
          "topicId": 3,
          "userId": 20,
          "userNickName": "用户1"
        },
        {
          "coverPic": "home/cover2.jpg",
          "createTime": 1530605093001,
          "labelList": [
            "组件设计",
            "意见反馈"
          ],
          "summary": "最新公告奖励发放",
          "title": "最新公告奖励发放",
          "topicId": 3,
          "userId": 20,
          "userNickName": "用户1"
        },
        {
          "coverPic": "home/cover2.jpg",
          "createTime": 1530605093000,
          "labelList": [
            "组件设计",
            "意见反馈"
          ],
          "summary": "最新公告奖励发放",
          "title": "最新公告奖励发放",
          "topicId": 3,
          "userId": 20,
          "userNickName": "用户1"
        },
        {
          "coverPic": "home/cover2.jpg",
          "createTime": 1530605093000,
          "labelList": [
            "组件设计",
            "意见反馈"
          ],
          "summary": "最新公告奖励发放",
          "title": "最新公告奖励发放",
          "topicId": 3,
          "userId": 20,
          "userNickName": "用户1"
        }
      ],
      "page": {
        "count": 1,
        "curSize": 2,
        "endOfGroup": 1,
        "firstResultNumber": 0,
        "queryTotal": true,
        "size": 7,
        "start": startPage,
        "startOfGroup": 1,
        "total": 2,
        "nextFlag": nextFlag
      }
    }
  })
}

const example = (req, res) => {}

module.exports = {
  upimg,
  show,
  indexData,
  loadMore
}