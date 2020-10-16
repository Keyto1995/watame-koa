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
];
