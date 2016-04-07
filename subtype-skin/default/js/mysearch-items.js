/**
 * Created by User on 3/9/2016.
 */
$j(document).ready(function(){
    $j(".mysearch-header").click(function(){
        $j("#header-search").toggle();
    });
    $j(".search-close").click(function(){
        $j("#header-search").hide();
    });
});

