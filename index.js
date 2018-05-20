<html>
<!--
    Home
    Gallery
    Info
    Performances
    Social Media
    Performers
    About
    Retract
-->
<head>
    <title>KUD-Sedef</title>
    <link rel="icon" type="image/png" href="images/BosnianCOA.png">
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css">
    <meta charset="UTF-8">
    <meta name="description" content="KUD-Sedef, a traditional Bosnian folk dance group in LIC, NYC.">
    <meta name="keywords" content="Folklor, Bosnia, KUD, sedef, KUDSedef, KUD-Sedef, kolo, sota, halaturko">
    <meta name="author" content="Amar Maksumic">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<!--DESKTOP BODY-->
<div class="ui" width="100%" id="container">
    <ul class="topBar">
        <li><a href="#home" onclick="closeModal()"><img
                src="images/KUD-Sedef 25 Years.png"
                height="27px"></a></li>
        <li><a href="#gallery" onclick="openModal();currentSlide(1)">Gallery</a></li>
        <li><a href="#info" onclick="closeModal()">Info</a></li>
        <li>
            <div class="dropdown">
                <a onclick="dropdownPC()" class="dropbtn" href="#performances">Performances</a>
                <div id="dropdownPC" class="dropdown-content">
                    <a href="25Years.html" target="_self">25th Year Anniversary</a>
                </div>
            </div>
        </li>
        <li><a href="#performers" onclick="closeModal()">Performers</a></li>
        <li>
            <div class="dropdown">
                <a onclick="dropdownSM()" class="dropbtn">Social Media</a>
                <div id="dropdownSM" class="dropdown-content">
                    <a href="https://www.facebook.com/KudSedefLTD.NYC/" target="_blank"><i
                            class="large facebook square icon">&nbsp</i>Facebook</a>
                    <a href="https://www.instagram.com/kud.sedef.ltd/" target="_blank"><i
                            class="large instagram icon"></i>&nbspInstagram</a>
                    <a href="mailto:kudsedef@gmail.com"><i class="large mail outline icon"></i>&nbspG-Mail</a>
                </div>
            </div>
        </li>
        <li style="float:right" onclick="closeModal()"><a href="#about">About</a></li>
    </ul>

    <div id="home">
        <div class="spacer"></div>
        <img src="images/KUD-Sedef 25 Years b.png" height="110px">
        <img src="images/Cover.jpg" class="ui centered rounded image"
             width="95%">
    </div>

    <div id="gallery">
        <div id="myModal" class="modal">
            <div class="modal-content">
                <div>
                    <div class="mySlides">
                        <div class="numbertext">1 / 10</div>
                        <img src="images/ChianFederation.jpg" style="width:100%">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">2 / 10</div>
                        <img src="images/Cover.jpg" style="width:100%">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">3 / 10</div>
                        <img src="images/Poconos2.jpg" style="width:100%">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">4 / 10</div>
                        <img src="images/Poconos.jpg" style="width:100%">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">5 / 10</div>
                        <img src="images/Old5.jpg" style="width:100%">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">6 / 10</div>
                        <img src="images/Old4.jpg" style="width:100%">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">7 / 10</div>
                        <img src="images/Old3.jpg" style="width:100%">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">8 / 10</div>
                        <img src="images/Old2.jpg" style="width:100%">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">9 / 10</div>
                        <img src="images/Old.jpg" style="width:100%">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">10 / 10</div>
                        <img src="images/Old6.jpg" style="width:100%">
                    </div>

                    <!-- Next/previous controls -->
                    <a class="prev" onclick="plusSlides(-1)" style="float: left">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)" style="float: right">&#10095;</a>
                </div>

                <!-- Caption text -->
                <div class="caption-container">
                    <p id="caption"></p>
                </div>

                <!-- Thumbnail image controls -->
                <div>
                    <div style="display: inline-block; background-color: black">
                        <div class="spacer"></div>
                        <div class="column" width="100%">
                            <img class="demo" src="images/ChianFederation.jpg"
                                 onclick="currentSlide(1)" alt="Poconos" width="95%">
                        </div>

                        <div class="column" width="100%">
                            <img class="demo" src="images/Cover.jpg"
                                 onclick="currentSlide(2)" alt="Poconos" width="95%">
                        </div>

                        <div class="column" width="100%">
                            <img class="demo" src="images/Poconos2.jpg"
                                 onclick="currentSlide(3)" alt="Poconos" width="95%">
                        </div>

                        <div class="column" width="100%">
                            <img class="demo" src="images/Poconos.jpg"
                                 onclick="currentSlide(4)" alt="Poconos" width="95%">
                        </div>
                    </div>
                    <div style="display: inline-block; background-color: black">
                        <div class="spacer"></div>
                        <div class="column" width="100%">
                            <img class="demo" src="images/Old5.jpg"
                                 onclick="currentSlide(5)" alt="" width="95%">
                        </div>

                        <div class="column" width="100%">
                            <img class="demo" src="images/Old4.jpg"
                                 onclick="currentSlide(6)" alt="" width="95%">
                        </div>

                        <div class="column" width="100%">
                            <img class="demo" src="images/Old3.jpg"
                                 onclick="currentSlide(7)" alt="" width="95%">
                        </div>

                        <div class="column" width="100%">
                            <img class="demo" src="images/Old2.jpg"
                                 onclick="currentSlide(8)" alt="" width="95%">
                        </div>
                    </div>
                    <div style="display: inline-block; background-color: black">
                        <div class="spacer"></div>
                        <div class="column" width="100%">
                            <img class="demo" src="images/Old.jpg"
                                 onclick="currentSlide(9)" alt="" width="95%">
                        </div>

                        <div class="column" width="100%">
                            <img class="demo" src="images/Old6.jpg"
                                 onclick="currentSlide(10)" alt="" width="95%">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="info">
        <div class="spacer"></div>
        <h2>Info</h2>
        <p>
            We are a Traditional Bosniak Folk dance group in Queens, New York. We do choregoraphies as well as other
            folk
            dances called "Kolo," Šota dance from Bosnia & Herzegovina, Sandžak, Plav
            & Gusinje, and Albania. We have performed multiple choreographies ranging from Halaturka to
            Bosanske Igre across the United States, and some areas in Canada. We were originally organized in 1999, with
            20
            performs joining in the first year. Many people, hundreds, have passed through the doors of KUD Sedef and
            experienced folk dances from all around Bosnia, Sandzak, Gusinje, and other surrounding areas.
        </p>
    </div>

    <div id="performances">
        <div class="spacer"></div>
        <h2>Performances</h2>
        <h3>(May 13th, 2018 and on)</h3>
        <p>
            25th Year Anniversary Performance
            <br>
            May 13th, 2018
            <br>
            Location: Cretans Association Omonoia, 32-33 31st Street Astoria
        </p>
    </div>

    <div id="performers">
        <div class="spacer"></div>
        <h2>Performers</h2>
        <h3>A & B Groups</h3>
        <div class="ui cards">
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Deni L</div>
                    <div class="meta">
                        <span class="date">Lead Choreographer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A, B, & C groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Emma B</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Nerma B</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Dalila D</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Demir D</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Lejla D</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Amina D</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Eldina D</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Emma D</div>
                    <div class="meta">
                        <span class="date">Assistant Choreographer & Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A, B, & C groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Kimeta D</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Omar D</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Salem D</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Jasmina H</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Jasmina K</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Sabrina L</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Amar M</div>
                    <div class="meta">
                        <span class="date">President, Web Developer, & Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Semir M</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Alem M</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Amina M</div>
                    <div class="meta">
                        <span class="date">Choreographer, Social Media Manager, & Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A, B, & C groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Dzenana M</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Amila R</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Elma %</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Aldin %</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Alan %</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Amina %</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    A & B groups
                </div>
            </div>
        </div>
        <h3>C Group</h3>
        <div class="ui cards">
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Omar M</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    C group
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Damian B</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    C group
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Dian B</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    C group
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Ajla B</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    C group
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Zejd B</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    C group
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Zejneb B</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    C group
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Berin D</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    C group
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Belma H</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    C group
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Velid H</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    C group
                </div>
            </div>
            <div class="ui centered card">
                <div class="content">
                    <div style="font-size: 20px; padding-bottom: 5px;">Ajla M</div>
                    <div class="meta">
                        <span class="date">Performer</span>
                    </div>
                    <div class="description">
                        Bio
                    </div>
                </div>
                <div class="extra content">
                    C group
                </div>
            </div>
        </div>
    </div>

    <div id="about">
        <div class="spacer"></div>
        <div class="footer">
            <h2>About</h2>
            <div class="ui horizontal segments" style="background-color: #111;">
                <div class="ui segment">
                    <h3>Hours</h3>
                    <p>
                        Saturdays:</br>
                        A group: 6:00 PM to 7:30 PM</br>
                        B & C groups: 4:30 PM to 6:00 PM
                    </p>
                </div>
                <div class="ui segment">
                    <h3>Studio</h3>
                    <p>
                        4402 23rd 23rd St #216</br>
                        Long Island City, New York, NY 11101</br>
                        Queens, New York
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<!--MOBILE BODY-->
<div class="ui container" width="100%" id="mobile-container">
    <button class="ui button" role="button" id="reretractbutton" onclick="retract();">Show</button>
    <img src="images/KUD-Sedef 25 Years b.png" height="90px" style="padding-top: 20px;">
    <h3>A traditional Bosnian folk dance group.</h3>
    <div class="ui secondary vertical pointing menu" id="mobile-menu">
        <a class="item" href="#1">
            <i aria-hidden="true" class="home icon"></i>
        </a>
        <a class="item" href="#2">
            <i aria-hidden="true" class="book icon"></i>
        </a>
        <a class="item" href="#3">
            <i aria-hidden="true" class="picture icon"></i>
        </a>
        <a class="item" href="#4">
            <i aria-hidden="true" class="instagram icon"></i>
        </a>
        <a class="item" href="#5">
            <i aria-hidden="true" class="ticket icon"></i>
        </a>
        <a class="item" href="#6">
            <i aria-hidden="true" class="group icon"></i>
        </a>
        <a class="item" href="#7">
            <i aria-hidden="true" class="info icon"></i>
        </a>
        <a class="item" onclick="retract();">
            <i aria-hidden="true" class="step backward icon"></i>
        </a>
    </div>
    <img src="images/Cover.jpg" class="ui centered rounded image"
         width="100%">


    <h2 id="2">Info</h2>
    <p>
        We are a Traditional Bosniak Folk dance group in Queens, New York. We do choregoraphies as well as other folk
        dances called "Kolo," Šota dance from Bosnia & Herzegovina, Sandžak, Plav
        & Gusinje, and Albania. We have performed multiple choreographies ranging from Halaturka to
        Bosanske Igre across the United States, and some areas in Canada. We were originally organized in 1999, with 20
        performs joining in the first year. Many people, hundreds, have passed through the doors of KUD Sedef and
        experienced folk dances from all around Bosnia, Sandzak, Gusinje, and other surrounding areas.
    </p>
    </br>

    <h2 id="3">Gallery</h2>
    <img src="images/ChianFederation.jpg" class="ui centered rounded image"
         style="width:100%"></br>
    <img src="images/Poconos.jpg" class="ui centered rounded image"
         style="width:100%"></br>
    <img src="images/Poconos2.jpg" class="ui centered rounded image"
         style="width:100%"></br>
    <img src="images/Cover.jpg" class="ui centered rounded image"
         style="width:100%"></br>

    <h2 id="4">Social Media & Contact</h2>
    <a href="https://www.facebook.com/KudSedefLTD.NYC/" target="_blank"><i
            class="large facebook square icon">&nbsp</i>Facebook</a>
    <a href="https://www.instagram.com/kud.sedef.ltd/" target="_blank"><i
            class="large instagram icon"></i>&nbspInstagram</a>
    <a href="mailto:kudsedef@gmail.com"><i class="large mail outline icon"></i>&nbspG-Mail</a>
    </br>

    <h2 id="5">Performances</h2>
    <h3>(May 13th, 2018 and on)</h3>
    <p>
        25 Year Anniversary Performance
        <br>
        May 13th, 2018
        <br>
        Location: Cretans Association Omonoia, 32-33 31st Street Astoria
    </p>
    </br>

    <h2 id="6">Performers</h2>
    <h3>A & B Groups</h3>
    <div class="ui cards">
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Deni L</div>
                <div class="meta">
                    <span class="date">Lead Choreographer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A, B, & C groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Emma B</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Nerma B</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Dalila D</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Demir D</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Lejla D</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Amina D</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Eldina D</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Emma D</div>
                <div class="meta">
                    <span class="date">Assistant Choreographer & Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A, B, & C groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Kimeta D</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Omar D</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Salem D</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Jasmina H</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Jasmina K</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Sabrina L</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Amar M</div>
                <div class="meta">
                    <span class="date">President, Web Developer, & Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Semir M</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Alem M</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Amina M</div>
                <div class="meta">
                    <span class="date">Choreographer, Social Media Manager, & Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A, B, & C groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Dzenana M</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Amila R</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Elma %</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Aldin %</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Alan %</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Amina %</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                A & B groups
            </div>
        </div>
    </div>
    <h3>C Group</h3>
    <div class="ui cards">
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Omar M</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                C group
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Damian B</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                C group
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Dian B</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                C group
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Ajla B</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                C group
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Zejd B</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                C group
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Zejneb B</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                C group
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Berin D</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                C group
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Belma H</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                C group
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Velid H</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                C group
            </div>
        </div>
        <div class="ui centered card">
            <div class="content">
                <div style="font-size: 20px; padding-bottom: 5px;">Ajla M</div>
                <div class="meta">
                    <span class="date">Performer</span>
                </div>
                <div class="description">
                    Bio
                </div>
            </div>
            <div class="extra content">
                C group
            </div>
        </div>
    </div>
    </br></br>

    <div id="7" class="footer">
        <h2>About</h2>
        <h3>Hours</h3>
        <p>
            Saturdays:</br>
            A group: 6:00 PM to 7:30 PM</br>
            B & C groups: 4:30 PM to 6:00 PM
        </p>
        <h3>Studio</h3>
        <p>
            4402 23rd 23rd St #216</br>
            Long Island City, New York, NY 11101</br>
            Queens, New York
        </p>
        </br>
        <p>Non-profit Organization</p>
    </div>
</div>

<!--LOADERS-->
<div class="ui active blurring dimmer" id="loader-mobile-series">
    <div class="ui text loader">Loading basic HTML</br>
    </div>
</div>
<div class="ui active blurring dimmer" id="loader" style="display: none;">
    <div class="ui text loader">Loading Interactive Website & Resources</br>Created using Adobe Fireworks & Semantic
        UI<br>Repositories stored on Github
    </div>
</div>

</body>
<script src="index.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
</html>
