// Sample data for events


// Function to populate the schedule
function populateSchedule(mq, data, dataColle) {
    const scheduleContainer = document.querySelector("body > div > div.cd-schedule__events > ul");
    scheduleContainer.innerHTML = "";
    const week = getWeekNumberFromDate();

    Object.entries(data).forEach(([day, events]) => {
        // Create day group
        const dayGroup = document.createElement('li');
        dayGroup.classList.add('cd-schedule__group');

        if (day == getDayOfWeekInFrench()) {
            dayGroup.classList.add('current_day');
        } else if (mq == "mobile") {
            return;
        }

        // Add day label
        const topInfo = document.createElement('div');
        topInfo.classList.add('cd-schedule__top-info');
        topInfo.innerHTML = `<span>${day}</span>`;
        dayGroup.appendChild(topInfo);


        const eventsList = document.createElement('ul');

        if (events.length < 1 || week <= 0) { // if there are no course or is holliday
            dayGroup.appendChild(eventsList);
            scheduleContainer.appendChild(dayGroup);
            return;
        }

        events.forEach(event => {
            let selectedGroupNumber = document.getElementById('group-id').value;
            let colleGroupNumber = getColleData(selectedGroupNumber, week)
            switch (event.group) {
                case "si1":
                    if ((selectedGroupNumber % 2 != week % 2 || colleGroupNumber == 1 || colleGroupNumber == 3) && colleGroupNumber != 8 && colleGroupNumber != 10) {
                        return;
                    }
                    break;
                case "si2":
                    if ((selectedGroupNumber % 2 == week % 2 || colleGroupNumber == 8 || colleGroupNumber == 10) && colleGroupNumber != 1 && colleGroupNumber != 3) {
                        return;
                    }
                    break;
                case "gp1":
                    if (selectedGroupNumber % 2 != week % 2) {
                        return;
                    }
                    break;
                case "gp2":
                    if (selectedGroupNumber % 2 == week % 2) {
                        return;
                    }
                    break;
                case "esp":
                    if (selectedGroupNumber !== "14") {
                        return;
                    }
                    break;
                case "ita":
                    if (selectedGroupNumber !== "15" && selectedGroupNumber !== "8") {
                        return;
                    }
                    break;
                case "ger":
                    if (selectedGroupNumber !== "16") {
                        return;
                    }
                    break;
                case "inf1":
                    if (getInfoGp(selectedGroupNumber, week) != 1) {
                        return;
                    }
                    break;
                case "inf2":
                    if (getInfoGp(selectedGroupNumber, week) != 2) {
                        return;
                    }
                    break;
                case "inf3":
                    if (getInfoGp(selectedGroupNumber, week) != 3) {
                        return;
                    }
                    break;

            }


            const eventItem = document.createElement('li');
            eventItem.classList.add('cd-schedule__event');

            // Create event link
            const eventLink = document.createElement('a');
            eventLink.setAttribute('data-start', event.start);
            eventLink.setAttribute('data-end', event.end);
            eventLink.setAttribute('data-content', event.content);
            eventLink.setAttribute('data-event', event.eventId);
            eventLink.setAttribute('href', '#0');

            // Event name
            const eventName = document.createElement('em');
            eventName.classList.add('cd-schedule__name');
            eventName.textContent = event.name;

            eventLink.appendChild(eventName);
            eventItem.appendChild(eventLink);
            eventsList.appendChild(eventItem);

        });

        if (dataColle[day] == undefined) {
            dayGroup.appendChild(eventsList);
            scheduleContainer.appendChild(dayGroup);
            return;
        }

        dataColle[day].forEach(event => {

            let selectedGroupNumber = document.getElementById('group-id').value;

            let colleGroupNumber = getColleData(selectedGroupNumber, week)
            if (event.group != colleGroupNumber) { return; }


            const eventItem = document.createElement('li');
            eventItem.classList.add('cd-schedule__event');

            // Create event link
            const eventLink = document.createElement('a');
            eventLink.setAttribute('data-start', event.start);
            eventLink.setAttribute('data-end', event.end);
            eventLink.setAttribute('data-content', event.content);
            eventLink.setAttribute('data-event', event.eventId);
            eventLink.setAttribute('href', '#0');

            // Event name
            const eventName = document.createElement('em');
            eventName.classList.add('cd-schedule__name');
            eventName.textContent = event.name;
            console.log("Conelle exeption")
            if(day == "Vendredi"){ // Conelle exeption
                console.log("Conelle exeption")
                if(colleGroupNumber == 8){ // 16h prevue
                    if(selectedGroupNumber != 15 && selectedGroupNumber != 16){ // si il y a plus de deux eleve
                        eventLink.setAttribute('data-end', "17:30");
                    }
                }else if(colleGroupNumber == 14){ // 17h prévue
                    const previusGroupe = getGroupeNumber(8,week);
                    if(previusGroupe != 15 && previusGroupe != 16){ // si il y a plus de deux eleve
                        eventLink.setAttribute('data-start', "17:30");
                        eventLink.setAttribute('data-end', "18:30");
                        if(selectedGroupNumber != 15 && selectedGroupNumber != 16){ // si il y a plus de deux eleve
                            eventLink.setAttribute('data-end', "19:00");
                        }
                    }else{
                        if(selectedGroupNumber != 15 && selectedGroupNumber != 16){ // si il y a plus de deux eleve
                            eventLink.setAttribute('data-end', "18:30");
                        }
                    }

                }
            }

            eventLink.appendChild(eventName);
            eventItem.appendChild(eventLink);
            eventsList.appendChild(eventItem);

        });

        dayGroup.appendChild(eventsList);
        scheduleContainer.appendChild(dayGroup);
    });


}


