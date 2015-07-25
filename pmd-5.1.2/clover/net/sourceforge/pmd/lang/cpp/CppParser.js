var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":7308,"methods":[{"el":23,"sc":5,"sl":21},{"el":28,"sc":5,"sl":25},{"el":32,"sc":5,"sl":30},{"el":37,"sc":5,"sl":34},{"el":41,"sc":5,"sl":39}],"name":"CppParser","sl":19}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_131":{"methods":[{"sl":21},{"sl":25}],"name":"testDollarSignStartingIdentifier","pass":true,"statements":[{"sl":22},{"sl":27}]},"test_174":{"methods":[{"sl":21},{"sl":25}],"name":"testDollarSignInIdentifier","pass":true,"statements":[{"sl":22},{"sl":27}]},"test_285":{"methods":[{"sl":21},{"sl":30}],"name":"testCopyXmlToClipboard","pass":true,"statements":[{"sl":22},{"sl":31}]},"test_528":{"methods":[{"sl":21},{"sl":25}],"name":"testContinuation_IntraToken","pass":true,"statements":[{"sl":22},{"sl":27}]},"test_592":{"methods":[{"sl":21},{"sl":25}],"name":"testMultiLineMacros","pass":true,"statements":[{"sl":22},{"sl":27}]},"test_703":{"methods":[{"sl":21},{"sl":25}],"name":"testWideCharacters","pass":true,"statements":[{"sl":22},{"sl":27}]},"test_922":{"methods":[{"sl":21},{"sl":25}],"name":"testContinuation_InterToken","pass":true,"statements":[{"sl":22},{"sl":27}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [528, 174, 922, 703, 131, 285, 592], [528, 174, 922, 703, 131, 285, 592], [], [], [528, 174, 922, 703, 131, 592], [], [528, 174, 922, 703, 131, 592], [], [], [285], [285], [], [], [], [], [], [], [], [], [], [], []]
