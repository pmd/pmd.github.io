var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":63,"id":36298,"methods":[{"el":15,"sc":5,"sl":12},{"el":20,"sc":5,"sl":17},{"el":25,"sc":5,"sl":22},{"el":30,"sc":5,"sl":27},{"el":35,"sc":5,"sl":32},{"el":50,"sc":5,"sl":44},{"el":58,"sc":5,"sl":52},{"el":62,"sc":5,"sl":60}],"name":"StringUtilTest","sl":10}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_145":{"methods":[{"sl":32}],"name":"testReplaceWithNull","pass":true,"statements":[{"sl":34}]},"test_300":{"methods":[{"sl":22}],"name":"testReplaceStringWithString","pass":true,"statements":[{"sl":24}]},"test_325":{"methods":[{"sl":44}],"name":"testUTF8NotSupported","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49}]},"test_492":{"methods":[{"sl":17}],"name":"testReplaceWithMultipleChars","pass":true,"statements":[{"sl":19}]},"test_522":{"methods":[{"sl":52}],"name":"testUTF8Supported","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":57}]},"test_656":{"methods":[{"sl":27}],"name":"testReplaceStringWithString2","pass":true,"statements":[{"sl":29}]},"test_669":{"methods":[{"sl":12}],"name":"testReplaceWithOneChar","pass":true,"statements":[{"sl":14}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [669], [], [669], [], [], [492], [], [492], [], [], [300], [], [300], [], [], [656], [], [656], [], [], [145], [], [145], [], [], [], [], [], [], [], [], [], [325], [], [325], [325], [325], [325], [], [], [522], [], [522], [522], [522], [522], [], [], [], [], [], [], []]
