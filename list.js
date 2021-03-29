function create(list)
{
    var i = 0;
    while(i != 2)
    {
        document.write("<div class='grid-2'>");
        var j = 0;
        while(j != 5)
        {
            document.write("<div>");
            document.write("<h3><a href=./directory/"+list[0]+".html>"+list[0]+"</a></h2>");
            document.write("</div>");
            list.shift();
            j += 1;
        }
        i += 1;
        document.write("</div>");
    }
}