#!/usr/bin/python3

print("content-type: text/html")
print()

import subprocess as sp
import cgi
field = cgi.FieldStorage()
value = field.getvalue('x')

cmd = value.split()
#print(cmd[0])
#print(cmd[1])
#print(cmd[2])
if cmd[0] == "1":
   podname = cmd[1]
   imagename = cmd[2]
   cmd = (" sudo kubectl run {} --image={} --kubeconfig admin.conf").format(podname,imagename)
   output = sp.getoutput(cmd)
   print(output)
elif cmd[0] == "2":
   deployname = cmd[1]
   imagename = cmd[2]
   cmd = (" sudo kubectl create deploy {} --image={} --kubeconfig admin.conf").format(deployname,imagename)
   output = sp.getoutput(cmd)
   print(output)
elif cmd[0] == "3":
   podname = cmd[1]
   cmd = (" sudo kubectl delete pod {}  --kubeconfig admin.conf").format(podname,)
   output = sp.getoutput(cmd)
   print(output)

elif cmd[0] == "4":
   cmd = (" sudo kubectl get pods --kubeconfig admin.conf")
   output = sp.getoutput(cmd)
   print(output)

elif cmd[0] == "5":
   cmd = (" sudo kubectl get deploy --kubeconfig admin.conf")
   output = sp.getoutput(cmd)
   print(output)

elif cmd[0] == "6":
   deploymentname = cmd[1]
   cmd = (" sudo kubectl delete deployment {}  --kubeconfig admin.conf").format(deploymentname,)
   output = sp.getoutput(cmd)
   print(output)

elif cmd[0] == "7":
   cmd = (" sudo kubectl delete all --all --kubeconfig admin.conf")
   output = sp.getoutput(cmd)
   print(output)

elif cmd[0] == "8":
   cmd = (" sudo kubectl get all --kubeconfig admin.conf ")
   output = sp.getoutput(cmd)
   print(output)

elif cmd[0] == "9":
   deploymentname = cmd[1]
   portno = cmd[2]
   exposetype = cmd[3]
   cmd = ("sudo kubectl expose deployment {} --port={} --type={}  --kubeconfig admin.conf").format(deploymentname,portno,exposetype)
   output = sp.getoutput(cmd)
   print(output)

elif cmd[0] == "10":
   deploymentname = cmd[1]
   replicano = cmd[2]
   cmd = ("sudo kubectl scale deployment {} --replicas={} --kubeconfig admin.conf").format(deploymentname,replicano)
   output = sp.getoutput(cmd)
   print(output)


elif cmd[0] == "11":
   cmd = ("sudo kubectl get svc --kubeconfig admin.conf ")
   output = sp.getoutput(cmd)
   print(output)





