var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":322,"id":36616,"methods":[{"el":68,"sc":6,"sl":61},{"el":75,"sc":6,"sl":70},{"el":82,"sc":6,"sl":77},{"el":89,"sc":6,"sl":84},{"el":96,"sc":6,"sl":91},{"el":103,"sc":6,"sl":98},{"el":110,"sc":6,"sl":105},{"el":117,"sc":6,"sl":112},{"el":124,"sc":6,"sl":119},{"el":131,"sc":6,"sl":126},{"el":138,"sc":6,"sl":133},{"el":145,"sc":6,"sl":140},{"el":152,"sc":6,"sl":147},{"el":159,"sc":6,"sl":154},{"el":166,"sc":6,"sl":161},{"el":173,"sc":6,"sl":168},{"el":180,"sc":6,"sl":175},{"el":321,"sc":5,"sl":319}],"name":"SuppressWarningsTest","sl":18},{"el":41,"id":36616,"methods":[{"el":27,"sc":9,"sl":21},{"el":35,"sc":9,"sl":29},{"el":40,"sc":9,"sl":37}],"name":"SuppressWarningsTest.FooRule","sl":20},{"el":59,"id":36630,"methods":[{"el":53,"sc":9,"sl":44},{"el":58,"sc":9,"sl":55}],"name":"SuppressWarningsTest.BarRule","sl":43}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_299":{"methods":[{"sl":21},{"sl":29},{"sl":37},{"sl":133}],"name":"testSpecificSuppressionValue3","pass":true,"statements":[{"sl":23},{"sl":26},{"sl":31},{"sl":32},{"sl":34},{"sl":39},{"sl":135},{"sl":136},{"sl":137}]},"test_304":{"methods":[{"sl":21},{"sl":29},{"sl":37},{"sl":61}],"name":"testClassLevelSuppression","pass":true,"statements":[{"sl":23},{"sl":24},{"sl":26},{"sl":31},{"sl":32},{"sl":34},{"sl":39},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67}]},"test_330":{"methods":[{"sl":21},{"sl":29},{"sl":37},{"sl":91}],"name":"testFieldLevelSuppression","pass":true,"statements":[{"sl":23},{"sl":26},{"sl":31},{"sl":32},{"sl":34},{"sl":39},{"sl":93},{"sl":94},{"sl":95}]},"test_390":{"methods":[{"sl":21},{"sl":29},{"sl":37},{"sl":168}],"name":"testSuppressAll","pass":true,"statements":[{"sl":23},{"sl":26},{"sl":31},{"sl":32},{"sl":34},{"sl":39},{"sl":170},{"sl":171},{"sl":172}]},"test_460":{"methods":[{"sl":21},{"sl":29},{"sl":37},{"sl":126}],"name":"testSpecificSuppressionValue2","pass":true,"statements":[{"sl":23},{"sl":26},{"sl":31},{"sl":32},{"sl":34},{"sl":39},{"sl":128},{"sl":129},{"sl":130}]},"test_555":{"methods":[{"sl":21},{"sl":29},{"sl":37},{"sl":105}],"name":"testLocalVariableLevelSuppression","pass":true,"statements":[{"sl":23},{"sl":26},{"sl":31},{"sl":32},{"sl":34},{"sl":39},{"sl":107},{"sl":108},{"sl":109}]},"test_559":{"methods":[{"sl":21},{"sl":29},{"sl":37},{"sl":70}],"name":"testInheritedSuppression","pass":true,"statements":[{"sl":23},{"sl":26},{"sl":31},{"sl":32},{"sl":34},{"sl":39},{"sl":72},{"sl":73},{"sl":74}]},"test_564":{"methods":[{"sl":21},{"sl":29},{"sl":37},{"sl":147}],"name":"testSpecificSuppressionMulitpleValues2","pass":true,"statements":[{"sl":23},{"sl":26},{"sl":31},{"sl":32},{"sl":34},{"sl":39},{"sl":149},{"sl":150},{"sl":151}]},"test_574":{"methods":[{"sl":21},{"sl":29},{"sl":37},{"sl":154}],"name":"testNoSuppressionBlank","pass":true,"statements":[{"sl":23},{"sl":26},{"sl":31},{"sl":32},{"sl":34},{"sl":39},{"sl":156},{"sl":157},{"sl":158}]},"test_584":{"methods":[{"sl":21},{"sl":29},{"sl":37},{"sl":119}],"name":"testSpecificSuppressionValue1","pass":true,"statements":[{"sl":23},{"sl":26},{"sl":31},{"sl":32},{"sl":34},{"sl":39},{"sl":121},{"sl":122},{"sl":123}]},"test_609":{"methods":[{"sl":44},{"sl":55},{"sl":175}],"name":"testSpecificSuppressionAtTopLevel","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":52},{"sl":57},{"sl":177},{"sl":178},{"sl":179}]},"test_622":{"methods":[{"sl":21},{"sl":29},{"sl":37},{"sl":77}],"name":"testMethodLevelSuppression","pass":true,"statements":[{"sl":23},{"sl":24},{"sl":26},{"sl":31},{"sl":32},{"sl":34},{"sl":39},{"sl":79},{"sl":80},{"sl":81}]},"test_665":{"methods":[{"sl":21},{"sl":29},{"sl":37},{"sl":98}],"name":"testParameterLevelSuppression","pass":true,"statements":[{"sl":23},{"sl":26},{"sl":31},{"sl":32},{"sl":34},{"sl":39},{"sl":100},{"sl":101},{"sl":102}]},"test_830":{"methods":[{"sl":21},{"sl":29},{"sl":37},{"sl":161}],"name":"testNoSuppressionSomethingElseS","pass":true,"statements":[{"sl":23},{"sl":26},{"sl":31},{"sl":32},{"sl":34},{"sl":39},{"sl":163},{"sl":164},{"sl":165}]},"test_893":{"methods":[{"sl":21},{"sl":29},{"sl":37},{"sl":84}],"name":"testConstructorLevelSuppression","pass":true,"statements":[{"sl":23},{"sl":26},{"sl":31},{"sl":32},{"sl":34},{"sl":39},{"sl":86},{"sl":87},{"sl":88}]},"test_906":{"methods":[{"sl":21},{"sl":29},{"sl":37},{"sl":140}],"name":"testSpecificSuppressionMulitpleValues1","pass":true,"statements":[{"sl":23},{"sl":26},{"sl":31},{"sl":32},{"sl":34},{"sl":39},{"sl":142},{"sl":143},{"sl":144}]},"test_938":{"methods":[{"sl":21},{"sl":29},{"sl":37},{"sl":112}],"name":"testSpecificSuppression","pass":true,"statements":[{"sl":23},{"sl":26},{"sl":31},{"sl":32},{"sl":34},{"sl":39},{"sl":114},{"sl":115},{"sl":116}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [564, 906, 460, 559, 938, 330, 893, 665, 830, 555, 622, 299, 390, 304, 584, 574], [], [564, 906, 460, 559, 938, 330, 893, 665, 830, 555, 622, 299, 390, 304, 584, 574], [622, 304], [], [564, 906, 460, 559, 938, 330, 893, 665, 830, 555, 622, 299, 390, 304, 584, 574], [], [], [564, 906, 460, 559, 938, 330, 893, 665, 830, 555, 622, 299, 390, 304, 584, 574], [], [564, 906, 460, 559, 938, 330, 893, 665, 830, 555, 622, 299, 390, 304, 584, 574], [564, 906, 460, 559, 938, 330, 893, 665, 830, 555, 622, 299, 390, 304, 584, 574], [], [564, 906, 460, 559, 938, 330, 893, 665, 830, 555, 622, 299, 390, 304, 584, 574], [], [], [564, 906, 460, 559, 938, 330, 893, 665, 830, 555, 622, 299, 390, 304, 584, 574], [], [564, 906, 460, 559, 938, 330, 893, 665, 830, 555, 622, 299, 390, 304, 584, 574], [], [], [], [], [609], [], [], [609], [609], [609], [], [], [609], [], [], [609], [], [609], [], [], [], [304], [], [304], [304], [304], [304], [304], [], [], [559], [], [559], [559], [559], [], [], [622], [], [622], [622], [622], [], [], [893], [], [893], [893], [893], [], [], [330], [], [330], [330], [330], [], [], [665], [], [665], [665], [665], [], [], [555], [], [555], [555], [555], [], [], [938], [], [938], [938], [938], [], [], [584], [], [584], [584], [584], [], [], [460], [], [460], [460], [460], [], [], [299], [], [299], [299], [299], [], [], [906], [], [906], [906], [906], [], [], [564], [], [564], [564], [564], [], [], [574], [], [574], [574], [574], [], [], [830], [], [830], [830], [830], [], [], [390], [], [390], [390], [390], [], [], [609], [], [609], [609], [609], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
