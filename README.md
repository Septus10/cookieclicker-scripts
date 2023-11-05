# CookieClicker scripts
Scripts you can input into the console to aid you with playing cookieclicker. (Game will essentially play itself!)

## Functions and variables

### Clicking the cookie
**cookieClickInterval** the interval handle to the cookie click interval.
**cookieCLickIntervalTime** the timeout amount in ms for the cookie click interval.
**cookiesPerClick** the amount of cookies gained per click, when this value is set to 0 the game will use its own calculated amount per click.|

*fn* **ClickCookie()** clicks the cookie once, why not just click it yourself?
*fn* **StartClickingCookie()** starts the cookie click interval.
*fn* **StopClickingCookie()** stops the cookie click interval.

### Shimmers (golden cookies and other clickables that temporarily appear on your screen from time to time)
I should probably rename this to shimmer clicker... oh well.

**shimmerWatcher** the interval handle to the shimmer watcher.

*fn* **SpawnShimmer()** spawns a golden cookie, other types aren't supported yet.
*fn* **StartShimmerWatcher()** starts the shimmer watcher, which automatically clicks shimmers after they spawn.
*fn* **StopShimmerWatcher()** stops the shimmer watcher.

### Buildings
**buildingBuyer** the interval handle to the building buyer.
**buildingBuyerInterval** the interval duration in ms between building buyer ticks.
**buildingBuyerNum** how many buildings should be bought during each tick.

*fn* **GetBestBuilding()** calculates and returns the best building object to buy. It checks which building has the highest yield in cps relative to its price.
*fn* **StartBuildingBuyer()** starts the building buyer.
*fn* **StopBuildingBuyer()** stops the building buyer.

### Upgrades
**upgradeBuyer** the interval handle to the upgrade buyer.
**upgradeBuyerInterval** the interval duration in ms between upgrade buyer ticks.

*fn* **StartUpgradeBuyer()** starts the upgrade buyer.
*fn* **StopUpgradeBuyer()** stops the upgrade buyer.
