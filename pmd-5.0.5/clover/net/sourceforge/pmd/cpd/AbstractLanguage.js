var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":28,"id":2614,"methods":[{"el":15,"sc":2,"sl":12},{"el":19,"sc":2,"sl":17},{"el":23,"sc":2,"sl":21},{"el":27,"sc":2,"sl":25}],"name":"AbstractLanguage","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_27":{"methods":[{"sl":12},{"sl":17},{"sl":21}],"name":"testIgnoreIdentifiers","pass":true,"statements":[{"sl":13},{"sl":14},{"sl":18},{"sl":22}]},"test_559":{"methods":[{"sl":12},{"sl":21}],"name":"testSimple","pass":true,"statements":[{"sl":13},{"sl":14},{"sl":22}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [559, 27], [559, 27], [559, 27], [], [], [27], [27], [], [], [559, 27], [559, 27], [], [], [], [], [], []]
