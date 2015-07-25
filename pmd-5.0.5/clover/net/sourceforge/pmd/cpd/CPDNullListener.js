var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":14,"id":2947,"methods":[{"el":10,"sc":5,"sl":9},{"el":13,"sc":5,"sl":12}],"name":"CPDNullListener","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_212":{"methods":[{"sl":12}],"name":"testIgnore","pass":true,"statements":[]},"test_27":{"methods":[{"sl":9},{"sl":12}],"name":"testIgnoreIdentifiers","pass":true,"statements":[]},"test_284":{"methods":[{"sl":12}],"name":"testSimple","pass":true,"statements":[]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [27], [], [], [284, 212, 27], [], []]
