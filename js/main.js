

var inp_as = document.getElementById("a_size");
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");
var array_size = inp_as.value;

var butts_algos = document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style= "flex-direction: row";

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_arraysize);

function generate_array()
{
    cont.innerHTML="";
    console.log("hii");
    for(var i=0;i<array_size;i++){
        div_sizes[i]=Math.floor(Math.random()*0.5*(inp_as.max-inp_as.min));
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% "+margin_size+"%; background-color: blueviolet; width:"+(100/array_size)+"%; height:"+(div_sizes[i])+"%;";
    }
}

function update_arraysize()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_arraysize();

for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");
        butts_algos[i].disabled = true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "BUBBLE":Bubble();
                        break;
        case "SELECTION":Selection_sort();
                        break;
        case "INSERTION":Insertion();
                        break;
        case "MERGE":Merge();
                        break;
        case "QUICK":Quick();
                        break;
        case "HEAP":Heap();
                        break;
    }
}