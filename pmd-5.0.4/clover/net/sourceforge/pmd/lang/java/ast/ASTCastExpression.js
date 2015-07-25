var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":9614,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTCastExpression","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_12":{"methods":[{"sl":10}],"name":"testParsersCases","pass":true,"statements":[{"sl":11}]},"test_261":{"methods":[{"sl":10},{"sl":18}],"name":"testUnaryNumericPromotion","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_320":{"methods":[{"sl":10},{"sl":18}],"name":"testBinaryNumericPromotion","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_450":{"methods":[{"sl":10}],"name":"testVariousParserBugs","pass":true,"statements":[{"sl":11}]},"test_495":{"methods":[{"sl":10},{"sl":18}],"name":"testBinaryStringPromotion","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_638":{"methods":[{"sl":10},{"sl":18}],"name":"testPmdOptions","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_732":{"methods":[{"sl":10},{"sl":18}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [732, 261, 450, 12, 495, 638, 320], [732, 261, 450, 12, 495, 638, 320], [], [], [], [], [], [], [732, 261, 495, 638, 320], [732, 261, 495, 638, 320], [], []]
