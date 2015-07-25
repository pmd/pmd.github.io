var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":61,"id":30523,"methods":[{"el":26,"sc":5,"sl":22},{"el":32,"sc":5,"sl":28},{"el":39,"sc":5,"sl":34},{"el":44,"sc":5,"sl":41},{"el":60,"sc":5,"sl":58}],"name":"ASTImportDeclarationTest","sl":20}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_106":{"methods":[{"sl":22}],"name":"testImportOnDemand","pass":true,"statements":[{"sl":24},{"sl":25}]},"test_223":{"methods":[{"sl":41}],"name":"testStaticImportFailsWithJDK14","pass":true,"statements":[{"sl":43}]},"test_514":{"methods":[{"sl":34}],"name":"testStaticImport","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38}]},"test_565":{"methods":[{"sl":28}],"name":"testGetImportedNameNode","pass":true,"statements":[{"sl":30},{"sl":31}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [106], [], [106], [106], [], [], [565], [], [565], [565], [], [], [514], [], [514], [514], [514], [], [], [223], [], [223], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
