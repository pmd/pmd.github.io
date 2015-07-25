var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":30,"id":30539,"methods":[{"el":20,"sc":5,"sl":19},{"el":25,"sc":5,"sl":22},{"el":29,"sc":5,"sl":27}],"name":"XmlRuleViolationFactory","sl":15}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_879":{"methods":[{"sl":19},{"sl":22}],"name":"testXML","pass":true,"statements":[{"sl":24}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [879], [], [], [879], [], [879], [], [], [], [], [], []]
