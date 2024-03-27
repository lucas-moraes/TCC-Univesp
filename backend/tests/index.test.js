const request = require("supertest");
const {Person} = require("../src/entities/person.js");
const App = require("../src/frameworks/express/index.js");
const {listAllMock} = require("./mocks/listAll.js");
const {messageError} = require("../src/frameworks/common/constants.js");
const {personRegisterMock} = require("./mocks/personRegister.js");
const {personRecognizeMock} = require("./mocks/personRecognize.js");
const {LoadModels} = require("../src/frameworks/faceRecognition/utils/loadModels.js");
const { ApiError } = require("../src/frameworks/common/ApiError.js");

jest.mock("../src/entities/person.js");
jest.mock("../src/frameworks/faceRecognition/utils/imageFaceApiPrepare.js", () => {
  return {
    ImageFaceApiPrepare: jest.fn().mockResolvedValue({
      _label: "65ffc67a177f153e71415094",
      _descriptors: [
        new Float32Array([
          -0.0457802414894104, 0.1394842118024826, 0.06274664402008057, -0.0010626688599586487, -0.11702433228492737,
          -0.01695553958415985, -0.039961688220500946, -0.09828250855207443, 0.17036424577236176, -0.03274345025420189,
          0.2969342768192291, -0.043900519609451294, -0.21949900686740875, -0.03724856302142143, 0.018605012446641922,
          0.10845254361629486, -0.15424935519695282, -0.15239542722702026, -0.030359674245119095, -0.10388629138469696,
          0.04908929765224457, 0.07182624936103821, -0.013387084007263184, 0.0068526603281497955, -0.11794167011976242,
          -0.31762024760246277, -0.07661670446395874, -0.1497221738100052, 0.17534932494163513, -0.0773712545633316,
          -0.05917840451002121, 0.01440739631652832, -0.13763919472694397, -0.0941421389579773, 0.07587583363056183,
          0.01471729576587677, -0.08955992758274078, -0.08312162756919861, 0.23359626531600952, -0.037917666137218475,
          -0.19245180487632751, -0.014525245875120163, 0.00444292277097702, 0.23785312473773956, 0.12029565125703812,
          0.056766655296087265, 0.08494167029857635, -0.08295311033725739, 0.05642446130514145, -0.15345712006092072,
          0.06900494545698166, 0.17477628588676453, 0.12650801241397858, 0.041989754885435104, 0.12030483782291412,
          -0.22521892189979553, -0.0344812236726284, 0.11430206894874573, -0.172937273979187, 0.12871485948562622,
          0.09628413617610931, -0.1215282529592514, -0.009117215871810913, -0.08560577034950256, 0.19745716452598572,
          0.02721519209444523, -0.06183728203177452, -0.17957931756973267, 0.2174866795539856, -0.11560294777154922,
          -0.09427660703659058, 0.16049271821975708, -0.09007256478071213, -0.18114182353019714, -0.2547439634799957,
          0.03834650665521622, 0.44399821758270264, 0.08835092186927795, -0.1803172081708908, 0.03990883007645607,
          0.052802812308073044, -0.042407501488924026, 0.11150087416172028, 0.11099570989608765, -0.05527961254119873,
          -0.03209155797958374, -0.14176009595394135, -0.026212524622678757, 0.18500876426696777, -0.03584161028265953,
          -0.029017150402069092, 0.15655365586280823, -0.06729449331760406, 0.05896579474210739, 0.04997124522924423,
          0.10295986384153366, -0.09995738416910172, 0.03127782419323921, -0.01810580864548683, 0.0005127899348735809,
          0.0907515436410904, -0.11227069795131683, -0.023280106484889984, 0.1376880556344986, -0.11427165567874908,
          0.10282617062330246, -0.06707210838794708, 0.013301070779561996, -0.06679420918226242, -0.01006326824426651,
          -0.0024127811193466187, 0.006722733378410339, 0.1818026453256607, -0.2969167232513428, 0.21327120065689087,
          0.16551117599010468, -0.03416122868657112, 0.14390254020690918, 0.004189020022749901, 0.05077550187706947,
          0.0037013469263911247, -0.07508714497089386, -0.27641546726226807, -0.1277841031551361, -0.028747085481882095,
          -0.07505984604358673, 0.011101111769676208, 0.05183032527565956,
        ]),
      ],
    }),
  };
});
jest.mock("../src/frameworks/faceRecognition/utils/imageFaceApiMatcher.js", () => {
  return {
    ImageFaceApiMatcher: jest.fn().mockResolvedValue({
      _label: "65ffc67a177f153e71415094",
      _distance: 0,
    }),
  };
});

