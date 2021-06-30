function myfunc() {
var v1 = document.getElementById("i1").value


if(((v1.includes("deployment") ) || (v1.includes("deployments")) || (v1.includes("deploy"))) && ((v1.includes("create")) || (v1.includes("launch"))))
{
var deployment_name = prompt("enter deployment name")
var image_name = prompt("enter image name")
value = 2
cmd  = value +" "+ deployment_name + " " + image_name
}

else if((v1.includes("pod") ) && (v1.includes("launch")) || (v1.includes("create")))
{
var pod_name = prompt("enter pod name")
var image_name = prompt("enter image name")
value = 1
cmd  = value +" "+ pod_name + " " + image_name
}

else if(((v1.includes("delete") ) || (v1.includes("remove"))) && ((v1.includes("pod")) || (v1.includes("pods"))))
{
var pod_name = prompt("enter pod name")
value = 3
cmd  = value +" "+ pod_name
}

else if (((v1.includes("get")) ||(v1.includes("list")) || (v1.includes("show"))) && ((v1.includes("pods")) || (v1.includes("pod"))))
{
value = 4
cmd = value
}

else if (((v1.includes("get")) || (v1.includes("list")) || (v1.includes("show"))) && ((v1.includes("deployment")) ||(v1.includes("deployments")) || (v1.includes("deploy"))))
{
value = 5
cmd = value
}


else if(((v1.includes("delete") ) || (v1.includes("remove"))) && ((v1.includes("deployment")) || (v1.includes("deployments")) || (v1.includes("deploy"))))
{
var deployment_name = prompt("enter deployment name")
value = 6
cmd  = value +" "+  deployment_name
}


else if (((v1.includes("delete")) || (v1.includes("remove"))) && ((v1.includes("everything")) || (v1.includes("all"))))
{
value = 7
cmd = value
}

else if (((v1.includes("get")) || (v1.includes("list")) || (v1.includes("show"))) && ((v1.includes("everything")) || (v1.includes("all"))))
{
value = 8
cmd = value
}

else if (((v1.includes("expose")) || (v1.includes("display")) || (v1.includes("exposes"))) && ((v1.includes("deployment")) || (v1.includes("deployments"))))
{
value = 9
deployment_name = prompt("Enter deployment name")
port_num = prompt("Enter port no")
expose_type = prompt("Enter the type which you wanted to expose \n 1.NodePort \n 2.LoadBalancer \n 3.ClusterIP")
cmd = value+" "+ deployment_name + " " + port_num +" " + expose_type
}

else if (((v1.includes("increase")) || (v1.includes("decrease")) || (v1.includes("scale"))) && ((v1.includes("deployment")) || (v1.includes("deploy")) || (v1.includes("deployments"))))
{
value = 10
deployment_name = prompt("Enter deployment name")
replicas = prompt("Enter no of replicas you required")
cmd = value+" "+ deployment_name +" " + replicas
}

else if (((v1.includes("svc")) || (v1.includes("services")) || (v1.includes("service"))) && ((v1.includes("show")) || (v1.includes("get"))))
{
value = 11
cmd = value
}





var xhr = new XMLHttpRequest();
var querystring = "http://localhost/cgi-bin/task9.py?x="+ cmd;
xhr.open("GET",querystring,true);
xhr.send();
xhr.onload= function() {
var output = xhr.responseText;
document.getElementById("d1").innerHTML = output;
}
} 
