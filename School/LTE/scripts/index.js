// Pages Init

let intro = `        <!-- Hero Section -->
<section id="hero">
    <!-- Hero Title -->
    <div id="herotitlesec">
        <h1 id="herotitle">Une rentrée scolaire <span id="success">réussie</span> avec Lycée Technique Errazi!</h1>
    </div>
    <div id="gradient"></div>
</section>
<!-- Cards -->
<section id="features">
    <div id="card1" class="card featcard">
        <div class="cardcontent">
            <div class="imgtitle">
                <div class="cardimg"></div>
                <h3 class="cardtitle">Feature</h3>
            </div>
            <p class="carddesc">Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quidem aliquam unde cumque doloremque
                vitae itaque rem totam delectus esse odit dicta hic,
                rerum ratione non</p>
        </div>
        <div id="card2" class="card featcard">

            <div class="cardcontent">
                <div class="imgtitle">
                    <div class="cardimg"></div>
                    <h3 class="cardtitle">Feature</h3>
                </div>
                <p class="carddesc">Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Quidem aliquam unde cumque doloremque
                    vitae itaque rem totam delectus esse odit dicta hic,
                    rerum ratione non</p>
            </div>
            <div id="card3" class="card featcard">

                <div class="cardcontent">
                    <div class="imgtitle">
                        <div class="cardimg"></div>
                        <h3 class="cardtitle">Feature</h3>
                    </div>
                    <p class="carddesc">Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Quidem aliquam unde cumque doloremque
                        vitae itaque rem totam delectus esse odit dicta hic,
                        rerum ratione non</p>
                </div>
            </div>
        </div>
    </div>
</section>
<div id="separator"></div>
<!-- Intro Section -->
<section id="intro">
    <div id="introcontent">
        <h1 id="introtitle">Who are we?</h1>
        <p id="introdesc">LTE is a technological abjhd Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum 
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam eget arcu a arcu euismod convallis. Pellentesque eget
            ullamcorper arcu. Proin non lacus et purus tempus sodales. Nunc dui nulla, posuere.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget arcu a arcu euismod convallis.
            Pellentesque eget ullamcorper arcu. Proin non lacus et purus tempus sodales.
            Nunc dui nulla, posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam eget arcu a arcu euismod convallis. Pellentesque eget ullamcorper arcu.
            Proin non lacus et purus tempus sodales.</p>
    </div>
</section>
<!-- Second Card Section -->
<section id="campus">
    <div id="campcard" class="card">
        <div id="schoolimg" class="card">

        </div>
        <div id="campcardcontent" class="cardcontent">
            <h3 id="camptitle" class="cardtitle">Our Campus</h3>
            <p id="campdesc" class="carddesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                  voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                   fugiat iusto fuga</p>
        </div>
    </div>
</section>`

let campus = `<!-- Hero Section -->
<section id="hero">
    <div class="coolangle" id="angleherotop"></div>
    <h1 id="herotitle">Campus</h1>
    <div class="coolangle" id="angleherobot"></div>
</section>
<!-- Info Section -->
<section id="info">
    <div id="infocard" class="card">
        <div id="libraryimg" class="card">

        </div>
        <div id="infocardcontent" class="cardcontent">
            <h3 id="infotitle" class="cardtitle">Our Campus</h3>
            <p id="infodesc" class="carddesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum 
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.</p>
        </div>
    </div>
</section>`

// Logic n stuff

let menuon = false;
let cantrans = false;

let btn = document.getElementById("switch");
let body = document.querySelector("body");
let menu = document.getElementById("navmen");

menu.addEventListener("transitionend", (e) => {
    if (cantrans) {
        menu.style.height = "0";
        menu.style.width = "0";
        menu.style.visibility = "hidden";
        cantrans = false;
    }
});

function loadMenu() {
    if (!menuon) {
        menu.style.visibility = "visible";
        menu.style.height = "100%";
        menu.style.width = "100%";
        menu.style.opacity = 1;
        body.style.overflow = "hidden";
        menuon = true;
    } else {
        menu.style.opacity = 0;
        body.style.overflowX = "hidden";
        body.style.overflowY = "visible";
        cantrans = true;
        menuon = false;
    }
}

function changeCSS(page) {
    switch (page) {
        case "Intro":
            document.getElementById("currentstyle").href = './styles/intro.css'
            break;
        case "Campus":
            document.getElementById("currentstyle").href = './styles/campus.css'
            break;
        case "Program":
            document.getElementById("currentstyle").href = './styles/program.css'
            break;
        case "Contact":
            document.getElementById("currentstyle").href = './styles/contact.css'
            break;
        default:
            break;
    }
}

function loadPage(page) {
    let main = document.querySelector("main");
    main.style.opacity = 0;
    main.addEventListener("transitionend", (e) => {
        main.style.opacity = 1;
        switch (page) {
            case "Intro":
                main.innerHTML = intro;
                changeCSS(page);
                break;
            case "Campus":
                main.innerHTML = campus;
                changeCSS(page);
                break;
            default:
                main.innerHTML = "<h1>Works!1!11!!1</h1>";
                break;
        }
    });
}

