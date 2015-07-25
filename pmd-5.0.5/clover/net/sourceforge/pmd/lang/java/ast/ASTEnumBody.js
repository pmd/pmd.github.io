var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":9797,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTEnumBody","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_415":{"methods":[{"sl":10},{"sl":18}],"name":"testEnum","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_456":{"methods":[{"sl":10},{"sl":18}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_480":{"methods":[{"sl":10}],"name":"testWithEnum","pass":true,"statements":[{"sl":11}]},"test_574":{"methods":[{"sl":10},{"sl":18}],"name":"testEnumsClassScope","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_600":{"methods":[{"sl":10},{"sl":18}],"name":"testEnumStaticUsage","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_708":{"methods":[{"sl":10}],"name":"testEnumAsKeywordShouldPassWith15","pass":true,"statements":[{"sl":11}]},"test_766":{"methods":[{"sl":10},{"sl":18}],"name":"testEnums","pass":true,"statements":[{"sl":11},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [456, 574, 766, 708, 480, 600, 415], [456, 574, 766, 708, 480, 600, 415], [], [], [], [], [], [], [456, 574, 766, 600, 415], [456, 574, 766, 600, 415], [], []]
