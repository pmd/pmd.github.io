var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":189,"id":29773,"methods":[{"el":48,"sc":3,"sl":45},{"el":70,"sc":5,"sl":60},{"el":81,"sc":5,"sl":72},{"el":93,"sc":5,"sl":88},{"el":97,"sc":5,"sl":95},{"el":101,"sc":2,"sl":99},{"el":105,"sc":2,"sl":103},{"el":109,"sc":5,"sl":107},{"el":113,"sc":5,"sl":111},{"el":117,"sc":5,"sl":115},{"el":121,"sc":5,"sl":119},{"el":125,"sc":5,"sl":123},{"el":129,"sc":5,"sl":127},{"el":133,"sc":5,"sl":131},{"el":137,"sc":5,"sl":135},{"el":141,"sc":5,"sl":139},{"el":145,"sc":5,"sl":143},{"el":149,"sc":5,"sl":147},{"el":153,"sc":5,"sl":151},{"el":157,"sc":5,"sl":155},{"el":171,"sc":5,"sl":159},{"el":188,"sc":5,"sl":173}],"name":"XmlParserOptions","sl":18}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_233":{"methods":[{"sl":60},{"sl":88},{"sl":103},{"sl":111},{"sl":119},{"sl":127},{"sl":131},{"sl":135},{"sl":143},{"sl":151}],"name":"testParsingIgnoreElementContentWhitespace","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":89},{"sl":90},{"sl":104},{"sl":112},{"sl":120},{"sl":128},{"sl":132},{"sl":136},{"sl":144},{"sl":152}]},"test_241":{"methods":[{"sl":60},{"sl":103},{"sl":107},{"sl":111},{"sl":115},{"sl":119},{"sl":123},{"sl":127},{"sl":131},{"sl":135},{"sl":139},{"sl":143},{"sl":147},{"sl":151},{"sl":155}],"name":"testSetters","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":104},{"sl":108},{"sl":112},{"sl":116},{"sl":120},{"sl":124},{"sl":128},{"sl":132},{"sl":136},{"sl":140},{"sl":144},{"sl":148},{"sl":152},{"sl":156}]},"test_251":{"methods":[{"sl":60},{"sl":88},{"sl":103},{"sl":111},{"sl":119},{"sl":127},{"sl":135},{"sl":143},{"sl":151}],"name":"testXML","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":89},{"sl":90},{"sl":104},{"sl":112},{"sl":120},{"sl":128},{"sl":136},{"sl":144},{"sl":152}]},"test_297":{"methods":[{"sl":60},{"sl":88},{"sl":103},{"sl":111},{"sl":115},{"sl":119},{"sl":127},{"sl":135},{"sl":143},{"sl":151}],"name":"testParsingDoNotExpandEntities","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":89},{"sl":90},{"sl":104},{"sl":112},{"sl":116},{"sl":120},{"sl":128},{"sl":136},{"sl":144},{"sl":152}]},"test_300":{"methods":[{"sl":60},{"sl":103},{"sl":107},{"sl":111},{"sl":115},{"sl":119},{"sl":123}],"name":"testSetters","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":104},{"sl":108},{"sl":112},{"sl":116},{"sl":120},{"sl":124}]},"test_341":{"methods":[{"sl":60},{"sl":88},{"sl":103},{"sl":111},{"sl":119},{"sl":127},{"sl":135},{"sl":143},{"sl":151}],"name":"testLineNumbers","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":89},{"sl":90},{"sl":104},{"sl":112},{"sl":120},{"sl":128},{"sl":136},{"sl":144},{"sl":152}]},"test_359":{"methods":[{"sl":45},{"sl":60},{"sl":88},{"sl":99},{"sl":103},{"sl":111},{"sl":119},{"sl":127},{"sl":135},{"sl":143},{"sl":151}],"name":"dtdIsNotLookedUp","pass":true,"statements":[{"sl":47},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":89},{"sl":90},{"sl":100},{"sl":104},{"sl":112},{"sl":120},{"sl":128},{"sl":136},{"sl":144},{"sl":152}]},"test_421":{"methods":[{"sl":60},{"sl":88},{"sl":103},{"sl":111},{"sl":119},{"sl":127},{"sl":135},{"sl":143},{"sl":151}],"name":"xsdIsNotLookedUp","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":89},{"sl":90},{"sl":104},{"sl":112},{"sl":120},{"sl":128},{"sl":136},{"sl":144},{"sl":152}]},"test_470":{"methods":[{"sl":60},{"sl":72},{"sl":159},{"sl":173}],"name":"testEqualsHashcode","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":175},{"sl":176},{"sl":178},{"sl":181},{"sl":182}]},"test_487":{"methods":[{"sl":60},{"sl":88},{"sl":103},{"sl":111},{"sl":119},{"sl":127},{"sl":135},{"sl":143},{"sl":147},{"sl":151}],"name":"testParsingWithValidation","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":89},{"sl":90},{"sl":104},{"sl":112},{"sl":120},{"sl":128},{"sl":136},{"sl":144},{"sl":148},{"sl":152}]},"test_506":{"methods":[{"sl":60},{"sl":88},{"sl":103},{"sl":111},{"sl":119},{"sl":127},{"sl":135},{"sl":139},{"sl":143},{"sl":151}],"name":"testParsingNotNamespaceAware","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":89},{"sl":90},{"sl":104},{"sl":112},{"sl":120},{"sl":128},{"sl":136},{"sl":140},{"sl":144},{"sl":152}]},"test_574":{"methods":[{"sl":60},{"sl":88},{"sl":103},{"sl":111},{"sl":119},{"sl":127},{"sl":135},{"sl":143},{"sl":151}],"name":"testDefaultParsingNamespaces","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":89},{"sl":90},{"sl":104},{"sl":112},{"sl":120},{"sl":128},{"sl":136},{"sl":144},{"sl":152}]},"test_590":{"methods":[{"sl":60},{"sl":88},{"sl":103},{"sl":111},{"sl":119},{"sl":127},{"sl":135},{"sl":143},{"sl":151}],"name":"testDefaultParsing","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":89},{"sl":90},{"sl":104},{"sl":112},{"sl":120},{"sl":128},{"sl":136},{"sl":144},{"sl":152}]},"test_615":{"methods":[{"sl":60},{"sl":88},{"sl":103},{"sl":111},{"sl":119},{"sl":127},{"sl":135},{"sl":143},{"sl":151}],"name":"testVisit","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":89},{"sl":90},{"sl":104},{"sl":112},{"sl":120},{"sl":128},{"sl":136},{"sl":144},{"sl":152}]},"test_621":{"methods":[{"sl":72},{"sl":103},{"sl":111},{"sl":119},{"sl":127},{"sl":135},{"sl":143},{"sl":151}],"name":"testConstructor","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":104},{"sl":112},{"sl":120},{"sl":128},{"sl":136},{"sl":144},{"sl":152}]},"test_683":{"methods":[{"sl":60},{"sl":88},{"sl":103},{"sl":107},{"sl":111},{"sl":119},{"sl":127},{"sl":135},{"sl":143},{"sl":151}],"name":"testParsingCoalescingEnabled","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":89},{"sl":90},{"sl":104},{"sl":108},{"sl":112},{"sl":120},{"sl":128},{"sl":136},{"sl":144},{"sl":152}]},"test_701":{"methods":[{"sl":60},{"sl":72},{"sl":103},{"sl":111},{"sl":119},{"sl":127},{"sl":135},{"sl":143},{"sl":151}],"name":"testDefaults","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":104},{"sl":112},{"sl":120},{"sl":128},{"sl":136},{"sl":144},{"sl":152}]},"test_703":{"methods":[{"sl":60}],"name":"testCopyXmlToClipboard","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69}]},"test_815":{"methods":[{"sl":60},{"sl":88},{"sl":103},{"sl":111},{"sl":115},{"sl":119},{"sl":127},{"sl":135},{"sl":143},{"sl":151}],"name":"testVisit","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":89},{"sl":90},{"sl":104},{"sl":112},{"sl":116},{"sl":120},{"sl":128},{"sl":136},{"sl":144},{"sl":152}]},"test_928":{"methods":[{"sl":60},{"sl":88},{"sl":103},{"sl":111},{"sl":119},{"sl":123},{"sl":127},{"sl":135},{"sl":143},{"sl":151}],"name":"testParsingIgnoreComments","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":89},{"sl":90},{"sl":104},{"sl":112},{"sl":120},{"sl":124},{"sl":128},{"sl":136},{"sl":144},{"sl":152}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [359], [], [359], [], [], [], [], [], [], [], [], [], [], [], [], [241, 590, 470, 300, 251, 928, 421, 703, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [241, 590, 470, 300, 251, 928, 421, 703, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [241, 590, 470, 300, 251, 928, 421, 703, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [241, 590, 470, 300, 251, 928, 421, 703, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [241, 590, 470, 300, 251, 928, 421, 703, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [], [241, 590, 470, 300, 251, 928, 421, 703, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [241, 590, 470, 300, 251, 928, 421, 703, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [241, 590, 470, 300, 251, 928, 421, 703, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [241, 590, 470, 300, 251, 928, 421, 703, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [], [], [470, 621, 701], [470, 621, 701], [470, 621, 701], [470, 621, 701], [470, 621, 701], [470, 621, 701], [470, 621, 701], [470, 621, 701], [470, 621, 701], [], [], [], [], [], [], [], [590, 251, 928, 421, 683, 615, 297, 815, 506, 574, 487, 233, 341, 359], [590, 251, 928, 421, 683, 615, 297, 815, 506, 574, 487, 233, 341, 359], [590, 251, 928, 421, 683, 615, 297, 815, 506, 574, 487, 233, 341, 359], [], [], [], [], [], [], [], [], [359], [359], [], [], [241, 590, 300, 251, 928, 421, 621, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [241, 590, 300, 251, 928, 421, 621, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [], [], [241, 300, 683], [241, 300, 683], [], [], [241, 590, 300, 251, 928, 421, 621, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [241, 590, 300, 251, 928, 421, 621, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [], [], [241, 300, 297, 815], [241, 300, 297, 815], [], [], [241, 590, 300, 251, 928, 421, 621, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [241, 590, 300, 251, 928, 421, 621, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [], [], [241, 300, 928], [241, 300, 928], [], [], [241, 590, 251, 928, 421, 621, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [241, 590, 251, 928, 421, 621, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [], [], [241, 233], [241, 233], [], [], [241, 590, 251, 928, 421, 621, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [241, 590, 251, 928, 421, 621, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [], [], [241, 506], [241, 506], [], [], [241, 590, 251, 928, 421, 621, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [241, 590, 251, 928, 421, 621, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [], [], [241, 487], [241, 487], [], [], [241, 590, 251, 928, 421, 621, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [241, 590, 251, 928, 421, 621, 683, 615, 297, 815, 506, 574, 701, 487, 233, 341, 359], [], [], [241], [241], [], [], [470], [], [470], [470], [470], [470], [470], [470], [470], [470], [470], [470], [], [], [470], [], [470], [470], [], [470], [], [], [470], [470], [], [], [], [], [], [], []]
