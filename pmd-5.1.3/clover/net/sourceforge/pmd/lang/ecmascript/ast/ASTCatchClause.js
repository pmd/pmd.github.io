var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":36,"id":8715,"methods":[{"el":11,"sc":5,"sl":9},{"el":19,"sc":5,"sl":16},{"el":23,"sc":5,"sl":21},{"el":27,"sc":5,"sl":25},{"el":31,"sc":5,"sl":29},{"el":35,"sc":5,"sl":33}],"name":"ASTCatchClause","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_130":{"methods":[{"sl":9},{"sl":16}],"name":"testMultipleCatchAndFinallyBlock","pass":true,"statements":[{"sl":10},{"sl":18}]},"test_247":{"methods":[{"sl":9},{"sl":16}],"name":"testCatchBlockOnly","pass":true,"statements":[{"sl":10},{"sl":18}]},"test_538":{"methods":[{"sl":9},{"sl":16}],"name":"testCatchAndFinallyBlock","pass":true,"statements":[{"sl":10},{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [538, 247, 130], [538, 247, 130], [], [], [], [], [], [538, 247, 130], [], [538, 247, 130], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
