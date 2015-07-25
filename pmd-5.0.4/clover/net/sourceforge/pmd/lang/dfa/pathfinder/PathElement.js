var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":23,"id":7788,"methods":[{"el":13,"sc":5,"sl":11},{"el":18,"sc":5,"sl":15},{"el":22,"sc":5,"sl":20}],"name":"PathElement","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_638":{"methods":[{"sl":11},{"sl":20}],"name":"testPmdOptions","pass":true,"statements":[{"sl":12},{"sl":21}]},"test_732":{"methods":[{"sl":11},{"sl":15},{"sl":20}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":12},{"sl":16},{"sl":17},{"sl":21}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [732, 638], [732, 638], [], [], [732], [732], [732], [], [], [732, 638], [732, 638], [], [], []]
