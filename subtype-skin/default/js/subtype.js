/**
 * Created by User on 3/1/2016.
 */
$j(document).ready(function(){
    $j(".skip-active").on("mouseleave", function(){
        $j('.skip-content').hide();
        $j('.skip-active').hide();

    });
});