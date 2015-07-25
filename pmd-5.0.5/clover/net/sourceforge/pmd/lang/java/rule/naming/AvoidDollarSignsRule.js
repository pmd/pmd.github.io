var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":34,"id":17358,"methods":[{"el":16,"sc":5,"sl":10},{"el":24,"sc":5,"sl":18},{"el":32,"sc":5,"sl":26}],"name":"AvoidDollarSignsRule","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_456":{"methods":[{"sl":10},{"sl":18},{"sl":26}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":15},{"sl":19},{"sl":23},{"sl":27},{"sl":31}]},"test_77":{"methods":[{"sl":10},{"sl":18},{"sl":26}],"name":"testPmdOptions","pass":true,"statements":[{"sl":11},{"sl":15},{"sl":19},{"sl":23},{"sl":27},{"sl":31}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [456, 77], [456, 77], [], [], [], [456, 77], [], [], [456, 77], [456, 77], [], [], [], [456, 77], [], [], [456, 77], [456, 77], [], [], [], [456, 77], [], [], []]
