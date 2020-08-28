const test = require('ava');
const {deliveryDate} = require('../src/delivery.js');

test('deliveryDate. isRush true and deliveryState contains MA, CT', t => {
    const isRush = true;
    const anOrder = {
        deliveryState: ['MA', 'CT'],
        placedOn: {
            plusDays: function(deliveryTime) {
                return deliveryTime;
            }
        }
    };
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 4);
});

test('deliveryDate. isRush true and deliveryState contains NY, NH', t => {
    const isRush = true;
    const anOrder = {
        deliveryState: ['NY', 'NH'],
        placedOn: {
            plusDays: function(deliveryTime) {
                return deliveryTime;
            }
        }
    };
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 4);
});

test('deliveryDate. isRush true and deliveryState contains ME', t => {
    const isRush = false;
    const anOrder = {
        deliveryState: ['ME'],
        placedOn: {
            plusDays: function(deliveryTime) {
                return deliveryTime;
            }
        }
    };
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 6);
});


test('deliveryDate. isRush false and deliveryState contains MA, CT, NY', t => {
    const isRush = false;
    const anOrder = {
        deliveryState: ['MA', 'CT', 'NY'],
        placedOn: {
            plusDays: function(deliveryTime) {
                return deliveryTime;
            }
        }
    };
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 6);
});

test('deliveryDate. isRush false and deliveryState contains ME, NH', t => {
    const isRush = true;
    const anOrder = {
        deliveryState: ['ME', 'NH'],
        placedOn: {
            plusDays: function(deliveryTime) {
                return deliveryTime;
            }
        }
    };
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 4);
});

test('deliveryDate. isRush false and deliveryState contains DD', t => {
    const isRush = false;
    const anOrder = {
        deliveryState: ['DD'],
        placedOn: {
            plusDays: function(deliveryTime) {
                return deliveryTime;
            }
        }
    };
    let result = deliveryDate(anOrder, isRush);
    t.is(result, 6);
});
