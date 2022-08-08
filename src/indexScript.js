
const slider_count = 6;

randomizeAll();
setButtonBehaviour();

function getRand() {
    return Math.random()*21;
}

function setButtonBehaviour() {
    document.getElementById("randomize-button").onclick = function() {
        randomizeAll();
    }
    document.getElementById("copy-button").onclick = function() {
        var txt = document.getElementById("output-textbox").value;
        navigator.clipboard.writeText(txt)
    }
    document.getElementById("clear-button").onclick = function() {
        document.getElementById("output-textbox").value = "";
    }
    document.getElementById("generate-button").onclick = function() {
        generateWorm();
    }
}

function updateSliderText(sliderObj_value, sliderTextObj) {
    var v = sliderObj_value;
    var i = String(sliderTextObj.innerText).indexOf(":");
    var t = String(sliderTextObj.innerText).slice(0, i+1);
    sliderTextObj.innerText = t.concat(" ", v);
}

function randomizeAll() {
    var x = document.getElementsByClassName("settings-slider");
    var z = document.getElementsByClassName("settings-slider-value");
    for (var i = 0; i < slider_count; i++) {
        var n = getRand();
        x[i].value = n;
        updateSliderText(x[i].value, z[i]);
    }
    if (document.getElementById("settings-input").value == "")
        document.getElementById("settings-input").value = "Hello World!";
}

function generateWorm() {
    document.getElementById("output-textbox").value = "";
    var ret = "";
    var output_area = document.getElementById("output-textbox");
    var txt = String(document.getElementById("settings-input").value);
    var min = Number(document.getElementById("min-offset-slider").value);
    var count = Number(document.getElementById("max-offset-slider").value);
    var repeats = Number(document.getElementById("worm-repeats-slider").value);
    var wormcount = Number(document.getElementById("worm-count-slider").value);
    var gaplength = Number(document.getElementById("worm-gap-slider").value);
    var textgap = Number(document.getElementById("worm-text-gap-slider").value);
    txt = (" ").repeat(textgap)+txt+(" ").repeat(textgap);
    for (var xx = 0; xx < repeats; xx++) {
        for (var i = 0; i < count; i++) {
            for (var j = 0; j < wormcount; j++) {
                ret += ("=").repeat(i+min)+txt+("=").repeat(count-1-i+min);
                ret += (" ").repeat(gaplength);
            }
            ret += "\n";
        }
        for (var i = 0; i < count; i++) {
            for (var j = 0; j < wormcount; j++) {
                    ret += ("=").repeat(count-1-i+min)+txt+("=").repeat(i+min);
                    ret += (" ").repeat(gaplength);
            }
            ret += "\n";
        }
    }
    for (var i = 0; i < wormcount; i++) {
        ret += ("=").repeat(min)+txt+("=").repeat(count+min-1);
        ret += (" ").repeat(gaplength);
    }
    ret += "\n";
    document.getElementById("output-textbox").value = ret;
}

document.getElementById("min-offset-slider").oninput = function() {
    updateSliderText(
        document.getElementById("min-offset-slider").value,
        document.getElementById("min-offset-text")
    );
}

document.getElementById("max-offset-slider").oninput = function() {
    updateSliderText(
        document.getElementById("max-offset-slider").value,
        document.getElementById("max-offset-text")
    );
}

document.getElementById("worm-repeats-slider").oninput = function() {
    updateSliderText(
        document.getElementById("worm-repeats-slider").value,
        document.getElementById("worm-repeats-text")
    );
}

document.getElementById("worm-count-slider").oninput = function() {
    updateSliderText(
        document.getElementById("worm-count-slider").value,
        document.getElementById("worm-count-text")
    );
}

document.getElementById("worm-gap-slider").oninput = function() {
    updateSliderText(
        document.getElementById("worm-gap-slider").value,
        document.getElementById("worm-gap-text")
    );
}

document.getElementById("worm-text-gap-slider").oninput = function() {
    updateSliderText(
        document.getElementById("worm-text-gap-slider").value,
        document.getElementById("worm-text-gap-text")
    );
}