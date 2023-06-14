module.exports = async function (context, req) {
    console.log(context)
    context.res.json({
        text: "Hello from the API"
    });
}