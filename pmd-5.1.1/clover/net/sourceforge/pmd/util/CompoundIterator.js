var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":71,"id":31745,"methods":[{"el":27,"sc":5,"sl":24},{"el":34,"sc":5,"sl":32},{"el":46,"sc":5,"sl":39},{"el":58,"sc":5,"sl":51},{"el":70,"sc":5,"sl":61}],"name":"CompoundIterator","sl":16}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_181":{"methods":[{"sl":24},{"sl":39},{"sl":61}],"name":"testEmptyBadNext","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":40},{"sl":41},{"sl":44},{"sl":62},{"sl":69}]},"test_233":{"methods":[{"sl":24},{"sl":32},{"sl":39},{"sl":61}],"name":"testParsingIgnoreElementContentWhitespace","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":33},{"sl":40},{"sl":41},{"sl":42},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":69}]},"test_251":{"methods":[{"sl":24},{"sl":32},{"sl":39},{"sl":61}],"name":"testXML","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":33},{"sl":40},{"sl":41},{"sl":42},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":69}]},"test_297":{"methods":[{"sl":24},{"sl":32},{"sl":39},{"sl":61}],"name":"testParsingDoNotExpandEntities","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":33},{"sl":40},{"sl":41},{"sl":42},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":69}]},"test_341":{"methods":[{"sl":24},{"sl":32},{"sl":39},{"sl":61}],"name":"testLineNumbers","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":33},{"sl":40},{"sl":41},{"sl":42},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":69}]},"test_462":{"methods":[{"sl":32},{"sl":39},{"sl":61}],"name":"testHappyPath","pass":true,"statements":[{"sl":33},{"sl":40},{"sl":41},{"sl":42},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":69}]},"test_506":{"methods":[{"sl":24},{"sl":32},{"sl":39},{"sl":61}],"name":"testParsingNotNamespaceAware","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":33},{"sl":40},{"sl":41},{"sl":42},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":69}]},"test_55":{"methods":[{"sl":32},{"sl":39},{"sl":51},{"sl":61}],"name":"testHappyPathRemove","pass":true,"statements":[{"sl":33},{"sl":40},{"sl":41},{"sl":42},{"sl":52},{"sl":53},{"sl":54},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":69}]},"test_574":{"methods":[{"sl":24},{"sl":32},{"sl":39},{"sl":61}],"name":"testDefaultParsingNamespaces","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":33},{"sl":40},{"sl":41},{"sl":42},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":69}]},"test_588":{"methods":[{"sl":24},{"sl":32},{"sl":61}],"name":"testEmpty","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":33},{"sl":62},{"sl":69}]},"test_590":{"methods":[{"sl":24},{"sl":32},{"sl":39},{"sl":61}],"name":"testDefaultParsing","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":33},{"sl":40},{"sl":41},{"sl":42},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":69}]},"test_683":{"methods":[{"sl":24},{"sl":32},{"sl":39},{"sl":61}],"name":"testParsingCoalescingEnabled","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":33},{"sl":40},{"sl":41},{"sl":42},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":69}]},"test_76":{"methods":[{"sl":24},{"sl":51},{"sl":61}],"name":"testEmptyBadRemove","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":52},{"sl":53},{"sl":56},{"sl":62},{"sl":69}]},"test_928":{"methods":[{"sl":24},{"sl":32},{"sl":39},{"sl":61}],"name":"testParsingIgnoreComments","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":33},{"sl":40},{"sl":41},{"sl":42},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":69}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [590, 251, 928, 588, 181, 683, 297, 506, 76, 574, 233, 341], [590, 251, 928, 588, 181, 683, 297, 506, 76, 574, 233, 341], [590, 251, 928, 588, 181, 683, 297, 506, 76, 574, 233, 341], [], [], [], [], [], [590, 251, 928, 588, 462, 683, 297, 506, 574, 55, 233, 341], [590, 251, 928, 588, 462, 683, 297, 506, 574, 55, 233, 341], [], [], [], [], [], [590, 251, 928, 181, 462, 683, 297, 506, 574, 55, 233, 341], [590, 251, 928, 181, 462, 683, 297, 506, 574, 55, 233, 341], [590, 251, 928, 181, 462, 683, 297, 506, 574, 55, 233, 341], [590, 251, 928, 462, 683, 297, 506, 574, 55, 233, 341], [], [181], [], [], [], [], [], [], [76, 55], [76, 55], [76, 55], [55], [], [76], [], [], [], [], [590, 251, 928, 588, 181, 462, 683, 297, 506, 76, 574, 55, 233, 341], [590, 251, 928, 588, 181, 462, 683, 297, 506, 76, 574, 55, 233, 341], [590, 251, 928, 462, 683, 297, 506, 574, 55, 233, 341], [590, 251, 928, 462, 683, 297, 506, 574, 55, 233, 341], [], [590, 251, 928, 462, 683, 297, 506, 574, 55, 233, 341], [], [], [590, 251, 928, 588, 181, 462, 683, 297, 506, 76, 574, 55, 233, 341], [], []]
