var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":21346,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTElExpression","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_130":{"methods":[{"sl":10}],"name":"testElExpression","pass":true,"statements":[{"sl":11}]},"test_292":{"methods":[{"sl":10}],"name":"quoteEL","pass":true,"statements":[{"sl":11}]},"test_354":{"methods":[{"sl":10}],"name":"testElExpressionInAttribute","pass":true,"statements":[{"sl":11}]},"test_366":{"methods":[{"sl":10}],"name":"mixedExpressions","pass":true,"statements":[{"sl":11}]},"test_496":{"methods":[{"sl":10}],"name":"unclosedTagsWithELWithin","pass":true,"statements":[{"sl":11}]},"test_666":{"methods":[{"sl":10}],"name":"noQuoteAttrWithJspEL","pass":true,"statements":[{"sl":11}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [496, 354, 366, 292, 666, 130], [496, 354, 366, 292, 666, 130], [], [], [], [], [], [], [], [], [], []]