describe("CRUD test's - GET - /person-list-all", () => {
  describe("Test success", () => {
    let response;
    beforeEach(async () => {
      jest.clearAllMocks();
      Person.find = jest.fn().mockResolvedValue(listAllMock);
      response = await request(App.express).get("/person-list-all");
    });

    it("should status return 200", async () => {
      expect(response.status).toBe(200);
    });
    it("should body response be correct", async () => {
      expect(response.body).toEqual(listAllMock);
    });
  });

  describe("Test exception", () => {
    let response;
    beforeEach(async () => {
      jest.clearAllMocks();
      Person.find = jest.fn().mockRejectedValue();
      response = await request(App.express).get("/person-list-all");
    });

    it("should status return 500", async () => {
      expect(response.status).toBe(500);
    });
    it("should body response be correct", async () => {
      expect(response.body).toEqual({message: messageError.LIST});
    });
  });
});

describe("CRUD test's - POST - /person-register", () => {
  describe("Test success", () => {
    let response;
    beforeEach(async () => {
      jest.clearAllMocks();
      Person.prototype.save = jest.fn().mockResolvedValue();
      response = await request(App.express).post("/person-register").send(personRegisterMock);
    });

    it("should status return 201", async () => {
      expect(response.status).toBe(201);
    });
  });

  describe("Test exception", () => {
    let response;
    beforeEach(async () => {
      jest.clearAllMocks();
      Person.prototype.save = jest.fn().mockRejectedValue();
      response = await request(App.express).post("/person-register").send(personRegisterMock);
    });

    it("should status return 500", async () => {
      expect(response.status).toBe(500);
    });
    it("should body response be correct", async () => {
      expect(response.body).toEqual({message: messageError.CREATE});
    });
  });
});

describe("CRUD test's - POST - /person-recognize", () => {
  describe("Test success", () => {
    let response;
    beforeEach(async () => {
      jest.clearAllMocks();
      const imgBuffer = Buffer.from(listAllMock[0].image, "base64");
      const data = [
        {
          _doc: {
            _id: "65fef6673f95b8a5d644b0fa",
            name: "Elun",
            wanted: true,
            image: imgBuffer,
          },
        },
      ];
      await LoadModels.execute();
      Person.find = jest.fn().mockResolvedValue(data);
      Person.findById = jest.fn().mockResolvedValue(listAllMock);
      response = await request(App.express).post("/person-recognize").send(personRecognizeMock);
    });

    it("should status return 200", async () => {
      expect(response.status).toBe(200);
    });
  });

  describe("Test exception", () => {
    let response;
    beforeEach(async () => {
      jest.clearAllMocks();
      Person.find = jest.fn().mockRejectedValue();
      response = await request(App.express).post("/person-recognize").send(personRecognizeMock);
    });

    it("should status return 500", async () => {
      expect(response.status).toBe(500);
    });
  });
});

describe("CRUD test's - GET - /health-check", () => {
  let response;
  beforeEach(async () => {
    response = await request(App.express).get("/health-check");
  });

  it("should status return 200", async () => {
    expect(response.status).toBe(200);
  });
  it("should body response be correct", async () => {
    expect(response.body).toEqual({message: "Server is running."});
  });
})

describe("ApiError.js", () => {
  it("Should return the error with the sended variables", () => {
    const message = "Erro de teste";
    const status = 400;
    const error = new ApiError(message, status);

    expect(error.message).toBe(message);
    expect(error.status).toBe(status);
  });

  it("Should return the default status as 500 if no status is provided", () => {
    const message = "Erro interno";
    const error = new ApiError(message);

    expect(error.message).toBe(message);
    expect(error.status).toBe(500);
  });
});
