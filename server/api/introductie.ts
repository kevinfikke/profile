export default defineEventHandler(async () => { 

    // get data for the introductie component
    let result = {
        contentblocks: {
            personalInfo : [
                {id:0, icon: 'mdi-map-marker', name: 'Adres:', content: 'Haagdijk 137'},
                {id:1, icon: 'mdi-map-marker', name: 'Woonplaats:', content: 'Breda'},
                {id:2, icon: 'mdi-phone', name: 'Telefoon:', content: '06-52868327'},
                {id:3, icon: 'mdi-cake-variant', name: 'Geboortedatum:', content: '16-03-1992'},
                {id:4, icon: 'mdi-home', name: 'Gebooorteplaats:', content: 'Oosterhout'},
                {id:5, icon: 'mdi-account-supervisor-circle', name: 'Burgelijke staat:', content: 'Ongehuwd'},
                {id:6, icon: 'mdi-car', name: 'Rijbewijs:', content: 'Ja'},
                {id:7, icon: 'mdi-earth', name: 'Nationaliteit:', content: 'Nederlands'},
            ],
            contactInfo : [
                {id: 0, icon: 'mdi-phone', content: '06-52868327'},
                {id: 1, icon: 'mdi-email-outline', content: 'kevinfikke1@hotmail.com'},
                {id: 2, icon: 'mdi-linkedin', content: 'www.linkin.nl'},
                {id: 3, icon: 'mdi-map-marker', content: 'haagdijk 137 / Breda / Nederlands / 4811TR'},
            ]
        },
        educations : [
            {id: 0, icon: 'mdi-school', name: 'Raduis college', content: 'programmeren', year: '2015 - 2018'},
            {id: 1, icon: 'mdi-school', name: 'Florijn college', content: 'administratie', year: '2008 - 2013'},
            {id: 2, icon: 'mdi-school', name: 'Dongemond college', content: 'middlebare / economie', year: '2004 - 2008'},
        ],
        hobbies : [
            {id: 0, icon: 'mdi-ocarina', name: 'Gaming'},
            {id: 1, icon: 'mdi-swim', name: 'Zwemmen'},
            {id: 2, icon: 'mdi-tent', name: 'Festivals'},
            {id: 3, icon: 'mdi-cards', name: 'Magic the gardering'},
        ],
    }
    // return the data to the page
    return {
        result
    }
})