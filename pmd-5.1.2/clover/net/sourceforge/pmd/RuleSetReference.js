var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":50,"id":1306,"methods":[{"el":17,"sc":2,"sl":17},{"el":21,"sc":2,"sl":19},{"el":25,"sc":2,"sl":23},{"el":29,"sc":2,"sl":27},{"el":33,"sc":2,"sl":31},{"el":37,"sc":2,"sl":35},{"el":41,"sc":2,"sl":39},{"el":45,"sc":2,"sl":43},{"el":49,"sc":2,"sl":47}],"name":"RuleSetReference","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_111":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"minimalArgs","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_166":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"testOverrideMessageOneElem","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_175":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"testOverrideMessage","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_191":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"testReferenceInternalToExternalChain","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_215":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"changeJavaVersion","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_235":{"methods":[{"sl":19},{"sl":23},{"sl":31},{"sl":35}],"name":"testAddRuleSetByReferenceAllRule","pass":true,"statements":[{"sl":20},{"sl":24},{"sl":32},{"sl":36}]},"test_247":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"testExternalReferences","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_306":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"testRefs","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_353":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"usingDebug","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_38":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"testBasic","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_42":{"methods":[{"sl":19},{"sl":23},{"sl":31},{"sl":35},{"sl":39},{"sl":43}],"name":"testWrite","pass":true,"statements":[{"sl":20},{"sl":24},{"sl":32},{"sl":36},{"sl":40},{"sl":44}]},"test_424":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"testReferenceInternalToExternal","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_491":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"testExternalReferenceOverride","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_508":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"testRelativeRulesetsInRulesetfiles","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_513":{"methods":[{"sl":17},{"sl":23},{"sl":27},{"sl":31},{"sl":35}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":24},{"sl":28},{"sl":32},{"sl":36}]},"test_520":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_612":{"methods":[{"sl":17},{"sl":27},{"sl":35},{"sl":39}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":28},{"sl":36},{"sl":40}]},"test_627":{"methods":[{"sl":17},{"sl":27},{"sl":35},{"sl":39}],"name":"testPmdOptions","pass":true,"statements":[{"sl":28},{"sl":36},{"sl":40}]},"test_651":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"minimumPriority","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_710":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"testReferencePriority","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_718":{"methods":[{"sl":17}],"name":"testRuleSetReference","pass":true,"statements":[]},"test_749":{"methods":[{"sl":19},{"sl":23},{"sl":31},{"sl":35}],"name":"testAddRuleSetByReferenceSingleRule","pass":true,"statements":[{"sl":20},{"sl":24},{"sl":32},{"sl":36}]},"test_756":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"testReferenceToDeprecatedRule","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_794":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"testReferenceInternalToInternalChain","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_801":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"testReferenceInternalToInternal","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_817":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_870":{"methods":[{"sl":17},{"sl":27},{"sl":35}],"name":"testRuleSetFileName","pass":true,"statements":[{"sl":28},{"sl":36}]},"test_872":{"methods":[{"sl":17},{"sl":27},{"sl":35},{"sl":39},{"sl":47}],"name":"testExtendedReferences","pass":true,"statements":[{"sl":28},{"sl":36},{"sl":40},{"sl":48}]},"test_941":{"methods":[{"sl":17},{"sl":27},{"sl":35},{"sl":39}],"name":"testRuleSetReferenceWithDeprecatedRule","pass":true,"statements":[{"sl":28},{"sl":36},{"sl":40}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [175, 38, 191, 794, 718, 491, 247, 872, 817, 520, 627, 508, 756, 612, 215, 710, 111, 801, 941, 424, 166, 651, 353, 513, 870, 306], [], [749, 235, 42], [749, 235, 42], [], [], [749, 235, 42, 513], [749, 235, 42, 513], [], [], [175, 38, 191, 794, 491, 247, 872, 817, 520, 627, 508, 756, 612, 215, 710, 111, 801, 941, 424, 166, 651, 353, 513, 870, 306], [175, 38, 191, 794, 491, 247, 872, 817, 520, 627, 508, 756, 612, 215, 710, 111, 801, 941, 424, 166, 651, 353, 513, 870, 306], [], [], [749, 235, 42, 513], [749, 235, 42, 513], [], [], [175, 38, 749, 191, 794, 491, 247, 872, 817, 520, 627, 508, 756, 612, 215, 710, 111, 801, 235, 941, 424, 166, 651, 353, 42, 513, 870, 306], [175, 38, 749, 191, 794, 491, 247, 872, 817, 520, 627, 508, 756, 612, 215, 710, 111, 801, 235, 941, 424, 166, 651, 353, 42, 513, 870, 306], [], [], [872, 627, 612, 941, 42], [872, 627, 612, 941, 42], [], [], [42], [42], [], [], [872], [872], [], []]
