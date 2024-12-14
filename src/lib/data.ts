const base = 'info@akvilinasfika.se';
const subject = 'Beställning';
const body = `Hej! 

Jag skulle vilja göra en beställning. 



Önskat datum:

Tårta:

Hur många som ska fika: 

Allergen:

Hämtas klockan:

Speciella önskemål: 

Ibland har Akvilinas Fika möjlighet att leverera, skriv in önskat leveransdatum, tid och adress så ska vi se vad vi kan göra: 

Leveransdatum & tid:

Adress: 

Jag heter:

Mitt telefonnummer:`;

const emailLink = `mailto:${base}?subject=${subject}&body=${encodeURIComponent(body)}`;

export const Contact = {
	email: base,
	emailLink: emailLink,
	phone: '070 - 322 84 61'
};
