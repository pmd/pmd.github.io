var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":14,"id":3156,"methods":[{"el":10,"sc":5,"sl":9},{"el":13,"sc":5,"sl":12}],"name":"CPDNullListener","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_130":{"methods":[{"sl":9},{"sl":12}],"name":"testExcludes","pass":true,"statements":[]},"test_252":{"methods":[{"sl":12}],"name":"testIgnore","pass":true,"statements":[]},"test_388":{"methods":[{"sl":12}],"name":"testSimple","pass":true,"statements":[]},"test_404":{"methods":[{"sl":9},{"sl":12}],"name":"testBrokenAndValidFile","pass":true,"statements":[]},"test_448":{"methods":[{"sl":9},{"sl":12}],"name":"testIgnoreIdentifiers","pass":true,"statements":[]},"test_556":{"methods":[{"sl":9},{"sl":12}],"name":"testBasic","pass":true,"statements":[]},"test_639":{"methods":[{"sl":9},{"sl":12}],"name":"testEncodingOption","pass":true,"statements":[]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [556, 448, 639, 404, 130], [], [], [556, 448, 639, 404, 388, 252, 130], [], []]
