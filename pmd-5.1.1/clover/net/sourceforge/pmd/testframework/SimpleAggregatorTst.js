var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":137,"id":42510,"methods":[{"el":32,"sc":5,"sl":30},{"el":41,"sc":5,"sl":39},{"el":50,"sc":5,"sl":46},{"el":60,"sc":5,"sl":58},{"el":94,"sc":5,"sl":65}],"name":"SimpleAggregatorTst","sl":24},{"el":135,"id":42541,"methods":[{"el":99,"sc":9,"sl":97},{"el":104,"sc":9,"sl":101},{"el":110,"sc":9,"sl":106},{"el":116,"sc":9,"sl":112},{"el":122,"sc":9,"sl":118},{"el":132,"sc":9,"sl":124}],"name":"SimpleAggregatorTst.CustomXmlTestClassMethodsRunner","sl":96}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_142":{"methods":[{"sl":46}],"name":"testSimple","pass":true,"statements":[{"sl":47},{"sl":48}]},"test_583":{"methods":[{"sl":30},{"sl":46}],"name":"testAll","pass":true,"statements":[{"sl":31},{"sl":47},{"sl":48}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [583], [583], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [583, 142], [583, 142], [583, 142], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
