var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":22,"id":4118,"methods":[{"el":11,"sc":2,"sl":9},{"el":16,"sc":2,"sl":13},{"el":21,"sc":2,"sl":18}],"name":"JavaLanguage","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_130":{"methods":[{"sl":9},{"sl":13},{"sl":18}],"name":"testExcludes","pass":true,"statements":[{"sl":10},{"sl":14},{"sl":15},{"sl":19},{"sl":20}]},"test_404":{"methods":[{"sl":9},{"sl":13},{"sl":18}],"name":"testBrokenAndValidFile","pass":true,"statements":[{"sl":10},{"sl":14},{"sl":15},{"sl":19},{"sl":20}]},"test_448":{"methods":[{"sl":9},{"sl":13},{"sl":18}],"name":"testIgnoreIdentifiers","pass":true,"statements":[{"sl":10},{"sl":14},{"sl":15},{"sl":19},{"sl":20}]},"test_518":{"methods":[{"sl":9},{"sl":13},{"sl":18}],"name":"testSimple","pass":true,"statements":[{"sl":10},{"sl":14},{"sl":15},{"sl":19},{"sl":20}]},"test_556":{"methods":[{"sl":9},{"sl":13},{"sl":18}],"name":"testBasic","pass":true,"statements":[{"sl":10},{"sl":14},{"sl":15},{"sl":19},{"sl":20}]},"test_639":{"methods":[{"sl":9},{"sl":13},{"sl":18}],"name":"testEncodingOption","pass":true,"statements":[{"sl":10},{"sl":14},{"sl":15},{"sl":19},{"sl":20}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [556, 448, 639, 404, 518, 130], [556, 448, 639, 404, 518, 130], [], [], [556, 448, 639, 404, 518, 130], [556, 448, 639, 404, 518, 130], [556, 448, 639, 404, 518, 130], [], [], [556, 448, 639, 404, 518, 130], [556, 448, 639, 404, 518, 130], [556, 448, 639, 404, 518, 130], [], []]
