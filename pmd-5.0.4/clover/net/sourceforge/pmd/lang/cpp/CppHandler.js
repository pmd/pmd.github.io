var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":6943,"methods":[{"el":15,"sc":5,"sl":13},{"el":19,"sc":5,"sl":17}],"name":"CppHandler","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_128":{"methods":[{"sl":17}],"name":"testMultiLineMacros","pass":true,"statements":[{"sl":18}]},"test_15":{"methods":[{"sl":17}],"name":"testContinuation_IntraToken","pass":true,"statements":[{"sl":18}]},"test_363":{"methods":[{"sl":17}],"name":"testContinuation_InterToken","pass":true,"statements":[{"sl":18}]},"test_502":{"methods":[{"sl":17}],"name":"testWideCharacters","pass":true,"statements":[{"sl":18}]},"test_595":{"methods":[{"sl":17}],"name":"testDollarSignInIdentifier","pass":true,"statements":[{"sl":18}]},"test_764":{"methods":[{"sl":17}],"name":"testDollarSignStartingIdentifier","pass":true,"statements":[{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [128, 595, 15, 363, 764, 502], [128, 595, 15, 363, 764, 502], [], []]
