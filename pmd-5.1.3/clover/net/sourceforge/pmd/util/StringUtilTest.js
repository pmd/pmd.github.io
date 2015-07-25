var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":62,"id":43872,"methods":[{"el":14,"sc":5,"sl":11},{"el":19,"sc":5,"sl":16},{"el":24,"sc":5,"sl":21},{"el":29,"sc":5,"sl":26},{"el":34,"sc":5,"sl":31},{"el":49,"sc":5,"sl":43},{"el":57,"sc":5,"sl":51},{"el":61,"sc":5,"sl":59}],"name":"StringUtilTest","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_255":{"methods":[{"sl":16}],"name":"testReplaceWithMultipleChars","pass":true,"statements":[{"sl":18}]},"test_475":{"methods":[{"sl":43}],"name":"testUTF8NotSupported","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":47},{"sl":48}]},"test_606":{"methods":[{"sl":51}],"name":"testUTF8Supported","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":56}]},"test_646":{"methods":[{"sl":21}],"name":"testReplaceStringWithString","pass":true,"statements":[{"sl":23}]},"test_65":{"methods":[{"sl":11}],"name":"testReplaceWithOneChar","pass":true,"statements":[{"sl":13}]},"test_750":{"methods":[{"sl":31}],"name":"testReplaceWithNull","pass":true,"statements":[{"sl":33}]},"test_862":{"methods":[{"sl":26}],"name":"testReplaceStringWithString2","pass":true,"statements":[{"sl":28}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [65], [], [65], [], [], [255], [], [255], [], [], [646], [], [646], [], [], [862], [], [862], [], [], [750], [], [750], [], [], [], [], [], [], [], [], [], [475], [], [475], [475], [475], [475], [], [], [606], [], [606], [606], [606], [606], [], [], [], [], [], [], []]
