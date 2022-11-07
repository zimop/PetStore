const httpMocks = require("node-mocks-http");
const axios = require("axios");
const request = require("supertest");

const app = require("../index.js");
const productModel = require("../models/productModel.js");
const imageModel = require("../models/imageModel.js");
const productController = require("../controllers/productController.js");

describe("Unit testing - product controller", () => {
  const getProductList = productModel.getProductList;
  const getProductById = productModel.getProductById;
  const getImagesByProductID = imageModel.getImagesByProductID;
  const getFirstImageByProductID = imageModel.getFirstImageByProductID;

  beforeAll(() => {
    productModel.getProductList = jest.fn().mockReturnValue([
      {
        ProductId: 1,
        ProductName: "Dog Food",
        Price: 5.99,
      },
      {
        ProductId: 2,
        ProductName: "Dog Bed 2",
        Price: 19.99,
      },
      {
        ProductId: 3,
        ProductName: "Sonic the Hedgehog",
        Price: 1991.99,
      },
    ]);

    productModel.getProductById = jest.fn((productId) => {
      return {
        ProductId: productId,
        ProductName: "Morbius",
        ProductDescription: "It's Morbin time! Morbius sweep minions weep.",
        Price: 1000000000.0,
      };
    });

    imageModel.getImagesByProductID = jest
      .fn()
      .mockReturnValue([
        { ImageURL: "https://picsum.photos/200/200" },
        { ImageURL: "https://picsum.photos/300/300" },
      ]);

    imageModel.getFirstImageByProductID = jest
      .fn()
      .mockReturnValue("https://picsum.photos/200/200");
  });

  test("Get All Products", async () => {
    const req = httpMocks.createRequest({
      method: "GET",
    });
    const res = httpMocks.createResponse();
    await productController.getAllProducts(req, res);
    let results = JSON.parse(res._getData());
    let expectedResults = [
      {
        ProductId: 1,
        ProductName: "Dog Food",
        Price: 5.99,
        ProductImage: "https://picsum.photos/200/200",
      },
      {
        ProductId: 2,
        ProductName: "Dog Bed 2",
        Price: 19.99,
        ProductImage: "https://picsum.photos/200/200",
      },
      {
        ProductId: 3,
        ProductName: "Sonic the Hedgehog",
        Price: 1991.99,
        ProductImage: "https://picsum.photos/200/200",
      },
    ];
    expect(results).toEqual(expectedResults);
    expect(productModel.getProductList).toHaveBeenCalledTimes(1);
    expect(imageModel.getFirstImageByProductID).toHaveBeenCalledTimes(3);
    expect(imageModel.getImagesByProductID).not.toHaveBeenCalled();
  });

  test("Get Single Product", async () => {
    const id = Math.floor(Math.random() * 10);
    const req = httpMocks.createRequest({
      method: "GET",
      params: {
        id: id,
      },
    });
    const res = httpMocks.createResponse();
    await productController.getProductById(req, res);
    let results = JSON.parse(res._getData());
    let expectedResults = {
      ProductId: id,
      ProductName: "Morbius",
      ProductDescription: "It's Morbin time! Morbius sweep minions weep.",
      Price: 1000000000.0,
      images: [
        { ImageURL: "https://picsum.photos/200/200" },
        { ImageURL: "https://picsum.photos/300/300" },
      ],
    };
    expect(results).toEqual(expectedResults);
    expect(productModel.getProductById).toHaveBeenCalledTimes(1);
    expect(productModel.getProductById).toHaveBeenCalledWith(id);
    expect(imageModel.getImagesByProductID).toHaveBeenCalledWith(id);
  });

  afterAll(() => {
    productModel.getProductList = getProductList;
    productModel.getProductById = getProductById;
    imageModel.getImagesByProductID = getImagesByProductID;
    imageModel.getFirstImageByProductID = getFirstImageByProductID;
  });
});

describe("Integration testing - product controller", () => {
  test("Get All Products", () => {
    let expected = {
      ProductId: 1,
      ProductName: "Dog Food",
      Price: 7.99,
      ProductImage:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=640",
    };
    return request(app)
      .get("/api/get-all-products")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe("application/json");
        let data = response._body;
        expect(data[0]).toMatchObject(expected);
      });
  });

  test("Get Product 1", () => {
    let expected = {
      ProductId: 1,
      ProductName: "Dog Food",
      Price: 7.99,
      images: [
        {
          ImageURL:
            "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=640",
        },
        {
          ImageURL:
            "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=480",
        },
        { ImageURL: "https://picsum.photos/200/300" },
        { ImageURL: "https://picsum.photos/200/302" },
        { ImageURL: "https://picsum.photos/200/305" },
        { ImageURL: "https://picsum.photos/200/350" },
      ],
    };
    return request(app)
      .get("/api/get-product/1")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe("application/json");
        let data = response._body;
        expect(data).toMatchObject(expected);
      });
  });

  test("Get Product that does not exist (-1)", () => {
    return request(app)
      .get("/api/get-product/-1")
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});
