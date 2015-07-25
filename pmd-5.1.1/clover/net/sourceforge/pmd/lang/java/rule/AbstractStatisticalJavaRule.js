var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":31,"id":12696,"methods":[{"el":20,"sc":5,"sl":18},{"el":24,"sc":5,"sl":22},{"el":30,"sc":5,"sl":26}],"name":"AbstractStatisticalJavaRule","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_1":{"methods":[{"sl":18},{"sl":26}],"name":"testReturnValueComplexity","pass":true,"statements":[{"sl":19},{"sl":28},{"sl":29}]},"test_107":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_121":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testMT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_125":{"methods":[{"sl":18},{"sl":26}],"name":"testMS","pass":true,"statements":[{"sl":19},{"sl":28},{"sl":29}]},"test_137":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testST","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_143":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testTM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_149":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_166":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSTM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_178":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSTM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_193":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_217":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testST","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_220":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_249":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testTMS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_259":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_277":{"methods":[{"sl":18},{"sl":26}],"name":"testSMT","pass":true,"statements":[{"sl":19},{"sl":28},{"sl":29}]},"test_278":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testTM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_294":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSTM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_308":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testMT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_313":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSMT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_315":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_32":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSMT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_323":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSMT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_325":{"methods":[{"sl":18},{"sl":26}],"name":"testMS","pass":true,"statements":[{"sl":19},{"sl":28},{"sl":29}]},"test_342":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testTS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_343":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_360":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testST","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_37":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testTS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_370":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testST","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_371":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSTM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_372":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_376":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testTMS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_377":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_397":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testMS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_398":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSingleDatapoint","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_443":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testMS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_444":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testTS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_447":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testMT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_449":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_461":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_47":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_483":{"methods":[{"sl":18},{"sl":26}],"name":"testTMS","pass":true,"statements":[{"sl":19},{"sl":28},{"sl":29}]},"test_489":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_49":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testST","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_494":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testMT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_500":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_51":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSMT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_533":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testTM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_537":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSTM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_542":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_544":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testTMS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_545":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testTM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_568":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testTS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_570":{"methods":[{"sl":18},{"sl":26}],"name":"testViolationMessage","pass":true,"statements":[{"sl":19},{"sl":28},{"sl":29}]},"test_571":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testTM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_586":{"methods":[{"sl":26}],"name":"testNoFormattersValidation","pass":true,"statements":[{"sl":28},{"sl":29}]},"test_635":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testAbstractNames","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_638":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testPmdOptions","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_648":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testTM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_651":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testMT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_653":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSMT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_682":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSTM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_689":{"methods":[{"sl":22},{"sl":26}],"name":"testMetrics","pass":true,"statements":[{"sl":23},{"sl":28},{"sl":29}]},"test_691":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_70":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_722":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_73":{"methods":[{"sl":18},{"sl":26}],"name":"testMS","pass":true,"statements":[{"sl":19},{"sl":28},{"sl":29}]},"test_734":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_735":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testCommaInRulesetfiles","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_739":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testTS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_75":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testTS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_759":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testRelativeRulesetsInRulesetfiles","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_770":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testMT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_78":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_786":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testST","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_79":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_80":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_817":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_830":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_85":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_863":{"methods":[{"sl":18},{"sl":26}],"name":"testTMS","pass":true,"statements":[{"sl":19},{"sl":28},{"sl":29}]},"test_890":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_898":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testT","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_90":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testExplicitRuleInRuleSet","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_922":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testMS","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]},"test_925":{"methods":[{"sl":18},{"sl":26}],"name":"testTMS","pass":true,"statements":[{"sl":19},{"sl":28},{"sl":29}]},"test_98":{"methods":[{"sl":18},{"sl":22},{"sl":26}],"name":"testSM","pass":true,"statements":[{"sl":19},{"sl":23},{"sl":28},{"sl":29}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1, 37, 461, 220, 648, 735, 313, 545, 377, 786, 325, 397, 308, 653, 635, 371, 121, 651, 73, 323, 342, 125, 494, 734, 51, 739, 898, 278, 568, 483, 315, 443, 770, 90, 890, 449, 444, 500, 166, 343, 277, 863, 360, 259, 533, 447, 80, 370, 85, 570, 217, 193, 75, 722, 537, 489, 542, 143, 922, 544, 372, 149, 925, 294, 691, 47, 817, 107, 98, 70, 49, 249, 137, 178, 32, 398, 571, 78, 79, 376, 830, 682, 759, 638, 0], [1, 37, 461, 220, 648, 735, 313, 545, 377, 786, 325, 397, 308, 653, 635, 371, 121, 651, 73, 323, 342, 125, 494, 734, 51, 739, 898, 278, 568, 483, 315, 443, 770, 90, 890, 449, 444, 500, 166, 343, 277, 863, 360, 259, 533, 447, 80, 370, 85, 570, 217, 193, 75, 722, 537, 489, 542, 143, 922, 544, 372, 149, 925, 294, 691, 47, 817, 107, 98, 70, 49, 249, 137, 178, 32, 398, 571, 78, 79, 376, 830, 682, 759, 638, 0], [], [], [37, 461, 220, 648, 735, 313, 545, 377, 786, 689, 397, 308, 653, 635, 371, 121, 651, 323, 342, 494, 734, 51, 739, 898, 278, 568, 315, 443, 770, 90, 890, 449, 444, 500, 166, 343, 360, 259, 533, 447, 80, 370, 85, 217, 193, 75, 722, 537, 489, 542, 143, 922, 544, 372, 149, 294, 691, 47, 817, 107, 98, 70, 49, 249, 137, 178, 32, 398, 571, 78, 79, 376, 830, 682, 759, 638, 0], [37, 461, 220, 648, 735, 313, 545, 377, 786, 689, 397, 308, 653, 635, 371, 121, 651, 323, 342, 494, 734, 51, 739, 898, 278, 568, 315, 443, 770, 90, 890, 449, 444, 500, 166, 343, 360, 259, 533, 447, 80, 370, 85, 217, 193, 75, 722, 537, 489, 542, 143, 922, 544, 372, 149, 294, 691, 47, 817, 107, 98, 70, 49, 249, 137, 178, 32, 398, 571, 78, 79, 376, 830, 682, 759, 638, 0], [], [], [1, 37, 461, 220, 648, 735, 313, 545, 377, 786, 689, 325, 397, 308, 653, 635, 371, 121, 651, 73, 323, 342, 125, 494, 734, 51, 739, 898, 278, 568, 483, 315, 443, 770, 90, 890, 449, 444, 500, 166, 343, 277, 863, 586, 360, 259, 533, 447, 80, 370, 85, 570, 217, 193, 75, 722, 537, 489, 542, 143, 922, 544, 372, 149, 925, 294, 691, 47, 817, 107, 98, 70, 49, 249, 137, 178, 32, 398, 571, 78, 79, 376, 830, 682, 759, 638, 0], [], [1, 37, 461, 220, 648, 735, 313, 545, 377, 786, 689, 325, 397, 308, 653, 635, 371, 121, 651, 73, 323, 342, 125, 494, 734, 51, 739, 898, 278, 568, 483, 315, 443, 770, 90, 890, 449, 444, 500, 166, 343, 277, 863, 586, 360, 259, 533, 447, 80, 370, 85, 570, 217, 193, 75, 722, 537, 489, 542, 143, 922, 544, 372, 149, 925, 294, 691, 47, 817, 107, 98, 70, 49, 249, 137, 178, 32, 398, 571, 78, 79, 376, 830, 682, 759, 638, 0], [1, 37, 461, 220, 648, 735, 313, 545, 377, 786, 689, 325, 397, 308, 653, 635, 371, 121, 651, 73, 323, 342, 125, 494, 734, 51, 739, 898, 278, 568, 483, 315, 443, 770, 90, 890, 449, 444, 500, 166, 343, 277, 863, 586, 360, 259, 533, 447, 80, 370, 85, 570, 217, 193, 75, 722, 537, 489, 542, 143, 922, 544, 372, 149, 925, 294, 691, 47, 817, 107, 98, 70, 49, 249, 137, 178, 32, 398, 571, 78, 79, 376, 830, 682, 759, 638, 0], [], []]
