var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":22755,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":23,"sc":5,"sl":21}],"name":"ASTElExpression","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_307":{"methods":[{"sl":13}],"name":"testElExpression","pass":true,"statements":[{"sl":14}]},"test_459":{"methods":[{"sl":13}],"name":"noQuoteAttrWithJspEL","pass":true,"statements":[{"sl":14}]},"test_580":{"methods":[{"sl":13}],"name":"mixedExpressions","pass":true,"statements":[{"sl":14}]},"test_753":{"methods":[{"sl":13}],"name":"unclosedTagsWithELWithin","pass":true,"statements":[{"sl":14}]},"test_848":{"methods":[{"sl":13}],"name":"testElExpressionInAttribute","pass":true,"statements":[{"sl":14}]},"test_921":{"methods":[{"sl":13}],"name":"quoteEL","pass":true,"statements":[{"sl":14}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [580, 307, 921, 459, 753, 848], [580, 307, 921, 459, 753, 848], [], [], [], [], [], [], [], [], [], []]
