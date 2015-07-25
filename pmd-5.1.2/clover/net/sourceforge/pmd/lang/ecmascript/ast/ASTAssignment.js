var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":8646,"methods":[{"el":11,"sc":5,"sl":9},{"el":19,"sc":5,"sl":16}],"name":"ASTAssignment","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_303":{"methods":[{"sl":9},{"sl":16}],"name":"testCaseAsIdentifier","pass":true,"statements":[{"sl":10},{"sl":18}]},"test_387":{"methods":[{"sl":9},{"sl":16}],"name":"testVoidKeyword","pass":true,"statements":[{"sl":10},{"sl":18}]},"test_49":{"methods":[{"sl":9},{"sl":16}],"name":"testArrayAccess","pass":true,"statements":[{"sl":10},{"sl":18}]},"test_561":{"methods":[{"sl":9},{"sl":16}],"name":"testEcmascript","pass":true,"statements":[{"sl":10},{"sl":18}]},"test_672":{"methods":[{"sl":9},{"sl":16}],"name":"testSuppresionComment","pass":true,"statements":[{"sl":10},{"sl":18}]},"test_766":{"methods":[{"sl":9},{"sl":16}],"name":"testXorAssignment","pass":true,"statements":[{"sl":10},{"sl":18}]},"test_933":{"methods":[{"sl":9},{"sl":16}],"name":"testExclusionsInReportWithNOPMDEcmascript","pass":true,"statements":[{"sl":10},{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [387, 49, 933, 766, 672, 303, 561], [387, 49, 933, 766, 672, 303, 561], [], [], [], [], [], [387, 49, 933, 766, 672, 303, 561], [], [387, 49, 933, 766, 672, 303, 561], [], []]
