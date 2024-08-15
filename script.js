document.addEventListener("DOMContentLoaded", function() {
    // Scene 1 Text
    new Typed('#scene1-text', {
        strings: ["Our journey began under a starry sky...", "And the stars smiled upon us."],
        typeSpeed: 50,
        backSpeed: 30,
        startDelay: 1000,
        onComplete: function() {
            setTimeout(() => { document.getElementById("scene1").style.opacity = "0"; }, 5000);
        }
    });

    // Scene 2 Text
    setTimeout(function() {
        new Typed('#scene2-text', {
            strings: ["Like flowers, our love began to bloom...", "Beautiful and strong."],
            typeSpeed: 50,
            backSpeed: 30,
            startDelay: 500,
            onComplete: function() {
                setTimeout(() => { document.getElementById("scene2").style.opacity = "0"; }, 5000);
            }
        });
    }, 10000);

    // Scene 3 Text
    setTimeout(function() {
        new Typed('#scene3-text', {
            strings: ["Our love brightens every day, like a rainbow after the rain...", "Always bringing joy."],
            typeSpeed: 50,
            backSpeed: 30,
            startDelay: 500,
            onComplete: function() {
                setTimeout(() => { document.getElementById("scene3").style.opacity = "0"; }, 5000);
            }
        });
    }, 20000);

    // Final Scene Text
    setTimeout(function() {
        new Typed('#final-text', {
            strings: ["Maanya, you are my everything.", "I love you more than words can express."],
            typeSpeed: 50,
            backSpeed: 30,
            startDelay: 500,
            onComplete: function() {
                // Fireflies animation continues
            }
        });
    }, 30000);
});
