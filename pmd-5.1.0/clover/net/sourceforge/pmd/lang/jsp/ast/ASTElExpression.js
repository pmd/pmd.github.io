var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":22592,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":23,"sc":5,"sl":21}],"name":"ASTElExpression","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_211":{"methods":[{"sl":13}],"name":"testElExpressionInAttribute","pass":true,"statements":[{"sl":14}]},"test_238":{"methods":[{"sl":13}],"name":"unclosedTagsWithELWithin","pass":true,"statements":[{"sl":14}]},"test_406":{"methods":[{"sl":13}],"name":"mixedExpressions","pass":true,"statements":[{"sl":14}]},"test_486":{"methods":[{"sl":13}],"name":"noQuoteAttrWithJspEL","pass":true,"statements":[{"sl":14}]},"test_648":{"methods":[{"sl":13}],"name":"testElExpression","pass":true,"statements":[{"sl":14}]},"test_873":{"methods":[{"sl":13}],"name":"quoteEL","pass":true,"statements":[{"sl":14}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [211, 486, 873, 648, 238, 406], [211, 486, 873, 648, 238, 406], [], [], [], [], [], [], [], [], [], []]
