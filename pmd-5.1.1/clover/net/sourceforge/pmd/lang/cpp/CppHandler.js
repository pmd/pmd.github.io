var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":23,"id":7282,"methods":[{"el":18,"sc":5,"sl":16},{"el":22,"sc":5,"sl":20}],"name":"CppHandler","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_136":{"methods":[{"sl":20}],"name":"testWideCharacters","pass":true,"statements":[{"sl":21}]},"test_170":{"methods":[{"sl":20}],"name":"testDollarSignStartingIdentifier","pass":true,"statements":[{"sl":21}]},"test_188":{"methods":[{"sl":20}],"name":"testMultiLineMacros","pass":true,"statements":[{"sl":21}]},"test_550":{"methods":[{"sl":20}],"name":"testDollarSignInIdentifier","pass":true,"statements":[{"sl":21}]},"test_560":{"methods":[{"sl":20}],"name":"testContinuation_InterToken","pass":true,"statements":[{"sl":21}]},"test_703":{"methods":[{"sl":20}],"name":"testCopyXmlToClipboard","pass":true,"statements":[{"sl":21}]},"test_799":{"methods":[{"sl":20}],"name":"testContinuation_IntraToken","pass":true,"statements":[{"sl":21}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [550, 136, 799, 560, 188, 703, 170], [550, 136, 799, 560, 188, 703, 170], [], []]
