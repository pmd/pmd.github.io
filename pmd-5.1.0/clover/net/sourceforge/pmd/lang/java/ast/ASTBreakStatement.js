var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":10060,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":23,"sc":5,"sl":21}],"name":"ASTBreakStatement","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_189":{"methods":[{"sl":13},{"sl":21}],"name":"testNastyComplicatedMethod","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_202":{"methods":[{"sl":13},{"sl":21}],"name":"testRemainingTestCases","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_26":{"methods":[{"sl":13}],"name":"testParsersCases","pass":true,"statements":[{"sl":14}]},"test_263":{"methods":[{"sl":13},{"sl":21}],"name":"testLabelledBreakLockup","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_372":{"methods":[{"sl":13},{"sl":21}],"name":"test_28","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_398":{"methods":[{"sl":13},{"sl":21}],"name":"testPmdOptions","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_562":{"methods":[{"sl":13},{"sl":21}],"name":"test_29","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_634":{"methods":[{"sl":13}],"name":"testStringInSwitch","pass":true,"statements":[{"sl":14}]},"test_902":{"methods":[{"sl":13},{"sl":21}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":14},{"sl":22}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [263, 202, 189, 372, 26, 902, 398, 634, 562], [263, 202, 189, 372, 26, 902, 398, 634, 562], [], [], [], [], [], [], [263, 202, 189, 372, 902, 398, 562], [263, 202, 189, 372, 902, 398, 562], [], []]
