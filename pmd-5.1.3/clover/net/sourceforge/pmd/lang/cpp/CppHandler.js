var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":23,"id":7344,"methods":[{"el":18,"sc":5,"sl":16},{"el":22,"sc":5,"sl":20}],"name":"CppHandler","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_141":{"methods":[{"sl":20}],"name":"testContinuation_InterToken","pass":true,"statements":[{"sl":21}]},"test_42":{"methods":[{"sl":20}],"name":"testDollarSignStartingIdentifier","pass":true,"statements":[{"sl":21}]},"test_575":{"methods":[{"sl":20}],"name":"testMultiLineMacros","pass":true,"statements":[{"sl":21}]},"test_648":{"methods":[{"sl":20}],"name":"testWideCharacters","pass":true,"statements":[{"sl":21}]},"test_70":{"methods":[{"sl":20}],"name":"testCopyXmlToClipboard","pass":true,"statements":[{"sl":21}]},"test_837":{"methods":[{"sl":20}],"name":"testContinuation_IntraToken","pass":true,"statements":[{"sl":21}]},"test_927":{"methods":[{"sl":20}],"name":"testDollarSignInIdentifier","pass":true,"statements":[{"sl":21}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [141, 837, 70, 42, 927, 648, 575], [141, 837, 70, 42, 927, 648, 575], [], []]
