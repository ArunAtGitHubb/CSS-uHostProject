$(function () {
    $(".testimonial__name").click(function (e) {
        e.preventDefault();
        const id = e.currentTarget.parentNode.parentNode.id;
        let selector = "#" + id + " > .testimonial__image-container"
        $(selector).toggle();
    });
});