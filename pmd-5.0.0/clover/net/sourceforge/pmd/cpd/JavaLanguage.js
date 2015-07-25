var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":18,"id":3591,"methods":[{"el":11,"sc":2,"sl":9},{"el":17,"sc":2,"sl":13}],"name":"JavaLanguage","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1902":{"methods":[{"sl":9},{"sl":13}],"name":"testSimple","pass":true,"statements":[{"sl":10},{"sl":14},{"sl":15},{"sl":16}]},"test_1946":{"methods":[{"sl":9},{"sl":13}],"name":"testSimple","pass":true,"statements":[{"sl":10},{"sl":14},{"sl":15},{"sl":16}]},"test_242":{"methods":[{"sl":9},{"sl":13}],"name":"testSimple","pass":true,"statements":[{"sl":10},{"sl":14},{"sl":15},{"sl":16}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [1946, 1902, 242], [1946, 1902, 242], [], [], [1946, 1902, 242], [1946, 1902, 242], [1946, 1902, 242], [1946, 1902, 242], [], []]
