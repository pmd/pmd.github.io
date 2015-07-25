var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":10495,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTTypeParameters","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_303":{"methods":[{"sl":10}],"name":"testMultipleGenerics","pass":true,"statements":[{"sl":11}]},"test_540":{"methods":[{"sl":10}],"name":"testGenericReturnType","pass":true,"statements":[{"sl":11}]},"test_566":{"methods":[{"sl":10}],"name":"testGenericINAnnotation","pass":true,"statements":[{"sl":11}]},"test_596":{"methods":[{"sl":10}],"name":"testParsersCases","pass":true,"statements":[{"sl":11}]},"test_603":{"methods":[{"sl":10},{"sl":18}],"name":"testGenerics","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_751":{"methods":[{"sl":10},{"sl":18}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [540, 603, 566, 751, 596, 303], [540, 603, 566, 751, 596, 303], [], [], [], [], [], [], [603, 751], [603, 751], [], []]
