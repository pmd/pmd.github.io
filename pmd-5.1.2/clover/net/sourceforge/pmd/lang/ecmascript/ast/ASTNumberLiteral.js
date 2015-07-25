var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":30,"id":8919,"methods":[{"el":13,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18},{"el":25,"sc":5,"sl":22},{"el":29,"sc":5,"sl":27}],"name":"ASTNumberLiteral","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_219":{"methods":[{"sl":10},{"sl":18}],"name":"testLineNumbersWithinEcmascriptRules","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":19}]},"test_303":{"methods":[{"sl":10},{"sl":18}],"name":"testCaseAsIdentifier","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":19}]},"test_387":{"methods":[{"sl":10},{"sl":18}],"name":"testVoidKeyword","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":19}]},"test_49":{"methods":[{"sl":10},{"sl":18}],"name":"testArrayAccess","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":19}]},"test_561":{"methods":[{"sl":10},{"sl":18},{"sl":27}],"name":"testEcmascript","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":19},{"sl":28}]},"test_766":{"methods":[{"sl":10},{"sl":18}],"name":"testXorAssignment","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":19}]},"test_885":{"methods":[{"sl":10},{"sl":18}],"name":"testArrayMethod","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":19}]},"test_933":{"methods":[{"sl":10},{"sl":18}],"name":"testExclusionsInReportWithNOPMDEcmascript","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [387, 219, 49, 933, 766, 303, 885, 561], [387, 219, 49, 933, 766, 303, 885, 561], [387, 219, 49, 933, 766, 303, 885, 561], [], [], [], [], [], [387, 219, 49, 933, 766, 303, 885, 561], [387, 219, 49, 933, 766, 303, 885, 561], [], [], [], [], [], [], [], [561], [561], [], []]
