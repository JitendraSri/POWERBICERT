document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('certificateForm');
    const rollNoInput = document.getElementById('rollNo');
    const canvas = document.getElementById('certificateCanvas');
    const downloadLink = document.getElementById('downloadLink');
    const certificateResult = document.getElementById('certificateResult');
    const notRegisteredMessage = document.getElementById('notRegisteredMessage');
    const ctx = canvas.getContext('2d');
    
    // --- YOUR STUDENT DATA IN A SINGLE JAVASCRIPT OBJECT ---
const studentsData = {
  "015/LE/CAI/2025": "KOTHAPALLI HARI SATYANARAYANA",
  "008/LE/CAI/2025":"RAVIPATI CHAITANYA RAMAKRISHNA",
  "24A81A4301": "ACHANTA HARSHINI",
  "24A81A4303": "ADURI TEJASWINI",
  "24A81A4304": "ARTHMURI MANIKANTA REDDY",
  "24A81A4305": "BADETI USHA KIRAN",
  "24A81A4306": "BOGIREDDY SAI KUMAR",
  "24A81A4308": "BOLLADA YASWANTH DURGA VARA PRASAD",
  "24A81A4309": "CHINIMILLI DEVI SRI CHARAN",
  "24A81A4310": "DANGETI PAVAN",
  "24A81A4311": "DASARI AJAY KUMAR",
  "24A81A4312": "DHARANALA PRANAVI",
  "24A81A4313": "DODDIGARLA RAMYA TEJA",
  "24A81A4315": "GADIGATLA AASHRITHA",
  "24A81A4319": "GONNURI BHAVISHYA SAI AKSHARA SRI",
  "24A81A4320": "GONUGUNTA LIKHITHA",
  "24A81A4321": "GUDEPU KYATHI LAHARI",
  "24A81A4323": "GUGGILAPU ANU SRI SAI",
  "24A81A4324": "KAMINA SHARVANI PHANI SREE LAKSHMI SRINIDHI",
  "24A81A4328": "KESAVARAPU PURNA KANAKA NAGA ISWARYA",
  "24A81A4329": "KOLLIPARA JANAKI PRANAHITHA",
  "24A81A4331": "KONDREDDI NAVYA SINDHUJA",
  "24A81A4332": "KOVVURI BHASKAR SIVA KUMAR REDDY",
  "24A81A4333": "KUDAVALLI GANGA ABHILASH",
  "24A81A4334": "KUDUPUDI HASINI",
  "24A81A4335": "MULLAPUDI PRADEEP VENKATA SAI",
  "24A81A4336": "MUPPIDI SYAMA SAI DEEPIKA",
  "24A81A4339": "NEKKANTI BHUVANA SAI DEEPTHI",
  "24A81A4343": "PASUMARTHI JAGAN MOHAN",
  "24A81A4345": "PERUMALLA JYOTHSNA",
  "24A81A4346": "PULLA S R S PHANI NARAYANA",
  "24A81A4347": "PUVVALASARI REVATHI",
  "24A81A4348": "REDDI SAI",
  "24A81A4349": "SUNDARAPALLI CHARAN PRABHU",
  "24A81A4350": "SANNIDHI L NAGA VASAVI ANNAPURNA TAYARU",
  "24A81A4353": "SANAMANDRA VINAY BABU",
  "24A81A4354": "SATTI ANNAPURNA",
  "24A81A4356": "THOTA DEVI SUSHMITHA",
  "24A81A4357": "THOTA TEJA GANGADHAR",
  "24A81A4358": "UPPULURI NAGA SAI SRI NAVYAGNA",
  "24A81A4360": "UPPALA LOHITH",
  "24A81A4362": "VARI YAMINI VENKATA SRIVALLI",
  "24A81A4365": "YARRAGOGULA DILEEP KUMAR",
  "24A81A4366": "YARRAMSETTI NIRANJAN KUMAR",
  "24A81A4368": "ALLU HEMA SRIVALLI",
  "24A81A4386": "KANTETI SRI DURGA MOUNIKA",
  "24A81A4389": "KOPALLI BABY VENKATA SAI DHANA SREE",
  "24A81A4399": "MAMUDURI DEVI SRI CHARAN",
  "24A81A43A6": "NAKKA DURGA RAMESH",
  "24A81A43A8": "PALLA MOHANA SANDHYA",
  "24A81A43B2": "PAMULA SATISH",
  "24A81A43B8": "RAVILISETTY GEETANJALI",
  "24A81A43D0": "YADLAPALLI SRIHARSHA",
  "24A81A4407": "BANDARU RENUKA SAI",
  "24A81A4408": "BATHINA PRASAD",
  "24A81A4409": "BEERA DIVYA",
  "24A81A4412": "BOTTA NAVEEN KUMAR",
  "24A81A4416": "CHODIPILLI ABHINAV SRIKRISHNA",
  "24A81A4418": "DONGA KAVYA SRI LAKSHMI SOWMYA",
  "24A81A4420": "GANASALA VATHSALYATHA",
  "24A81A4421": "GIDDA JAHNAVI VENKATA SAI RAMYA",
  "24A81A4422": "GODAVARI DURGA SRI SAI DINESH YADAV",
  "24A81A4424": "GUTHULA VASU TEJA",
  "24A81A4428": "KALA NAGA SATYA KARTHEEK",
  "24A81A4430": "KASULA LAKSHMI NANDINI",
  "24A81A4431": "KATTULA SUMANA SRI",
  "24A81A4435": "KUNDETI DEDEEPYA",
  "24A81A4436": "MADIRE TIRUMALA NAGA PRATHYUSHA",
  "24A81A4437": "MALLA VIJAY SAI",
  "24A81A4438": "MALLARAPU CHESHMA SRI LAKSHMI PRAHARSHITHA",
  "24A81A4439": "MANE JITHENDRA SWAMY",
  "24A81A4440": "MANYAM VAISHNAVI",
  "24A81A4441": "NAGIREDDY SRIYA SWATHI NAGA SAILAJA",
  "24A81A4444": "PALA LASYASRI",
  "24A81A4445": "PALAPARTHI KULADEEP KUMAR",
  "24A81A4446": "PATSA PADMA PRIYA",
  "24A81A4447": "PECHETTI JOGENDAR PEDDIRAM",
  "24A81A4450": "PONALA GOWTHAMI SAI MADHAVI",
  "24A81A4352": "SAMMINGI LOKESH SAI SUBRAHMANYAM",
  "24A81A4454": "SAYYAD SIDDIQ ALI",
  "24A81A4455": "SHAIK AFRIN",
  "24A81A4457": "SHANMUKHI RISHITHA",
  "24A81A4461": "THETHALI LAKSHMI SURYA",
  "24A81A4463": "VALLURI DAKSHINYA",
  "24A81A4465": "VENKATA SIDHI PATI",
  "24A81A6106": "BANDARU DEEKSHITA SAI PRABHA",
  "24A81A6108": "BATTINA SAI TEJASRI",
  "24A81A6110": "CHAKKA MOHANA SRILAKSHMI ALEKHYA",
  "24A81A6132": "KARRI PURNIMA",
  "24A81A6136": "KOTIPALLI S R V ANJI KRISHNA CHAITANYA",
  "24A81A6137": "KOVVURI PUJITHA SRIYA",
  "24A81A6144": "NARINA SAI HARSHINI",
  "24A81A6149": "PILLA KHYATHI VARSHINI",
  "24A81A6151": "PUTTA SAI DIMPU",
  "24A81A6156": "SINGULURI HARIKA JAHNAVI",
  "24A81A6157": "SRIDHARA NAGA VENKATA SATYA SAI SARANYA",
  "24A81A6160": "TOLETI SYAMA RATNA YASASWINI",
  "24A81A6161": "TRIPURARI DIVIJA",
  "24A81A6162": "VATTI LAKSHMI MADHURI",
  "24A81A6178": "BYRRAJU GOPI CHANDANA",
  "24A81A6181": "CHANAPATHI BHANU KEERTHANA",
  "24A81A6184": "DESAMSETTY TEJASWI",
  "24A81A6185": "DESINASETTI SWATHI",
  "24A81A6199": "MADDISETTI RAMA VENKATA LAKSHMI",
  "24A81A61A4": "MIDDE JAI SURYA",
  "24A81A61A5": "MOHAMMAD AYESHA",
  "24A81A61A6": "MOHAMMAD SAYYAD BAJI",
  "24A81A61A9": "NADIPALLI SRIMANTH KUMAR",
  "24A81A61B3": "PALLI JESSY",
  "24A81A61B4": "PANTHAKANI CHAITANYA SWARUP",
  "24A81A61B6": "PITTA BHARADWAJA",
  "24A81A61B9": "PRADEEP PULI",
  "24A81A61C0": "RAJAHMUNDRY SRAVANI",
  "24A81A61C1": "RAMISETTI ANANTHA NAGA SAI RAM",
  "24A81A61C2": "SAGA SURYA",
  "24A81A61C4": "SHAIK RIZWANA",
  "24A81A61C5": "SODIMELLA SRUTHI",
  "24A81A61C6": "THOTA VENKATA DURGA SAIRAM SUBRAHMANYAM",
  "24A85A4302": "KOTHAPALLI HARI VENKATA SAI MANI KUMAR",
  "24A85A6107": "SARVASUDHI PRAVEEN SRINIVAS",
  "24A85A6108": "SAYYED RAHIMUDDIN",
  "24A85A6111": "KURELLA JASWANTH NAGA VENKATA GANGADHAR",
  "23A81A4328": "KOOLI VENKATAESWARA RAO",
  "23A81A4337": "MANDA PRUDHVI",
  "23A81A4339": "MEDIDI SATHVIK",
  "23A81A4379": "BATHI LEELA KRISHNA",
  "23A81A4383": "CHALLA SATYANARAYANA",
  "23A81A4392": "GOPI VIGNESH",
  "23A81A4397": "IBBA DEVENDRA SAGAR",
  "23A81A4399": "KANCHERLA TEJESWAR",
  "23A81A43A6": "KOPPINEEDI PRANAY KALI KRISHNA SAI",
  "23A81A43A7": "KORLEPARA N J K AYYAPPA",
  "23A81A43A9": "KUNDALA LAKSHMI SRINIVAS",
  "23A81A43C0": "NAVELE NEEHAR",
  "23A81A43C4": "PATTULA JASHUVA",
  "23A81A43C6": "REDDY NIKHIL SAI TEJA",
  "23A81A6112": "DOKKA CHINNARI",
  "23A81A6121": "GUTTULA SRI LAKSHMI",
  "23A81A6125": "KABOTULA TEJAS SAINADH KUMAR",
  "23A81A6134": "KUNA JYOTHI SRI LAKSHMI",
  "23A81A6150": "PASALAPUDI CHANDINI",
  "23A81A6160": "TANINKI DURGA NAGA SURYA MOHITH",
  "23A81A61B6": "RAVAADA NAGA GOWTAMI",
  "23A81A61B8": "RUTTALA SUBHASRI",
  "23A81A4361": "TALABATTULA JITENDRA SRI",
  "23A81A61C1": "SHAIK FAYAZ AHMED",
  "23A81A4303": "KOTA SRI SAI MAHALSA",
  "23A81A6101": "ARUMELLI VENKATA SAI DURGA PRAKASH",
  "23A81A6149": "PALLAPOTHU VENKATA RAGHAVA AVINASH",
  "23A81A6133": "KOTHA KARTHIKEYA RAMALINGESWARA GUPTA",
  "22A81A4385": "GRANDHI DILEEP KUMAR",
  "22A81A4395": "KONDETI GAYATHRI VARAPRASADHINI",
  "22A81A4359": "VINAY SIDDHA"

};
    // -------------------------------------------------------------

    const certificateTemplate = new Image();
    certificateTemplate.src = 'Blue Gold Elegant Certificate of Participation.png'; 

    certificateTemplate.onload = () => {
        canvas.width = certificateTemplate.width;
        canvas.height = certificateTemplate.height;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const rollNo = rollNoInput.value.toUpperCase().trim();

            const name = studentsData[rollNo];
            
            certificateResult.style.display = 'none';
            notRegisteredMessage.style.display = 'none';

            if (name) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(certificateTemplate, 0, 0);

                ctx.font = '60px Arial'; 
                ctx.fillStyle = '#000'; 
                ctx.textAlign = 'center';
                
                const textX = canvas.width / 2;
                // DROPPING THE NAME BY 7 PIXELS
                const textY = canvas.height * 0.45 + 7;

                ctx.fillText(name, textX, textY);

                const dataURL = canvas.toDataURL('image/png');
                downloadLink.href = dataURL;
                downloadLink.download = `POWER_BI_Certificate_${name}.png`;
                downloadLink.style.display = 'inline-block';
                certificateResult.style.display = 'block';

            } else {
                notRegisteredMessage.style.display = 'block';
            }
        });
    };
});
