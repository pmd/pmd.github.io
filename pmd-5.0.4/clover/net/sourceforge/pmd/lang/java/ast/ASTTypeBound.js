var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":10533,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTTypeBound","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_680":{"methods":[{"sl":10}],"name":"testMultipleGenerics","pass":true,"statements":[{"sl":11}]},"test_732":{"methods":[{"sl":10},{"sl":18}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_816":{"methods":[{"sl":10}],"name":"testGenericINAnnotation","pass":true,"statements":[{"sl":11}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [732, 680, 816], [732, 680, 816], [], [], [], [], [], [], [732], [732], [], []]
