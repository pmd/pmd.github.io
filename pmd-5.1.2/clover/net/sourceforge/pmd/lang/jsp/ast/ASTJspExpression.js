var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":23068,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":23,"sc":5,"sl":21}],"name":"ASTJspExpression","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_514":{"methods":[{"sl":13}],"name":"testExpression","pass":true,"statements":[{"sl":14}]},"test_685":{"methods":[{"sl":13}],"name":"mixedExpressions","pass":true,"statements":[{"sl":14}]},"test_738":{"methods":[{"sl":13}],"name":"unclosedTagsWithJspExpressionWithin","pass":true,"statements":[{"sl":14}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [738, 685, 514], [738, 685, 514], [], [], [], [], [], [], [], [], [], []]
