let points = 0, pointPerClick = 1, pointPerSecond = 0, pps1 = 0, pps2 = 0, pps3 = 0, pps4 = 0, pps5 = 0, pps6 = 0, pps7 = 0, pps8 = 0, pps9 = 0, pps10 = 0, pps11 = 0, pps12 = 0, pps13 = 0, pps14 = 0, pps15 = 0, pps1c = 12, pps2c = 103, pps3c = 1150, pps4c = 1325, pps5c = 125000, pps6c = 13000000, pps7c = 18000000, pps8c = 325000000, pps9c = 5120000000, pps10c = 74500000000, pps11c = 999000000000, pps12c = 13999000000000, pps13c = 171000000000000, pps14c = 2200000000000000, pps15c = 2300000000000000, randy = Math.ceil(Math.random() * 120 + 60), time = 10000 * randy, tax = 0, bills = tax / 100, ppsUpgrades = 0;
$("#pps-upgrade1").text(pps1c);
$("#pps-upgrade2").text(pps2c);
$("#pps-upgrade3").text(pps3c);
$("#pps-upgrade4").text(pps4c);
$("#pps-upgrade5").text(pps5c);
$("#pps-upgrade6").text(pps6c);
$("#pps-upgrade7").text(pps7c);
$("#pps-upgrade8").text(pps8c);
$("#pps-upgrade9").text(pps9c);
$("#pps-upgrade10").text(pps10c);
$("#pps-upgrade11").text(pps11c);
$("#pps-upgrade12").text(pps12c);
$("#pps-upgrade13").text(pps13c);
$("#pps-upgrade14").text(pps14c);
$("#pps-upgrade15").text(pps15c);
//adding points and showing points
setInterval(function () {
    if (pointPerSecond >= 100000000) {
        tax = Math.ceil(points * 0.17);
        $("#tax-bar").css("width", "17%");
        bills = tax / 100;
        points = Math.ceil(points - tax);
        randy = Math.ceil(Math.random() * 120 + 60);
        time = 10000 * randy;
        console.log(points);
        console.log(`You have been taxed ${tax}`);
    } else if (pointPerSecond >= 10000000) {
        tax = Math.ceil(points * 0.12);
        $("#tax-bar").css("width", "12%");
        bills = tax / 100;
        points = Math.ceil(points - tax);
        randy = Math.ceil(Math.random() * 120 + 60);
        time = 10000 * randy;
        console.log(points);
        console.log(`You have been taxed ${tax}`);
    } else if (pointPerSecond >= 1000000) {
        tax = Math.ceil(points * 0.7);
        bills = tax / 100;
        points = Math.ceil(points - tax);
        randy = Math.ceil(Math.random() * 120 + 60);
        time = 10000 * randy;
        console.log(points);
        console.log(`You have been taxed ${tax}`);
    } else {
        tax = Math.ceil(points * 0.03);
        $("#tax-bar").css("width: 3%");
        bills = tax / 100;
        points = Math.ceil(points - tax);
        randy = Math.ceil(Math.random() * 120 + 60);
        time = 10000 * randy;
        console.log(points);
        console.log(`You have been taxed ${tax}`);
    }
}, time / 2);
setInterval(function () {
    bills = tax / 100;
    if (ppsUpgrades >= 1) {
        bills *= ppsUpgrades;
        points -= bills;
    } else {
        points -= bills;
    }
}, time / 20);
$("#clicked").on("click", function () {
    points += pointPerClick;
});
setInterval(function () {
    points += pointPerSecond;
}, 1000);
setInterval(function () {
    $("#points").text(`${Math.floor(points)}`)
}, 10);
//adding upgrades
$("#upgrade1").text("100");
$("#upgrade2").text("500");
$("#upgrade1").on("click", function () {
    if (points >= 100) {
        points -= 100;
        pointPerClick += 1;
        $("#upgrade1").attr("disabled", "disabled");
    }
});
$("#upgrade2").on("click", function () {
    if (points >= 500) {
        points -= 500;
        pointPerClick += 2;
        $("#upgrade2").attr("disabled", "disabled");
    }
});
$("#upgrade3").on("click", function () {
    if (points >= 1000) {
        points -= 1000;
        pointPerClick += 3;
        $("#upgrade3").attr("disabled", "disabled");
    }
});
$("#upgrade3").text("1000");
$("#upgrade4").on("click", function () {
    if (points >= 1500) {
        points -= 1500;
        pointPerClick += 4;
        $("#upgrade4").attr("disabled", "disabled");
    }
});
$("#upgrade4").text("1500");
$("#upgrade5").on("click", function () {
    if (points >= 2500) {
        points -= 2500;
        pointPerClick += 5;
        $("#upgrade5").attr("disabled", "disabled");
    }
});
$("#upgrade5").text("2500");
$("#upgrade6").on("click", function () {
    if (points >= 3500) {
        points -= 3500;
        pointPerClick += 6;
        $("#upgrade6").attr("disabled", "disabled");
    }
});
$("#upgrade6").text("3500");
$("#upgrade7").on("click", function () {
    if (points >= 4500) {
        points -= 4500;
        pointPerClick += 7;
        $("#upgrade7").attr("disabled", "disabled");
    }
});
$("#upgrade7").text("4500");
$("#upgrade8").on("click", function () {
    if (points >= 6000) {
        points -= 6000;
        pointPerClick += 8;
        $("#upgrade8").attr("disabled", "disabled");
    }
});
$("#upgrade8").text("6000");
$("#upgrade9").on("click", function () {
    if (points >= 7500) {
        points -= 7500;
        pointPerClick += 9;
        $("#upgrade9").attr("disabled", "disabled");
    }
});
$("#upgrade9").text("7500");
$("#upgrade10").on("click", function () {
    if (points >= 10000) {
        points -= 10000;
        pointPerClick += 10;
        $("#upgrade10").attr("disabled", "disabled");
    }
});
$("#upgrade10").text("10000");
$("#pps-upgrade1").on("click", function () {
    if (points >= pps1c) {
        points -= pps1c;
        pps1++;
        pps1c = pps1c * (pps1 * 1.05);
        pointPerSecond += 0.5 * pps1;
        ppsUpgrades++;
        $("#pps-upgrade1").text(Math.ceil(pps1c));
    }
});
$("#pps-upgrade2").on("click", function () {
    if (points >= pps2c) {
        points -= pps2c;
        pps2++;
        pps2c = pps2c * (pps2 * 1.05);
        pointPerSecond += 1;
        ppsUpgrades++;
        $("#pps-upgrade2").text(Math.ceil(pps2c))
    }
});
$("#pps-upgrade3").on("click", function () {
    if (points >= pps3c) {
        points -= pps3c;
        pps3++;
        pps3c = pps3c * (pps3 * 1.05);
        pointPerSecond += 10;
        ppsUpgrades++;
        $("#pps-upgrade3").text(Math.ceil(pps3c))
    }
});
$("#pps-upgrade4").on("click", function () {
    if (points >= pps4c) {
        points -= pps4c;
        pps4++;
        pps4c = pps4c * (pps4 * 1.05);
        pointPerSecond += 45;
        ppsUpgrades++;
        $("#pps-upgrade4").text(Math.ceil(pps4c))
    }
});
$("#pps-upgrade5").on("click", function () {
    if (points >= pps5c) {
        points -= pps5c;
        pps5++;
        pps5c = pps5c * (pps5 * 1.05);
        pointPerSecond += 255;
        ppsUpgrades++;
        $("#pps-upgrade5").text(Mah.ceil(pps5c))
    }
});
$("#pps-upgrade6").on("click", function () {
    if (points >= pps6c) {
        points -= pps6c;
        pps6++;
        pps6c = pps6c * (pps6 * 1.05);
        pointPerSecond += 1300;
        ppsUpgrades++;
        $("#pps-upgrade6").text(Mah.ceil(pps6c))
    }
});
$("#pps-upgrade7").on("click", function () {
    if (points >= pps7c) {
        points -= pps7c;
        pps7++;
        pps7c = pps7c * (pps7 * 1.05);
        pointPerSecond += 7800;
        ppsUpgrades++;
        $("#pps-upgrade7").text(Mah.ceil(pps7c))
    }
});
$("#pps-upgrade8").on("click", function () {
    if (points >= pps8c) {
        points -= pps8c;
        pps8++;
        pps8c = pps8c * (pps8 * 1.05);
        pointPerSecond += 43500;
        ppsUpgrades++;
        $("#pps-upgrade8").text(Mah.ceil(pps8c))
    }
});
$("#pps-upgrade9").on("click", function () {
    if (points >= pps9c) {
        points -= pps9c;
        pps9++;
        pps9c = pps9c * (pps9 * 1.05);
        pointPerSecond += 260500 * pps9 / 20;
        ppsUpgrades++;
        $("#pps-upgrade9").text(Mah.ceil(pps9c))
    }
});
$("#pps-upgrade10").on("click", function () {
    if (points >= pps10c) {
        points -= pps10c;
        pps10++;
        pps10c = pps10c * (pps10 * 1.05 / 2);
        pointPerSecond += 1650000 * pps10 / 20;
        ppsUpgrades++;
        $("#pps-upgrade10").text(Mah.ceil(pps10c))
    }
});
$("#pps-upgrade11").on("click", function () {
    if (points >= pps11c) {
        points -= pps11c;
        pps11++;
        pps11c = pps11c * (pps11 * 1.05);
        pointPerSecond += 9500000 * pps11 / 20;
        ppsUpgrades++;
        $("#pps-upgrade11").text(Mah.ceil(pps11c))
    }
});
$("#pps-upgrade12").on("click", function () {
    if (points >= pps12c) {
        points -= pps12c;
        pps12++;
        pps12c = pps12c * (pps12 * 1.05);
        pointPerSecond += 62000000 * pps12 / 20;
        ppsUpgrades++;
        $("#pps-upgrade12").text(Mah.ceil(pps12c))
    }
});
$("#pps-upgrade13").on("click", function () {
    if (points >= pps13c) {
        points -= pps13c;
        pps13++;
        pps13c = pps13c * (pps13 * 1.05);
        pointPerSecond += 427000000 * pps13 / 20;
        ppsUpgrades++;
        $("#pps-upgrade13").text(Mah.ceil(pps13c))
    }
});
$("#pps-upgrade14").on("click", function () {
    if (points >= pps14c) {
        points -= pps14c;
        pps14++;
        pps14c = pps14c * (pps14 * 1.05);
        pointPerSecond += 2850000000 * pps14 / 20;
        ppsUpgrades++;
        $("#pps-upgrade14").text(Mah.ceil(pps14c))
    }
});
$("#pps-upgrade15").on("click", function () {
    if (points >= pps15c) {
        points -= pps15c;
        pps15++;
        pps15c = pps15c * (pps15 * 1.05);
        pointPerSecond += 20000000000 * pps15 / 20;
        ppsUpgrades++;
        $("#pps-upgrade15").text(Mah.ceil(pps15c))
    }
});
$("#pps-upgrades").hide(1);
$("#ppc-upgrades").hide(1);
$("#clicker").show(1);
$(".home").on("click", function () {
    $("#pps-upgrades").hide(1);
    $("#ppc-upgrades").hide(1);
    $("#clicker").show(1);
    $("#clicked").show(1);
});
$(".ppsu").on("click", function () {
    $("#pps-upgrades").show(1);
    $("#ppc-upgrades").hide(1);
    $("#clicker").hide(1);
    $("#clicked").hide(1);
});
$(".ppcu").on("click", function () {
    $("#pps-upgrades").hide(1);
    $("#ppc-upgrades").show(1);
    $("#clicker").hide(1);
    $("#clicked").hide(1);
});
