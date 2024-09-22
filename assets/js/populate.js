// Sample data for events


// Function to populate the schedule
function populateSchedule(mq,data,dataColle) {
    const scheduleContainer = document.querySelector("body > div > div.cd-schedule__events > ul");
    scheduleContainer.innerHTML = "";
    

    Object.entries(data).forEach(([day, events]) => {
        // Create day group
        const dayGroup = document.createElement('li');
        dayGroup.classList.add('cd-schedule__group');

        if(day == getDayOfWeekInFrench()){
            dayGroup.classList.add('current_day');
        }else{
            if(mq == "mobile"){
                return;
            }
        }

        // Add day label
        const topInfo = document.createElement('div');
        topInfo.classList.add('cd-schedule__top-info');
        topInfo.innerHTML = `<span>${day}</span>`;
        dayGroup.appendChild(topInfo);

        // Create events list for the day
        let week = getWeekNumberFromDate();
        
        const eventsList = document.createElement('ul');

        if (events.length < 1){
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

        if (dataColle[day] == undefined){
            dayGroup.appendChild(eventsList);
        scheduleContainer.appendChild(dayGroup);
        return;
        }

        dataColle[day].forEach(event => {
            
            let selectedGroupNumber = document.getElementById('group-id').value;
            
            let colleGroupNumber = getColleData(selectedGroupNumber, week)
            if(event.group != colleGroupNumber){return;}
            

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

function getWeekNumberFromDate() {
    const date = new Date(document.getElementById('dateInput').value)
    // Set the reference start date (e.g., September 1, 2024)
    const startDate = new Date('2024-09-01');

    // Get the difference in time between the input date and the start date
    const timeDiff = date - startDate;

    // Convert the time difference from milliseconds to days
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Calculate the week number by dividing the days difference by 7
    const weekNumber = Math.floor(daysDiff / 7) + 1;

    return weekNumber;
}

function getDayOfWeekInFrench() {
    const daysInFrench = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const date = new Date(document.getElementById('dateInput').value);  // Convert the string to a Date object
    const dayIndex = date.getDay();     // Get the day of the week as a number (0-6)
    return daysInFrench[dayIndex];      // Return the day in French
}


