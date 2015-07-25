var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":8591,"methods":[{"el":11,"sc":5,"sl":9},{"el":19,"sc":5,"sl":16}],"name":"ASTAssignment","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_27":{"methods":[{"sl":9},{"sl":16}],"name":"testExclusionsInReportWithNOPMDEcmascript","pass":true,"statements":[{"sl":10},{"sl":18}]},"test_280":{"methods":[{"sl":9},{"sl":16}],"name":"testArrayAccess","pass":true,"statements":[{"sl":10},{"sl":18}]},"test_4":{"methods":[{"sl":9},{"sl":16}],"name":"testEcmascript","pass":true,"statements":[{"sl":10},{"sl":18}]},"test_711":{"methods":[{"sl":9},{"sl":16}],"name":"testCaseAsIdentifier","pass":true,"statements":[{"sl":10},{"sl":18}]},"test_855":{"methods":[{"sl":9},{"sl":16}],"name":"testSuppresionComment","pass":true,"statements":[{"sl":10},{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [711, 27, 280, 855, 4], [711, 27, 280, 855, 4], [], [], [], [], [], [711, 27, 280, 855, 4], [], [711, 27, 280, 855, 4], [], []]
