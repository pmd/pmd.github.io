var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":21436,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTJspExpression","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_12":{"methods":[{"sl":10}],"name":"unclosedTagsWithJspExpressionWithin","pass":true,"statements":[{"sl":11}]},"test_366":{"methods":[{"sl":10}],"name":"mixedExpressions","pass":true,"statements":[{"sl":11}]},"test_88":{"methods":[{"sl":10}],"name":"testExpression","pass":true,"statements":[{"sl":11}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [366, 12, 88], [366, 12, 88], [], [], [], [], [], [], [], [], [], []]
