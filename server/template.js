export default function createTemplate(content, state, scriptTags) {
	return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React SSR</title>
        </head>
        <body>
        <div id="root">${content}</div>
        <script>
        window.state = ${JSON.stringify(state)}
        </script>
        <script>var exports = {};</script>
        ${scriptTags}
    </body>
    </html>
    `;
}
{
	// <script>var exports = {};</script>
	/* <script defer src="/public/server.js">
        </script> */
}
