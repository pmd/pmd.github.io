var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":9760,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTEnumBody","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_108":{"methods":[{"sl":10},{"sl":18}],"name":"testEnum","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_195":{"methods":[{"sl":10}],"name":"testEnumAsKeywordShouldPassWith15","pass":true,"statements":[{"sl":11}]},"test_273":{"methods":[{"sl":10},{"sl":18}],"name":"testEnumStaticUsage","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_327":{"methods":[{"sl":10}],"name":"testWithEnum","pass":true,"statements":[{"sl":11}]},"test_418":{"methods":[{"sl":10},{"sl":18}],"name":"testEnumsClassScope","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_6":{"methods":[{"sl":10},{"sl":18}],"name":"testEnums","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_732":{"methods":[{"sl":10},{"sl":18}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [732, 418, 195, 108, 327, 6, 273], [732, 418, 195, 108, 327, 6, 273], [], [], [], [], [], [], [732, 418, 108, 6, 273], [732, 418, 108, 6, 273], [], []]
