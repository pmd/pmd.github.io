var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":119,"id":31384,"methods":[{"el":39,"sc":2,"sl":34},{"el":41,"sc":3,"sl":41},{"el":59,"sc":2,"sl":46},{"el":74,"sc":2,"sl":61},{"el":87,"sc":2,"sl":76},{"el":93,"sc":2,"sl":89},{"el":97,"sc":2,"sl":95}],"name":"IDEAJRenderer","sl":20},{"el":118,"id":31428,"methods":[{"el":108,"sc":3,"sl":103},{"el":117,"sc":3,"sl":110}],"name":"IDEAJRenderer.SourcePath","sl":99}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_410":{"methods":[{"sl":34}],"name":"testWrongRulesetWithRulename","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37},{"sl":38}]},"test_420":{"methods":[{"sl":34}],"name":"testWrongRuleset","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37},{"sl":38}]},"test_764":{"methods":[{"sl":34}],"name":"testWrongRulename","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":37},{"sl":38}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [410, 764, 420], [410, 764, 420], [410, 764, 420], [410, 764, 420], [410, 764, 420], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
