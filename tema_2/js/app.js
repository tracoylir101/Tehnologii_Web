fetch("data/resources.json")
    .then(res => res.json())
    .then(data => {
        const list = document.getElementById("resource-list");
        const studyList = document.getElementById("study-list");
        const tagList = document.getElementById("tag-list");

        // Afisare resurse
        data.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} (${item.type}) – ${item.location}`;
            list.appendChild(li);
        });

        // Filtrare: doar locuri pentru studiu
        const studyResources = data.filter(r => r.type === "study");
        studyResources.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.name;
            studyList.appendChild(li);
        });

        // Afisare tag-uri
        const tags = new Set();
        data.forEach(r => r.tags.forEach(t => tags.add(t)));

        tags.forEach(tag => {
            const li = document.createElement("li");
            li.textContent = tag;
            tagList.appendChild(li);
        });
    });