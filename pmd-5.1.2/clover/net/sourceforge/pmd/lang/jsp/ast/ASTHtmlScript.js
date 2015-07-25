var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":22,"id":23014,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":21,"sc":5,"sl":18}],"name":"ASTHtmlScript","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_120":{"methods":[{"sl":13}],"name":"testImportHtmlScript","pass":true,"statements":[{"sl":14}]},"test_132":{"methods":[{"sl":13}],"name":"testComplexHtmlScript","pass":true,"statements":[{"sl":14}]},"test_245":{"methods":[{"sl":13}],"name":"testHtmlScriptWithAttribute","pass":true,"statements":[{"sl":14}]},"test_621":{"methods":[{"sl":13}],"name":"testHtmlScript","pass":true,"statements":[{"sl":14}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [120, 621, 245, 132], [120, 621, 245, 132], [], [], [], [], [], [], [], []]
