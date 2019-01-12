
const upimg = (req, res) => {
	const {name, company, salary, address} = req.body;
	const logo = req.file.filename;
	res.json({
    "ret": true
  })
}

const show = (req, res) => {
  res.json({
    'ret': 'yeah!'
  })
}

const indexData = (req, res) => {
  res.json({
    "data": {
      "page": {
          "count": 2,
          "curSize": 10,
          "endOfGroup": 2,
          "firstResultNumber": 0,
          "queryTotal": true,
          "size": 10,
          "start": 1,
          "startOfGroup": 1,
          "total": 12
      },
      "goodsList": [
          {
          "name":"黄金饰品礼品0.3g ",
          "picUrl":"https://f10.baidu.com/it/u=227470227,1522663325&fm=76",
          "realPrice":"9.99",
          "tokenAmount":"",
          "tokenUnionCh":"",
          "tokenUnionEn":"",
          "goodsNo":"1",
          "goodsCategoryNo":"",
          "sellCount":"1234",
          "size": "8mm*7mm",
          "level": 3,
          "price": "14.88"
          },{
          "name":"黄金饰品礼品0.6g ",
          "picUrl":"https://f10.baidu.com/it/u=227470227,1522663325&fm=76",
          "realPrice":"8.88",
          "tokenAmount":"",
          "tokenUnionCh":"",
          "tokenUnionEn":"",
          "goodsNo":"2",
          "goodsCategoryNo":"",
          "sellCount":"4321",
          "size": "8mm*6.5mm",
          "level": 4,
          "price": "12.88"
          },
          {
            "name":"黄金饰品礼品0.6g ",
            "picUrl":"https://f10.baidu.com/it/u=227470227,1522663325&fm=76",
            "realPrice":"8.88",
            "tokenAmount":"",
            "tokenUnionCh":"",
            "tokenUnionEn":"",
            "goodsNo":"3",
            "goodsCategoryNo":"",
            "sellCount":"4321",
            "size": "8mm*6.5mm",
            "level": 4,
            "price": "12.88"
            },
            {
              "name":"黄金饰品礼品0.6g ",
              "picUrl":"https://f10.baidu.com/it/u=227470227,1522663325&fm=76",
              "realPrice":"8.88",
              "tokenAmount":"",
              "tokenUnionCh":"",
              "tokenUnionEn":"",
              "goodsNo":"4",
              "goodsCategoryNo":"",
              "sellCount":"4321",
              "size": "8mm*6.5mm",
              "level": 4,
              "price": "12.88"
              },
              {
                "name":"黄金饰品礼品0.6g ",
                "picUrl":"https://f10.baidu.com/it/u=227470227,1522663325&fm=76",
                "realPrice":"8.88",
                "tokenAmount":"",
                "tokenUnionCh":"",
                "tokenUnionEn":"",
                "goodsNo":"5",
                "goodsCategoryNo":"",
                "sellCount":"4321",
                "size": "8mm*6.5mm",
                "level": 4,
                "price": "12.88"
                },
                {
                  "name":"黄金饰品礼品0.6g ",
                  "picUrl":"https://f10.baidu.com/it/u=227470227,1522663325&fm=76",
                  "realPrice":"8.88",
                  "tokenAmount":"",
                  "tokenUnionCh":"",
                  "tokenUnionEn":"",
                  "goodsNo":"6",
                  "goodsCategoryNo":"",
                  "sellCount":"4321",
                  "size": "8mm*6.5mm",
                  "level": 4,
                  "price": "12.88"
                  }
      ]
    },
    "errCode": "0",
    "msg": "操作成功"
  })
}

const pageTotal = 5
let nextFlag = true
const getGoodsDetail = (req, res) => {
  console.log(req.body)
  let { startPage } = req.body
  if (startPage > 5) {
    nextFlag = false
  }
  res.json({
    "errCode": "0",
  "msg": "操作成功",
    "data":{
    "goodsNo":"1",
    "name":"黄金饰品礼品0.3g ",
    "size":"8mm*6.5mm ",
    "price":"12.88",
    "realPrice":"8.88",
    "level":"4",
    "sellCount":"5201",
    "stockCount":"1000000",
    "validBeginTime":"2019.01.01",
    "validEndTime":"2020.12.31",
    "description":"商品描述",
    "remark":"商品备注",
    "goodsPropertys":[
      {
        "label":"材质",
        "value":"足金"
      },{
        "label":"工艺",
        "value":"光沙"
      }
    ],
    "picList":[
      {
          "picId":"1",
          "picUrl":"http://qny.luchengwei.top/blog/20190110/zoowNEjjJUCX.png?imageslim"
      },{
          "picId":"2",
          "picUrl":"http://qny.luchengwei.top/blog/20190110/zoowNEjjJUCX.png?imageslim"
      },{
          "picId":"3",
          "picUrl":"http://qny.luchengwei.top/blog/20190110/zoowNEjjJUCX.png?imageslim"
      },{
        "picId":"4",
        "picUrl":"http://qny.luchengwei.top/blog/20190110/zoowNEjjJUCX.png?imageslim"
      }
    ],
    "goodsList":[
      {
        "goodsNo":"1",
        "realPrice":"8.88",
        "price": "18.88",
        "spec":"0.1",
        "unionCh":"克",
        "unionEn":"g"
      },{
        "goodsNo":"2",
        "realPrice":"16.88",
        "price": "28.88",
        "spec":"1.1",
        "unionCh":"克",
        "unionEn":"g"
      },{
        "goodsNo":"3",
        "realPrice":"868.88",
        "price": "188.88",
        "spec":"11.1",
        "unionCh":"克",
        "unionEn":"g"
      },{
        "goodsNo":"4",
        "realPrice":"1688.88",
        "price": "1888.88",
        "spec":"111.11",
        "unionCh":"克",
        "unionEn":"g"
      },{
        "goodsNo":"10",
        "realPrice":"16888.88",
        "price": "18888.88",
        "spec":"1111.11",
        "unionCh":"克",
        "unionEn":"g"
      }
    ]
  }})
}

const forumIndex = (req, res) => {
  res.json()
}

let nextFlag1 = true
const forumLoad = (req, res) => {
  console.log(req.body)
  let { startPage } = req.body
  if (startPage > 5) {
    nextFlag1 = false
  }
  res.json({})
}
const example = (req, res) => {}

module.exports = {
  upimg,
  show,
  indexData,
  getGoodsDetail,
  forumIndex,
  forumLoad
}