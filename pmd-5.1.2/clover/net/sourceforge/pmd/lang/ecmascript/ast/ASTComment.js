var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":8687,"methods":[{"el":11,"sc":5,"sl":9},{"el":19,"sc":5,"sl":16},{"el":23,"sc":5,"sl":21}],"name":"ASTComment","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_672":{"methods":[{"sl":9},{"sl":16}],"name":"testSuppresionComment","pass":true,"statements":[{"sl":10},{"sl":18}]},"test_933":{"methods":[{"sl":9},{"sl":16}],"name":"testExclusionsInReportWithNOPMDEcmascript","pass":true,"statements":[{"sl":10},{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [933, 672], [933, 672], [], [], [], [], [], [933, 672], [], [933, 672], [], [], [], [], [], []]
