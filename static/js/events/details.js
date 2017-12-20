$('.card').on('click',function () {
      var name = $(this).attr('id');
      console.log(name);

      var dtmf = "<h1>Introduction</h1>\
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
    var bloopers = "<h1>Introduction</h1> \
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
    var iot = "<h1>Introduction:</h1><br>\
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
    var jugaad= "<h1>Introduction</h1><p>\
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
    var junkyard ="<h1>Introduction</h1>\
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
    var bridge = "<h1>Introduction</h1>\
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
    var salesman ="<h1>Introduction:</h1>\
        <p>This events tests the sales capability of participants and also shows their convincing power. We believe that sales is also one of the quality of entrepreneurship. This tests that quality.</p>\
        <h1>Event rules:</h1>\
        <p>Every participant gets the same amount of products that they need to sell to random people.</p> \
        <h1>Judging Criteria:</h1>\
        <p>Whoever sells them all first wins the event.</p>\
        <h1>Prize money</h1><p>\
        Organisers:<br>\
        Prize money:\
        </p>";
    var crowd = "<h1>Introduction:</h1>\
        <p>This event encourages people to express their idea in front of the crowd. This event focusses on the skills required for pitching in front of large crowds. Pitch is the first thing that is required by any entrepreneur. The main aim of the event is to decide the best pitch.</p>\
        <h1>Event Rules:</h1><p>\ 1.  Every participant is given a virtual money which he can invest in other people’s ideas.<br>\
        2.  No participant cannot spend any money on his own idea. <br>\
        3.  No participant cannot spend more than half of the money on one idea.<br>\ 4.  Each participant has to spend his money on at least three ideas.<br>\
        <h1>Judging criteria:</h1><p>\
        The idea that receives maximum virtual money wins the event.<br>\ <h1>Prize money</h1><p>\Organisers:<br>\ Prize money:\
        </p>";
    var cadpro = "<h1>ntroduction:</h1>\
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
    var drift = "<h1>Introduction:</h1>\
        <p>Want to try making an IC engine? Drift king gives you a chance to design a machine with given constraints. In this event, the contestants are expected to make to an IC engine powered machine, that can be controlled remotely using a wireless remote controller, which can race against machines of similar construct on an all-terrain track packed with a number of obstacles.</p>\
        <h1>Problem statement:</h1>\
        <p>In this event ,the contestants are expected to make to an IC engine powered machine ,that can be controlled remotely using a wireless remote controller, which can race against machines of similar construct on an all-terrain track packed with a number of obstacles.</p>\
        <h1>General Rules</h1>\
        <p>A team can have a maximum of 4 members.</p>\
        <h1>Prize money</h1>\
        <p>Organisers:<br>\
        Prize money:\
        </p>";
    var robowars = "<h1>Introduction</h1>\
        <p>Interested in designing a bot? Want to test your robotic skills? The challenge is to create a robot (manually controlled / autonomous) whose sole purpose is to immobilize or otherwise move your opponent out of the arena within a stipulated time. This event aims to test your Robot against another in a field of combat where brute strength and cat-like reflexes hold the key to success.</p>\
        <h1>Problem statement:</h1>\
        <p>The challenge is to create a robot (manually controlled / autonomous) whose sole purpose is to immobilize or otherwise move your opponent out of the arena within a stipulated time. This event aims to test your Robot against another in a field of combat where brute strength and cat-like reflexes hold the key to success.</p>\
        <h1>Prize money</h1>\
        <p>Organisers:<br>\
        Prize money:\
        </p>";
    var robosoccer = "<h1>Introduction:</h1>\
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
    var robopirates = "<h1>Introduction</h1>\
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
    var linerobot = "<h1>Introduction</h1>\
        <p>The objective of this contest is for a robot to follow a black line on a white background, without losing the line, and navigating several 90 degree turns. The robot to complete the course in the shortest period of time while accurately tracking the course line from start to finish wins.</p>\
        <h1>Prize money</h1><p>\
        Organisers:<br>\
        Prize money:</p>\
        ";
    var aquanet = "<h1>Introduction:</h1>\
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
    var galileo = "<h1>Introduction</h1>\
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
    var enigma = "<h1>Introduction:</h1>\
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
    var hackamaze = "<h1>Introduction:</h1><p> \
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
    var algo = "<h1>Introduction</h1> \
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
    var quest = "<h1>Introduction:</h1>\
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
    var automobile ="<h1>Introduction:</h1><p> \
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
    var scitech = "<h1>Introduction:</h1><p> \
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
    }


      

      
      var id = $(this).attr('id');
      console.log(id);
      $('#reglink').attr('href','/register/'+id);
      $('#techdiv').slideUp('slow');
      $('#cultdiv').slideUp('slow');
      $('.event-details').slideToggle('slow');
      $('.navbtn img').addClass('navimg2');
      $('.navbtn img').removeClass('navimg1');
    });
    $('.navimg2').on('click',function () {
      $('.event-details').slideToggle('slow');
      $('#techdiv').slideToggle('slow');
      $('.navimg2').addClass('navimg1');
      $('.navimg1').removeClass('navimg2');
    });
