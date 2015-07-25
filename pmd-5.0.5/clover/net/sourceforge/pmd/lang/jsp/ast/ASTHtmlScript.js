var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":19,"id":21822,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":18,"sc":5,"sl":15}],"name":"ASTHtmlScript","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_106":{"methods":[{"sl":10}],"name":"testComplexHtmlScript","pass":true,"statements":[{"sl":11}]},"test_326":{"methods":[{"sl":10}],"name":"testHtmlScript","pass":true,"statements":[{"sl":11}]},"test_396":{"methods":[{"sl":10}],"name":"testHtmlScriptWithAttribute","pass":true,"statements":[{"sl":11}]},"test_519":{"methods":[{"sl":10}],"name":"testImportHtmlScript","pass":true,"statements":[{"sl":11}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [326, 396, 106, 519], [326, 396, 106, 519], [], [], [], [], [], [], [], []]
