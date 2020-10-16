const snippetTemplate = (obj) => {
    const tab = `    `;
    let html = ``;
    html += `<pre>`;
    html += `<code>`;
    html += `randomDraw({`;

    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }

    html += `})`;
    html += `</code>`;
    html += `</pre>`;
};

export default snippetTemplate;
