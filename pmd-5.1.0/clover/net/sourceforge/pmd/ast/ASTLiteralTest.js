var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":96,"id":36465,"methods":[{"el":20,"sc":5,"sl":16},{"el":26,"sc":5,"sl":22},{"el":32,"sc":5,"sl":28},{"el":38,"sc":5,"sl":34},{"el":44,"sc":5,"sl":40},{"el":50,"sc":5,"sl":46},{"el":56,"sc":5,"sl":52},{"el":95,"sc":5,"sl":93}],"name":"ASTLiteralTest","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_206":{"methods":[{"sl":40}],"name":"testIsFloatFloatLiteral","pass":true,"statements":[{"sl":42},{"sl":43}]},"test_262":{"methods":[{"sl":28}],"name":"testIsIntIntLiteral","pass":true,"statements":[{"sl":30},{"sl":31}]},"test_323":{"methods":[{"sl":22}],"name":"testIsNotStringLiteral","pass":true,"statements":[{"sl":24},{"sl":25}]},"test_378":{"methods":[{"sl":16}],"name":"testIsStringLiteral","pass":true,"statements":[{"sl":18},{"sl":19}]},"test_501":{"methods":[{"sl":34}],"name":"testIsIntLongLiteral","pass":true,"statements":[{"sl":36},{"sl":37}]},"test_664":{"methods":[{"sl":52}],"name":"testIsCharLiteral","pass":true,"statements":[{"sl":54},{"sl":55}]},"test_804":{"methods":[{"sl":46}],"name":"testIsFloatDoubleLiteral","pass":true,"statements":[{"sl":48},{"sl":49}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [378], [], [378], [378], [], [], [323], [], [323], [323], [], [], [262], [], [262], [262], [], [], [501], [], [501], [501], [], [], [206], [], [206], [206], [], [], [804], [], [804], [804], [], [], [664], [], [664], [664], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
