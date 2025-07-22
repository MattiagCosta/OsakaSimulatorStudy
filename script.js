const ITEMS_LIST = [
	"akazukinCap",
	"alianCap",
	"antenaCap",
	"aoringoCap",
	"asukaMimi",
	"bodyBlade",
	"bodyVac",
	"bodyVibrator",
	"chair",
	"chiyoCap",
	"chiyoMimi",
	"chuchu",
	"clothAzmanga",
	"clothBlue",
	"clothCheerLeader",
	"clothDefault",
	"clothHatan",
	"clothPink",
	"clothPink2",
	"clothTrainingA",
	"clothTrainingB",
	"clothYamayuri",
	"conga",
	"diabolos",
	"domohornWinkle",
	"door",
	"ending",
	"etona",
	"etonaBraceletL",
	"etonaBraceletR",
	"etonaKubiwa",
	"etonaOsage",
	"etonaWing",
	"flypanB",
	"furin",
	"greenCap",
	"haibane",
	"haibaneRing",
	"helmetCap",
	"henshinBelt",
	"houchou",
	"iceCream",
	"jazi",
	"jaziYellow",
	"kitarouCap",
	"kosmosCap",
	"kotatsu",
	"kumaMimi",
	"kurobuchiMegane",
	"leotard",
	"lightSaber",
	"maidCap",
	"milk",
	"momo",
	"momoMimi",
	"mugiwaraCap",
	"multiMimi",
	"nekoMimi",
	"nekoShippo",
	"nenekoCap",
	"nurseCap",
	"osageCap",
	"otama",
	"pajamaOrange",
	"papaMakura",
	"punchingBag",
	"reiMimi",
	"reizouko",
	"ribbonDeFronCap",
	"saruMimi",
	"saruShippo",
	"segway",
	"senpuki",
	"shampooCap",
	"starMegane",
	"summerCap",
	"swim",
	"swimNoSholder1",
	"swimNoSholder2",
	"swimSholder1",
	"swimSholder2",
	"teleporter",
	"tv",
	"usaMimi",
	"witchCap"
];

const FRESH_START_YEN = 50000;
const FRESH_START_ITEMS = ["chair", "clothDefault", "clothPink", "nenekoCap", "tv"];

const TSU_HAN_DAT_STRING = "00000100c3bcb74403f8134126a57c42ace0b24250c30000550000000b616b617a756b696e4361700000000008616c69616e4361700000000009616e74656e61436170000000000a616f72696e676f43617000000000096173756b614d696d690000000009626f6479426c6164650000000007626f6479566163000000000c626f64795669627261746f72000000000563686169720100000008636869796f4361700000000009636869796f4d696d690000000006636875636875000000000c636c6f7468417a6d616e67610000000009636c6f7468426c75650000000010636c6f746843686565724c6561646572000000000c636c6f746844656661756c74010000000a636c6f7468486174616e0000000009636c6f746850696e6b010000000a636c6f746850696e6b32000000000e636c6f7468547261696e696e6741000000000e636c6f7468547261696e696e6742000000000d636c6f746859616d61797572690000000005636f6e67610000000008646961626f6c6f73000000000e646f6d6f686f726e57696e6b6c650000000004646f6f720100000006656e64696e67000000000565746f6e61000000000e65746f6e6142726163656c65744c000000000e65746f6e6142726163656c657452000000000b65746f6e614b7562697761000000000a65746f6e614f73616765000000000965746f6e6157696e670000000007666c7970616e420000000005667572696e0000000008677265656e436170000000000768616962616e65000000000b68616962616e6552696e67000000000968656c6d6574436170000000000b68656e7368696e42656c740000000007686f7563686f750000000008696365437265616d00000000046a617a69000000000a6a617a6959656c6c6f77000000000a6b697461726f7543617000000000096b6f736d6f7343617000000000076b6f746174737500000000086b756d614d696d69000000000f6b75726f62756368694d6567616e6500000000076c656f74617264000000000a6c69676874536162657200000000076d61696443617000000000046d696c6b00000000046d6f6d6f00000000086d6f6d6f4d696d69000000000b6d7567697761726143617000000000096d756c74694d696d6900000000086e656b6f4d696d69000000000a6e656b6f53686970706f00000000096e656e656b6f43617001000000086e7572736543617000000000086f7361676543617000000000056f74616d61000000000c70616a616d614f72616e6765000000000a706170614d616b757261000000000b70756e6368696e6742616700000000077265694d696d6900000000087265697a6f756b6f000000000f726962626f6e446546726f6e4361700000000008736172754d696d69000000000a7361727553686970706f0000000006736567776179000000000773656e70756b69000000000a7368616d706f6f436170000000000a737461724d6567616e65000000000973756d6d657243617000000000047377696d000000000e7377696d4e6f53686f6c64657231000000000e7377696d4e6f53686f6c64657232000000000c7377696d53686f6c64657231000000000c7377696d53686f6c64657232000000000a74656c65706f727465720000000002747601000000077573614d696d690000000008776974636843617000000000"

