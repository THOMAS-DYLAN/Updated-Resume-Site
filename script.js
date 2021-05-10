$("#roulette-tab").hide(1);
$("#landing-tab").hide(1);
$("#gallery").hide(1)
$(".landing-btn").on("click", function () {
    $("#landing-tab").show(1); 
    $("#resume-tab").hide(1);
    $("#roulette-tab").hide(1);
    $("#gallery").hide(1);
})
$(".gallery-btn").on("click", function () {
    $("#resume-tab").hide(1);
    $("#landing-tab").hide(1);
    $("#roulette-tab").hide(1);
    $("#gallery").show(1);
})
$(".roulette-btn").on("click", function () {
    $("#resume-tab").hide(1);
    $("#landing-tab").hide(1);
    $("#roulette-tab").show(1);
    $("#gallery").hide(1);
})
//roulette\\
let tokensPlaced = 0;
let tokens = 10000;
setInterval(function () {
    document.getElementById("tokens").textContent = (`${tokens}`)
}, 10)
let num1 = 0,
    num2 = 0,
    num3 = 0,
    num4 = 0,
    num5 = 0,
    num6 = 0,
    num7 = 0,
    num8 = 0,
    num9 = 0,
    num10 = 0,
    num11 = 0,
    num12 = 0,
    num13 = 0,
    num14 = 0,
    num15 = 0,
    num16 = 0,
    num17 = 0,
    num18 = 0,
    num19 = 0,
    num20 = 0,
    num21 = 0,
    num22 = 0,
    num23 = 0,
    num24 = 0,
    num25 = 0,
    num26 = 0,
    num27 = 0,
    num28 = 0,
    num29 = 0,
    num30 = 0,
    num31 = 0,
    num32 = 0,
    num33 = 0,
    num34 = 0,
    num35 = 0,
    num36 = 0,
    red = 0,
    black = 0,
    odd = 0,
    even = 0,
    toThirtySix = 0,
    toThirtySix2 = 0,
    toEighteen = 0,
    toTwelve = 0,
    toTwentyFour = 0;
