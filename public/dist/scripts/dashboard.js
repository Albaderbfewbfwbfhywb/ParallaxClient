const apiUrl = window.REACT_APP_API_BASE_URL + '/api/profile';
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        var targetElement, htmlContent, id = "", table_id = "", name_id = "", table_targetElement, table_htmlContent = "", table_data = "";
        for (var i = 0; i < data.data.length; i++) {
            id = "img-dashboard-profile" + i;
            table_id = "tb_transactions" + i;
            name_id = "profile-name" + i;
            targetElement = document.getElementById(id);
            table_targetElement = document.getElementById(table_id);
            if (i != 2) {
                htmlContent = "<img class='c-speed-block_image' src='assets/img/" + data.data[i].photo_url + "' alt='Locomotive image from unsplash'>";
            } else {
                htmlContent = `<div class="c-fixed" data-scroll data-scroll-sticky data-scroll-target="#fixed-target" \
                    style="background-image:url('/assets/img/image_3.webp')"></div>`;
            }
            targetElement.innerHTML = htmlContent;
            htmlContent = "";

            for (var j = 0; j < data.data[i].transactions.length; j++) {
                table_data += "<tr><td>" + data.data[i].transactions[j].date + "</td><td>" + data.data[i].transactions[j].amount + "</td><td>" + data.data[i].transactions[j].description + "</td></tr>"
            }

            table_htmlContent = "<table><thead><tr><th>date</th><th>amount</th><th>description</th></tr></thead>" + table_data + "<tbody></tbody></table>";
            table_targetElement.innerHTML = table_htmlContent;
            table_data = "";

            document.getElementById(name_id).innerHTML = data.data[i].name;

        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

// Retrieve the target element
// var targetElement = document.getElementById("tb_transactions");

// // Define the HTML content
// var htmlContent = "<h1>Hello, World!</h1><p>This is some HTML content.</p>";

// // Set the innerHTML of the target element
// targetElement.innerHTML = htmlContent;