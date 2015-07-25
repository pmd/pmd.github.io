var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":31,"id":9998,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18},{"el":26,"sc":5,"sl":24},{"el":30,"sc":5,"sl":28}],"name":"ASTInitializer","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_20":{"methods":[{"sl":10}],"name":"testParsersCases","pass":true,"statements":[{"sl":11}]},"test_462":{"methods":[{"sl":10},{"sl":18}],"name":"testDontCrashOnBlockStatement","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_574":{"methods":[{"sl":10},{"sl":18},{"sl":24},{"sl":28}],"name":"testInitializer","pass":true,"statements":[{"sl":11},{"sl":19},{"sl":25},{"sl":29}]},"test_618":{"methods":[{"sl":10},{"sl":18}],"name":"testArguments","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_663":{"methods":[{"sl":10},{"sl":18}],"name":"testArrayDereference","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_714":{"methods":[{"sl":10},{"sl":18},{"sl":28}],"name":"testbuz","pass":true,"statements":[{"sl":11},{"sl":19},{"sl":29}]},"test_747":{"methods":[{"sl":10},{"sl":18},{"sl":24},{"sl":28}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":19},{"sl":25},{"sl":29}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [462, 714, 663, 574, 618, 747, 20], [462, 714, 663, 574, 618, 747, 20], [], [], [], [], [], [], [462, 714, 663, 574, 618, 747], [462, 714, 663, 574, 618, 747], [], [], [], [], [574, 747], [574, 747], [], [], [714, 574, 747], [714, 574, 747], [], []]
