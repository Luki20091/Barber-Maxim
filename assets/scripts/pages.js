var page = 'Strona Główna';


document.addEventListener('visibilitychange', function () {
	if (document.hidden) {
		page = 'Wróć Do Nas!';
		pages();
	}
	else {
		document.title = ('Barber Maxim | ' + page2);
    }
});

function pages() {
	document.title = ('Barber Maxim | ' + page);

	var elems = document.querySelectorAll("a");

	var divs = document.querySelectorAll("content div");

	for (let elem of elems) {
		elem.classList.remove('active');
	};
	document.getElementById(id).classList.add('active');

	for (let div of divs) {
		div.classList.remove('visible');
	};
	document.getElementById(id+"Div").classList.add('visible');
}

function openHome() {
	page = 'Strona Główna';
	page2 = page;
	id = 'home';
	pages();
}

function openUs() {
	page = 'O Nas';
	page2 = page;
	id = 'us';
	pages();
}

function openOffer() {
	page = 'Oferty';
	page2 = page;
	id = 'offer';
	pages();
}

function openContact() {
	page = 'Kontakt';
	page2 = page;
	id = 'contact';
	pages();
}

function openVoucher() {
	page = 'Voucher';
	page2 = page;
	id = 'voucher';
	pages();
}

function openBooking() {
	page = 'Zarezerwuj';
	page2 = page;
	id = 'booking';
	pages();
}




