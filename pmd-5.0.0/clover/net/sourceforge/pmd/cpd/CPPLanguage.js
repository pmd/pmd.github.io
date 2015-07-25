var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":10,"id":2951,"methods":[{"el":9,"sc":2,"sl":7}],"name":"CPPLanguage","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1902":{"methods":[{"sl":7}],"name":"testSimple","pass":true,"statements":[{"sl":8}]},"test_1946":{"methods":[{"sl":7}],"name":"testSimple","pass":true,"statements":[{"sl":8}]},"test_242":{"methods":[{"sl":7}],"name":"testSimple","pass":true,"statements":[{"sl":8}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [1946, 1902, 242], [1946, 1902, 242], [], []]
