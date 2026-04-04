$(document).ready(function() {
    // --- SELECTORS & ATTRIBUTES PAGE ---
    
    // Basic Selectors
    $("#btn-basic").click(function() {
        $("h2").css("color", "red"); // element
        $("#target-id").addClass("highlight"); // id
        $(".target-class").fadeOut().fadeIn(); // class
        $("p, span").css("font-weight", "bold"); // multiple
    });

    // Hierarchy Selectors
    $("#btn-hier").click(function() {
        $(".parent p").css("background", "yellow"); // child
        $(".parent > span").css("background", "orange"); // direct child
        $(".prev + .next").css("border", "2px solid red"); // next sibling
        $(".prev ~ .sib").css("opacity", "0.5"); // all siblings
    });

    // Filter Selectors
    $("#btn-filter").click(function() {
        $("li:first").css("color", "blue");
        $("li:last").css("color", "green");
        $("li:eq(2)").css("font-size", "24px");
        $("li:even").css("background", "#eee");
        $("li:odd").css("background", "#ccc");
        $("li:not(.exclude)").text("Changed!");
    });

    // Attribute Selectors
    $("#btn-attr").click(function() {
        $("[data-type]").css("border", "2px solid black");
        $("[data-type='alert']").css("background", "red");
        $("[href^='https']").text("Secure Link");
        $("[href$='.pdf']").append(" (PDF)");
        $("[href*='google']").css("color", "blue");
    });

    // Attribute Methods
    $("#change-img").click(function() {
        $("#demo-img").attr("src", "https://via.placeholder.com/150/0000FF");
    });
    $("#remove-attr").click(function() {
        $("#demo-img").removeAttr("src");
    });
    $("#toggle-check").click(function() {
        let isChecked = $("#my-check").prop("checked");
        $("#my-check").prop("checked", !isChecked);
    });
    $("#get-val").click(function() {
        alert("Input Value: " + $("#my-input").val());
    });

    // --- EVENTS & STYLE PAGE ---

    // Mouse Events
    $("#click-me").click(() => alert("Clicked!"));
    $("#dbl-click").dblclick(() => alert("Double Clicked!"));
    $("#hover-me").hover(
        function() { $(this).css("background", "pink"); },
        function() { $(this).css("background", ""); }
    );
    $("#mouse-life").mousedown(() => console.log("Down")).mouseup(() => console.log("Up"));

    // Keyboard Events
    $("#key-input").keydown((e) => $("#key-log").text("Key: " + e.key));

    // Form Events
    $("#my-form").submit(function(e) {
        e.preventDefault();
        alert("Form Submitted!");
    });
    $("#select-demo").change(function() {
        alert("Selection: " + $(this).val());
    });
    $("#focus-blur").focus(function() { $(this).css("outline", "2px solid blue"); })
                    .blur(function() { $(this).css("outline", "none"); });

    // General Event Method
    $("#on-off-demo").on("mouseenter", function() { $(this).text("ON"); });
    $("#stop-event").click(() => $("#on-off-demo").off("mouseenter"));

    // Style Manipulation
    $("#btn-css").click(() => $("#style-box").css({"background": "purple", "width": "150px"}));
    $("#btn-add").click(() => $("#style-box").addClass("highlight"));
    $("#btn-rem").click(() => $("#style-box").removeClass("highlight"));
    $("#btn-tog").click(() => $("#style-box").toggleClass("active"));
    $("#btn-has").click(() => alert("Has Active? " + $("#style-box").hasClass("active")));

    // --- TRAVERSING & EFFECTS PAGE ---

    // Parent Traversal
    $("#btn-parent").click(() => $("#child").parent().css("border", "2px dotted red"));
    $("#btn-parents").click(() => $("#child").parents("div").css("background", "#f0f0f0"));

    // Children Traversal
    $("#btn-children").click(() => $("#list-parent").children().css("color", "red"));
    $("#btn-find").click(() => $("#list-parent").find(".special").css("font-weight", "bold"));

    // Sibling Traversal
    $("#btn-sib").click(() => $("#mid").siblings().fadeOut(400).fadeIn(400));
    $("#btn-next").click(() => $("#mid").next().css("color", "blue"));

    // Filtering
    $("#btn-eq").click(() => $(".item").eq(1).css("background", "yellow"));

    // Effects
    $("#btn-show").click(() => $("#effect-box").show());
    $("#btn-hide").click(() => $("#effect-box").hide());
    $("#btn-fade").click(() => $("#effect-box").fadeToggle());
    $("#btn-slide").click(() => $("#effect-box").slideToggle());
    $("#btn-anim").click(() => {
        $("#effect-box").animate({ left: '200px', opacity: '0.5', width: '150px' }, 1000)
                        .animate({ top: '100px' }, 500)
                        .delay(1000)
                        .animate({ left: '0', top: '0', opacity: '1', width: '100px' }, 800);
    });

    // Animation Control
    $("#btn-stop").click(() => $("#effect-box").stop());
    $("#btn-finish").click(() => $("#effect-box").finish());
});