function hexStringToByteArray(hex) {
	let bytes = [];
	for (let i = 0; i < hex.length; i += 2) {
		bytes.push(parseInt(hex.substr(i, 2), 16));
	}
	return bytes;
}

const TSU_HAN_DAT_SAMPLE_EXAMPLE = new Uint8Array(hexStringToByteArray(TSU_HAN_DAT_STRING))

const BEGINNING_MESS_LENGTH = 29;

const YEN_POSITION = 20;
const YEN_LENGTH = 4;
const YEN_LIMIT = 100_000_000;

function LoadFreshStart(){
	document.getElementById('yen').value = FRESH_START_YEN;
	for(let item of ITEMS_LIST){
		if(FRESH_START_ITEMS.includes(item)){
			document.getElementById(item).checked = true;
		}
		else{
			document.getElementById(item).checked= false;
		}
	}
}

function LoadTsu_han_datFile(){
	let fileInput = document.getElementById("file-input");
	if(fileInput.files.length === 0){
		alert("Please select a file to load.");
		return;
	}
	let file = fileInput.files[0];
	if(file.name !== "tsu_han.dat"){
		alert("Please select a file named 'tsu_han.dat'.");
		return;
	}

	let reader = new FileReader();
	reader.onload = function(event){
		let data = new Uint8Array(event.target.result);

		let yenValue = 0;
		for(let i = 0; i < YEN_LENGTH; i++){
			yenValue |= (data[YEN_POSITION + i] << (8 * i));
		}
		document.getElementById("yen").value = yenValue;

		for(let item of ITEMS_LIST){
			let position = GetItemFlagPosition(item);
			document.getElementById(item).checked = data[position] === 1;
		}
	}

	reader.onerror = function(event) {
		alert("Error reading file: " + event.target.error.message);
	};

	reader.readAsArrayBuffer(file);
}

function GetItemFlagPosition(item){
	let item_list_index = ITEMS_LIST.indexOf(item);
	let items_before_length = 0;
	for(let i = 0; i<=item_list_index; i++){
		items_before_length += ITEMS_LIST[i].length;
	}
	return BEGINNING_MESS_LENGTH + items_before_length + 5 * item_list_index;
}

function DownLoadTsu_han_datFile(){
	let sample = new Uint8Array(TSU_HAN_DAT_SAMPLE_EXAMPLE);

	let yen = document.getElementById("yen").value;
	if (yen === "") {
		alert("Please enter a valid number for yen.");
		return;
	} else if (isNaN(parseInt(yen, 10))) {
		alert("Please enter a valid number for yen.");
		return;
	}
	let items = []
	for (let item of ITEMS_LIST) {
		if (document.getElementById(item).checked) {
			items.push(item);
		}
	}

	// Set the number of yen at position 20
	let yenValue = Math.min(parseInt(yen, 10) || 0, YEN_LIMIT);
	for(let i = 0; i < YEN_LENGTH; i++){
		sample[YEN_POSITION + i] = (yenValue >> (8 * i)) & 0xFF;
	}

	for(let item of items){
		let position = GetItemFlagPosition(item);
		sample[position] = 1; // Set the item flag to 1
	}

	let blob = new Blob([sample], { type: "application/octet-stream" });
	let link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = "tsu_han.dat";
	link.style.display = "none"; // Hide the link
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}
