var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":14,"id":2849,"methods":[{"el":10,"sc":5,"sl":9},{"el":13,"sc":5,"sl":12}],"name":"CPDNullListener","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1231":{"methods":[{"sl":12}],"name":"testSimple","pass":true,"statements":[]},"test_1715":{"methods":[{"sl":12}],"name":"testIgnore","pass":true,"statements":[]},"test_1736":{"methods":[{"sl":12}],"name":"testSimple","pass":true,"statements":[]},"test_1791":{"methods":[{"sl":12}],"name":"testSimple","pass":true,"statements":[]},"test_1823":{"methods":[{"sl":12}],"name":"testIgnore","pass":true,"statements":[]},"test_195":{"methods":[{"sl":12}],"name":"testIgnore","pass":true,"statements":[]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [1823, 195, 1791, 1736, 1715, 1231], [], []]