let randy = Math.ceil(Math.random() * 36);
console.log(randy)
$("#no1").on("click", function () { tokensPlaced = 1 });
$("#no5").on("click", function () { tokensPlaced = 5 });
$("#no10").on("click", function () { tokensPlaced = 10 });
$("#no25").on("click", function () { tokensPlaced = 25 });
$("#no50").on("click", function () { tokensPlaced = 50 });
$("#no100").on("click", function () { tokensPlaced = 100 });
$("#no500").on("click", function () { tokensPlaced = 500 });
$("#no1000").on("click", function () { tokensPlaced = 1000 });
$("#1").on("click", function () { num1 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#2").on("click", function () { num2 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#3").on("click", function () { num3 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#4").on("click", function () { num4 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#5").on("click", function () { num5 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#6").on("click", function () { num6 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#7").on("click", function () { num7 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#8").on("click", function () { num8 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#9").on("click", function () { num9 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#10").on("click", function () { num10 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#11").on("click", function () { num11 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#12").on("click", function () { num12 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#13").on("click", function () { num13 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#14").on("click", function () { num14 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#15").on("click", function () { num15 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#16").on("click", function () { num16 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#17").on("click", function () { num17 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#18").on("click", function () { num18 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#19").on("click", function () { num19 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#20").on("click", function () { num20 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#21").on("click", function () { num21 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#22").on("click", function () { num22 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#23").on("click", function () { num23 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#26").on("click", function () { num26 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#24").on("click", function () { num24 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#25").on("click", function () { num25 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#27").on("click", function () { num27 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#28").on("click", function () { num28 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#29").on("click", function () { num29 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#20").on("click", function () { num30 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#31").on("click", function () { num31 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#32").on("click", function () { num32 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#33").on("click", function () { num33 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#34").on("click", function () { num34 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#35").on("click", function () { num35 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#36").on("click", function () { num36 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#odd").on("click", function () { odd += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#even").on("click", function () { even += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#chooseRed").on("click", function () { red += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#chooseBlack").on("click", function () { black += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#chooseFirstDiv").on("click", function () { toTwelve += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#chooseSecondDiv").on("click", function () { toTwentyFour += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#chooseThirdDiv").on("click", function () { toThirtySix += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#chooseOneToEighteen").on("click", function () { toEighteen += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#chooseNineteenToThirtySix").on("click", function () { toThirtySix2 += 1 * tokensPlaced, tokens -= tokensPlaced });
$("#sub").on("click", function () {
    if (randy == 1 && num1 >= 1) {
        tokens += num1 * 30;
    }
    if (randy == 2 && num2 >= 1) {
        tokens += num2 * 30;
    }
    if (randy == 3 && num3 >= 1) {
        tokens += num3 * 30;
    }
    if (randy == 4 && num4 >= 1) {
        tokens += num4 * 30;
    }
    if (randy == 5 && num5 >= 1) {
        tokens += num5 * 30;
    }
    if (randy == 6 && num6 >= 1) {
        tokens += num6 * 30;
    }
    if (randy == 7 && num7 >= 1) {
        tokens += num7 * 30;
    }
    if (randy == 8 && num8 >= 1) {
        tokens += num8 * 30;
    }
    if (randy == 9 && num9 >= 1) {
        tokens += num9 * 30;
    }
    if (randy == 10 && num10 >= 1) {
        tokens += num10 * 30;
    }
    if (randy == 11 && num11 >= 1) {
        tokens += num11 * 30;
    }
    if (randy == 12 && num12 >= 1) {
        tokens += num12 * 30;
    }
    if (randy == 13 && num13 >= 1) {
        tokens += num13 * 30;
    }
    if (randy == 14 && num14 >= 1) {
        tokens += num14 * 30;
    }
    if (randy == 15 && num15 >= 1) {
        tokens += num15 * 30;
    }
    if (randy == 16 && num16 >= 1) {
        tokens += num16 * 30;
    }
    if (randy == 17 && num17 >= 1) {
        tokens += num17 * 30;
    }
    if (randy == 18 && num18 >= 1) {
        tokens += num18 * 30;
    }
    if (randy == 19 && num19 >= 1) {
        tokens += num19 * 30;
    }
    if (randy == 20 && num20 >= 1) {
        tokens += num20 * 30;
    }
    if (randy == 21 && num21 >= 1) {
        tokens += num21 * 30;
    }
    if (randy == 22 && num22 >= 1) {
        tokens += num22 * 30;
    }
    if (randy == 23 && num23 >= 1) {
        tokens += num23 * 30;
    }
    if (randy == 24 && num24 >= 1) {
        tokens += num24 * 30;
    }
    if (randy == 25 && num25 >= 1) {
        tokens += num25 * 30;
    }
    if (randy == 26 && num26 >= 1) {
        tokens += num26 * 30;
    }
    if (randy == 27 && num27 >= 1) {
        tokens += num27 * 30;
    }
    if (randy == 28 && num28 >= 1) {
        tokens += num28 * 30;
    }
    if (randy == 29 && num29 >= 1) {
        tokens += num29 * 30;
    }
    if (randy == 30 && num30 >= 1) {
        tokens += num30 * 30;
    }
    if (randy == 31 && num31 >= 1) {
        tokens += num31 * 30;
    }
    if (randy == 32 && num32 >= 1) {
        tokens += num32 * 30;
    }
    if (randy == 33 && num33 >= 1) {
        tokens += num33 * 30;
    }
    if (randy == 34 && num34 >= 1) {
        tokens += num34 * 30;
    }
    if (randy == 35 && num35 >= 1) {
        tokens += num35 * 30;
    }
    if (randy == 36 && num36 >= 1) {
        tokens += num36 * 30;
    }
    if (randy % 2 === 0 && even >= 1) {
        tokens += even * 2;
    }
    if (randy % 2 != 0 && odd >= 1) {
        tokens += odd * 2;
    }
    if (randy % 2 == 0 && red >= 1) {
        tokens += red * 2;
    }
    if (randy % 2 != 0 && black >= 1) {
        tokens += black * 2;
    }
    if (randy <= 12 && toTwelve >= 1) {
        tokens += toTwelve * 3;
    }
    if (randy >= 12 && randy <= 24 && toTwentyFour >= 1) {
        tokens += toTwentyFour * 3;
    }
    if (randy >= 24 && randy <= 36 && toThirtySix >= 1) {
        tokens += toThirtySix * 3;
    }
    if (randy <= 18 && toEighteen >= 1) {
        tokens += toEighteen * 2;
    }
    if (randy <= 36 && randy >= 18 && toThirtySix2 >= 1) {
        tokens += toThirtySix2 * 2;
    }
    randy = Math.ceil(Math.random() * 36);
    console.log(randy)
})
