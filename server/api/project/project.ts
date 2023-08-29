export default defineEventHandler(async (event) => { 
    const body = await readBody(event)
    let projectslist = {
        projects : [
            {
                id: 0, 
                project: 'counting 10 App',
                sliderImages: [{image: '/images/counting10_image1.PNG'},{image: '/images/counting10_image2.PNG'},{image: '/images/counting10_image3.PNG'},{image: '/images/counting10_image4.PNG'},{image: '/images/counting10_image5.PNG'},{image: '/images/counting10_image6.PNG'}],
                image1: '/images/counting10_image1.PNG',
                content: "De counting10 app is een applicatie dat data van feedback devices die worden opgeslagen in firebase ophaal en dan weergeeft in verschillende weergave zodat de klant de data kan uitlezen. Veder kan de klant ook bedrijven en winkels toevoegen waarbij de devices kunnen worden toegevoegd zodat die bij de data kan in firebase. De device kan de klant toevoegen via het scannen van een qr code en dan kunnen ze de device configureren met vraag en antwoorden.",
                image2: './content/image/image2',
                content2: '',
                points: [
                    {id: 0, title: 'html'},
                    {id: 1, title: 'css'},
                    {id: 2, title: 'nuxt 3'},
                    {id: 3, title: 'vuetify 3'},
                    {id: 4, title: 'firebase'},
                    {id: 5, title: 'html'},
                ]
            },
            {
                id: 1,
                project: 'project2',
                sliderImages: [{image: '/images/ic10_project/image_hero.PNG'},{image: '/images/ic10_project/image_slider.PNG'},{image: '/images/ic10_project/image_vacanies.png'},{image: '/images/ic10_project/image_footer.PNG'},{image: '/images/ic10_project/image_contact.PNG'}],
                image1: './content/image/image1',
                content: "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                image2: './content/image/image2',
                points: [
                    {id: 0, title: 'html'},
                    {id: 1, title: 'css'},
                    {id: 2, title: 'nuxt 3'},
                    {id: 3, title: 'vuetify 3'},
                    {id: 4, title: 'firebase'},
                    {id: 5, title: 'html'},
                    {id: 6, title: 'directus9'},
                ]
            },
          ]
    }
    // return the data to the page
    let result = projectslist.projects[body['id']];
    return {
        result
    }
})