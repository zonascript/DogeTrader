
<a name="orders" class="linkMarker">&nbsp;</a>

<div class="row">

    <div class="large-7 columns">


        <h3>
            Sell Orders
        </h3>

        <div class="panel tablePanel orderBookTable">

            <?php view("inc/orderbook-header"); ?>

            <div id="sellOrderList">
            </div>

        </div>

    </div>

    <div class="large-7 columns">

        <h3>
            Buy Orders
        </h3>

        <div class="panel tablePanel orderBookTable" >

            <?php view("inc/orderbook-header"); ?>

            <div id="buyOrderList">
            </div>

        </div>

    </div>
    <div class="large-4 columns">

        <div class="light small pad-top right">
            <br>
            <span id="totalLogs">0</span>
            Total
        </div>

        <h5 class="light pad-top">
            Change Log
        </h5>

        <div class="panel tablePanel" id="changelog">

        </div>

    </div>
</div>