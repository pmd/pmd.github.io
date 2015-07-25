var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":32,"id":10066,"methods":[{"el":13,"sc":5,"sl":11},{"el":17,"sc":5,"sl":15},{"el":21,"sc":5,"sl":19},{"el":24,"sc":5,"sl":22},{"el":31,"sc":5,"sl":29}],"name":"ASTCastExpression","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_111":{"methods":[{"sl":15}],"name":"testVariousParserBugs","pass":true,"statements":[{"sl":16}]},"test_162":{"methods":[{"sl":15},{"sl":29}],"name":"testUnaryNumericPromotion","pass":true,"statements":[{"sl":16},{"sl":30}]},"test_26":{"methods":[{"sl":15},{"sl":19}],"name":"testParsersCases","pass":true,"statements":[{"sl":16},{"sl":20}]},"test_398":{"methods":[{"sl":15},{"sl":29}],"name":"testPmdOptions","pass":true,"statements":[{"sl":16},{"sl":30}]},"test_415":{"methods":[{"sl":15},{"sl":29}],"name":"testBinaryNumericPromotion","pass":true,"statements":[{"sl":16},{"sl":30}]},"test_891":{"methods":[{"sl":15},{"sl":29}],"name":"testBinaryStringPromotion","pass":true,"statements":[{"sl":16},{"sl":30}]},"test_902":{"methods":[{"sl":15},{"sl":29}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":16},{"sl":30}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [111, 26, 162, 902, 398, 415, 891], [111, 26, 162, 902, 398, 415, 891], [], [], [26], [26], [], [], [], [], [], [], [], [], [162, 902, 398, 415, 891], [162, 902, 398, 415, 891], [], []]
