var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":32,"id":10103,"methods":[{"el":13,"sc":5,"sl":11},{"el":17,"sc":5,"sl":15},{"el":21,"sc":5,"sl":19},{"el":24,"sc":5,"sl":22},{"el":31,"sc":5,"sl":29}],"name":"ASTCastExpression","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_406":{"methods":[{"sl":15},{"sl":29}],"name":"testVariousParserBugs","pass":true,"statements":[{"sl":16},{"sl":30}]},"test_638":{"methods":[{"sl":15},{"sl":29}],"name":"testPmdOptions","pass":true,"statements":[{"sl":16},{"sl":30}]},"test_719":{"methods":[{"sl":15},{"sl":29}],"name":"testUnaryNumericPromotion","pass":true,"statements":[{"sl":16},{"sl":30}]},"test_722":{"methods":[{"sl":15},{"sl":29}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":16},{"sl":30}]},"test_834":{"methods":[{"sl":15},{"sl":29}],"name":"testBinaryNumericPromotion","pass":true,"statements":[{"sl":16},{"sl":30}]},"test_886":{"methods":[{"sl":15},{"sl":19},{"sl":29}],"name":"testParsersCases","pass":true,"statements":[{"sl":16},{"sl":20},{"sl":30}]},"test_927":{"methods":[{"sl":15},{"sl":29}],"name":"testBinaryStringPromotion","pass":true,"statements":[{"sl":16},{"sl":30}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [886, 719, 722, 927, 406, 834, 638], [886, 719, 722, 927, 406, 834, 638], [], [], [886], [886], [], [], [], [], [], [], [], [], [886, 719, 722, 927, 406, 834, 638], [886, 719, 722, 927, 406, 834, 638], [], []]
