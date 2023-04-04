
let url1 = "https://www.linkedin.com/in/pw-skill_1234"
let url2 = "https://www.linkedin.com/in/pwskill123"
let url3 = "https://www.linkedin.com/in/pw_skills_1234_"


function validateLinkedInURL(url) {
    let regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    if (regex.test(url)) {
        console.log(url + " is a valid LinkedIn profile URL.");
    } else {
        console.log(url + " is not a valid LinkedIn profile URL.");
    }
}


validateLinkedInURL(url1);
validateLinkedInURL(url2);
validateLinkedInURL(url3);

