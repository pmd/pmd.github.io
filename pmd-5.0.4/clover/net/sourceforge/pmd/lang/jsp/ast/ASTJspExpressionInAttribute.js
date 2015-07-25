var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":21826,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTJspExpressionInAttribute","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_129":{"methods":[{"sl":10}],"name":"noQuoteAttrWithJspExpression","pass":true,"statements":[{"sl":11}]},"test_452":{"methods":[{"sl":10}],"name":"testExpressionInAttribute","pass":true,"statements":[{"sl":11}]},"test_89":{"methods":[{"sl":10}],"name":"quoteExpression","pass":true,"statements":[{"sl":11}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [129, 452, 89], [129, 452, 89], [], [], [], [], [], [], [], [], [], []]
