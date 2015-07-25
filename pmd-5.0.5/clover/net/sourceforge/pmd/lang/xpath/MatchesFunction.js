var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":53,"id":24894,"methods":[{"el":24,"sc":5,"sl":21},{"el":41,"sc":5,"sl":26},{"el":52,"sc":5,"sl":43}],"name":"MatchesFunction","sl":19}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_134":{"methods":[{"sl":21}],"name":"testClassLevelSuppression","pass":true,"statements":[{"sl":23}]},"test_412":{"methods":[{"sl":26}],"name":"testNoMatch","pass":true,"statements":[{"sl":27},{"sl":30},{"sl":31},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":40}]},"test_430":{"methods":[{"sl":26}],"name":"testMatch","pass":true,"statements":[{"sl":27},{"sl":30},{"sl":31},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_456":{"methods":[{"sl":26}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":27},{"sl":30},{"sl":31},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":40}]},"test_77":{"methods":[{"sl":26}],"name":"testPmdOptions","pass":true,"statements":[{"sl":27},{"sl":30},{"sl":31},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":40}]},"test_79":{"methods":[{"sl":26}],"name":"testSimple","pass":true,"statements":[{"sl":27},{"sl":30},{"sl":31},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":40}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [134], [], [134], [], [], [79, 456, 412, 77, 430], [79, 456, 412, 77, 430], [], [], [79, 456, 412, 77, 430], [79, 456, 412, 77, 430], [], [79, 456, 412, 77, 430], [79, 456, 412, 77, 430], [79, 456, 412, 77, 430], [79, 456, 412, 77, 430], [79, 456, 430], [], [], [79, 456, 412, 77], [], [], [], [], [], [], [], [], [], [], [], [], []]
