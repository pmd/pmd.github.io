var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":9691,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTEnumBody","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_128":{"methods":[{"sl":10}],"name":"testWithEnum","pass":true,"statements":[{"sl":11}]},"test_284":{"methods":[{"sl":10},{"sl":18}],"name":"testEnums","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_527":{"methods":[{"sl":10},{"sl":18}],"name":"testEnumStaticUsage","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_561":{"methods":[{"sl":10}],"name":"testEnumAsKeywordShouldPassWith15","pass":true,"statements":[{"sl":11}]},"test_632":{"methods":[{"sl":10},{"sl":18}],"name":"testEnumsClassScope","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_751":{"methods":[{"sl":10},{"sl":18}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_753":{"methods":[{"sl":10},{"sl":18}],"name":"testEnum","pass":true,"statements":[{"sl":11},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [527, 632, 128, 753, 284, 751, 561], [527, 632, 128, 753, 284, 751, 561], [], [], [], [], [], [], [527, 632, 753, 284, 751], [527, 632, 753, 284, 751], [], []]
