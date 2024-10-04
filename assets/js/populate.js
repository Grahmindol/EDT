// Function to populate the schedule
function populateSchedule(mq, data, dataColle,dataDS) {
    const scheduleContainer = document.querySelector("body > div > div.cd-schedule__events > ul");
    scheduleContainer.innerHTML = "";

    const week = getWeekNumberFromDate();
    const selectedGroupNumber = document.getElementById('group-id').value;
    const colleGroupNumber = getColleData(selectedGroupNumber, week)

    for(i=0;i<7;i++){
        const day_id = (i+1)%7
        const day = getDayOfIndice(day_id)
        const events = data[day]
        // Create day group
        const dayGroup = document.createElement('li');
        
        if (day_id == (new Date(document.getElementById('dateInput').value)).getDay()) {
            dayGroup.classList.add('current_day');
        } else if (mq == "mobile") {
            continue;
        }

        dayGroup.classList.add('cd-schedule__group');

        // Add day label
        const topInfo = document.createElement('div');
        topInfo.classList.add('cd-schedule__top-info');
        topInfo.innerHTML = `<span>${day}</span>`;
        dayGroup.appendChild(topInfo);
        const eventsList = document.createElement('ul');

        if (week <= 0) { // if there are no course or is holliday
            dayGroup.appendChild(eventsList);
            scheduleContainer.appendChild(dayGroup);
            continue;
        }

        events.forEach(event => {
            if(shouldEventBeSkipped(event,selectedGroupNumber,week,colleGroupNumber)) return;
            const eventItem = createEventItem(event);
            eventsList.appendChild(eventItem);
        });

        if (dataColle[day]) {
            dataColle[day].forEach(event => {
                if (event.group != colleGroupNumber) { return; }
                const eventItem = createEventItem(event);
                handleConelleExeption(eventItem,day_id,colleGroupNumber,colleGroupNumber,week)
                eventsList.appendChild(eventItem);
            });
        }

        if (day_id === 6){
            if(dataDS[week-1]){
                let isSecond = false
                dataDS[week-1].forEach((n)=>{
                    
                    const eventItem = createEventItem({
                        name:"DS de : " + n,
                        start: isSecond ? "10:00" : "08:00" ,
                        end: isSecond ? "12:00" : ((dataDS[week-1].length == 1)? "12:00" : "10:00"),
                        content: "event-ds",
                        eventId: "event-1"
                    });
                    isSecond = true
                    eventsList.appendChild(eventItem);
                })
                
            }
        }

        dayGroup.appendChild(eventsList);
        scheduleContainer.appendChild(dayGroup);
    };


}

function shouldEventBeSkipped(event, selectedGroupNumber, week, colleGroupNumber) {
    switch (event.group) {
        case "si1":
            return (selectedGroupNumber % 2 != week % 2 || colleGroupNumber == 1 || colleGroupNumber == 3) && colleGroupNumber != 8 && colleGroupNumber != 10;
        case "si2":
            return (selectedGroupNumber % 2 == week % 2 || colleGroupNumber == 8 || colleGroupNumber == 10) && colleGroupNumber != 1 && colleGroupNumber != 3;
        case "gp1":
            return selectedGroupNumber % 2 != week % 2;
        case "gp2":
            return selectedGroupNumber % 2 == week % 2;
        case "esp":
            return selectedGroupNumber !== "14";
        case "ita":
            return selectedGroupNumber !== "15" && selectedGroupNumber !== "8";
        case "ger":
            return selectedGroupNumber !== "16";
        case "inf1":
            return getInfoGp(selectedGroupNumber, week) != 1;
        case "inf2":
            return getInfoGp(selectedGroupNumber, week) != 2;
        case "inf3":
            return getInfoGp(selectedGroupNumber, week) != 3;
        }
        return false;
}

function createEventItem(event) {
    const eventItem = document.createElement('li');
    eventItem.classList.add('cd-schedule__event');
    const eventLink = document.createElement('a');
    eventLink.setAttribute('data-start', event.start);
    eventLink.setAttribute('data-end', event.end);
    eventLink.setAttribute('data-content', event.content);
    eventLink.setAttribute('data-event', event.eventId);
    eventLink.setAttribute('href', '#0');
    const eventName = document.createElement('em');
    eventName.classList.add('cd-schedule__name');
    eventName.textContent = event.name;
    eventLink.appendChild(eventName);
    eventItem.appendChild(eventLink);
    return eventItem;
}

