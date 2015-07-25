var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":32,"id":30340,"methods":[{"el":20,"sc":5,"sl":15},{"el":27,"sc":5,"sl":22},{"el":31,"sc":5,"sl":29}],"name":"ASTBlockStatementTest","sl":13}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_152":{"methods":[{"sl":15}],"name":"testIsAllocation","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19}]},"test_227":{"methods":[{"sl":22}],"name":"testIsAllocation2","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [152], [], [152], [152], [152], [], [], [227], [], [227], [227], [227], [], [], [], [], [], []]
