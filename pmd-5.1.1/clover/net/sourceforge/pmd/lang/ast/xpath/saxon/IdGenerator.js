var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":15,"id":7235,"methods":[{"el":14,"sc":5,"sl":12}],"name":"IdGenerator","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_161":{"methods":[{"sl":12}],"name":"testXPathRule1Compatibility","pass":true,"statements":[{"sl":13}]},"test_225":{"methods":[{"sl":12}],"name":"testXPathRule2","pass":true,"statements":[{"sl":13}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [225, 161], [225, 161], [], []]
