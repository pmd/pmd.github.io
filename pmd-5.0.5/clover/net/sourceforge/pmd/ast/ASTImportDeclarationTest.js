var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":61,"id":30592,"methods":[{"el":26,"sc":5,"sl":22},{"el":32,"sc":5,"sl":28},{"el":39,"sc":5,"sl":34},{"el":44,"sc":5,"sl":41},{"el":60,"sc":5,"sl":58}],"name":"ASTImportDeclarationTest","sl":20}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_125":{"methods":[{"sl":28}],"name":"testGetImportedNameNode","pass":true,"statements":[{"sl":30},{"sl":31}]},"test_214":{"methods":[{"sl":34}],"name":"testStaticImport","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38}]},"test_558":{"methods":[{"sl":22}],"name":"testImportOnDemand","pass":true,"statements":[{"sl":24},{"sl":25}]},"test_703":{"methods":[{"sl":41}],"name":"testStaticImportFailsWithJDK14","pass":true,"statements":[{"sl":43}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [558], [], [558], [558], [], [], [125], [], [125], [125], [], [], [214], [], [214], [214], [214], [], [], [703], [], [703], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
