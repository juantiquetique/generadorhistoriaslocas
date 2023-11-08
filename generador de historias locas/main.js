const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText = "Afuera hacía 94 Fahrenheit, así que :insertx: salió a caminar. Cuando llegaron a :inserty:, miraron con horror por unos momentos, luego :insertz:. Bob vio todo, pero no se sorprendió — :insertx: pesa 300 libras y era un día caluroso.";
let insertX =["el duende Willy", "Papá grande", "Papá Noel"] ;
let insertY = ["el comedor de benficencia", "Disneylandia", "la Casa Blanca"] ;
let insertZ = ["fue quemado espontáneamente", "se derritió en un charco en la acera", "se convirtió en una babosa y se arrastró lejos"] ;


randomize.addEventListener('click', result);

let newStory = storyText;
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(":insertx:", xItem)
newStory = newStory.replace(":insertx:", xItem)
newStory = newStory.replace(":inserty:", yItem)
newStory = newStory.replace(":insertz:", zItem)

function result() {

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name)
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300 * 1/2.2046)+ "Kilogramo";
        const temperature = Math.round((94 - 32)/(1.8)) + "°C" ;
        newStory = newStory. replace("94 Fahrenheit", temperature)
        newStory = newStory.replace("300 libras", weight)
    }
    

    story.textContent = newStory;
        story.style.visibility = 'visible';
}