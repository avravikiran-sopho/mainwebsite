$('.navimg2').on('click',function () {
      $('.event-details').slideToggle('slow');
      $('#techdiv').slideToggle('slow');
      $('.register-div').fadeOut('slow');
      $('.navimg2').addClass('navimg1');
      $('.navimg1').removeClass('navimg2');
      $('.register-link').attr("href","")
});



$('.card').on('click',function () {
      var name = $(this).attr('id');
      console.log(name);
      var femina = "<h1>Femina</h1><p>\
          Nationality: Indian Passport Holder<br>\
          The applicant should be between 18 - 25 years of age as of December 31, 2018. The applicant will be required to produce their age proof (Passport, birth certificate, school leaving certificate, driver's license, etc).<br>\
          Relationship Status: The applicant should be unmarried.<br>\
          Height: 5'5\" and above(without heels)<br>\
          Unmarried/ single/ not engaged<br>\
          Student of any recognized educational institution.<br>\
          If selected, the applicant will have to follow the dress code of a Black Cocktail Dress and Stilettos while walking the ramp<br>\
          For any queries Contact Kabir Sharda: 9867327421 or email at kabir@elan.org.in<br>\
          The applicant must agree to abide by all rules, as changed from time to time by the Organisers.</p>\
          ";
      var paperpt = "<h1>PAPER PRESENTATION</h1>\ <h1>Introduction:</h1><p>\
          Participants are invited to present papers spanning various research topics pertaining to the different branches of engineering and science. We expect to see some really innovative work. It will be conducted in 2 rounds, selected students in first will give their presentation in final round in ELAN&ηvision 2018.</p>\
          <h1>Judging Criteria:</h1><p>\
          Correctness of facts<br>\
          Methods of analysis<br>\
          Innovativeness of idea<br>\
          Presentation of solution or ideas<br>\
          Practical feasibility or implication of ideas</p>\
          <h1>Rules:</h1><p>\
          The abstract should not exceed 500 words.<br>\
          Short listing will be done based on the abstract.<br>\
          All relevant data and figures must be represented in the paper<br>\
          Organizers decision will be final and binding.<br>\
          Teams of maximum 3 members are allowed.<br>\
          Nominal fee will be charged at the time of presentation of paper(if selected).<br>\
          All results will be announced on the website and will be mailed to the team members.<br>\
          Any abstract that is selected and is not presented shall not qualify for any award.</p>\
          ";
      var dtmf = "<h1>DTMF Race</h1><h1>Introduction</h1>\
          <p>Gear up with your wireless bot. Here comes the race which will test the strength, stability, and cruelty of your bot. It's all about racing towards the finish line through tough terrain by crushing your opponents. Let's see who’s bot is better equipped, better designed to win.\
          </p><h1>Problem statement:</h1>\
          <p>As the name suggests, the bot has to complete a track having various obstacles. Your bot has to complete the race overcoming and avoiding various obstacles in the least possible time.\
          The participants should prepare a wireless DTMF bot which competes with other bots in an obstacle race.\
          Note: Track for the Obstacle race will be made up of different terrains with obstacles to test the participant’s control of the bot. It’s made wide enough for one bot to navigate freely.\
          </p>\
          <h1>Event rules:</h1>\
          1. A team may consist of a maximum of 4 members.<br> \
          2. All members of team need to register for the event.<br>\
          3. If a team is not ready when their challenge round is called by the judge, the team forfeits and the opposing team is declared the winner by default.<br>\
          4. The machine should be controlled by a wireless remote control mechanism throughout the race.<br> \
          5. Each team is allowed to have only one machine.<br> \
          6. The machines have to use an onboard power supply. No external power supply will be allowed.<br> \
          7. Teams shall bring their own power supply for all its machines.<br> \
          8. Organizer’s decision shall be treated as final and binding on all.<br> \
          \
          <h1>Judging criteria:</h1>\
          <p>The bot which completes the race in the least possible time is declared as winner\
          </p>\
          <h1>Prize money</h1>\
          <p>Organisers:<br>\
          Prize money:<br>\
          </p>";
    var bloopers = "<h1>Electronic Bloopers</h1><h1>Introduction</h1> \
        <p>Passionate about Electronics? Then this one is for you. This January, come and get immersed in an exciting world of electronics. Prove your mettle by participating in this quiz.\
        </p><h1>Rules and regulation:</h1>\
        1. It is an offline quiz event.<br> 2. Team size is 1 or 2.<br>\
        3. The event consists of two rounds.<br>\
        4. Number of teams that get selected for second round will be decided on spot based on participation.<br>\
        5. In any case, decision of organiser is final.<br> \
        <h1>Judging criteria:</h1><p>\
        1.  The team with maximum points is declared as winner.<br> \
        2.  Top three teams in second round based on the points are declared as winners.<br>\
        3.  Participation certificates are given only to those who clear round 1</p>\
        <h1>Prize money</h1>\
        <p>Organisers:<br>\
        Prize money:\
        </p>";
    var iot = "<h1>IOT Challenge</h1><h1>Introduction:</h1><br>\
        <p>Being human, we have always been fascinated with gadgets, they make life simpler and work efficiently. IoT is not only making every single gadget smarter than ever before but also they are making them easily accessible across the globe. That is why this is still an active area of interest. So let's make some gadget which simplifies our life using IoT. To achieve this come and participate in this event and show what you’ve got in you to make the world a smarter place.\
        </p><h1>Event rules:</h1><p>\
        1.  Maximum of three people are allowed to participate in a group.<br>\
        2.  Every participant should be registered which can be done before hand or on the spot.<br>\
        3.  Arduino boards and other required components will be provided.<br>\
        4.  Organisers decision is final in all matters.<br>\
        5.  In the case of a tie the one who is faster to implement will be awarded.<br>\
        6.  Any kind of malpractices will not be entertained and the participant will be disqualified.<br>\
        <h1>Judging criteria:</h1><p>\
        The participants who enter the second round will be given participation certificates.\
        </p><h1>Prize money:</h1>\
        <p>Organisers:<br>\
        Prize money:<br>\
        </p>";
    var jugaad= "<h1>Jugaad IT</h1><h1>Introduction</h1><p>\
        One of the important works of an electric student is to debug a circuit. This event will test your ability to understand the circuit and debug it. You will have to tweak the circuit given to you to make it work according to the problem statement.\
        </p><h1>Problem statement</h1>\
        <p>Round 1<br>\
         This round will be theoretical and some general question on electronics will be asked.<br> \
        Round 2<br>\
        In this a circuit will be given to the each team. The circuit which will be given to each team will be identical.The required information will be given about the circuit. <br>\
        The participants are also allowed to google about the circuit.<br> \
        <h1>Event rules:</h1><p>\
        1. The main goal of round one is to select 8 teams out of all the teams.<br>\
        2. Team size can be 1 to 3</p>\
        <h1>Judging criteria:</h1><p>\
        The performance in the first round will decide who goes to next     round.<br> \
        The team which finishes debugging and fixing the circuit is declared as winner<br>\
        Organiser verdict is the final and binding<br>\
        <h1>Prize money</h1>\
        <p>Organisers:<br>\
        Prize money:<br>\
        </p>";
    var junkyard ="<h1>Junkyard Wars</h1><h1>Introduction</h1>\
        <p>'Engineers like to solve problems .If there are no problems handily available, they will create their own problems'-Scott Adams.</p>\
        <p>It’s time for your team to dive into innovation and creativity, find a good solution and emerge as jugaads. So, pile up your enthusiasm to win the battle.</p>\
        <h1>Problem statement</h1>\
        <h1>Event Format:</h1><p>\
        1. This is a on the spot event where participants will asked to make model using the given components.<br>\
        2. There are two rounds to this event.<br>\
           a. First Round:<br>\
              i. Teams have to present their design in two hours.<br>ii. Teams will be allowed to use the internet facilities available in forming ideas.<br>\
              iii. Five teams will be shortlisted for next round.<br>\
           b. Second Round:<br>\
              i. The shortlisted teams will have to manufacture their product (on the design provided by them) using only the materials from a pile of junk within a certain time limit.<br>\
        <h1>Judging criteria:</h1><p>\
        1. Originality of the design<br>\
        2. Its simplicity<br>\
        3. The science involved<br>\
        4. The efficiency of the machine<br>\
        <h1>Event Rules</h1><p>\
        1. The teams must have at least 3 members and a maximum of 5 members.<br>\
        2. Every member on the team must register for the event on the website<br>\
        3. The decision made by the judges will be final and binding.<br>\
        4. The organisers reserve the right to make changes to the event as/when necessary.<br>\
        <h1>Prize money</h1><p>\
        Organisers:<br>\
        Prize money:\
        </p>";
    var bridge = "<h1>Bridge Builder</h1><h1>Introduction</h1>\
        <p>Civil Engineering is an art; a profession of creative ability and logic. Architect provides an opportunity for participants to unleash their innovation in designing an object of significance and splendour .This event aims to harness practical design and constructional abilities of the participants.</p>\
        <h1>Problem statement</h1>\
        <p>Participants have to design a Bridge using Popsicle sticks (icecream sticks) satisfying the given constraints.<br>\
        Event Format:<br>\
        1.There will be only one round in which bridges will be tested.<br>2.Participants have to come with their bridges.\
        <h1>General Rules</h1>\
        <p>1.  Team size could be of 3-5 members<br>\
        2.  All members of the team should be enrolled as students in an  educational institute.<br>\
        3.  No person can be a part of more than one team.<br>\
        4.  Decision of Judges will be final and binding.<br>\
        <h1>Prize money</h1>\
        <p>Organisers:<br>\
        Prize money:\
        </p>";
    var salesman ="<h1>Salesman of Fest</h1><h1>Introduction:</h1>\
        <p>This events tests the sales capability of participants and also shows their convincing power. We believe that sales is also one of the quality of entrepreneurship. This tests that quality.</p>\
        <h1>Event rules:</h1>\
        <p>Every participant gets the same amount of products that they need to sell to random people.</p> \
        <h1>Judging Criteria:</h1>\
        <p>Whoever sells them all first wins the event.</p>\
        <h1>Prize money</h1><p>\
        Organisers:<br>\
        Prize money:\
        </p>";
    var crowd = "<h1>Crowd Pitch</h1><h1>Introduction:</h1>\
        <p>This event encourages people to express their idea in front of the crowd. This event focusses on the skills required for pitching in front of large crowds. Pitch is the first thing that is required by any entrepreneur. The main aim of the event is to decide the best pitch.</p>\
        <h1>Event Rules:</h1><p>\ 1.  Every participant is given a virtual money which he can invest in other people’s ideas.<br>\
        2.  No participant cannot spend any money on his own idea. <br>\
        3.  No participant cannot spend more than half of the money on one idea.<br>\ 4.  Each participant has to spend his money on at least three ideas.<br>\
        <h1>Judging criteria:</h1><p>\
        The idea that receives maximum virtual money wins the event.<br>\ <h1>Prize money</h1><p>\Organisers:<br>\ Prize money:\
        </p>";
    var cadpro = "<h1>CADPRO</h1><h1>ntroduction:</h1>\
        <p>CAD PRO Design Challenge will test your designing skills in 3D design software and here, you have to prove your expertise in a challenging scenario where you race against time.</p>\
        <h1>Problem statement</h1>\
        <p>It will be an on-spot designing round. Participants will be given a problem statement at the time of event and they have to submit their design in the specified time limit.<br>\ Each Question will carry some points according to the type of question and its level of difficulty.<br>\
        Models can be prepared in any CAD software (CATIA/Pro E/AutoCad/Solidworks/Solidedge) and the final file must be prepared in IGES or STEP format. Bring your own laptops with necessary softwares installed.<br>\
        <h1>Event rules:</h1><p>\
        1.Each team can have a maximum of two participants.<br>\
        2.There will be a prelim round in case the participation exceeds<br>\ 3.Decision of the organizers will be final and binding. No claim will be entertained against the announced results.<br>\
        <h1>Judging criteria:</h1>\
        1.Any sign of plagiarism from internet or from other participant will lead to direct disqualification.<br>\
        2.Participant can only submit once. In case of multiple submissions only the first entry will be considered for evaluation.<br>\
        3.The design will be evaluated on the following aspects:<br>\
          A. Originality of the Design<br>\
          B. Clear and easily comprehensible design<br>\
          C. Time Taken<br>\
        4.Certificate of Merit and Prizes will be given for the top two teams.<br>\
        5.Participation Certificate will be given for those who registered online and participated in the event.<br>\
        6.Participation Certificate is not guaranteed for those who registered onspot for the event.<br>\
        7.Disqualified teams will not be considered for any certificates. <br>\
        <h1>Prize money</h1>\
        <p>Organisers:<br>\
        Prize money:\
        </p>";
    var drift = "<h1>Drift King</h1><h1>Introduction:</h1>\
        <p>Want to try making an IC engine? Drift king gives you a chance to design a machine with given constraints. In this event, the contestants are expected to make to an IC engine powered machine, that can be controlled remotely using a wireless remote controller, which can race against machines of similar construct on an all-terrain track packed with a number of obstacles.</p>\
        <h1>Problem statement:</h1>\
        <p>In this event ,the contestants are expected to make to an IC engine powered machine ,that can be controlled remotely using a wireless remote controller, which can race against machines of similar construct on an all-terrain track packed with a number of obstacles.</p>\
        <h1>General Rules</h1>\
        <p>A team can have a maximum of 4 members.</p>\
        <h1>Prize money</h1>\
        <p>Organisers:<br>\
        Prize money:\
        </p>";
    var robowars = "<h1>Robowars</h1><h1>Introduction</h1>\
        <p>Interested in designing a bot? Want to test your robotic skills? The challenge is to create a robot (manually controlled / autonomous) whose sole purpose is to immobilize or otherwise move your opponent out of the arena within a stipulated time. This event aims to test your Robot against another in a field of combat where brute strength and cat-like reflexes hold the key to success.</p>\
        <h1>Problem statement:</h1>\
        <p>The challenge is to create a robot (manually controlled / autonomous) whose sole purpose is to immobilize or otherwise move your opponent out of the arena within a stipulated time. This event aims to test your Robot against another in a field of combat where brute strength and cat-like reflexes hold the key to success.</p>\
        <h1>Prize money</h1>\
        <p>Organisers:<br>\
        Prize money:\
        </p>";
    var robosoccer = "<h1>RoboSoccer</h1><h1>Introduction:</h1>\
        <p>A soccer freak as well as a Robotics Freak too? well, this event is just for you. RoboSoccer combines the universal excitement and amusement inspired by football, with the thrill and satisfaction of making a working robot from scratch. This event is a platform to showcase their robotics talents and bringing the football spirit alive. Teams are expected to build and operate a manual robot to play one-on-one soccer in a knockout tournament but just with cheering, heckling, massacres, nail-biters and a lot more!</p>\
        <h1>Problem Statement:</h1>\ <p>Build two bots that can kick a table tennis ball into the opponent’s Goal Post following the rules. Use your creativity and come up with innovative kicking mechanisms to smash the ball into the goal post.</p>\
        <h1>Judging criteria:</h1>\
        <p>Finally, the winner is the team who scores more points at the end of the match. The winning team will be qualified to the next rounds.</p>\
        <h1>General Rules:</h1><p>\
        1.  Each team can have at max 4 members.<br>\
        2.  All students with a valid identity card of their respective educational institutes are eligible to participate.<br>\ 3.  Students from different educational institutes can form a team.<br>\
        4.  In case of any discrepancy, organizers’ decision is final. Arguing with organizer will lead to immediate disqualification.<br>\
        <h1>Prize money:</h1><p>\
        Organisers:<br>\
        Prize money:</p>\
        ";
    var robopirates = "<h1>Robo-Pirates</h1><h1>Introduction</h1>\
        <p>Too bored with ground based robot events, you have come to the right place. Pirates is a ‘one of a kind’ event where you are given the platform to create your own robot which floats and navigates on water. Starting from scratch, you get the chance to showcase your creativity and awaken the little engineer in you.</p>\
        <h1>Problem statement</h1>\
        <p>Make a wired/wireless which can float on water and can perform pick-n-place task …Like manipulating cubes and balls…….</p>\
        <h1>General Rules</h1><p>\
        1.  The teams must adhere to the spirit of healthy competition. The teams must not damage the opponent's machine in any way. Judges reserve the right to disqualify any team indulging in misbehavior.<br>\
        2.  The mechanism used cannot be changed completely during the competition. Only parts can be replaced in case of repair.<br>\ 3.  Any team that is not ready at the time specified will be disqualified from the competition automatically.<br>\
        4.  The machine would be checked for its safety before the race and would be discarded if found unsafe for other teams and spectators.<br>\
        5.  Decision of the judges shall be treated as final and binding on all.<br>\
        6.  A team must consist of 3 or less participants.<br>\ 7.  Students from different educational institutes can form a team.<br>\ 8.  All students with a valid identity card of their respective educational institutes are eligible to participate in the event.<br>\
        <h1>Judging criteria</h1><p>\
        1.  The team who score maximum points in 4 minutes will be the winner of that knockout round.<br>\
        2.  If at any moment score of any team exceeds 350 then it will be the winner.<br>\ 3.  In case of TIE, teams will be given extra time, during which the team who scores first will be the winner of that round.<br>\
        4.  Certificate of Excellence will be awarded to all winners (only first and second).<br>\
        5.  Certificates of Participation will be given to all the teams who have qualified.<br>\
        6.  Disqualified teams will not be considered for any certificates.<br>\
        <h1>Prize money</h1><p>\
        Organisers:<br>\
        Prize money:</p>\
        ";
    var linerobot = "<h1>Line Following Robot</h1><h1>Introduction</h1>\
        <p>The objective of this contest is for a robot to follow a black line on a white background, without losing the line, and navigating several 90 degree turns. The robot to complete the course in the shortest period of time while accurately tracking the course line from start to finish wins.</p>\
        <h1>Prize money</h1><p>\
        Organisers:<br>\
        Prize money:</p>\
        ";
    var aquanet = "<h1>Aquanet</h1><h1>Introduction:</h1>\
        <p>Ever dreamt of building your own rocket prototype and flying it. Here’s your chance. In this event, participants have to build a Water rocket which is pressurised by compressed air. Water acts as the fuel.</p>\
        'Be a Newton and test the Third law for yourselves'</p>\
        <h1>Problem statement</h1><p>\
        1.  The event has two rounds.<br>\
        2.  The event will take place in an arena of dimensions 100m*50m.<br>\ 3.  A water rocket has to be powered by pressurized water.<br>\
        4.  The rocket has to be launched so that it has the minimum deviation from the line of projection and minimum deviation from the center line.<br>\ 5.  Two trails will be given to each team (in each round) and the better of the two will be considered. You can use two different models for different rounds.<br>\
        <h1>Judging Criteria :</h1>\
        <p>Round 1-<br>\
        The rocket has to be launched so that it covers a minimum distance of 45 meters and withminimum deviation from the center line.<br>\ Five teams with minimum deviation from center line will be qualified for the second round.<br>\
        Round 2-<br>\
        The following formula will be used for judging the winners of the event in the second round.<br>\
        Total Points earned = 3*Range of projectile (in meters) -7*deviation from center line (inmeters)<br>\
        For example ,if range(A)=50;range(B)=57 and deviation(A)=5;deviation(B)=8<br>\
        Both participants get the same score of 115.<br></p>\
        <h1>Rules and Regulations:</h1><p>\
        1.  A maximum of three members are allowed in a team.<br>\
        2.  There can be students from different institutions in a team.<br>\3.  Only plastic soft drink bottles are to be used as the rocket body.<br>\
        4.  The rocket can be multi-staged but the total volume of the pressure chamber should not exceed 1.5 litres.<br>\5.  The water rocket must only use compressed ambient atmospheric air as source of energy. Pressure compressors (foot pump) and water shall be provided.<br>\
        6.  The amount of water to be filled in the rocket is left to the choice of the team.<br>\
        7.  The pressure inside the pressure chamber should not exceed 50 psi.<br>\
        8.  Launchers will not be provided by the organizers. Each team must have their own launchers.<br>\
        9.  The rocket must be launched from a stationary position using a fixed launcher.Slingshots, trebuchets, catapults, cannons, and all other forms of launcher boost assists are forbidden. In other words, the internal pressure of the rocket must be the only source of energy for the rocket.<br>\
        A team can get disqualified if:<br>\
        1.  Any rocket is found to be dangerous to launch by the organizers and judges.<br>\
        2.  A rocket blasts before the launch.<br>\
        3.  A rocket launches before indicated by the organizers.<br>\
        4.  Any part of the rocket breaks off from the rocket during the flight.<br>\
        5.  Any ready-made models are used.<br>\
        6.  Any design rule is not abided by the participant.<br>\
        The organizers reserve all rights to change any of the above rules as they deem fit.<br>\
        Changes in rules, if any, will be highlighted on the website. In case of any discrepancy, the decision of the judges shall be treated as final and binding.\
        </p><h1>Prize money</h1><p>\
        Organisers:<br>\
        Prize money:</p>\
        ";
    var galileo = "<h1>Galileo Project</h1><h1>Introduction</h1>\
        <p>'By taking the sense our sense of sight far beyond the realm of our forebear’s imagination, these wonderful instruments, the telescopes, open the way to a deeper and more perfect understanding of nature.' - Rene Descartes.<br> Make your own Optical tube. This event is based on building of a simple terrestrial telescope with given components. Also, test your talent in physics by participating in a challenging quiz.</p>\
        <h1>Problem statement:</h1><p>\
        The event will be consisting of three rounds.<br>\
        Round 1:<br>\
        A quiz will be conducted to screen the participants. This quiz is based mostly on optics and physics of light.<br>\
        Round 2:<br>\
        Another quiz will be conducted to screen the participants. This quiz is based on Skymap and a few stellar objects.<br>\
        Round 3:<br>\
        The top ten teams from the quizzes will qualify to the third round. The teams have to make a terrestrial telescope with the components and infrastructure provided by the organizers.<br>\
        </p><h1>Judgement Criteria:</h1><p>\
        1. Magnification<br>\
        2. Clarity of the image<br>\
        3. Overall Design<br></p>\
        <h1>Certification Policy:</h1><p>\
        1)Certificate of Merit and Prizes will be given for the top two teams.<br>\
        2)Participation Certificate will be given for those who registered online and participated in the event.<br>\
        3)Participation Certificate is not guarenteed for those who registered onspot for the event.<br>\
        </p><h1>Rules and Regulations:</h1><p>\
        1. Each team is allowed to have a maximum of three members.<br>\
        2. Members of a team can be from different colleges.<br>\
        3. If a member is found using any other components, other than the ones provided by the organizers, the team shall be disqualified<br>\
        4. The Organizers reserve all rights to change any of the mentioned rules as they deem fit.<br>\
        5. Changes in the rules, if any, will be highlighted on the website.<br>\
        6. In case of any discrepancy, the decision of the organizers shall be final.\
        </p><h1>Prize money</h1><p>\
        Organisers:<br>\
        Prize money:</p>\
        ";
    var enigma = "<h1>Enigma</h1><h1>Introduction:</h1>\
        <p>Find the mysterious secret techniques to decrypt the given texts/messages. Clear all the levels in the allotted time to become the ultimate cryptacker</p>\
        <h1>Problem statement:</h1><p>\
        Round 1:<br>\
        1.  It's a pen and paper event.<br>\ 2.  Each team has to decode a series of crypted messages.<br>\
        Round 2:<br>\
        1.It will be buzzer type round.<br>\
        </p><h1>Event rules:</h1><p>\
        1. Max Team Size - 2 (Individual participants are welcome)<br>\ 2.The decision of the organizers will be final and binding.<br></p>\
        <h1>Judging criteria:</h1><p>\
        1.  Tie breakers would be conducted if necessary.<br>\ 2.  There are points associated with each message and the team to accumulate maximum number of points wins.<br>\
        3.  Prizes will be given for the top two teams.<br>\
        4.  Certificate of Merit will be given for the top 3 teams.<br>\
        5.  Participation Certificate will be given to all the teams who qualify for the second round.<br>\
        6.  Participation Certificate is not guaranteed for those who registered onspot for the event.<br></p>\
        <h1>Prize money:</h1><p>\
        Organisers:<br>\
        Prize money:</p>\
        ";
    var hackamaze = "<h1>HACK-A-MAZE</h1><h1>Introduction:</h1><p> \
        Compete against others hackers in exploring different levels of a challenge maze with your hacking skills.\
        You will have to find your way to victory to defeat others.\
        </p> \ <h1> Problem statement</h1><p> \
        It’s an on the spot event, in which there will a website/portal hosted locally and all the teams will have to navigate the website solving a series of puzzles and challenges.\
        </p><h1>Event rules:</h1><p> \
        1.  Max Team Size - 2 (Individual participants are welcome)<br> \ 2.  There will be only a single round.<br>\
        3.  Incase no team is able to clear the maze then team to reach the highest level will be declared winner.<br><h1> \ Judging criteria:</h1><p> \
        1.  The first team to reach the goal or go the farthest in the time limit bags the prize. <br>\
        2.  The decision of the organizers will be final and binding.<br>\
        3.  Certificate of Merit and Prizes will be given for the top two teams.<br> \
        4.  Participation Certificate will be given for those who registered online and participated in the event.<br> \
        5.  Participation Certificate is not guaranteed for those who registered onspot for the event.<br></p> \
        <h1>Prize money</h1><p> \
        Organisers:<br>\
        Prize money:</p>\
        ";
    var algo = "<h1>Algorithma</h1><h1>Introduction</h1> \
        <p>Algorithma is the perfect event for those who like to solve mathematical and logical puzzles as well as design algorithms, regardless of your knowledge of programming.</p> \ <h1>Problem statement</h1><p> \
        Here we will test your problem-solving ability in a series of steps. You will be given a set of puzzles and algorithmic problems. You have to write pseudocode or steps for solving a problem in words or draw a flowchart highlighting the approach for solving the problem anything which clearly describes your logic.\
        </p><h1>Judging criteria:</h1><p> \
        1.  All programs will be judged in person and winners will be announced before the fest ends.<br> \
        2.  Participation certificates are given to top 20 Algorithms.<br> \
        <p><h1> Rules and Regulations: </h1><p> \
        1. This is an individual event. No teams are allowed.<br>\
        2. The organisers reserve the right to make any change to the event whenever deemed necessary.<br>\
        3. Any participants indulging in plagiarism or sharing code with others in any form will be immediately disqualified.<br>\
        4. All programs will be judged in person and winners will be announced before the fest ends.<br>\
        5. All decisions made by the judges will be final and binding.<br><p> \
        <h1>Prize money</h1><p> \
        Organisers:<br>\
        Prize money:\
        </p>";
    var quest = "<h1>PRO-Quest</h1><h1>Introduction:</h1>\
        <p>Proquest is a competitive programming competition composed of three levels, for participants of all levels of expertise. Experience the beginner, medium and advance levels of programming from pen and paper programming to a truly challenging problem statement.</p>\
        <h1>Rules:</h1><p> \ 1. This is an individual event. No teams are allowed.<br> \
        2. The organisers reserve the right to make any change to the event whenever deemed necessary.<br>\
        3. Any participants indulging in plagiarism or sharing code with others in any form will be immediately disqualified.<br>\
        4. Winners will be announced before the fest ends.<br>\
        5. All decisions made by the judges will be final and binding.<br>\
        6. It will be a 3 hour event.<br></p>\
        <h1>Judging criteria:</h1><p> \
        1.  All programs will be judged in person and winners will be announced before the fest ends.<br> \ 2.  Participation certificates are given to top 15 codes <br></p> \
        <h1> Prize money</h1><p> \
        Organisers:<br>\
        Prize money:</p>";
    var automobile ="<h1>Automobile Quiz</h1><h1>Introduction:</h1><p> \
        If petrol and diesel be your lifeblood, and the piston beat your heart beat, this quiz shall be tailor-made for you. By our very own automobile gods, an open challenge to other gods to win the race. Come, for it is going to be legendary</p>\
        <h1>Problem statement:</h1><p> \
        There will be two rounds both of which will happen during ElAN & Nvision at IIT Hyderabad.\
        </p><h1>Event rules:</h1><p> \
        1.  Team size maximum 2.<br>\
        2.  The minimum criteria for going to the second round is to have at least 30 points.<br>\
        3.  A total of 10 teams will pass to the second round.<br>\
        4.  The teams that will be going to second round should be present in the top ten and have a minimum of 30 points.Failing to satisfy either of the above will disqualify them from the quiz.<br>\
        5.  In any case, decision of organiser is final. <br></p> \
        <h1>Judging criteria:</h1><p> \
        1.  The team with maximum points is declared as winner.<br>\
        2.  Certificate of Merit and Prizes will be given for the top two teams<br>\
        3.  Participation Certificates will be given for the teams which have cleared first round.<br>\
        </p><h1> Prize money: </h1><p> \
        Organisers:<br>\
        Prize money:</p>\
        ";
    var scitech = "<h1>Science Quiz</h1><h1>Introduction:</h1><p> \
        Be it a Mars rover or technology that everyone is looking forward to in the country, 4G. Explore the world around you in a new way. Learn things that your friends haven't even heard of by participating in this enthralling quiz.</p>\
        <h1>Problem statement:</h1><p> \
        There will be two rounds both of which will happen during ElAN & Nvision at IIT Hyderabad.</p> \
        <h1>Event rules:</h1><p> \
        1.  Team size maximum 2.<br>\
        2.  There will be a written prelims round.<br>\
        3.  The minimum criteria for going to second round is to have at least 30 points.<br>\
        4.  A total of 10 teams will be passed on to second round.<br>\
        5.  The teams that will be going to second round should be present in the top ten and have a minimum of 30 points.Failing to satisfy either of the above will disqualify them from the quiz.<br>\
        <h1>Judging criterial</h1><p> \
        1.  The team with maximum points is declared as winner.<br>\
        2.  Certificate of Merit and Prizes will be given for the top two teams<br>\
        3.  Participation Certificates will be given for the teams which have cleared first round.<br></p> \
        <h1>Prize money:</h1><p>\
        Organisers:<br>\
        Prize money:</p>\
        ";
    var breakfree = "<h1>Breakfree:Western Dance Competition</h1><p>Welcome to the true culture of break dance. Elan & ηvision 2018 provides a platform for all the passionate dancers to show their talent and mesmerize the audience. </p>\
        <p>Pick your body up and drop it on the floor<br>\
        We never quit, we never rest on the floor<br>\
        If I ain't wrong we'll probably die on the floor\
        Lines from Jlo's 'on the floor'\
        If you really dance from the heart, if dance runs through your veins and if dance is in every minute of your life.... This is where you should be.\ So rise and shine. Dance with energy and Elan & ηvision 2018!!\
        </p><h1>Group dance-</h1><p> \
        Coordination is what matters when it comes to a group performance. Break free is one such group dance event where one can show off their individual talents or spellbind the crowd with their coordination. It's time to move n shake n drop.</p>\
        <h1>Solo dance-</h1><p>Got your own dance style you think you've mastered? An event for pro solo dancers, Loose your feet is where you can make the crowd go crazy with those awesome, super cool moves!</p>\
        <h1>Duet-</h1><p>A perfect event for a pair of dancers. Participants need to showcase their talent by dancing in duo. Could be couple or anyone who can dance to the grooves coordinating each other which is by the way very essential part of this event.</p>";
    var nrithyanjali = "<h1>Nrithyanjali: A Classical Dance Competition</h1><p>Dance, as we know ,is one of the 64 forms of art in the Indian Culture. It embodies all forms of physical art and learning. It is a kinetic form of body language expressed in unarticulated emotions.\ Classical dance is the fusion of mind's emotions and body's articulate movements. So, we call upon all the classical dancers to come and produce the medly of most graceful and most expressive.\
        Come....drown yourself in divine, grace, beauty, tenderness to delight the eyes and souls of the viewers.</p>\
        <h1>EVENT FORMAT:</h1><p>\
        <p>Event consists of only one round and the results are decided by the judge.<br>\
        The competition is open only to college students with a valid ID card.<br>\
        You can perform in any Indian classical dance form [we'd love to see Bharatanatyam, Kuchipudi, Odissi, Mohiniyattam and others]. However there are no separate judging categories for the different forms.<br>\
        </p><h1>RULES AND REGULATIONS:</h1><p>\
        Semi-classical/ classical on Bollywood songs are strictly not allowed.<br>\
        Live music is not allowed.<br>\
        The participants will perform on pre-recorded music which should be brought in a pen drive by the participants.<br>\
        Participants would be given a maximum performance time of 10 minutes and the performance should last for a minimum of 5 mins, anyone exceeding this time limit will get penalty of points.<br>\
        There will be a small weightage for costumes. Dance should consist of both Nritya and Abhinaya.<br>\
        Participants will have to bring their own costumes, accessories and make-up for the competition.<br>\
        Any illegal or unethical act related to the competition and or on its stage, auditorium premises will lead to immediate disqualification.<br>\
        Points will be awarded for rhythm, choice of song and dance, expression, costumes and synchronization.<br>\
        Organizers decision is final and binding to all.<br>\
        Obscenity of any kind is not allowed and will lead to immediate disqualification.<br>\
        </p><h1>JUDGING CRITERIA:</h1><p>\
        Rhythm<br>\
        Choice of song and dance<br>\
        Expressions<br>\
        Costume<br></p>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.15,000.</p>\
        <h1>ORGANISERS:</h1><p>\
        Hema Varshita - 8096355327\
        </p>";
    var stepup = "<h1>Step up:Street dance battles</h1><p>For the first time ever Elan & ηvision 2018 brings to you the street dance battle.You think you’ve mastered a dance form?Show-off your dancing skills in the one-on-one face-off and prove yourself.Mesmerise the crowd with your insanely good dance steps and make ‘em go crazy.Engage everyone in this intense battle ,where your moves are your  weapons.</p>\
        <h1>EVENT FORMAT:</h1><p>\
        There will be only one-round for this event.<br>\
        The participants will battle in a one-on-one face-off.The pairing of participants will be decided by the organizers.<br>\
        The participants would be given a track by the organizers 2 hours prior to the event.<br>\
        Registrations can be done online or on-spot.<br>\
        On-spot registrations close 3 hours prior to the commencement of the event.</p>\
        <h1>RULES AND REGULATIONS:</h1><p>\ All sorts of western dance forms are allowed.<br>\
        Participants should choose only one dance form and choreograph the track accordingly.<br>\
        Any kind of inappropriate behaviour will lead to disqualification.</p>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.10,000.</p>\
        <h1>ORGANISERS:</h1>\
        ";
    var vibrazione = "<h1>Vibrazione: A Solo Singing Competition</h1><p>Wanna put your singing skills to the test? Got a versatile voice that can mesmerize everyone? Put your heart to it and sing your way to glory!.Its a solo singing competition.\
        <h1>EVENT FORMAT</h1><p>:\
        Registrations can be online or on-spot during Elan & ηvision 2018.<br>\
        This competition consists of 2 rounds- prelims and finals.<br>\
        Depending on the prelims performance 10 participants would be selected for the finals.<br>\
        Participants can sing any song of his/her choice of genre bollywood music/film music.<br>\
        Prelims Round: To participate in the Vibrazione, you must have 5 songs that you know very well and must be ready to perform any of those 5 songs for the competition. If someone else has chosen your song, or something does not work out with your first choice, you will need to be ready to sing your other choice.<br>\
        Finals: For finals participant can sing any bollywood or film song of his/her own choice.<br>\
        The performances of participants will be video recorded and uploaded onto the website of ATKT.in.<br></p>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        On Spot Registrations closes one hour before the start of the event.<br>\
        Songs containing vulgar or explicit lyrics will not be allowed. Contestants who, during their performance, use vulgar lyrics or perform in an obscene manner will be disqualified from the competition, NO RAP.<br>\
        Participants can bring a karaoke track or play an accompanying instrument and are also allowed to have an instrumentalist accompanist(max 2)  ONLY for the final round and not for the prelims. <br>\
        For prelims round time limit is 2 minutes and for finals there is a 3 minute time limit on all songs.The participants should perform for a minimum of 90 seconds(including Mukhda and antara).NO EXCEPTIONS.<br>\
        NO BACKING VOCALS ALLOWED.<br>\
        Participant exceeding prescribed time limit will invite a penalty.<br>\
        Decision of the organisers and the judges is final. No arguing with judges is allowed. Any contestant, their or associates who argue with a judge may be deemed to be using offensive behavior and the contestant may be disqualified from competition.<br>\
        The decision of the judges and the organizers is final and abiding.<br>\
        The organizing team has the right to change any or all the rules mentioned above.<br></p>\
        <h1>JUDGING CRITERIA:</h1>\
        <p>Vocal ability<br>\
        Stage presence<br>\
        Appearance<br></p>\
        <h1>PRIZES:</h1><p>\
        Cash prize worth Rs.15,000.<br>\
        The winner and the first runner-up of the event will be directly selected for round 2 of ATKT.in Singing Toppers and additionally,top 5 performers will stand a chance to next round depending on the number of views to their videos.<br>\
        </p><h1>ORGANISERS:</h1><p>\
        Siri Chandana - 9550345920<br>\
        Prathyusha - 7989240021<br>\
        Pagadala Karthik - 8790713920<br>";
    var octave = "<h1>Octave:A Solo Instrument Competition</h1><p>This event pits the best against the best on the cultural stage. The name says it all and if you think you have mastered the instrument of your choice, then this is the stage for you. Not just that, this also tests your creativity and sees if you can come up with your own tune to wow us.</p>\
        <h1>EVENT FORMAT:</h1><p>\
        This being a solo competition allows no more than one person per team.<br>\
        Registration: On the spot/Online.<br>\
        On-spot registrations would be closed 1 hour before the event.<br>\ Duration of each performance in the first round: 6 min (empty stage to empty stage).<br>\
        Duration of each performance in the second round: as long as the backing track lasts (empty stage to empty stage).<br>\
        There will be two categories. Melody and percussion instruments.<br>\
        Round 1:<br>\ Participants will be given 6 minutes to play anything they want.<br>\
        Based on the scores of the first round 2 participants from each category progresses into the second round.<br>\
        Overshooting the time limit will result in a penalty.<br>\
        Round 2:<br>\
        The second round will be a face-off between the top two from each category. Ie, the first in melody vs the second in melody and similarly for percussion.<br>\
        After qualification after the first round, the finalists will be given tracks to play over. Ie, the melody finalists will be given tracks with percussion to play over and vice-versa. This will be done to ensure fair judging.<br>\
        </p><h1>RULES AND REGULATIONS:</h1><p>\
        A participant can stick to ONLY ONE instrument for the entire competition.<br>\
        Electric instruments are allowed.<br>\
        Keyboards can be played only in the piano patch.<br>\
        Availability of the following instruments is assured (if required) : A keyboard (in piano tune), acoustic guitar, and drums.<br>\
        Decision of the event organizers and the judges will be final and abiding.<br></p>\
        <h1>JUDGING CRITERIA:</h1><p>\
        Rhythm<br>\
        Creativity<br></p>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.15,000.</p>\
        <h1>ORGANISERS:</h1><p>\
        Siri Chandana - 9550345920<br>\
        Prathyusha - 7989240021<br>\
        Pagadala Karthik - 8790713920</p>";
    var djwars = "<h1>DJ Wars:  A DJ’ying Competition</h1><p>\
        The most awaited event is back with a bang in Elan & ηvision 2018!!<br>\
        For all the aspiring DJ's out there!! Can you mix 'em good enough?!Then what are you waiting for?!!Spin 'em to own 'em!!<br>\
        Battle with the beats! Fight with the tunes! May the best win!This is the War of DJ's, where DJ's compete with each other, on a huge platform, like never before!</p>\
        <h1>INFRASTRUCTURE SUPPLIED:</h1><p>\
        A DJ console(Mark I) and mixer<br>\
        4 bin DJ sound system<br>\
        Effect lights[sprinklers, lasers, cans, and smoke]<br>\
        Sound Monitors<br>\
        2 mics<br></p>\
        <h1>EVENT FORMAT:</h1><p>\
        The event consists of two rounds-Prelims and finals.<br>\
        Participants should register online for the event or even on-spot.<br>\
        On-spot registrations would be closed 1 hour before the event starts.<br>\
        Each DJ will be given a maximum time of 20mins to perform for both prelims and finals.<br>\
        5mins would be given as a spare time for each of them before their performance to settle down.<br></p>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        This is an individual event. No DJ duos are allowed.<br>\
        The participants should be of the age 17-25 years of age and the participants should produce age proof at the registration desk on the day of event.<br>\
        Time limit should be strictly followed by the participants. Participant will be penalized by judges for not doing so.<br>\
        A minimum of three genres to be used. Language is not a barrier.<br>\
        A minimum of six songs to be played and 4 CDs to be changed.<br>\
        Tags must be avoided. They can attract negative points.<br>\
        Participants should have their own music. No music will be provided by the organizers.<br>\
        Props or costumes will have to be arranged by the participants.<br>\
        Obscenity in any form is strictly prohibited and would lead to disqualification.<br>\
        Decision of organisers and judges will be final and abiding.<br>\
        Style statement will also be rewarded.<br></p>\
        <h1>JUDGING CRITERIA:</h1><p>\
        Mixing<br>\ Style statement<br>\
        Crowd engagement<br></p>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.25,000.</p>\
        <h1>ORGANISERS:</h1>\
        <p></p>\
        ";
    var nukkad ="<h1>NUKKAD NAATAK:A street-play competition</h1><p>Haven't you ever wanted to change the way our country functions? Well, it's time to be the change you want to see! <br>Elan & ηvision 2018 is bringing Forward, Nukkad Natak-A Street Play Competition.\ It is all about creating awareness about social problems that plague our soil and bringing about realization in our youth!.\
        </p>\
        <h1>EVENT FORMAT:</h1><p>\
        The event comprises of only one round.<br>\
        Participants can choose any theme of their choice any perform for a 20-30 minutes(including the setup time).<br>\
        Teams are allowed to have music accompanists for their play.<br>\
        The team size should be 8-20(including music accompanists).<br>\
        Participants should get their own props,although bigger props like char can be arranged by the organising team if informed beforehand.<br>\
        The play can be enacted in Hindi or English.</p>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        Only on-line registrations are available for this event.<br>\
        The head of the team should register online with the participant names ,contact number and team name.<br>\
        Each team will receive a confirmation mail with the details of the team.<br>\
        Teams should bring the print out of the confirmation mail.<br>\
        Any kind of fluids, live animals and flame is STRICTLY not allowed.<br>\
        Time limit should be strictly followed failing which there will be deduction in your respective score.<br>\
        Plays can be based on any theme but inappropriate content or content defaming any political party or religious group is STRICTLY prohibited.<br>\
        Obscenity of any kind, is not allowed and may lead to disqualification.<br>\
        You are not allowed to play any recorded music using mobile phones or tapes.<br>\
        The decision of the judges and organisers will be final and binding.</p>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.15,000.</p>\
        <h1>ORGANISERS:</h1><p>\
        Aditya Patel - 7389582623<br>\
        Ahmed Z Sihorwala - 9581151952</p>\
        ";
    var andaaz = "<h1>Andaaz Apna Apna: A Mono acting competition</h1><p>This one’s for all the pro stage performers out there! A perfect place for those who can take over the crowd with their humorous comedy and exceptional acting skills. An unprecedented opportunity to showcase your pro skills as a \"Stand-up Comedian\", or a \"Mono-Actor\".A Stage to perform and a huge crowd to be captivated. Step up, and leave the audience enthralled !</p>\
        <h1>EVENT FORMAT:</h1><p>\ There will be 2 rounds, prelims and final.<br>\
        Your performance could either be a 'mono-act', or a 'stand-up comedy', or both.<br>\
        Languages preferred are English, Hindi, and Telugu.<br>\
        Duration of act should be 4-7mins for the prelims. It is 6-10mins for final round .<br>\
        Registration can be done online or on-spot during Elan & ηvision 2018.</p>\
        <h1>RULES AND REGULATIONS:</h1><p>\ Age limit for the participants is 15-25 years.<br> \
        Any kind of fluid or flame is not allowed on stage.<br>\
        Time limit should be strictly followed failing which there will be deduction in your respective score.<br>\
        Music/background tracks for the performance, if any, are to be arranged by the participants itself.<br>\
        If you need any props for mono-acting then bring your own.<br>\
        Large props like chairs and tables etc. can be arranged, but the participants have to inform earlier.<br>\
        Judge and organisers decisions are final and abiding.</p>\
        <h1>JUDGING CRITERIA:</h1><p>\
        Expressions<br>\
        Sense of humour<br>\
        Acting skills</p>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.9,000.</p>\
        <h1>ORGANISERS:</h1><p>\
        Manthan Chavan - 9657595883</p>\
        ";
    var stage = "<h1>The Stage:Stage play</h1><p>What’s life without a bit of DRAMA? <br>Elan & ηvision 2018 brings you yet another new event where you get to the audience emotionally with your vivid acting skills.Come, participate and take us to another world of story-telling and drama.</p>\
        <h1>EVENT FORMAT:</h1><p>\
        The event will be conducted in one round.<br>\
        There is no specific theme for this event.The participants are free to choose any theme.<br>\
        Languages preferred are English, Hindi, and Telugu.<br>\
        Duration of the play should be 30-45 mins(including stage setup time).<br>\
        Registrations must be done on-line for this event.</p>\
        <h1>RULES AND REGULATIONS:</h1><p>\ The team size should be 5-15 members.<br>\
        Stage play comprises of multiple scenes and may have blackouts.<br>\
        Backstage voiceovers and narrations are allowed during the performance.<br>\
        Pre-recorded music is allowed and should be brought in a pen drive in .mp3 format only. It will not be allowed in any other form.<br>\
        Participants will be provided a laptop and are expected to appoint someone to sit and play during the performance.<br>\
        Music may also be played live. <br>\
        Participants will be provided a light control box, from which the lighting on the stage can be controlled.<br>\
        Any kind of fluids, live animals, flame, heavy and sharp objects or any other material which has a possibility of damaging the stage is STRICTLY not allowed.<br>\
        Time limit should be strictly followed failing which there will be deduction in your respective score.<br>\
        Inappropriate content or content defaming any political party or religious group is strictly prohibited. There should not be any direct implication against anyone.<br>\
        Use of unparliamentary language is strictly prohibited and will lead to disqualification.<br>\
        The props required for the play should be brought by the participants itself.However,large props like chairs and tables etc. can be arranged, but the participants have to inform earlier.<br>\
        The decision of the judges and organizers will be final and binding.</p>\
        <h1>JUDGING CRITERIA:</h1><p>\
        Acting<br>\
        Direction<br>\
        Screenplay <br>\
        Overall impact</p>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.15,000.</p>\
        <h1>ORGANISERS:</h1>\
        ";
    var voice = "<h1>Lend Your Voice</h1><p>A perfect opportunity to test your ability to be creative and prompt together with the presence of mind. Ever thought that you could have delivered the dialogues better than the actors in the movie? Then this is the right place for you to be.Elan & ηvision 2018 presents a unique event \"Lend Your Voice\" </p>\
        <h1>EVENT FORMAT:</h1><p>\ The contestants are provided with an option of a few ACTION HERO VIDEOS.<br>\
        They will be given half hour to choose the video.<br>\
        After choosing the video the participants will be given another half hour for preparation in which they are supposed to come up with a humorous and entertaining version of the video by putting their own voice into the characters.<br>\
        They are then supposed to perform it on stage while the video is being played, with the actual dialogues muted.<br>\
        All the videos will be 1 min long.</p> <h1>RULES AND REGULATIONS:</h1><p>\ It consists of only one round.<br>\
        The participants will be given a given a movie clipping one hour before the competition.<br>\
        During the competition, the audio of the clipping will be muted, and the participants have to make out their own dialogues and deliver it parallel in sequence with the video and must make it as funny as possible.<br>\
        The clippings will be given in English, Telugu or Hindi as per your choice.<br>\
        You will be judged based on the dialogues you make and the way you present it.<br>\
        Use of unparliamentary language is strictly prohibited and will lead to disqualification.<br>\
        The decision of the judges and organizers is final and binding.</p>\
        <h1>JUDGING CRITERIA:</h1><p>\
        Dialogue presentation<br>\
        Creativity</p>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.2,000.</p>\
        <h1>ORGANISERS:</h1>\
        ";
    var film = "<h1>Film Fare Fiesta: A Short film Competition</h1><p>Do you think you can take after Steven Spielberg, Christopher Nolan and James Cameron? Make your own short film, enthral and captivate movie buffs with your creativity. The stage at Elan & ηvision 2018 is set for you. Get judged by esteemed people in film industry.</p>\
        <h1>EVENT FORMAT:</h1><p>\
        The event film fare fiesta is spread over two days.<br>\
        All the entries are judged on the first day to shortlist 6 out of them. These 6 will be judged on second day by esteemed judges.</p>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        Run time should not be more than 20 minutes<br>\
        Movie should be shot at a minimum resolution of 480 pixels. Marks might be reduced due to poor video/ audio quality.<br>\
        Any attempt at copyright infringement can lead to immediate disqualification.<br>\
        Plagiarism is accepted with due credits.<br>\
        Films in languages other than English, Hindi, and Telugu should be accompanied with subtitles.<br>\
        Participants should send their videos/youtube links of the videos to xxx@iith.ac.in .<br>\
        The decision of the organizers and the judges is final and binding. <br></p>\
        <h1>JUDGING CRITERIA:</h1><p>\
        Script<br>\
        Direction<br>\
        Screenplay<br>\
        Costumes<br>\
        Dialogues<br>\
        Cinematography<br>\
        Sound editing/ mixing<br>\
        Visual effects<br></p>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.5,000.<br>\
        The winning team gets to do another short-film with the Chai Bisket team and the film will be uploaded on YouTube onto the Chai Bisket original channel.</p>\
        <h1>ORGANISERS:</h1><p>\
        Pradhyumna M Dinni - 9492586679<br>\
        Dinesh Chandra - 7732000655</p>";
    var picelectic = "<h1>Picelectic: Competition for best pictures taken during Elan & ηvision 2018</h1><p>\
        Portray your photography skills by shooting pictures in,on and about Elan & ηvision 2018. There will be 2 winners announced each day of the 3 days the fest goes on. The pictures can be submitted any time near the counter that is allocated.</p>\
        <h1>EVENT FORMAT:</h1><p>\
        There are no online registrations for this event.<br>\
        There are only on-spot registrations available for this event.</p>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        The captures must be only during the 3 days of the Elan & ηvision 2018 fest and only inside IIT Hyderabad premises.<br>\
        The pics must be taken only using a Digi-cam or a Bluetooth enabled mobile (for transfer purpose).<br>\
        Winner is judged according to the moments captured in the best way.<br>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.3,000.</p>\
        <h1>ORGANISERS:</h1>\
        ";
    var art = "<p>Ever visited an art gallery? Ever checked out those portraits costing so much? Which one of those trillion random colour strokes on the canvas you think makes it so expensive? It's all about language of the heart which uses the paints and a brush to put the emotions flowing in a river of imagination on the canvas. And that is \"ART\".</p>\
        <h1>'EVERYTHING YOU CAN IMAGINE IS REAL' - Pablo Picasso</h1><p>\
        <p>Art is an expression,a representation of what a person's vivid thoughts and emotions speak. Every stroke of the brush dipped, every colour chosen, every shade painted, has its own meaning. So here is Elan & ηvision 2018 encouraging you to come up with your meaningful strokes to be a part of its colourful art gallery. The gallery is open to everyone throughout the fest.</p>\
        <h1>EVENT FORMAT:</h1><p>\
        Registrations can be done online or on the spot.<br>\
        Participants are to submit finished works of art.<br>\
        Paintings will be exhibited throughout the fest in Elan & ηvision 2018 gallery.<br>\
        The three best paintings will be selected and prizes will be announced on the last day of the fest.</p>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        Paintings can be either brought in person or can be sent by post.<br>\
        Entries that are received on or before 9 Feb 2018 will be evaluated. Those received through post during Elan & ηvision 2018 will not be evaluated, only those received in person are evaluated.<br>\
        The painting should be at least of A3 size.<bR>\
        Judges and organisers decision is final and binding.<br>\
        Organizers are not responsible for any delay or damage caused to the entries.</p>\
        <h1>JUDGING CRITERIA:</h1><p>\
        Topic chosen<br>\
        Creativity<br>\
        Coloration Skills</p>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.16,000.</p>\
        <h1>ORGANISERS:</h1><p>\
        Vignatha - 9121386955</p>";
    var face ="<h1>Face Painting:</h1><p>Wanna have some fun with painting?. You think you can have a face funkier than infamous \"THE MASK\". Then here's something interesting for you. Elan & ηvision 2018's Face Painting is back! . Grab a brush and make your friend's face funny and beautiful.</p>\
        <h1>EVENT FORMAT:</h1><p>\
        Registrations will be done on the spot during Elan & ηvision 2018.<br>\
        Each Team must consist of 2 members.<br>\
        The following materials will be provided to you:<br>\ Cosmetic grade face paint<br>\
        Brushes<br>\
        Tissues<br>\
        The event goes on for all the three days during the fest.<br>\
        Winners will be declared for each of the three days.<br></p>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        There are no theme constraints. All kinds of themes and patterns are allowed.<br>\
        Participants should use only the materials provided by the organizers.<br>\
        Decision of judge and the organisers shall be final and abiding.</p>\
        <h1>JUDGING CRITERIA:</h1><p>\ Creativity<br>\
        Time taken<br></p>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.1,000.</p>\
        <h1>ORGANISERS:</h1>\
        ";
    var nail ="<h1>Nail Art</h1><p>Can you add your intricate details creatively on much smaller canvas like finger nails? Then come, show up your talent in 'Nail Art' of Elan & ηvision 2018!!</p>\
        <h1>EVENT FORMAT:</h1><p>\
        Registrations will be done on the spot during Elan & ηvision 2018.<br>\
        Each Team must consist of 2 members.<br>\
        The following materials will be provided to you:<br>\ Nail polishes<br>\
        Nail art pens<br>\
        The event goes on for all the three days during the fest.<br>\
        Winners will be declared for each of the three days.</p>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        Contestants shall use only the paints provided to them by the organizers.<br>\
        There will be a time limit of 7 minutes and you should complete in that time.<br>\
        The decision of the judges and the organisers is final and abiding.</p>\
        <h1>JUDGING CRITERIA:</h1><p>\ Neatness<br>\
        Time duration<br>\
        Attractiveness</p>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.1,000.</p>\
        ";
    var mehendi ="<h1>Mehendi Art</h1><p>Mehndi adorns the hands and Life takes on a new color. So let the henna flow out of your cones and let's see what color it brings to your life.</p>\
        <h1>EVENT FORMAT:</h1>\
        <p>Registrations will be on the spot during Elan & ηvision 2018.<br>\
        Each Team must consist of 2 members.<br>\
        Mehendi cones will be provided by the organisers.<br>\
        Designs are of your own choice.</p>\
        <h1>RULES AND REGULATIONS:</h1><p>\
        There will be a time limit of 1 hour.<br>\
        There is no limit on the number of cones. You can use as many as you want<br>\
        You will be allowed to put mehendi only one hand.<br>\
        The decision of judges and organisers is final and abiding.</p>\
        <h1>JUDGING CRITERIA:</h1><p>\ Attractivness<br>\
        Creativity<b>\
        Neatness </p>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.1,000.</p>\
        <h1>ORGANISERS:</h1>\
        ";
    var clay = "<h1>Clay Modelling</h1><p>Come! Bring life to figments of your own thoughts and imaginations by moulding beautiful structures out of clay! Win exciting prizes!!</p>\
        <h1>EVENT FORMAT:</h1><p>\ Registrations will be on the spot during Elan & ηvision 2018<br>\
        The following materials will be provided to you<br>\ Polymer clay<bR>\
        Paints (if required)<br>\
        One can select his/her own theme or model. Every participant will be given limited amount of clay and time, so one has to really plan out his model so as to not run out of clay.</p>\
        <h1>RULES AND REGULATIONS:</h1><p>\ The amount of clay and paint provided will be limited.Team size should be less than 3.<br>\
        The final results will be announced on the final day of Elan & ηvision 2018.<br>\
        The decision of the organisers and judges is final and abiding to all.</p>\
        <h1>JUDGING CRITERIA:</h1><p>\ Creativity<br>\
        Finishing </p>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.1,000.</p>\
        <h1>ORGANISERS:</h1>\
        ";
    var rj = "<h1>RJ Hunt: Competition for pro RJ s</h1><p>Ever been called a chatterbox? If you are good at entertaining your friends with non-stop, animated, energetic chatter, here's the right platform to test how good you are! Entertain the crowd, and you might probably find yourself among the RJ legends! A ramp to your RJ ying future!</p>\
        <h1>EVENT FORMAT:</h1><p>\
        The event will be conducted in three rounds-on-spot,interview and finals.<br>\
        For the on-spot round,the participants would be given a random topic to speak on for 2 minutes.<br>\
        Based on the on-spot round,10 candidates would be selected for the interview round.<br>\
        These 10 candidates will be interviewed by asking questions and giving them situations.<br>\
        5 candidates will be selected for the final round.<br>\
        In final round, the contestant will have to host a show like an actual RJ does . The Contestants are expected to entertain the audiences by telling stories, current affairs (about Elan & ηvision 2018 ), cinema news, etc. Each contestant has to perform for maximum of 20 minutes.</p>\
        <h1>RULES AND REGULATIONS:</h1><p>\ Registrations can be done online or On Spot.<br>\
        On Spot Registrations will close 1 hour before the commencement of the event<br>\
        This is an individual event.<br>\
        Time limit should be strictly followed. Participant will be heavily penalized by judges for not doing so.<br>\
        The Participants can speak in Telugu, Hindi or English. Other languages are not allowed.<br>\
        Decision of judges and organisers will be final and abiding.<br></p>\
        <h1>JUDGING CRITERIA:</h1><p>\
        Spontaneity<br>\
        Sense of humour<br>\
        Voice<br>\
        Tone of speech</p>\
        <h1>PRIZES:</h1><p>\
        Prizes worth Rs.7,000.</p>\
        <h1>ORGANISERS:</h1><p>\
        Swetha Gummala - 9618110220</p>";
    var lan = "<h1>Lan Gaming</h1><h1>ABOUT</h1>\
        <p>'Fire in the hole'.  If you know what I mean,<br>\
        Come join us for a fun filled day of gaming.<br>\
        Let’s find out, who is the pro!</p>\ <h1>GAMES</h1><p>\
        DoTA 2<br>\
        CS:GO<br>\
        Call of Duty: Modern Warfare 3</p>\ <h1>RULES</h1><p>\
        The teams for DoTA 2, CS:GO need to consist of five members each.<br>\
        The games will be held in a tournament style format.<br>\
        In case of malpractice the concerned team will be disqualified.<br>\
        Organiser’s decision final and binding to all</p>\
        ";
    var destination = "<h1>Final Destiantion</h1>\
        <h1>ABOUT</h1><p>\
        Ever dreamt of finding Blackbeard’s Treasure.<br>\
        If yes then you are just in the right place.<br>\
        ELAN brings to you a real treasure, If you can find it!!</p>\ <h1>RULES</h1><p>\
        Teams should consist of 4 members.<br>\
        The teams should assemble 30 min before the start of the game.<br>\
        There will be different clues to be solved at the different checkpoints.<br>\
        The first team coming at each checkpoint will get the opportunity to perform the task first.<br>\
        Without solving one clue you can't move to the next.<br>\
        The first two teams to complete every task and bag maximum points will be rewarded.<br>\
        Malpractice will lead to disqualification.<br>\
        Organiser’s decision final and binding to all.</p>";
    var food= "<h1>Foodathon</h1>\
        <h1>ABOUT</h1>\
        <p>Haters will hate but 'Food is not a word, It’s a religion'.<br>\
        ELAN invites all the foodies for a real competition.<br>\
        Let’s see who is the biggest foodie. But wait, Is it so simple!!<br>\
        We don’t think so</p>\
        <h1>RULES</h1><p>\
        Individual participation.<br>\
        Onspot registration with limited number of entries.<br>\
        Organiser’s decision final and binding to all.</p>";
    var casino = "<h1>Casino</h1><h1>ABOUT</h1><p>\
        Got the perfect poker face? Think you’re luckier than the rest?<br>\
        Put it to the test at the Casino!<br>\
        For those who have aces up their sleeves, to those who just want to have some fun,the excitement of gambling never dies.<br>\
        Whether it’s the spin of the roulette wheel that catches your eye,<br>\
        or the shouts of ‘hit’ and ‘stay’ from the blackjack table that draw you in, the<br>\
        casino just won’t let you leave. May the odds be ever in your favour!</p>";
    var minute = "<h1>Minute To Win It</h1>\
        <h1>ABOUT</h1><p>\
        Fun and Goodies, What a great combination.<br>\
        Isn’t it? ELAN presents you all the traditional games with a little twist.<br>\
        Get ready to grab some goodies!</p>\  <h1>RULES</h1><p>\
        The events can be performed single or in a group depending on the event.<br>\
        No malpractices.<br>\
        The decision of the organizers is final.</p>";
    var madads = "<h1>Mad Ads</h1>\
        <h1>ABOUT</h1><p>\
        Mad Ads is all about having fun, it’s about laughing and having a good time.<br>\
        Entertain the audience with some hilarious and innovative ads!<br>\
        Well you may get something in return, but only if you are hilarious enough!</p>\
        <h1>RULES</h1><p>\
        This is a group event-group of 4-5.<br>\
        Every member of the group should participate.<br>\
        The Product will be given by the organizers and in no case it can be exchanged.<br>\
        The group will be given 30 minutes for preparing the AD.<br>\
        The AD should be 3 min in length.<br>\
        No vulgarity allowed and sportsmanship to be followed.<br>\
        Organiser’s decision final and binding to all.</p>\
        ";
    var ramp = "<h1>Walk The Ramp</h1>\
        <h1>ABOUT</h1>\
        <p>You got the confidence to set the ramp on fire?<br>\
        Think you have the presence of mind to impress the judges?<br>\
        Then walk the plank, i mean, the ramp.<br>\
        A ramp walk, followed by a Q&A session with the judges.<br>\
        Winners take home the titles of Mr and Ms Elan.</p>\
        <h1>RULES</h1><p>\
        Online as well as on-spot registration.<br>\ Judges decision is final.</p>\
        ";
    var social = "<h1>Social Experiment</h1>\
        <h1>ABOUT</h1>\ <p>Have you were been PRANKED before ?<br>\
        Have you were been asked random general questions ?<br>\
        If NO is your answer to these, get ready to experience them soon ;P</p>";
    var wheel = "<h1>Wheel-Of-Fortune</h1>\
        <h1>ABOUT</h1><p>\
        Like to quiz? Here’s a chance to put those grey cells to work.<br>\
        But don’t forget to get your lucky charms because the stakes are high!<br>\
        May the odds always be in your favour…</p>\
        <h1>RULES</h1><p>\
        Participation in teams of 2.<br>\
        Organiser’s decision final and binding to all.<br>\
        Online and On-spot registration with limited number of entries.</p>\
        ";
    var snakes = "<h1>Snakes and Ladders</h1>\
        <h1>ABOUT</h1><p>\
        The name says it all doesn’t it?<br>\
        Indulge yourself in in the favourite board games of all times.</p>\
        <h1>RULES</h1><p>\
        Onspot registration.<br>\
        Organiser’s decision final and binding to all.</p>";
    var plane ="<h1>Paper Plane</h1>\
        <h1>ABOUT</h1><p>\
        Get ready to give life to the piece of paper to fly higher with the help of your creative and engineering skills.<p>\
        <h1>RULES</h1>\
        <p>Onspot registration.<br>\
        Organiser’s will describe the rules.</p>\
        ";
    var coffee = "<h1>Coffee Conversation</h1>\
        <h1>ABOUT</h1>\
        <p>A hot cuppa to share with a friend may be some people’s idea of heaven.<br>\
        They have it made for them in Conversation coffee, where participants<br>\
        get to talk with a complete stranger for a stipulated time,<br>\
        and have to answer questions about the person  they were teamed up with.<br>\
        The team that answers most questions correctly wins, but everyone goes home   having made a new friend. Cheers!</p>\
        <h1>RULES</h1>\
        <p>Partners will be assigned by random chits.<br>\
        Participants will be given 10 minutes with their partners.<br>\
        The most correct answers will win.</p>";
    var elanejung = "<h1>Elan-E-Jung</h1><p>\
        Travel on a double bass and riff through the jungle which has creatures who are calm like a bomb. Elan is back with its signature Event, the metal battle. Get ready to put the stage on Wildfire.<br>\
        'For those about to rock, we salute you!'' - AC/DC<br>\
        <h1>Event Format</h1>\ <p>This event will consist of 2 rounds</p>\  <h1>Prelims:</h1>\ <p>Each band interested in participating should upload their demos/videos to <a   href='https://drive.google.com/drive/folders/1CfX1U7KmDeJQPNSaJeQ7n6xPvQy2Dh6K?usp=sharing'>This Drive</a>\
        Out of this 5 bands will be shortlisted, and will be performing at Elan-e-Jung prelims, Elan 2018.<br>\
        Each band will be given 20 minutes to perform including sound check.</p>\
        <h1>Finals:</h1>\
        <p>Winners of the prelims will go through the finals.<br>\
        Each band will be given 20 mins to perform on stage including sound check (subjected to changes).<br>\
        The winner and the first runner up will be given prizes. (Not yet decided).</p>\
        <h1>Rules and Regulations:</h1>\
        <p>Language of songs is not a criterion. The band can be fully instrumental as well. The genre of the band should be any variation of metal. <br>\
        No band can have more than 7 members. Also, no person can play for more than 2 different bands.<br>\
        The bands cannot share the same frontman.<br>\ IIT Hyderabad reserves the right to shift any band's slot timings at any point of time before the prelims.<br>\
        In case of any damage to the provided equipment, the band will be fined for the damage and may be disqualified.<br>\ The decision is dependent on the nature of the damage and the judges' discretion. <br>\
        IIT Hyderabad reserves the right to cancel the event in case of some unforeseen circumstances.<br>\ In case of any dispute the decision of the organizers will be final and binding.<br>\
        Consumption of Alcohol and Drugs is strictly prohibited on Campus.</p>\
        <h1>Contact Person:</h1><p>\
        Kabir Sharda<br>\
        kabir@elan.org.in<br>\
        9867327421</p>\
        ";
    var manthan = "<h1>Manthan</h1>\
        <h1>Event Format</h1>\ <p>This event will consist of 2 rounds</p>\  <h1>Prelims:</h1>\ <p>Each band interested in participating should upload their videos on <a href='https://drive.google.com/drive/folders/1iXDE-BvcyYqf4840BDVmcJTj-wCiVDsZ?usp=sharing'>This Drive</a><br>\  Out of this 5 bands will be shortlisted, and will be performing at Manthan prelims, Elan 2017.<br>\
        Each band will be given 20 minutes to perform including sound check.<br>\
        <h1>RULES AND REGULATIONS</h1>\
        <p>Any non-professional band is allowed to register. You need not be a college band to participate in this event.<br>\
        Language is no criterion. We are looking for bands that play fusion music (anything except metal) and in any language.<br>\
        Registering team should send/upload one demo in the process of registration. The demo need not be a studio recording.<br>\
        Incorrect information will result in disqualification, whether discovered prior to, during or after the finals and the Candidate shall be liable to the Organizers for such misrepresentation.<br>\
        Candidates must conduct themselves in a proper manner and portray high moral standards. Candidates will not consume any alcoholic beverages, use illegal drugs or public smoking or use foul language or should not misconduct in any way during the course of the entire event.<br>\
        The Judges' decision shall be final and binding for all.<br>\
        The decision of the organizers with respect to line-up is final and abiding.<br>\
        The Elan 2017 team holds the right to change the rules at any moment of time.</p>\
        <h1>JUDGING CRITERIA</h1><p>\
        The winners of the prelims will go through to the finals.<br>\
        The winners will be announced by the judges immediately after the event. Judge’s decision is considered final and should be abided by everyone.<br>\
        All the finalists will be given the participation certificates.<br>\
        The prize money will be distributed only among the top 2 contestants.<br>\
        The crowd‘s response is considered important.<br>\
        The following will be looked in the contestants/bands performance:<br>\
        Entertainment<br>\
        Public involvement<br>\
        Energy<br>\
        Attitude<br>\
        The winner and the first runner up will be given prizes. (Not yet decided).</p>\          <h1>Rules and Regulations:</h1><p>\
        Language of songs is not a criterion. The band can be fully instrumental as well. The genre of the band should be any variation of metal. <br>\
        No band can have more than 7 members. Also, no person can play for more than 2 different bands.<br>\ The bands cannot share the same frontman.<br>\ IIT Hyderabad reserves the right to shift any band's slot timings at any point of time before the prelims.<br>\ In case of any damage to the provided equipment, the band will be fined for the damage and may be disqualified.<br>\
        The decision is dependent on the nature of the damage and the judges' discretion. <br>\
        IIT Hyderabad reserves the right to cancel the event in case of some unforeseen circumstances.<br>\ In case of any dispute the decision of the organizers will be final and binding.<br>\
        Consumption of Alcohol and Drugs is strictly prohibited on Campus.</p>\      <h1>Contact Person:</h1>\
        <p>Kabir Sharda<br>\
        kabir@elan.org.in<br>\
        9867327421</p>\
        ";
    var detective = "<h1>Mr Detective</h1>\
        <p>In this event, the contesting parties will be provided a story detailing a weird event (Think failed heists, murders, smashed cookie jars and stuff). With the help of supreme reading comprehension skills and mental mettle, contestants will attempt to serve justice.</p>\
        <h1>Rules:</h1><p>\ a) This is an offline event. Any questions/hint requests will be addressed at the discretion of the organiser(s).<br>\
        b) Contesting parties should have no more than 4 people. A Party can consist of a single person as well, despite the inherent sadness of a single person party.</p>\
        <h1>Judging Criteria:</h1><p>\
        a) Soundness of the explanation offered - Both logically and in ability to explain various narrative events.<br>\
        b) Time taken to come up with explanation.</p>";
    var conclave = "<h1>Quiz Conclave</h1><p>\
        Jack of all trades or master of one ? Find out at quiz conclave which pampers and punishes participants with a choice of x quizzes in x different fields. In this quizzes, the quizmaster will make you call in your inner pop culture guru to reveal just exactly how much anime you binge watched. Do you feel lucky , may the odds be with you.</p>\
        <h1>Rules:</h1><p>\
        0. This obviously is an offline event.<br>\
        1. The first rule of the Quiz Club is quizmaster's decision is final.<br.\
        2. No peeking. We call on your quizzer's honor.<br>\
        3. ‎Ships are safe in the harbour but that is not their purpose. Quizzers are safe with Google but that is not their purpose. Don't use Google or anything more than your gray matter.</p>";
    var elmatrico = "<h1>Elmatrico</h1>\
        <p>Computer Simulations is an important aspect in the engineering world. This increases the demand for people who can use MATLAB and Simulink well.<br>\
        ELAN & Nvision presents 'EL MATRICO', an online event to inspire students acquaint with MATLAB and compete to show their potential to the world! Every year, hundreds of contestants compete with budding programmers from all over India to earn the coveted top spot. In this online contest.<br>\
        Exciting prizes from mathworks awaits for participants who successfully complete easy and moderate questions.<br>\
        Login to read Problem statements, Rules and more…</p>\
        <h1>ELMATRICO RULES</h1><p>\
        The competition must be played individually.<br>\
        The problem statement is divided into 3 parts - easy , moderate and difficult.<br>\
        All the question in easy part carries 5 marks,moderate 10 marks and difficult 30 marks.<br>\
        Plagiarism will result in disqualification.<br>\
        All the relevant information regarding The question is given in the question itself.<br>\
        The organisers verdict is final.</p>\
        ";
    var quadcopter = "<h1>Quadcopter Challenge</h1>\
        <h1>Introduction:</h1><p>\
        Design and build a wireless remote controlled flying drone to complete the tasks with highest points possible. There are two Levels in the competition, of which the second one is a surprise Level which will be disclosed at the venue.<br>\
        Top 3 teams from ROUND-1 are eligible to compete in ROUND-2.</p>\
        <h1>Problem Statement:</h1><p>\
        The event is based on finding the most agile and fastest drone. The problem statement is simple: pass through three rounds and the team with maximum number of points wins.</p>\
        <h1>Team Specifications:</h1>\
        <p>1)Team can have a max of 5 people.<br>\
        2)Participants from a team can be from different colleges.</p>\
        <h1>Certificate Policy:</h1><p>\
        1)Certificate of Merit and Prizes will be given for the top two teams.<br>\
        2)Participation Certificate will be given for those who registered online and participated in the event.<br>\
        3)Participation Certificate is not guaranteed for those who registered onspot for the event.</p>\
        <h1>Organisers</h1><p>\
        <p>Saurav. C<br>\
        es16btech11007@iith.ac.in<br>\
        9618480733<br>\
        Sai Raj.  B<br>\
        me15btech11006@iith.ac.in<br>\
        7660801623<br>\
        ";
    var paperpt = "<h1>PAPER PRESENTATION</h1>\ <h1>Introduction:</h1>\
        <p>Participants are invited to present papers spanning various research topics pertaining to the different branches of engineering and science. We expect to see some really innovative work. It will be conducted in 2 rounds, selected students in first will give their presentation in final round in ELAN&ηvision 2018.</p>\
        <h1>Judging Criteria:</h1>\
        <p>Correctness of facts<br>\
        Methods of analysis<br>\
        Innovativeness of idea<b>\
        Presentation of solution or ideas<br>\
        Practical feasibility or implication of ideas</p>\
        <h1>Rules:</h1><p>\
        The abstract should not exceed 500 words.<br>\
        Short listing will be done based on the abstract.<br>\
        All relevant data and figures must be represented in the paper<br>\
        Organizers decision will be final and binding.<br>\
        Teams of maximum 3 members are allowed.<br>\
        Nominal fee will be charged at the time of presentation of paper(if selected).<br>\
        All results will be announced on the website and will be mailed to the team members.<br>\
        Any abstract that is selected and is not presented shall not qualify for any award.</p>\
        ";
    var def = "<h1>Comming Soon...</h1>";
    
    if(name == "dtmf") {
      $('#details').html(dtmf);
    } else if (name == "bloopers") {
      $('#details').html(bloopers);
    } else if (name == "iot") {
      $('#details').html(iot);
    } else if (name == "jugaad") {
      $('#details').html(jugaad);
    } else if (name == "junkyard") {
      $('#details').html(junkyard);
    } else if (name == "bridge") {
      $('#details').html(bridge);
    } else if (name == "salesman") {
      $('#details').html(salesman);
    } else if (name == "crowd") {
      $('#details').html(crowd);
    } else if (name == "cadpro") {
      $('#details').html(cadpro);
    } else if (name == "drift") {
      $('#details').html(drift);
    } else if (name == "robowars") {
      $('#details').html(robowars);
    } else if (name == "robosoccer") {
      $('#details').html(robosoccer);
    } else if (name == "robopirates") {
      $('#details').html(robopirates);
    } else if (name == "linerobot") {
      $('#details').html(linerobot);
    } else if (name == "aquanet") {
      $('#details').html(aquanet);
    } else if (name == "galileo") {
      $('#details').html(galileo);
    } else if (name == "enigma") {
      $('#details').html(enigma);
    } else if (name == "hackamaze") {
      $('#details').html(hackamaze);
    } else if (name == "algo") {
      $('#details').html(algo);
    } else if (name == "quest") {
      $('#details').html(quest);
    } else if (name == "automobile") {
      $('#details').html(automobile);
    } else if (name == "scitech") {
      $('#details').html(scitech);
    } else if (name == "breakfree") {
      $('#details').html(breakfree);
    } else if (name == "nrithyanjali") {
      $('#details').html(nrithyanjali);
    } else if (name == "stepup") {
      $('#details').html(stepup);
    } else if (name == "vibrazione") {
      $('#details').html(vibrazione);
    } else if (name == "octave") {
      $('#details').html(octave);
    } else if (name == "djwars") {
      $('#details').html(djwars);
    } else if (name == "nukkad") {
      $('#details').html(nukkad);
    } else if (name == "andaaz") {
      $('#details').html(andaaz);
    } else if (name == "stage") {
      $('#details').html(stage);
    } else if (name == "voice") {
      $('#details').html(voice);
    } else if (name == "film") {
      $('#details').html(film);
    } else if (name == "picelectic") {
      $('#details').html(picelectic);
    } else if (name == "art") {
      $('#details').html(art);
    } else if (name == "face") {
      $('#details').html(face);
    } else if (name == "nail") {
      $('#details').html(nail);
    } else if (name == "mehendi") {
      $('#details').html(mehendi);
    } else if (name == "clay") {
      $('#details').html(clay);
    } else if (name == "rj") {
      $('#details').html(rj);
    }else if (name == "lan") {
      $('#details').html(lan);
    }else if (name == "destination") {
      $('#details').html(destination);
    }else if (name == "food") {
      $('#details').html(food);
    }else if (name == "casino") {
      $('#details').html(casino);
    }else if (name == "minute") {
      $('#details').html(minute);
    }else if (name == "madads") {
      $('#details').html(madads);
    }else if (name == "social") {
      $('#details').html(social);
    }else if (name == "wheel") {
      $('#details').html(wheel);
    }else if (name == "snake") {
      $('#details').html(snake);
    }else if (name == "plane") {
      $('#details').html(plane);
    }else if (name == "coffee") {
      $('#details').html(coffee);
    }else if (name == "elanejung") {
      $('#details').html(elanejung);
    }else if (name == "manthan") {
      $('#details').html(manthan);
    }else if (name == "femina") {
      $('#details').html(femina);
    }else if (name == "conclave") {
      $('#details').html(conclave);
    }else if (name == "detective") {
      $('#details').html(detective);
    }else if (name == "elmatrico") {
      $('#details').html(elmatrico);
    }else {
      $('#details').html(def);
    }


      

      
      var id = $(this).attr('id');
      var link = "/newsite/register/"+id;
      console.log(id);
      $('#reglink').attr('href','/register/'+id);
      $('#techdiv').slideUp('slow');
      $('#cultdiv').slideUp('slow');
      $('#onlinediv').slideUp('slow');
      $('#litrdiv').slideUp('slow');
      $('#infidiv').slideUp('slow');
      $('#biggiesdiv').slideUp('slow');
      $('.event-details').slideToggle('slow');
      $('.register-div').fadeIn('slow');
      $('.navbtn img').addClass('navimg2');
      $('.navbtn img').removeClass('navimg1');
      $('.register-link').attr("href",link)

    });
    

