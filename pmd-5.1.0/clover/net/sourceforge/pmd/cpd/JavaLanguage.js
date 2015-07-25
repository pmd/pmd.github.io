var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":22,"id":4073,"methods":[{"el":11,"sc":2,"sl":9},{"el":16,"sc":2,"sl":13},{"el":21,"sc":2,"sl":18}],"name":"JavaLanguage","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_11":{"methods":[{"sl":9},{"sl":13},{"sl":18}],"name":"testSimple","pass":true,"statements":[{"sl":10},{"sl":14},{"sl":15},{"sl":19},{"sl":20}]},"test_410":{"methods":[{"sl":9},{"sl":13},{"sl":18}],"name":"testIgnoreIdentifiers","pass":true,"statements":[{"sl":10},{"sl":14},{"sl":15},{"sl":19},{"sl":20}]},"test_59":{"methods":[{"sl":9},{"sl":13},{"sl":18}],"name":"testBasic","pass":true,"statements":[{"sl":10},{"sl":14},{"sl":15},{"sl":19},{"sl":20}]},"test_621":{"methods":[{"sl":9},{"sl":13},{"sl":18}],"name":"testExcludes","pass":true,"statements":[{"sl":10},{"sl":14},{"sl":15},{"sl":19},{"sl":20}]},"test_747":{"methods":[{"sl":9},{"sl":13},{"sl":18}],"name":"testEncodingOption","pass":true,"statements":[{"sl":10},{"sl":14},{"sl":15},{"sl":19},{"sl":20}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [11, 747, 59, 410, 621], [11, 747, 59, 410, 621], [], [], [11, 747, 59, 410, 621], [11, 747, 59, 410, 621], [11, 747, 59, 410, 621], [], [], [11, 747, 59, 410, 621], [11, 747, 59, 410, 621], [11, 747, 59, 410, 621], [], []]
