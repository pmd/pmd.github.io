var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":23,"id":7304,"methods":[{"el":18,"sc":5,"sl":16},{"el":22,"sc":5,"sl":20}],"name":"CppHandler","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_131":{"methods":[{"sl":20}],"name":"testDollarSignStartingIdentifier","pass":true,"statements":[{"sl":21}]},"test_174":{"methods":[{"sl":20}],"name":"testDollarSignInIdentifier","pass":true,"statements":[{"sl":21}]},"test_285":{"methods":[{"sl":20}],"name":"testCopyXmlToClipboard","pass":true,"statements":[{"sl":21}]},"test_528":{"methods":[{"sl":20}],"name":"testContinuation_IntraToken","pass":true,"statements":[{"sl":21}]},"test_592":{"methods":[{"sl":20}],"name":"testMultiLineMacros","pass":true,"statements":[{"sl":21}]},"test_703":{"methods":[{"sl":20}],"name":"testWideCharacters","pass":true,"statements":[{"sl":21}]},"test_922":{"methods":[{"sl":20}],"name":"testContinuation_InterToken","pass":true,"statements":[{"sl":21}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [528, 174, 922, 703, 131, 285, 592], [528, 174, 922, 703, 131, 285, 592], [], []]
