var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":29,"id":12006,"methods":[{"el":18,"sc":5,"sl":16},{"el":28,"sc":5,"sl":20}],"name":"JavaDataFlowNode","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_101":{"methods":[{"sl":16},{"sl":20}],"name":"testLabelledBreakLockup","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_108":{"methods":[{"sl":16},{"sl":20}],"name":"test_27","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_110":{"methods":[{"sl":16},{"sl":20}],"name":"test_23","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_180":{"methods":[{"sl":16},{"sl":20}],"name":"test_10","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_2":{"methods":[{"sl":16},{"sl":20}],"name":"test_18","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_234":{"methods":[{"sl":16},{"sl":20}],"name":"testIfStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_24":{"methods":[{"sl":16},{"sl":20}],"name":"test_14","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_264":{"methods":[{"sl":16},{"sl":20}],"name":"test_24","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_312":{"methods":[{"sl":16},{"sl":20}],"name":"test_6","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_320":{"methods":[{"sl":16},{"sl":20}],"name":"test_30","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_349":{"methods":[{"sl":16},{"sl":20}],"name":"test_28","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_367":{"methods":[{"sl":16},{"sl":20}],"name":"test_17","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_38":{"methods":[{"sl":16},{"sl":20}],"name":"test_13","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_394":{"methods":[{"sl":16},{"sl":20}],"name":"test_7","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_402":{"methods":[{"sl":16},{"sl":20}],"name":"test_1","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_42":{"methods":[{"sl":16},{"sl":20}],"name":"test_2","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_454":{"methods":[{"sl":16},{"sl":20}],"name":"test_12","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_463":{"methods":[{"sl":16},{"sl":20}],"name":"test_8","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_468":{"methods":[{"sl":16},{"sl":20}],"name":"testForStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_496":{"methods":[{"sl":16},{"sl":20}],"name":"test_29","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_503":{"methods":[{"sl":16},{"sl":20}],"name":"test_11","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_511":{"methods":[{"sl":16},{"sl":20}],"name":"test_22","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_531":{"methods":[{"sl":16},{"sl":20}],"name":"test_3","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_572":{"methods":[{"sl":16},{"sl":20}],"name":"testTwoUpdateDefs","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_638":{"methods":[{"sl":16},{"sl":20}],"name":"testPmdOptions","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_652":{"methods":[{"sl":16}],"name":"testbook","pass":true,"statements":[{"sl":17}]},"test_666":{"methods":[{"sl":16},{"sl":20}],"name":"test_15","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_675":{"methods":[{"sl":16},{"sl":20}],"name":"testWhileStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_679":{"methods":[{"sl":16}],"name":"testAddResultsinDFANodeContainingAddedNode","pass":true,"statements":[{"sl":17}]},"test_722":{"methods":[{"sl":16},{"sl":20}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_725":{"methods":[{"sl":16}],"name":"testStatementExpressionParentChildLinks","pass":true,"statements":[{"sl":17}]},"test_736":{"methods":[{"sl":16}],"name":"testVariableDeclaratorParentChildLinks","pass":true,"statements":[{"sl":17}]},"test_738":{"methods":[{"sl":16}],"name":"testOnlyWorksForMethodsAndConstructors","pass":true,"statements":[{"sl":17}]},"test_743":{"methods":[{"sl":16},{"sl":20}],"name":"test_21","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_814":{"methods":[{"sl":16},{"sl":20}],"name":"test_25","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_821":{"methods":[{"sl":16},{"sl":20}],"name":"test_9","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_846":{"methods":[{"sl":16},{"sl":20}],"name":"test_19","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_852":{"methods":[{"sl":16},{"sl":20}],"name":"test_20","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_856":{"methods":[{"sl":16},{"sl":20}],"name":"test_26","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_857":{"methods":[{"sl":16},{"sl":20}],"name":"test_16","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]},"test_864":{"methods":[{"sl":16}],"name":"test1","pass":true,"statements":[{"sl":17}]},"test_902":{"methods":[{"sl":16},{"sl":20}],"name":"test_4","pass":true,"statements":[{"sl":17},{"sl":21},{"sl":22},{"sl":25},{"sl":27}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [264, 234, 531, 42, 572, 38, 743, 394, 503, 180, 108, 101, 725, 320, 814, 468, 722, 454, 821, 736, 856, 367, 312, 511, 864, 738, 675, 349, 496, 902, 2, 679, 846, 652, 402, 110, 463, 852, 666, 857, 24, 638], [264, 234, 531, 42, 572, 38, 743, 394, 503, 180, 108, 101, 725, 320, 814, 468, 722, 454, 821, 736, 856, 367, 312, 511, 864, 738, 675, 349, 496, 902, 2, 679, 846, 652, 402, 110, 463, 852, 666, 857, 24, 638], [], [], [264, 234, 531, 42, 572, 38, 743, 394, 503, 180, 108, 101, 320, 814, 468, 722, 454, 821, 856, 367, 312, 511, 675, 349, 496, 902, 2, 846, 402, 110, 463, 852, 666, 857, 24, 638], [264, 234, 531, 42, 572, 38, 743, 394, 503, 180, 108, 101, 320, 814, 468, 722, 454, 821, 856, 367, 312, 511, 675, 349, 496, 902, 2, 846, 402, 110, 463, 852, 666, 857, 24, 638], [264, 234, 531, 42, 572, 38, 743, 394, 503, 180, 108, 101, 320, 814, 468, 722, 454, 821, 856, 367, 312, 511, 675, 349, 496, 902, 2, 846, 402, 110, 463, 852, 666, 857, 24, 638], [], [], [264, 234, 531, 42, 572, 38, 743, 394, 503, 180, 108, 101, 320, 814, 468, 722, 454, 821, 856, 367, 312, 511, 675, 349, 496, 902, 2, 846, 402, 110, 463, 852, 666, 857, 24, 638], [], [264, 234, 531, 42, 572, 38, 743, 394, 503, 180, 108, 101, 320, 814, 468, 722, 454, 821, 856, 367, 312, 511, 675, 349, 496, 902, 2, 846, 402, 110, 463, 852, 666, 857, 24, 638], [], []]
