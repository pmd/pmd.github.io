var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":7253,"methods":[{"el":23,"sc":5,"sl":21},{"el":28,"sc":5,"sl":25},{"el":32,"sc":5,"sl":30},{"el":37,"sc":5,"sl":34},{"el":41,"sc":5,"sl":39}],"name":"CppParser","sl":19}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_139":{"methods":[{"sl":21},{"sl":25}],"name":"testDollarSignInIdentifier","pass":true,"statements":[{"sl":22},{"sl":27}]},"test_187":{"methods":[{"sl":21},{"sl":25}],"name":"testWideCharacters","pass":true,"statements":[{"sl":22},{"sl":27}]},"test_291":{"methods":[{"sl":21},{"sl":25}],"name":"testContinuation_IntraToken","pass":true,"statements":[{"sl":22},{"sl":27}]},"test_610":{"methods":[{"sl":21},{"sl":25}],"name":"testMultiLineMacros","pass":true,"statements":[{"sl":22},{"sl":27}]},"test_740":{"methods":[{"sl":21},{"sl":25}],"name":"testDollarSignStartingIdentifier","pass":true,"statements":[{"sl":22},{"sl":27}]},"test_807":{"methods":[{"sl":21},{"sl":25}],"name":"testContinuation_InterToken","pass":true,"statements":[{"sl":22},{"sl":27}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [187, 139, 610, 291, 740, 807], [187, 139, 610, 291, 740, 807], [], [], [187, 139, 610, 291, 740, 807], [], [187, 139, 610, 291, 740, 807], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
