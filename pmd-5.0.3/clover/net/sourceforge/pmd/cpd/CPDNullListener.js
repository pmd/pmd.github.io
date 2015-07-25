var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":14,"id":2881,"methods":[{"el":10,"sc":5,"sl":9},{"el":13,"sc":5,"sl":12}],"name":"CPDNullListener","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_133":{"methods":[{"sl":12}],"name":"testIgnore","pass":true,"statements":[]},"test_558":{"methods":[{"sl":12}],"name":"testSimple","pass":true,"statements":[]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [558, 133], [], []]
