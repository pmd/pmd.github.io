var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":30,"id":8897,"methods":[{"el":13,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18},{"el":25,"sc":5,"sl":22},{"el":29,"sc":5,"sl":27}],"name":"ASTNumberLiteral","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_159":{"methods":[{"sl":10},{"sl":18}],"name":"testArrayAccess","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":19}]},"test_177":{"methods":[{"sl":10},{"sl":18}],"name":"testVoidKeyword","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":19}]},"test_216":{"methods":[{"sl":10},{"sl":18}],"name":"testCaseAsIdentifier","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":19}]},"test_407":{"methods":[{"sl":10},{"sl":18}],"name":"testLineNumbersWithinEcmascriptRules","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":19}]},"test_562":{"methods":[{"sl":10},{"sl":18},{"sl":27}],"name":"testEcmascript","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":19},{"sl":28}]},"test_723":{"methods":[{"sl":10},{"sl":18}],"name":"testArrayMethod","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":19}]},"test_730":{"methods":[{"sl":10},{"sl":18}],"name":"testExclusionsInReportWithNOPMDEcmascript","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [407, 216, 723, 730, 177, 159, 562], [407, 216, 723, 730, 177, 159, 562], [407, 216, 723, 730, 177, 159, 562], [], [], [], [], [], [407, 216, 723, 730, 177, 159, 562], [407, 216, 723, 730, 177, 159, 562], [], [], [], [], [], [], [], [562], [562], [], []]
