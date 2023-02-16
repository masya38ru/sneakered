$(function () {
    setInterval(slideshow, 4000);

    function slideshow() {
        let idName1;
        let idName2;
        let t;
        for (let i = 1; i < 3; i++) {
            if (i == 2) {
                idName1 = "#image" + i;
                t = Number(i - 1);
                idName2 = "#image" + t;
                $(idName1).fadeOut(2000);
                $(idName2).fadeIn(2000);
            } else if (!(i == 2)) {
                idName1 = "#image" + i;
                t = Number(i + 1);
                idName2 = "#image" + t;
                $(idName1).fadeOut(2000);
                $(idName2).fadeIn(2000);
            }

        }
    }
});
