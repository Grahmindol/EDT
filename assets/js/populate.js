// Sample data for events


// Function to populate the schedule
function populateSchedule(mq) {
    console.log(mq)
    const scheduleContainer = document.querySelector("body > div > div.cd-schedule__events > ul");
    scheduleContainer.innerHTML = "";
    const data = [
        
        {
            day: "Lundi",
            events: [
                {
                    name: "S.I.",
                    start: "08:00",
                    end: "9:00",
                    content: "event-si",
                    eventId: "event-1"
                },
                {
                    name: "TD S.I.",
                    start: "09:00",
                    end: "10:00",
                    content: "event-si",
                    eventId: "event-1",
                    group: "si1"
                },
                {
                    name: "TD S.I.",
                    start: "10:00",
                    end: "11:00",
                    content: "event-si",
                    eventId: "event-1",
                    group: "si2"
                },
                {
                    name: "TD. Phys.",
                    start: "12:00",
                    end: "14:00",
                    content: "event-phy",
                    eventId: "event-2",
                    group: "gp2"
                },
                {
                    name: "TD. Phys.",
                    start: "14:00",
                    end: "16:00",
                    content: "event-phy",
                    eventId: "event-2",
                    group: "gp1"
                },
                {
                    name: "E.P.S.",
                    start: "16:00",
                    end: "18:00",
                    content: "event-eps",
                    eventId: "event-1"
                }
            ]
        },
        {
            day: "Mardi",
            events: [
                {
                    name: "Info.",
                    start: "8:00",
                    end: "10:00",
                    content: "event-info",
                    eventId: "event-4"
                },
                {
                    name: "Ang.",
                    start: "10:00",
                    end: "11:00",
                    content: "event-ang",
                    eventId: "event-1"
                },
                {
                    name: "Maths.",
                    start: "12:00",
                    end: "15:00",
                    content: "event-maths",
                    eventId: "event-3"
                },
                {
                    name: "TD Info.",
                    start: "15:00",
                    end: "17:00",
                    content: "event-info",
                    eventId: "event-4",
                    group: "inf1"
                },
                {
                    name: "Ang.",
                    start: "16:00",
                    end: "17:00",
                    content: "event-ang",
                    eventId: "event-1",
                    group: "gp2"
                },
                {
                    name: "TD Info.",
                    start: "17:00",
                    end: "19:00",
                    content: "event-info",
                    eventId: "event-4",
                    group: "inf2"
                },
                {
                    name: "Esp.",
                    start: "17:00",
                    end: "19:00",
                    content: "event-info",
                    eventId: "event-1",
                    group: "esp"
                }
            ]
        },
        {
            day: "Mercredi",
            events: [
                {
                    name: "Phys.",
                    start: "08:00",
                    end: "10:00",
                    content: "event-phy",
                    eventId: "event-2"
                },
                {
                    name: "Maths.",
                    start: "10:00",
                    end: "12:00",
                    content: "event-maths",
                    eventId: "event-3"
                },
                {
                    name: "Maths.",
                    start: "13:00",
                    end: "14:00",
                    content: "event-maths",
                    eventId: "event-3"
                },
                {
                    name: "TD Info.",
                    start: "14:00",
                    end: "16:00",
                    content: "event-info",
                    eventId: "event-4",
                    group: "inf3"
                },
                {
                    name: "Info.",
                    start: "16:00",
                    end: "18:00",
                    content: "event-info",
                    eventId: "event-4"
                }
            ]
        },
        {
            day: "Jeudi",
            events: [
                {
                    name: "Fr.",
                    start: "08:00",
                    end: "10:00",
                    content: "event-fr",
                    eventId: "event-1"
                },
                {
                    name: "Maths.",
                    start: "10:00",
                    end: "12:00",
                    content: "event-maths",
                    eventId: "event-3"
                },
                {
                    name: "Maths.",
                    start: "13:00",
                    end: "15:00",
                    content: "event-maths",
                    eventId: "event-3"
                },
                {
                    name: "Ang.",
                    start: "15:00",
                    end: "16:00",
                    content: "event-ang",
                    eventId: "event-1",
                    group: "gp1"
                },
                {
                    name: "Italien",
                    start: "17:00",
                    end: "19:00",
                    content: "event-ang",
                    eventId: "event-1",
                    group: "ita"
                },
                {
                    name: "Allemand",
                    start: "17:00",
                    end: "19:00",
                    content: "event-ang",
                    eventId: "event-1",
                    group: "ger"
                }
            ]
        },
        {
            day: "Vendredi",
            events: [
                {
                    name: "TP Phys.",
                    start: "08:00",
                    end: "10:00",
                    content: "event-phy",
                    eventId: "event-2",
                    group: "gp2"
                },
                {
                    name: "TD Maths.",
                    start: "08:00",
                    end: "10:00",
                    content: "event-maths",
                    eventId: "event-3",
                    group: "gp1"
                },
                {
                    name: "TP Phys.",
                    start: "10:00",
                    end: "12:00",
                    content: "event-phy",
                    eventId: "event-2",
                    group: "gp1"
                },
                {
                    name: "TD Maths.",
                    start: "10:00",
                    end: "12:00",
                    content: "event-maths",
                    eventId: "event-3",
                    group: "gp2"
                },
                {
                    name: "Phys.",
                    start: "13:00",
                    end: "15:00",
                    content: "event-phy",
                    eventId: "event-2"
                }
            ]
        },
        {
            day: "Samedi",
            events: [{
                name: "D.S",
                start: "08:00",
                end: "12:00",
                content: "ds",
                eventId: "event-1"
            }]
        },
        {
            day: "Dimanche",
            events: []
        },
    ];
    const dataColle = {
        Lundi: {
            events: [
                {
                    name: "Physique-Bouchet-(K25)",
                    start: "09:00",
                    end: "10:00",
                    content: "event-colle-physique",
                    eventId: "event-2",
                    group: 1
                },
                {
                    name: "Physique-Kirstetter-(K25)",
                    start: "09:00",
                    end: "10:00",
                    content: "event-colle-physique",
                    eventId: "event-2",
                    group: 3
                },
                {
                    name: "Physique-Zavoli-(Labo Phy)",
                    start: "12:00",
                    end: "13:00",
                    content: "event-colle-physique",
                    eventId: "event-2",
                    group: 5
                },
                {
                    name: "Physique-Tellier-(Labo Phy)",
                    start: "12:00",
                    end: "13:00",
                    content: "event-colle-physique",
                    eventId: "event-2",
                    group: 7
                },
                {
                    name: "Physique-Bouchet-(K25)",
                    start: "10:00",
                    end: "11:00",
                    content: "event-colle-physique",
                    eventId: "event-2",
                    group: 9
                },
                {
                    name: "Physique-Kirstetter-(K25)",
                    start: "10:00",
                    end: "11:00",
                    content: "event-colle-physique",
                    eventId: "event-2",
                    group: 11
                },
                {
                    name: "Maths-Royer-(K25)",
                    start: "13:00",
                    end: "14:00",
                    content: "event-colle-math",
                    eventId: "event-2",
                    group: 1
                },
                {
                    name: "Physique-Zavoli-(Labo Phy)",
                    start: "13:00",
                    end: "14:00",
                    content: "event-colle-physique",
                    eventId: "event-2",
                    group: 13
                },
                {
                    name: "Physique-Tellier-(Labo Phy)",
                    start: "13:00",
                    end: "14:00",
                    content: "event-colle-physique",
                    eventId: "event-2",
                    group: 15
                },
                {
                    name: "Maths-Royer-(K25)",
                    start: "14:00",
                    end: "15:00",
                    content: "event-colle-math",
                    eventId: "event-4",
                    group: 10
                },
                {
                    name: "Maths-Charvet-(K33)",
                    start: "14:00",
                    end: "15:00",
                    content: "event-colle-math",
                    eventId: "event-4",
                    group: 8
                },
                {
                    name: "Maths-Charvet-(K33)",
                    start: "14:50",
                    end: "15:50",
                    content: "event-colle-math",
                    eventId: "event-4",
                    group: 12
                }
            ]
        },
        Mardi: {
            events: [
                {
                    name: "Anglais-Bocquillon-(K23)",
                    start: "18:00",
                    end: "19:00",
                    content: "event-colle-anglais",
                    eventId: "event-1",
                    group: 2
                },
                {
                    name: "Maths-Pietri-(25)",
                    start: "18:00",
                    end: "19:00",
                    content: "event-colle-math",
                    eventId: "event-4",
                    group: 15
                },
                {
                    name: "Maths-Sebah-(24)",
                    start: "16:00",
                    end: "17:00",
                    content: "event-colle-math",
                    eventId: "event-4",
                    group: 11
                }
            ]
        },
        Mercredi: {
            events: [
                {
                    name: "Maths-Aufranc-(20)",
                    start: "14:00",
                    end: "15:00",
                    content: "event-colle-math",
                    eventId: "event-4",
                    group: 3
                },
                {
                    name: "Maths-Aufranc-(20)",
                    start: "14:50",
                    end: "15:50",
                    content: "event-colle-math",
                    eventId: "event-4",
                    group: 7
                },
                {
                    name: "Maths-Broizat-(34)",
                    start: "18:15",
                    end: "19:15",
                    content: "event-colle-math",
                    eventId: "event-4",
                    group: 16
                }
            ]
        },
        Jeudi: {
            events: [
                {
                    name: "Anglais-Eyrard-(K23)",
                    start: "15:00",
                    end: "16:00",
                    content: "event-colle-anglais",
                    eventId: "event-1",
                    group: 4
                },
                {
                    name: "Maths-Rozsavolgyi-(K25)",
                    start: "15:00",
                    end: "16:00",
                    content: "event-colle-maths",
                    eventId: "event-4",
                    group: 14
                },
                {
                    name: "Maths-Rozsavolgyi-(K25)",
                    start: "16:00",
                    end: "17:00",
                    content: "event-colle-maths",
                    eventId: "event-4",
                    group: 6
                },
                {
                    name: "Info-Rozsavolgyi-(K25)",
                    start: "17:00",
                    end: "18:00",
                    content: "event-colle-info",
                    eventId: "event-3",
                    group: 15
                },
                {
                    name: "Anglais-Eyrard-(K23)",
                    start: "16:00",
                    end: "17:00",
                    content: "event-colle-anglais",
                    eventId: "event-1",
                    group: 10
                }
            ]
        },
        Vendredi: {
            events: [
                {
                    name: "Physique-Prejlocaj-(K26/27)",
                    start: "15:00",
                    end: "16:00",
                    content: "event-colle-physique",
                    eventId: "event-2",
                    group: 6
                },
                {
                    name: "Physique-Prejlocaj-(K26/27)",
                    start: "16:00",
                    end: "17:00",
                    content: "event-colle-physique",
                    eventId: "event-2",
                    group: 12
                },
                {
                    name: "Maths-Charvet-(K33)",
                    start: "16:00",
                    end: "17:00",
                    content: "event-colle-physique",
                    eventId: "event-4",
                    group: 5
                },
                {
                    name: "Maths-Dubau-(26)",
                    start: "16:00",
                    end: "17:00",
                    content: "event-colle-math",
                    eventId: "event-4",
                    group: 9
                },
                {
                    name: "Maths-Dubau-(26)",
                    start: "16:45",
                    end: "17:45",
                    content: "event-colle-math",
                    eventId: "event-4",
                    group: 13
                },
                {
                    name: "Maths-Ressiguié-(K33)",
                    start: "17:00",
                    end: "18:00",
                    content: "event-colle-math",
                    eventId: "event-4",
                    group: 2
                },
                {
                    name: "Anglais-Connell-(10)",
                    start: "17:00",
                    end: "18:00",
                    content: "event-colle-anglais",
                    eventId: "event-1",
                    group: 14
                },
                {
                    name: "Anglais-Connell-(10)",
                    start: "16:00",
                    end: "17:00",
                    content: "event-colle-anglais",
                    eventId: "event-1",
                    group: 8
                },
                {
                    name: "Maths-Dubau-(26)",
                    start: "17:30",
                    end: "18:30",
                    content: "event-colle-math",
                    eventId: "event-4",
                    group: 4
                },
                {
                    name: "Anglais-Dubau-(K35)",
                    start: "16:00",
                    end: "17:00",
                    content: "event-colle-anglais",
                    eventId: "event-1",
                    group: 16
                }
            ]
        }
    };

    

    data.forEach(day => {
        // Create day group
        const dayGroup = document.createElement('li');
        dayGroup.classList.add('cd-schedule__group');

        if(day.day == getDayOfWeekInFrench()){
            dayGroup.classList.add('current_day');
        }else{
            if(mq == "mobile"){
                return;
            }
        }

        // Add day label
        const topInfo = document.createElement('div');
        topInfo.classList.add('cd-schedule__top-info');
        topInfo.innerHTML = `<span>${day.day}</span>`;
        dayGroup.appendChild(topInfo);

        // Create events list for the day
        let week = getWeekNumberFromDate();
        
        const eventsList = document.createElement('ul');

        if (day.events.length < 1){
            dayGroup.appendChild(eventsList);
        scheduleContainer.appendChild(dayGroup);
        return;
        }

        day.events.forEach(event => {
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

        if (dataColle[day.day] == undefined){
            dayGroup.appendChild(eventsList);
        scheduleContainer.appendChild(dayGroup);
        return;
        }

        dataColle[day.day].events.forEach(event => {
            
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


