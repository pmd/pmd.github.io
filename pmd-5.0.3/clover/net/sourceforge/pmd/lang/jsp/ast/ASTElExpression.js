var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":21649,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTElExpression","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_106":{"methods":[{"sl":10}],"name":"testElExpressionInAttribute","pass":true,"statements":[{"sl":11}]},"test_139":{"methods":[{"sl":10}],"name":"quoteEL","pass":true,"statements":[{"sl":11}]},"test_199":{"methods":[{"sl":10}],"name":"mixedExpressions","pass":true,"statements":[{"sl":11}]},"test_232":{"methods":[{"sl":10}],"name":"noQuoteAttrWithJspEL","pass":true,"statements":[{"sl":11}]},"test_621":{"methods":[{"sl":10}],"name":"testElExpression","pass":true,"statements":[{"sl":11}]},"test_635":{"methods":[{"sl":10}],"name":"unclosedTagsWithELWithin","pass":true,"statements":[{"sl":11}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [635, 232, 621, 139, 199, 106], [635, 232, 621, 139, 199, 106], [], [], [], [], [], [], [], [], [], []]
