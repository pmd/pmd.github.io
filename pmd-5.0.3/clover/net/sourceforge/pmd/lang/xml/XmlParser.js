var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":41,"id":24323,"methods":[{"el":23,"sc":5,"sl":21},{"el":28,"sc":5,"sl":25},{"el":32,"sc":5,"sl":30},{"el":36,"sc":5,"sl":34},{"el":40,"sc":5,"sl":38}],"name":"XmlParser","sl":19}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_356":{"methods":[{"sl":21},{"sl":34}],"name":"testVisit","pass":true,"statements":[{"sl":22},{"sl":35}]},"test_409":{"methods":[{"sl":21},{"sl":34}],"name":"xsdIsNotLookedUp","pass":true,"statements":[{"sl":22},{"sl":35}]},"test_463":{"methods":[{"sl":21},{"sl":34}],"name":"testVisit","pass":true,"statements":[{"sl":22},{"sl":35}]},"test_629":{"methods":[{"sl":21},{"sl":34}],"name":"dtdIsNotLookedUp","pass":true,"statements":[{"sl":22},{"sl":35}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [356, 463, 409, 629], [356, 463, 409, 629], [], [], [], [], [], [], [], [], [], [], [], [356, 463, 409, 629], [356, 463, 409, 629], [], [], [], [], [], []]