function getInfoGp(gp, week) {
    const groups = {
        1: [2, 2, 1, 2, 1, 2, 2, 3, 1, 3, 2, 3, 1, 3, 1, 3],
        2: [3, 1, 2, 1, 2, 1, 2, 2, 3, 1, 3, 2, 3, 1, 3, 1],
        3: [1, 3, 2, 2, 1, 2, 1, 2, 2, 3, 1, 3, 2, 3, 2, 3],
        4: [3, 1, 3, 1, 2, 1, 2, 1, 2, 2, 3, 1, 3, 2, 3, 1],
        5: [1, 3, 1, 3, 2, 2, 1, 2, 1, 2, 2, 3, 1, 3, 2, 3],
        6: [3, 1, 3, 1, 3, 1, 2, 1, 2, 1, 2, 2, 3, 1, 3, 2],
        7: [2, 3, 1, 3, 1, 3, 2, 2, 1, 2, 1, 2, 2, 3, 1, 3],
        8: [3, 2, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1, 2, 2, 3, 1],
        9: [1, 3, 2, 3, 1, 3, 1, 3, 2, 2, 1, 2, 1, 2, 2, 3],
        10: [3, 1, 3, 2, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1, 2, 2],
        11: [2, 3, 1, 3, 2, 3, 1, 3, 1, 3, 2, 2, 1, 2, 1, 2],
        12: [2, 2, 3, 1, 3, 2, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1],
        13: [1, 2, 2, 3, 1, 3, 2, 3, 1, 3, 1, 3, 2, 2, 1, 2],
        14: [3, 1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1],
        15: [1, 2, 1, 2, 2, 3, 1, 3, 2, 3, 1, 3, 1, 3, 1, 2],
        16: [2, 1, 2, 1, 2, 2, 3, 1, 3, 2, 3, 1, 3, 1, 3, 1]
    };
    if (week < 3 || week > 18 || gp < 1 || gp > 16) { return -1; }
    return groups[gp][week - 3]
}

function getColleData(groupeNumber, semaine) {
    if (semaine < 3 || semaine > 18 || groupeNumber < 1 || groupeNumber > 16) { return -1; }
    let c = (groupeNumber - (semaine - 3) + 16) % 16
    return (c === 0) ? 16 : c;
}

function getGroupeNumber(colleNumber, semaine) {
    if (semaine < 3 || semaine > 18 || colleNumber < 1 || colleNumber > 16) {
        return -1;
    }

    let c = (colleNumber === 16) ? 0 : colleNumber;
    let groupeNumber = (c + (semaine - 3)) % 16;

    return (groupeNumber === 0) ? 16 : groupeNumber;
}

function getWeekNumberFromDate() {
    let date = new Date(document.getElementById('dateInput').value);

    // Adjust date to the Monday of that week
    date.setDate(date.getDate() - date.getDay() + 1);
    date.setTime(Math.floor(date.getTime()/86400000)*86400000); 

    const weekStartDates = [
        "2024-09-02", "2024-09-09", "2024-09-16", "2024-09-23", "2024-09-30",
        "2024-10-07", "2024-10-14", "2024-11-04", "2024-11-11", "2024-11-18",
        "2024-11-25", "2024-12-02", "2024-12-09", "2024-12-16", "2025-01-06",
        "2025-01-13", "2025-01-20", "2025-01-27", "2025-02-03", "2025-02-24",
        "2025-03-03", "2025-03-10", "2025-03-17", "2025-03-24", "2025-03-31",
        "2025-04-21", "2025-04-28", "2025-05-05", "2025-05-12", "2025-05-19",
        "2025-05-26", "2025-06-02", "2025-06-09", "2025-06-16", "2025-06-23",
        "2025-06-30"
    ].map(dateStr => new Date(dateStr));

    // Find the index of the week start date that matches the modified date
    return  weekStartDates.findIndex(weekStartDate => weekStartDate.getTime() === date.getTime()) + 1;
}




function getDayOfWeekInFrench() {
    const daysInFrench = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const date = new Date(document.getElementById('dateInput').value);  // Convert the string to a Date object
    const dayIndex = date.getDay();     // Get the day of the week as a number (0-6)
    return daysInFrench[dayIndex];      // Return the day in French
}


