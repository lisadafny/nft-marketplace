$(document).ready(function () {
    const titleModal = "Sorry :(";
    const msgModal = "I don't work yet, but please don't give up on me.<br> Come back again later!";
    openModalInfo(titleModal, msgModal);
});
function openModalInfo(title, msg) {
    $("#modalInfo").modal("show");
    $(".modal-title").html(title);
    $(".modal-body p").html(msg);
}