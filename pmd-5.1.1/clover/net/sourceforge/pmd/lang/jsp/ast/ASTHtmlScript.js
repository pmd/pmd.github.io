var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":22,"id":22791,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":21,"sc":5,"sl":18}],"name":"ASTHtmlScript","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_624":{"methods":[{"sl":13}],"name":"testImportHtmlScript","pass":true,"statements":[{"sl":14}]},"test_636":{"methods":[{"sl":13}],"name":"testComplexHtmlScript","pass":true,"statements":[{"sl":14}]},"test_785":{"methods":[{"sl":13}],"name":"testHtmlScript","pass":true,"statements":[{"sl":14}]},"test_880":{"methods":[{"sl":13}],"name":"testHtmlScriptWithAttribute","pass":true,"statements":[{"sl":14}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [636, 785, 624, 880], [636, 785, 624, 880], [], [], [], [], [], [], [], []]
