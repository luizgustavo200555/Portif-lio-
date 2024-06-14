function showContent(category) {
    var title = document.getElementById(category + "-title").innerHTML;
    var description = document.getElementById(category + "-description").innerHTML;

    document.getElementById('container-2').innerHTML = `
        <div class="content">
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
    `;
}