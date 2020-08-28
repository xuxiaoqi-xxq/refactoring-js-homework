const test = require('ava');
const { rating, voyageProfitFactor, voyageRisk, captainHistoryRisk} = require('../src/rank.js');

const history = [
    {
        zone: 'east-indies',
        profit: 5,
    }, {
        zone: 'west-indies',
        profit: 15,
    }, {
        zone: 'china',
        profit: -2,
    },
    {
        zone: 'west-africa',
        profit: 7,
    },
];

test('voyageRisk. voyage length less than 4 and zone in range', t => {
    const voyage = {
        zone: 'east-indies',
        length: 2,
    };
    let result = voyageRisk(voyage);
    t.is(result, 5);
});

test('voyageRisk. voyage length less than 4 and zone out range', t => {
    const voyage = {
        zone: 'west-indies',
        length: 2,
    };
    let result = voyageRisk(voyage);
    t.is(result, 1);
});

test('voyageRisk. voyage length greater than 4 less than 8 and zone in range', t => {
    const voyage = {
        zone: 'east-indies',
        length: 6,
    };
    let result = voyageRisk(voyage);
    t.is(result, 7);
});

test('voyageRisk. voyage length greater than 4 less than 8 and zone out range', t => {
    const voyage = {
        zone: 'west-indies1',
        length: 6,
    };
    let result = voyageRisk(voyage);
    t.is(result, 3);
});

test('voyageRisk. voyage length greater than 8 and zone in range', t => {
    const voyage = {
        zone: 'east-indies',
        length: 9,
    };
    let result = voyageRisk(voyage);
    t.is(result, 8);
});

test('voyageRisk. voyage length greater than 8 and zone out range', t => {
    const voyage = {
        zone: 'west-indies1',
        length: 9,
    };
    let result = voyageRisk(voyage);
    t.is(result, 4);
});

test('captainHistoryRisk. history length less than 5 and voyage zone in china and history has china', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];
    let result = captainHistoryRisk(voyage, history);
    t.is(result, 4);
});

test('captainHistoryRisk. history length less than 5 and voyage zone not china and history has china', t => {
    const voyage = {
        zone: 'east-indies',
        length: 10,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];
    let result = captainHistoryRisk(voyage, history);
    t.is(result, 6);
});

test('captainHistoryRisk. history length greater than 5 and voyage zone in china and history has china', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },

    ];
    let result = captainHistoryRisk(voyage, history);
    t.is(result, 0);
});

test('captainHistoryRisk. history length greater than 5 and voyage zone not china and history has china', t => {
    const voyage = {
        zone: 'east-indies',
        length: 10,
    };
    const history = [
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },

        ];
    let result = captainHistoryRisk(voyage, history);
    t.is(result, 2);
});

test('voyageProfitFactor. voyage zone in china and history has china and history lenght less than 10', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };
    const history = [
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
        ];
    let result = voyageProfitFactor(voyage, history);
    t.is(result, 6);
});

test('voyageProfitFactor. voyage zone in china and history has china and history lenght greater than 10 less than 12', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };
    const history = [
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            }, {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            }
    ];
    let result = voyageProfitFactor(voyage, history);
    t.is(result, 7);
});

test('voyageProfitFactor. voyage zone in china and history has china and history lenght greater than 12 less than 18', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };
    const history = [
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            }, {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },{
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            }
    ];
    let result = voyageProfitFactor(voyage, history);
    t.is(result, 7);
});

test('voyageProfitFactor. voyage zone in china and history has china and history lenght greater 18', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };
    const history = [
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            }, {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },{
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            }, {
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },{
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            }
    ];
    let result = voyageProfitFactor(voyage, history);
    t.is(result, 7);
});

test('voyageProfitFactor. voyage zone in china and history has no china', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };
    const history = [
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
        ];
    let result = voyageProfitFactor(voyage, history);
    t.is(result, 3);
});

test('voyageProfitFactor. voyage zone in east-indies and history lenght less than 8', t => {
    const voyage = {
        zone: 'east-indies',
        length: 10,
    };
    const history = [
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
        ];
    let result = voyageProfitFactor(voyage, history);
    t.is(result, 3);
});

test('voyageProfitFactor. voyage zone in east-indies and history lenght greater than 8 less than 14', t => {
    const voyage = {
        zone: 'east-indies',
        length: 10,
    };
    const history = [
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            }, {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            }
    ];
    let result = voyageProfitFactor(voyage, history);
    t.is(result, 4);
});

test('voyageProfitFactor. voyage zone in east-indies and history lenght greater than 14', t => {
    const voyage = {
        zone: 'east-indies',
        length: 10,
    };
    const history = [
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            }, {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },{
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            }
    ];
    let result = voyageProfitFactor(voyage, history);
    t.is(result, 4);
});

test('voyageProfitFactor. voyage zone in west-indies and history lenght less than 8', t => {
    const voyage = {
        zone: 'west-indies',
        length: 10,
    };
    const history = [
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
        ];
    let result = voyageProfitFactor(voyage, history);
    t.is(result, 2);
});

test('voyageProfitFactor. voyage zone in west-indies and history lenght greater than 8 less than 14', t => {
    const voyage = {
        zone: 'west-indies',
        length: 10,
    };
    const history = [
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            }, {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            }
    ];
    let result = voyageProfitFactor(voyage, history);
    t.is(result, 3);
});

test('voyageProfitFactor. voyage zone in west-indies and history lenght greater than 14', t => {
    const voyage = {
        zone: 'west-indies',
        length: 10,
    };
    const history = [
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            }, {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'east-indies',
                profit: 5,
            }, {
                zone: 'west-indies',
                profit: 15,
            }, {
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },{
                zone: 'china',
                profit: -2,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            },
            {
                zone: 'west-africa',
                profit: 7,
            }
    ];
    let result = voyageProfitFactor(voyage, history);
    t.is(result, 3);
});

test('rating. should return A', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };
    let result = rating(voyage, history);
    t.is(result, 'A');
});

test('rating. should return B', t => {
    const voyage = {
        zone: 'east-indies',
        length: 10,
    };
    let result = rating(voyage, history);
    t.is(result, 'B');
});



