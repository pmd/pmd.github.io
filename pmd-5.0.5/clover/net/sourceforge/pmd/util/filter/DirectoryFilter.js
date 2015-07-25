var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":28041,"methods":[{"el":12,"sc":2,"sl":11},{"el":16,"sc":2,"sl":14},{"el":20,"sc":2,"sl":18}],"name":"DirectoryFilter","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_2":{"methods":[{"sl":11},{"sl":14}],"name":"minimalArgs","pass":true,"statements":[{"sl":15}]},"test_456":{"methods":[{"sl":14}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":15}]},"test_68":{"methods":[{"sl":14}],"name":"useEcmaScript","pass":true,"statements":[{"sl":15}]},"test_776":{"methods":[{"sl":14}],"name":"usingDebug","pass":true,"statements":[{"sl":15}]},"test_811":{"methods":[{"sl":14}],"name":"changeJavaVersion","pass":true,"statements":[{"sl":15}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [2], [], [], [776, 456, 811, 2, 68], [776, 456, 811, 2, 68], [], [], [], [], [], []]