function handleConelleExeption(eventItem, day_id, colleGroupNumber, selectedGroupNumber, week) {
    // Vérification si le jour est vendredi
    if (day_id === 5) {
        const eventLink = eventItem.getElementsByTagName('a')[0];

        // Gestion de l'exception pour le groupe de colle 8
        if (colleGroupNumber === 8) {
            // Si le groupe sélectionné n'est pas 15 ou 16, ajuster l'heure de fin à 17:30
            if (selectedGroupNumber !== 15 && selectedGroupNumber !== 16) {
                eventLink.setAttribute('data-end', "17:30");
            }
        }
        // Gestion de l'exception pour le groupe de colle 14
        else if (colleGroupNumber === 14) {
            const previousGroup = getGroupeNumber(8, week); // Obtient le groupe précédent pour la vérification

            // Si le groupe précédent n'est pas 15 ou 16, ajuster l'heure de début et de fin
            if (previousGroup !== 15 && previousGroup !== 16) {
                eventLink.setAttribute('data-start', "17:30");
                eventLink.setAttribute('data-end', "18:30");

                // Si le groupe sélectionné n'est toujours pas 15 ou 16, ajuster l'heure de fin à 19:00
                if (selectedGroupNumber !== 15 && selectedGroupNumber !== 16) {
                    eventLink.setAttribute('data-end', "19:00");
                }
            } 
            // Si le groupe précédent est 15 ou 16, ajuster uniquement l'heure de fin à 18:30
            else {
                if (selectedGroupNumber !== 15 && selectedGroupNumber !== 16) {
                    eventLink.setAttribute('data-end', "18:30");
                }
            }
        }
    }
}



function getInfoGp(gp, week) {
    const groups = {
        1:  [2, 2, 1, 2, 1, 2, 2, 3, 1, 3, 2, 3, 1, 3, 1, 3],
        2:  [3, 1, 2, 1, 2, 1, 2, 2, 3, 1, 3, 2, 3, 1, 3, 1],
        3:  [1, 3, 2, 2, 1, 2, 1, 2, 2, 3, 1, 3, 2, 3, 2, 3],
        4:  [3, 1, 3, 1, 2, 1, 2, 1, 2, 2, 3, 1, 3, 2, 3, 1],
        5:  [1, 3, 1, 3, 2, 2, 1, 2, 1, 2, 2, 3, 1, 3, 2, 3],
        6:  [3, 1, 3, 1, 3, 1, 2, 1, 2, 1, 2, 2, 3, 1, 3, 2],
        7:  [2, 3, 1, 3, 1, 3, 2, 2, 1, 2, 1, 2, 2, 3, 1, 3],
        8:  [3, 2, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1, 2, 2, 3, 1],
        9:  [1, 3, 2, 3, 1, 3, 1, 3, 2, 2, 1, 2, 1, 2, 2, 3],
        10: [3, 1, 3, 2, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1, 2, 2],
        11: [2, 3, 1, 3, 2, 3, 1, 3, 1, 3, 2, 2, 1, 2, 1, 2],
        12: [2, 2, 3, 1, 3, 2, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1],
        13: [1, 2, 2, 3, 1, 3, 2, 3, 1, 3, 1, 3, 2, 2, 1, 2],
        14: [3, 1, 3, 3, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1],
        15: [1, 2, 1, 2, 2, 3, 1, 3, 2, 3, 1, 3, 1, 3, 1, 2],
        16: [2, 1, 2, 1, 2, 2, 3, 1, 3, 2, 3, 1, 3, 1, 3, 1]
    };
    return (groups[gp]) ? ((groups[gp][week - 3]) ?  groups[gp][week - 3] : -1) : -1
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
    date.setTime(Math.floor(date.getTime() / 86400000) * 86400000);

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
    return weekStartDates.findIndex(weekStartDate => weekStartDate.getTime() === date.getTime()) + 1;
}




function getDayOfIndice(dayIndex) {
    const daysInFrench = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    return daysInFrench[dayIndex];      // Return the day in French
}


