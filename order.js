<div id="output">

<h2>

Order of the day

</h2>

</div>

<script>

var arrStr = ['Mehvish', 'Tahir', 'John', 'Sania', 'Thomas'];

var randarray = [];

 

const current = new Date();

document.write(current)

 

document.write("<h2><ol>")

while (arrStr.length) {

    document.write("<li>"+arrStr.splice(Math.floor(Math.random() * arrStr.length), 1) + '</li>');

}

document.write("</ol></h2>")

 

 

</script>
