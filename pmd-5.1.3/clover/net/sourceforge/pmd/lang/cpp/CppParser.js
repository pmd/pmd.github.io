var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":7348,"methods":[{"el":23,"sc":5,"sl":21},{"el":28,"sc":5,"sl":25},{"el":32,"sc":5,"sl":30},{"el":37,"sc":5,"sl":34},{"el":41,"sc":5,"sl":39}],"name":"CppParser","sl":19}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_141":{"methods":[{"sl":21},{"sl":25}],"name":"testContinuation_InterToken","pass":true,"statements":[{"sl":22},{"sl":27}]},"test_42":{"methods":[{"sl":21},{"sl":25}],"name":"testDollarSignStartingIdentifier","pass":true,"statements":[{"sl":22},{"sl":27}]},"test_575":{"methods":[{"sl":21},{"sl":25}],"name":"testMultiLineMacros","pass":true,"statements":[{"sl":22},{"sl":27}]},"test_648":{"methods":[{"sl":21},{"sl":25}],"name":"testWideCharacters","pass":true,"statements":[{"sl":22},{"sl":27}]},"test_70":{"methods":[{"sl":21},{"sl":30}],"name":"testCopyXmlToClipboard","pass":true,"statements":[{"sl":22},{"sl":31}]},"test_837":{"methods":[{"sl":21},{"sl":25}],"name":"testContinuation_IntraToken","pass":true,"statements":[{"sl":22},{"sl":27}]},"test_927":{"methods":[{"sl":21},{"sl":25}],"name":"testDollarSignInIdentifier","pass":true,"statements":[{"sl":22},{"sl":27}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [141, 837, 70, 42, 927, 648, 575], [141, 837, 70, 42, 927, 648, 575], [], [], [141, 837, 42, 927, 648, 575], [], [141, 837, 42, 927, 648, 575], [], [], [70], [70], [], [], [], [], [], [], [], [], [], [], []]
