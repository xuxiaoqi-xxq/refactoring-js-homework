function calculateDeliveryTimeWhenRushFalse(deliveryState) {
  let deliveryTime;
  if ([
    'MA',
    'CT',
    'NY',
  ].includes(deliveryState)) {
    deliveryTime = 2;
  } else if ([
    'ME',
    'NH',
  ].includes(deliveryState)) {
    deliveryTime = 3;
  } else {
    deliveryTime = 4;
  }
  return deliveryTime;
}

function calculateDeliveryTimeWhenRushTrue(deliveryState) {
  let deliveryTime;
  if ([
    'MA',
    'CT',
  ].includes(deliveryState)) {
    deliveryTime = 1;
  } else if ([
    'NY',
    'NH',
  ].includes(deliveryState)) {
    deliveryTime = 2;
  } else {
    deliveryTime = 3;
  }
  return deliveryTime;
}

function calculateDeliveryTime(deliveryState, isRush) {
  return isRush ? calculateDeliveryTimeWhenRushTrue(deliveryState): calculateDeliveryTimeWhenRushFalse(deliveryState);
}

function deliveryDate (anOrder, isRush) {
  let deliveryTime = calculateDeliveryTime(anOrder.deliveryState, isRush);
  if (isRush) {
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }
  else {
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

module.exports = {
  deliveryDate
}
