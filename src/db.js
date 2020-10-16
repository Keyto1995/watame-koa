module.exports = [
  {
    name: "商品列表",
    method: "GET",
    url: "/goods",
    response: [
      {
        id: { name: "商品ID", type: "num", desc: "" },
        name: { name: "商品名称", type: "string", desc: "" },
        price: { name: "商品价格", type: "string", desc: "" },
      },
    ],
    test_data: [
      {
        response: [
          { id: 1, name: "西瓜", price: "1.2" },
          { id: 2, name: "冬瓜", price: "1.0" },
        ],
      },
    ],
  },
  {
    name: "商品详情",
    method: "GET",
    url: "/goods/:id",
    response: {
      id: { name: "商品ID", type: "num", desc: "" },
      name: { name: "商品名称", type: "string", desc: "" },
      price: { name: "商品价格", type: "string", desc: "" },
    },
    test_data: [
      {
        url: "/goods/1",
        response: { id: 1, name: "西瓜", price: "1.2" },
      },
      {
        url: "/goods/2",
        response: { id: 2, name: "冬瓜", price: "1.0" },
      },
    ],
  },
  {
    name: "搜索商品",
    method: "GET",
    url: "/goods/search",
    query: {
      name: {
        name: "商品名称",
        required: false,
        type: "string",
        desc: "",
      },
      price: {
        name: "商品价格",
        required: false,
        type: "string",
        desc: "",
      },
    },
    response: {
      id: { name: "商品ID", type: "num", desc: "" },
      name: { name: "商品名称", type: "string", desc: "" },
      price: { name: "商品价格", type: "string", desc: "" },
    },
    test_data: [
      {
        query: { name: "西瓜" },
        response: { id: 1, name: "西瓜", price: "1.2" },
      },
      {
        query: { price: "1.0" },
        response: { id: 2, name: "冬瓜", price: "1.0" },
      },
    ],
  },
  {
    name: "新建商品",
    method: "POST",
    url: "/goods",
    body: {
      name: { name: "商品名称", type: "string", required: true, desc: "" },
      price: { name: "商品价格", type: "string", required: true, desc: "" },
    },
    response: {
      id: { name: "商品ID", type: "num", desc: "" },
      name: { name: "商品名称", type: "string", desc: "" },
      price: { name: "商品价格", type: "string", desc: "" },
    },
    test_data: [
      {
        body: { name: "南瓜", price: "2.0" },
        response: { id: 3, name: "南瓜", price: "2.0" },
      },
    ],
  },
  {
    name: "修改商品",
    method: "PUT",
    url: "/goods/:id",
    body: {
      name: { name: "商品名称", type: "string", required: true, desc: "" },
      price: { name: "商品价格", type: "string", required: true, desc: "" },
    },
    response: {
      id: { name: "商品ID", type: "num", desc: "" },
      name: { name: "商品名称", type: "string", desc: "" },
      price: { name: "商品价格", type: "string", desc: "" },
    },
    test_data: [
      {
        url: "/goods/1",
        body: { name: "西瓜子", price: "3.0" },
        response: { id: 1, name: "西瓜子", price: "3.0" },
      },
    ],
  },
  {
    name: "删除商品",
    method: "DELETE",
    url: "/goods/:id",
    response: {
      id: { name: "商品ID", type: "num", desc: "" },
      name: { name: "商品名称", type: "string", desc: "" },
      price: { name: "商品价格", type: "string", desc: "" },
    },
    test_data: [
      {
        url: "/goods/1",
        response: { id: 1, name: "西瓜", price: "1.2" },
      },
    ],
  },
];
