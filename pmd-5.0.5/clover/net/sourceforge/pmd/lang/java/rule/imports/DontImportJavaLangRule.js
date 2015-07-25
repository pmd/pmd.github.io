var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":35,"id":16671,"methods":[{"el":34,"sc":5,"sl":10}],"name":"DontImportJavaLangRule","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_456":{"methods":[{"sl":10}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":13},{"sl":14},{"sl":17},{"sl":18},{"sl":22},{"sl":23},{"sl":33}]},"test_77":{"methods":[{"sl":10}],"name":"testPmdOptions","pass":true,"statements":[{"sl":13},{"sl":17},{"sl":18},{"sl":33}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [456, 77], [], [], [456, 77], [456], [], [], [456, 77], [456, 77], [], [], [], [456], [456], [], [], [], [], [], [], [], [], [], [456, 77], [], []]
