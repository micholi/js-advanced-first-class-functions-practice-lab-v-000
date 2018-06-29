function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
  console.log(driver.name);
});
}

function logDriversByHometown(drivers, location) {
  logDriverNames(drivers.filter(function(driver) {
    return driver.hometown === location;
  }));
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a,b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function(a,b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce(function(total, driver) {
    return total += driver.revenue
  },0);
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
}
