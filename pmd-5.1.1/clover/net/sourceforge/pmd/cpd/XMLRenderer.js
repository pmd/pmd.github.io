var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":113,"id":4782,"methods":[{"el":36,"sc":2,"sl":34},{"el":44,"sc":2,"sl":42},{"el":54,"sc":2,"sl":46},{"el":70,"sc":2,"sl":56},{"el":83,"sc":5,"sl":72},{"el":95,"sc":5,"sl":85},{"el":105,"sc":5,"sl":97},{"el":112,"sc":5,"sl":107}],"name":"XMLRenderer","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_283":{"methods":[{"sl":34},{"sl":42},{"sl":46},{"sl":56},{"sl":72}],"name":"testWithNoDuplication","pass":true,"statements":[{"sl":35},{"sl":43},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":73},{"sl":74},{"sl":75},{"sl":77},{"sl":78},{"sl":82}]},"test_284":{"methods":[{"sl":34},{"sl":42},{"sl":46},{"sl":56},{"sl":72},{"sl":85},{"sl":97},{"sl":107}],"name":"testRenderWithMultipleMatch","pass":true,"statements":[{"sl":35},{"sl":43},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":73},{"sl":74},{"sl":75},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":94},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":108},{"sl":109},{"sl":110},{"sl":111}]},"test_301":{"methods":[{"sl":34},{"sl":42},{"sl":46},{"sl":56},{"sl":72},{"sl":85},{"sl":97},{"sl":107}],"name":"testWithOneDuplication","pass":true,"statements":[{"sl":35},{"sl":43},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":73},{"sl":74},{"sl":75},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":94},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":108},{"sl":109},{"sl":110},{"sl":111}]},"test_596":{"methods":[{"sl":34},{"sl":42},{"sl":46},{"sl":56},{"sl":72},{"sl":85},{"sl":97},{"sl":107}],"name":"testEncodingOption","pass":true,"statements":[{"sl":35},{"sl":43},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":73},{"sl":74},{"sl":75},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":94},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":108},{"sl":109},{"sl":110},{"sl":111}]},"test_765":{"methods":[{"sl":34},{"sl":42},{"sl":46},{"sl":56},{"sl":72},{"sl":85},{"sl":97},{"sl":107}],"name":"testRendererEncodedPath","pass":true,"statements":[{"sl":35},{"sl":43},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":73},{"sl":74},{"sl":75},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":94},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":108},{"sl":109},{"sl":110},{"sl":111}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [], [], [], [], [], [], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [], [], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [], [], [], [], [], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [], [], [], [], [], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [], [283, 301, 284, 596, 765], [283, 301, 284, 596, 765], [301, 284, 596, 765], [301, 284, 596, 765], [], [283, 301, 284, 596, 765], [], [], [301, 284, 596, 765], [301, 284, 596, 765], [301, 284, 596, 765], [301, 284, 596, 765], [301, 284, 596, 765], [301, 284, 596, 765], [301, 284, 596, 765], [301, 284, 596, 765], [], [301, 284, 596, 765], [], [], [301, 284, 596, 765], [301, 284, 596, 765], [301, 284, 596, 765], [301, 284, 596, 765], [301, 284, 596, 765], [301, 284, 596, 765], [], [301, 284, 596, 765], [], [], [301, 284, 596, 765], [301, 284, 596, 765], [301, 284, 596, 765], [301, 284, 596, 765], [301, 284, 596, 765], [], []]
