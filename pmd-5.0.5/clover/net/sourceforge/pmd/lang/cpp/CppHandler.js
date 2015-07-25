var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":6980,"methods":[{"el":15,"sc":5,"sl":13},{"el":19,"sc":5,"sl":17}],"name":"CppHandler","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_304":{"methods":[{"sl":17}],"name":"testContinuation_IntraToken","pass":true,"statements":[{"sl":18}]},"test_356":{"methods":[{"sl":17}],"name":"testWideCharacters","pass":true,"statements":[{"sl":18}]},"test_385":{"methods":[{"sl":17}],"name":"testMultiLineMacros","pass":true,"statements":[{"sl":18}]},"test_393":{"methods":[{"sl":17}],"name":"testDollarSignStartingIdentifier","pass":true,"statements":[{"sl":18}]},"test_717":{"methods":[{"sl":17}],"name":"testDollarSignInIdentifier","pass":true,"statements":[{"sl":18}]},"test_87":{"methods":[{"sl":17}],"name":"testContinuation_InterToken","pass":true,"statements":[{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [87, 304, 717, 385, 356, 393], [87, 304, 717, 385, 356, 393], [], []]
