var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":96,"id":30434,"methods":[{"el":20,"sc":5,"sl":16},{"el":26,"sc":5,"sl":22},{"el":32,"sc":5,"sl":28},{"el":38,"sc":5,"sl":34},{"el":44,"sc":5,"sl":40},{"el":50,"sc":5,"sl":46},{"el":56,"sc":5,"sl":52},{"el":95,"sc":5,"sl":93}],"name":"ASTLiteralTest","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_142":{"methods":[{"sl":40}],"name":"testIsFloatFloatLiteral","pass":true,"statements":[{"sl":42},{"sl":43}]},"test_220":{"methods":[{"sl":52}],"name":"testIsCharLiteral","pass":true,"statements":[{"sl":54},{"sl":55}]},"test_313":{"methods":[{"sl":28}],"name":"testIsIntIntLiteral","pass":true,"statements":[{"sl":30},{"sl":31}]},"test_335":{"methods":[{"sl":34}],"name":"testIsIntLongLiteral","pass":true,"statements":[{"sl":36},{"sl":37}]},"test_686":{"methods":[{"sl":46}],"name":"testIsFloatDoubleLiteral","pass":true,"statements":[{"sl":48},{"sl":49}]},"test_778":{"methods":[{"sl":16}],"name":"testIsStringLiteral","pass":true,"statements":[{"sl":18},{"sl":19}]},"test_82":{"methods":[{"sl":22}],"name":"testIsNotStringLiteral","pass":true,"statements":[{"sl":24},{"sl":25}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [778], [], [778], [778], [], [], [82], [], [82], [82], [], [], [313], [], [313], [313], [], [], [335], [], [335], [335], [], [], [142], [], [142], [142], [], [], [686], [], [686], [686], [], [], [220], [], [220], [220], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
