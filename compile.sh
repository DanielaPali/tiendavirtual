#!/bin/bash

compilar (){
echo "Limpiando . . ."
mvn clean
echo "Compilando . . ."
mvn compile
echo "Generando WAR . . ."
mvn package
}


reemplazar(){
echo "|------------------- Moviendo war a JBOSS -------------------|"
cp ./target/*.war "/home/aeternam/Documents/eglobal/JBOSS-7.4 - docker/standalone/deployments"
}

compilar
reemplazar

