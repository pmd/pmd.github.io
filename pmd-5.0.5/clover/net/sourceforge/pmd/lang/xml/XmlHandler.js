var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":64,"id":24444,"methods":[{"el":41,"sc":5,"sl":28},{"el":32,"sc":6,"sl":31},{"el":35,"sc":6,"sl":34},{"el":39,"sc":6,"sl":37},{"el":45,"sc":5,"sl":43},{"el":50,"sc":5,"sl":47},{"el":54,"sc":5,"sl":52},{"el":63,"sc":5,"sl":56},{"el":61,"sc":6,"sl":59}],"name":"XmlHandler","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_134":{"methods":[{"sl":28},{"sl":31}],"name":"testClassLevelSuppression","pass":true,"statements":[{"sl":30}]},"test_241":{"methods":[{"sl":52}],"name":"xsdIsNotLookedUp","pass":true,"statements":[{"sl":53}]},"test_377":{"methods":[{"sl":52}],"name":"dtdIsNotLookedUp","pass":true,"statements":[{"sl":53}]},"test_554":{"methods":[{"sl":52}],"name":"testVisit","pass":true,"statements":[{"sl":53}]},"test_680":{"methods":[{"sl":52}],"name":"testVisit","pass":true,"statements":[{"sl":53}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [134], [], [134], [134], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [680, 554, 377, 241], [680, 554, 377, 241], [], [], [], [], [], [], [], [], [], [], []]
