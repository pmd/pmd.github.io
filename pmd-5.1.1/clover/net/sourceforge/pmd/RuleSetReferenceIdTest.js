var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":217,"id":35871,"methods":[{"el":24,"sc":5,"sl":16},{"el":29,"sc":5,"sl":26},{"el":34,"sc":5,"sl":31},{"el":39,"sc":5,"sl":36},{"el":44,"sc":5,"sl":41},{"el":50,"sc":5,"sl":46},{"el":57,"sc":5,"sl":52},{"el":72,"sc":5,"sl":59},{"el":80,"sc":5,"sl":74},{"el":90,"sc":5,"sl":82},{"el":98,"sc":5,"sl":92},{"el":106,"sc":5,"sl":100},{"el":114,"sc":5,"sl":108},{"el":125,"sc":5,"sl":116},{"el":135,"sc":5,"sl":127},{"el":142,"sc":5,"sl":137},{"el":151,"sc":5,"sl":144},{"el":159,"sc":5,"sl":153},{"el":167,"sc":5,"sl":161},{"el":176,"sc":5,"sl":169},{"el":183,"sc":5,"sl":178},{"el":190,"sc":5,"sl":185},{"el":198,"sc":5,"sl":192},{"el":206,"sc":5,"sl":200},{"el":212,"sc":5,"sl":208},{"el":216,"sc":5,"sl":214}],"name":"RuleSetReferenceIdTest","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_131":{"methods":[{"sl":16},{"sl":192}],"name":"testAbsolutePathRuleSet","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":194},{"sl":195},{"sl":196}]},"test_148":{"methods":[{"sl":16},{"sl":52}],"name":"testEmptyRuleSet","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":55},{"sl":56}]},"test_228":{"methods":[{"sl":16},{"sl":100}],"name":"testOneFullRuleSet","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":102},{"sl":103},{"sl":104}]},"test_246":{"methods":[{"sl":16},{"sl":59}],"name":"testInternalWithExternalRuleSet","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":69},{"sl":70}]},"test_30":{"methods":[{"sl":16},{"sl":74}],"name":"testOneSimpleRuleSet","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":76},{"sl":77},{"sl":78}]},"test_304":{"methods":[{"sl":41}],"name":"testExternalWithInternal","pass":true,"statements":[{"sl":43}]},"test_387":{"methods":[{"sl":16},{"sl":92}],"name":"testOneReleaseRuleSet","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":94},{"sl":95},{"sl":96}]},"test_396":{"methods":[{"sl":26}],"name":"testCommaInSingleId","pass":true,"statements":[{"sl":28}]},"test_467":{"methods":[{"sl":16},{"sl":82}],"name":"testMultipleSimpleRuleSet","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":84},{"sl":85},{"sl":86},{"sl":88}]},"test_469":{"methods":[{"sl":16},{"sl":108}],"name":"testOneFullRuleSetURL","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":110},{"sl":111},{"sl":112}]},"test_484":{"methods":[{"sl":16},{"sl":200}],"name":"testFooRules","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":202},{"sl":203},{"sl":204},{"sl":205}]},"test_521":{"methods":[{"sl":16},{"sl":161}],"name":"testFullRuleSetAndRule","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":163},{"sl":164},{"sl":165}]},"test_59":{"methods":[{"sl":16},{"sl":178}],"name":"testInternalRuleSetAndRule","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":180},{"sl":181},{"sl":182}]},"test_593":{"methods":[{"sl":31}],"name":"testInternalWithInternal","pass":true,"statements":[{"sl":33}]},"test_650":{"methods":[{"sl":208}],"name":"testNullRulesetString","pass":true,"statements":[{"sl":210},{"sl":211}]},"test_660":{"methods":[{"sl":16},{"sl":116}],"name":"testMultipleFullRuleSet","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":118},{"sl":120},{"sl":121},{"sl":123}]},"test_663":{"methods":[{"sl":46}],"name":"testInteralWithExternal","pass":true,"statements":[{"sl":49}]},"test_758":{"methods":[{"sl":16},{"sl":169}],"name":"testFullRuleSetURLAndRule","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":171},{"sl":173},{"sl":174}]},"test_771":{"methods":[{"sl":16},{"sl":137}],"name":"testUnknownRuleSet","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":139},{"sl":140},{"sl":141}]},"test_797":{"methods":[{"sl":16},{"sl":127}],"name":"testMixRuleSet","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":129},{"sl":130},{"sl":131},{"sl":133}]},"test_803":{"methods":[{"sl":16},{"sl":144}],"name":"testUnknownAndSimpleRuleSet","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":146},{"sl":147},{"sl":148},{"sl":150}]},"test_806":{"methods":[{"sl":16},{"sl":185}],"name":"testRelativePathRuleSet","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":187},{"sl":188},{"sl":189}]},"test_86":{"methods":[{"sl":16},{"sl":153}],"name":"testSimpleRuleSetAndRule","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":155},{"sl":156},{"sl":157}]},"test_889":{"methods":[{"sl":36}],"name":"testExternalWithExternal","pass":true,"statements":[{"sl":38}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [803, 387, 86, 771, 228, 521, 797, 30, 131, 148, 660, 467, 806, 246, 469, 758, 59, 484], [], [], [803, 387, 86, 771, 228, 521, 797, 30, 131, 148, 660, 467, 806, 246, 469, 758, 59, 484], [803, 387, 86, 771, 228, 521, 797, 30, 131, 148, 660, 467, 806, 246, 469, 758, 59, 484], [803, 387, 86, 771, 228, 521, 797, 30, 131, 148, 660, 467, 806, 246, 469, 758, 59, 484], [803, 387, 86, 771, 228, 521, 797, 30, 131, 148, 660, 467, 806, 246, 469, 758, 59, 484], [803, 387, 86, 771, 228, 521, 797, 30, 131, 148, 660, 467, 806, 246, 469, 758, 59, 484], [], [], [396], [], [396], [], [], [593], [], [593], [], [], [889], [], [889], [], [], [304], [], [304], [], [], [663], [], [], [663], [], [], [148], [], [], [148], [148], [], [], [246], [], [], [], [246], [246], [246], [246], [], [], [246], [246], [], [], [], [30], [], [30], [30], [30], [], [], [], [467], [], [467], [467], [467], [], [467], [], [], [], [387], [], [387], [387], [387], [], [], [], [228], [], [228], [228], [228], [], [], [], [469], [], [469], [469], [469], [], [], [], [660], [], [660], [], [660], [660], [], [660], [], [], [], [797], [], [797], [797], [797], [], [797], [], [], [], [771], [], [771], [771], [771], [], [], [803], [], [803], [803], [803], [], [803], [], [], [86], [], [86], [86], [86], [], [], [], [521], [], [521], [521], [521], [], [], [], [758], [], [758], [], [758], [758], [], [], [], [59], [], [59], [59], [59], [], [], [806], [], [806], [806], [806], [], [], [131], [], [131], [131], [131], [], [], [], [484], [], [484], [484], [484], [484], [], [], [650], [], [650], [650], [], [], [], [], [], []]
