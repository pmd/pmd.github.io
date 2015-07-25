var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":23,"id":6098,"methods":[{"el":14,"sc":2,"sl":13}],"name":"VisitorStarter","sl":10}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_114":{"methods":[{"sl":13}],"name":"testExpressionMatching","pass":true,"statements":[]},"test_169":{"methods":[{"sl":13}],"name":"testXML","pass":true,"statements":[]},"test_535":{"methods":[{"sl":13}],"name":"testEcmascript","pass":true,"statements":[]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [169, 535, 114], [], [], [], [], [], [], [], [], [], []]
