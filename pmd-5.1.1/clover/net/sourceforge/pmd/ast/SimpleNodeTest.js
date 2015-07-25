var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":369,"id":37098,"methods":[{"el":47,"sc":5,"sl":43},{"el":53,"sc":5,"sl":49},{"el":60,"sc":5,"sl":55},{"el":67,"sc":5,"sl":62},{"el":74,"sc":5,"sl":69},{"el":81,"sc":5,"sl":76},{"el":88,"sc":5,"sl":83},{"el":100,"sc":5,"sl":90},{"el":115,"sc":5,"sl":102},{"el":128,"sc":5,"sl":117},{"el":135,"sc":5,"sl":130},{"el":144,"sc":5,"sl":137},{"el":154,"sc":5,"sl":146},{"el":167,"sc":5,"sl":156},{"el":182,"sc":5,"sl":169},{"el":200,"sc":5,"sl":184},{"el":215,"sc":5,"sl":202},{"el":251,"sc":5,"sl":224},{"el":259,"sc":5,"sl":253},{"el":265,"sc":5,"sl":261},{"el":276,"sc":5,"sl":267},{"el":286,"sc":5,"sl":278},{"el":293,"sc":5,"sl":288},{"el":368,"sc":5,"sl":366}],"name":"SimpleNodeTest","sl":41}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_204":{"methods":[{"sl":130}],"name":"testFindDescendantsOfType","pass":true,"statements":[{"sl":132},{"sl":133},{"sl":134}]},"test_226":{"methods":[{"sl":267}],"name":"testXPathNodeSelect","pass":true,"statements":[{"sl":269},{"sl":270},{"sl":271},{"sl":272},{"sl":274},{"sl":275}]},"test_232":{"methods":[{"sl":261}],"name":"testContainsChildOfType","pass":true,"statements":[{"sl":263},{"sl":264}]},"test_26":{"methods":[{"sl":83}],"name":"testNoExplicitImplements","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":87}]},"test_347":{"methods":[{"sl":278}],"name":"testUserData","pass":true,"statements":[{"sl":280},{"sl":281},{"sl":282},{"sl":283},{"sl":284},{"sl":285}]},"test_353":{"methods":[{"sl":69}],"name":"testNoExplicitExtends","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":73}]},"test_40":{"methods":[{"sl":184}],"name":"testGetFirstChildNestedDeeper","pass":true,"statements":[{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":191},{"sl":192},{"sl":193},{"sl":194},{"sl":196},{"sl":197},{"sl":198},{"sl":199}]},"test_415":{"methods":[{"sl":253}],"name":"testContainsNoInnerWithAnonInner","pass":true,"statements":[{"sl":255},{"sl":256},{"sl":257},{"sl":258}]},"test_448":{"methods":[{"sl":156}],"name":"testGetFirstChild","pass":true,"statements":[{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":163},{"sl":164},{"sl":165},{"sl":166}]},"test_457":{"methods":[{"sl":137}],"name":"testFindDescendantsOfTypeMultiple","pass":true,"statements":[{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":143}]},"test_490":{"methods":[{"sl":43},{"sl":288}],"name":"testMethodDiffLines","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":289},{"sl":290},{"sl":291},{"sl":292}]},"test_540":{"methods":[{"sl":76}],"name":"testHasExplicitImplements","pass":true,"statements":[{"sl":78},{"sl":79},{"sl":80}]},"test_57":{"methods":[{"sl":55},{"sl":288}],"name":"testNoLookahead","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":59},{"sl":289},{"sl":290},{"sl":291},{"sl":292}]},"test_579":{"methods":[{"sl":146}],"name":"testFindDescendantsOfTypeRecurse","pass":true,"statements":[{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":153}]},"test_585":{"methods":[{"sl":62}],"name":"testHasExplicitExtends","pass":true,"statements":[{"sl":64},{"sl":65},{"sl":66}]},"test_587":{"methods":[{"sl":117}],"name":"testLineNumbersAreSetOnAllSiblings","pass":true,"statements":[{"sl":119},{"sl":120},{"sl":122},{"sl":123},{"sl":125},{"sl":126}]},"test_659":{"methods":[{"sl":49},{"sl":288}],"name":"testMethodSameLine","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":289},{"sl":290},{"sl":291},{"sl":292}]},"test_671":{"methods":[{"sl":90},{"sl":288}],"name":"testColumnsOnQualifiedName","pass":true,"statements":[{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":289},{"sl":290},{"sl":291},{"sl":292}]},"test_747":{"methods":[{"sl":169}],"name":"testGetFirstChildNested","pass":true,"statements":[{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":180},{"sl":181}]},"test_835":{"methods":[{"sl":202}],"name":"testParentMethods","pass":true,"statements":[{"sl":204},{"sl":206},{"sl":207},{"sl":208},{"sl":210},{"sl":211},{"sl":212},{"sl":213},{"sl":214}]},"test_919":{"methods":[{"sl":102},{"sl":288}],"name":"testLineNumbersForNameSplitOverTwoLines","pass":true,"statements":[{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":109},{"sl":111},{"sl":289},{"sl":290},{"sl":291},{"sl":292}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [490], [], [490], [490], [], [], [659], [], [659], [659], [], [], [57], [], [57], [57], [57], [], [], [585], [], [585], [585], [585], [], [], [353], [], [353], [353], [353], [], [], [540], [], [540], [540], [540], [], [], [26], [], [26], [26], [26], [], [], [671], [], [671], [671], [671], [671], [671], [671], [], [], [], [], [919], [], [919], [919], [919], [919], [919], [919], [], [919], [], [], [], [], [], [587], [], [587], [587], [], [587], [587], [], [587], [587], [], [], [], [204], [], [204], [204], [204], [], [], [457], [], [457], [457], [457], [457], [457], [], [], [579], [], [579], [579], [579], [579], [579], [579], [], [], [448], [], [448], [448], [448], [448], [], [448], [448], [448], [448], [], [], [747], [], [747], [747], [747], [747], [747], [747], [], [747], [747], [747], [747], [], [], [40], [], [40], [40], [40], [40], [], [40], [40], [40], [40], [], [40], [40], [40], [40], [], [], [835], [], [835], [], [835], [835], [835], [], [835], [835], [835], [835], [835], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [415], [], [415], [415], [415], [415], [], [], [232], [], [232], [232], [], [], [226], [], [226], [226], [226], [226], [], [226], [226], [], [], [347], [], [347], [347], [347], [347], [347], [347], [], [], [671, 490, 659, 919, 57], [671, 490, 659, 919, 57], [671, 490, 659, 919, 57], [671, 490, 659, 919, 57], [671, 490, 659, 919, 57], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
