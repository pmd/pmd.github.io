var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":19695,"methods":[{"el":24,"sc":5,"sl":21},{"el":33,"sc":5,"sl":30},{"el":40,"sc":5,"sl":38}],"name":"UseIndexOfCharRule","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_398":{"methods":[{"sl":21},{"sl":30},{"sl":38}],"name":"testPmdOptions","pass":true,"statements":[{"sl":23},{"sl":32},{"sl":39}]},"test_902":{"methods":[{"sl":21},{"sl":30},{"sl":38}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":23},{"sl":32},{"sl":39}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [902, 398], [], [902, 398], [], [], [], [], [], [], [902, 398], [], [902, 398], [], [], [], [], [], [902, 398], [902, 398], [], [], []]
