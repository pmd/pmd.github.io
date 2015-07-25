var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":182,"id":2819,"methods":[{"el":41,"sc":5,"sl":37},{"el":45,"sc":5,"sl":43},{"el":50,"sc":5,"sl":47},{"el":54,"sc":5,"sl":52},{"el":58,"sc":5,"sl":56},{"el":62,"sc":5,"sl":60},{"el":68,"sc":5,"sl":64},{"el":77,"sc":5,"sl":70},{"el":105,"sc":5,"sl":81},{"el":133,"sc":5,"sl":107},{"el":141,"sc":5,"sl":135},{"el":147,"sc":5,"sl":143},{"el":158,"sc":5,"sl":149},{"el":167,"sc":5,"sl":165},{"el":176,"sc":5,"sl":174},{"el":181,"sc":2,"sl":179}],"name":"CPD","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_130":{"methods":[{"sl":37},{"sl":47},{"sl":52},{"sl":60},{"sl":64},{"sl":70},{"sl":81},{"sl":135},{"sl":143},{"sl":179}],"name":"testExcludes","pass":true,"statements":[{"sl":38},{"sl":40},{"sl":48},{"sl":49},{"sl":53},{"sl":61},{"sl":65},{"sl":66},{"sl":71},{"sl":74},{"sl":76},{"sl":83},{"sl":93},{"sl":98},{"sl":103},{"sl":104},{"sl":136},{"sl":139},{"sl":144},{"sl":145},{"sl":146},{"sl":180}]},"test_14":{"methods":[{"sl":43},{"sl":81}],"name":"testFileSectionWithBrokenSymlinks","pass":true,"statements":[{"sl":44},{"sl":83},{"sl":93},{"sl":98},{"sl":99},{"sl":100}]},"test_393":{"methods":[{"sl":43},{"sl":81},{"sl":135},{"sl":143}],"name":"testFileAddedWithRelativePath","pass":true,"statements":[{"sl":44},{"sl":83},{"sl":93},{"sl":98},{"sl":103},{"sl":104},{"sl":136},{"sl":139},{"sl":144},{"sl":145},{"sl":146}]},"test_404":{"methods":[{"sl":37},{"sl":47},{"sl":52},{"sl":60},{"sl":64},{"sl":70},{"sl":81},{"sl":135},{"sl":143},{"sl":149},{"sl":179}],"name":"testBrokenAndValidFile","pass":true,"statements":[{"sl":38},{"sl":40},{"sl":48},{"sl":49},{"sl":53},{"sl":61},{"sl":65},{"sl":66},{"sl":71},{"sl":74},{"sl":76},{"sl":83},{"sl":93},{"sl":98},{"sl":103},{"sl":104},{"sl":136},{"sl":137},{"sl":144},{"sl":145},{"sl":146},{"sl":150},{"sl":151},{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":180}]},"test_448":{"methods":[{"sl":37},{"sl":47},{"sl":52},{"sl":60},{"sl":64},{"sl":70},{"sl":81},{"sl":135},{"sl":143},{"sl":179}],"name":"testIgnoreIdentifiers","pass":true,"statements":[{"sl":38},{"sl":40},{"sl":48},{"sl":49},{"sl":53},{"sl":61},{"sl":65},{"sl":66},{"sl":71},{"sl":74},{"sl":76},{"sl":83},{"sl":93},{"sl":98},{"sl":103},{"sl":104},{"sl":136},{"sl":139},{"sl":144},{"sl":145},{"sl":146},{"sl":180}]},"test_556":{"methods":[{"sl":37},{"sl":47},{"sl":52},{"sl":81},{"sl":135},{"sl":143}],"name":"testBasic","pass":true,"statements":[{"sl":38},{"sl":40},{"sl":48},{"sl":49},{"sl":53},{"sl":83},{"sl":93},{"sl":98},{"sl":103},{"sl":104},{"sl":136},{"sl":139},{"sl":144},{"sl":145},{"sl":146}]},"test_639":{"methods":[{"sl":37},{"sl":47},{"sl":52},{"sl":60},{"sl":64},{"sl":70},{"sl":81},{"sl":135},{"sl":143},{"sl":179}],"name":"testEncodingOption","pass":true,"statements":[{"sl":38},{"sl":40},{"sl":48},{"sl":49},{"sl":53},{"sl":61},{"sl":65},{"sl":66},{"sl":71},{"sl":74},{"sl":76},{"sl":83},{"sl":93},{"sl":98},{"sl":103},{"sl":104},{"sl":136},{"sl":139},{"sl":144},{"sl":145},{"sl":146},{"sl":180}]},"test_9":{"methods":[{"sl":43},{"sl":81},{"sl":135},{"sl":143}],"name":"testFileAddedAsSymlinkAndReal","pass":true,"statements":[{"sl":44},{"sl":83},{"sl":93},{"sl":94},{"sl":95},{"sl":98},{"sl":103},{"sl":104},{"sl":136},{"sl":139},{"sl":144},{"sl":145},{"sl":146}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [556, 448, 639, 404, 130], [556, 448, 639, 404, 130], [], [556, 448, 639, 404, 130], [], [], [393, 14, 9], [393, 14, 9], [], [], [556, 448, 639, 404, 130], [556, 448, 639, 404, 130], [556, 448, 639, 404, 130], [], [], [556, 448, 639, 404, 130], [556, 448, 639, 404, 130], [], [], [], [], [], [], [448, 639, 404, 130], [448, 639, 404, 130], [], [], [448, 639, 404, 130], [448, 639, 404, 130], [448, 639, 404, 130], [], [], [], [448, 639, 404, 130], [448, 639, 404, 130], [], [], [448, 639, 404, 130], [], [448, 639, 404, 130], [], [], [], [], [556, 448, 639, 404, 393, 14, 9, 130], [], [556, 448, 639, 404, 393, 14, 9, 130], [], [], [], [], [], [], [], [], [], [556, 448, 639, 404, 393, 14, 9, 130], [9], [9], [], [], [556, 448, 639, 404, 393, 14, 9, 130], [14], [14], [], [], [556, 448, 639, 404, 393, 9, 130], [556, 448, 639, 404, 393, 9, 130], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [556, 448, 639, 404, 393, 9, 130], [556, 448, 639, 404, 393, 9, 130], [404], [], [556, 448, 639, 393, 9, 130], [], [], [], [556, 448, 639, 404, 393, 9, 130], [556, 448, 639, 404, 393, 9, 130], [556, 448, 639, 404, 393, 9, 130], [556, 448, 639, 404, 393, 9, 130], [], [], [404], [404], [404], [404], [], [404], [404], [404], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [448, 639, 404, 130], [448, 639, 404, 130], [], []]
