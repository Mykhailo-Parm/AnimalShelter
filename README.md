# Project Overview (English Version)
This project is a web application with a frontend built using React.js and a backend developed with Java Spring. The project is structured into two main directories: client for the frontend and server for the backend.

## Prerequisites
* Node.js: Required for running the React.js frontend.
* Maven: Required for building and running the Java Spring backend.
* Java JDK: Required for the backend.
---
### Setup Instructions
**1. Clone the repository:**
```
git clone <repository-url>
cd <repository-directory>
```
**2. Frontend Setup:**
* Navigate to the client directory:
```
cd client
```
* Install the required Node.js dependencies:
```
npm install
```
* Start the React development server:
```
npm start
```
* The React app should now be running at http://localhost:3000.

**3. Backend Setup:**
* Navigate to the server directory:
```
cd ../server
```
* Build the project using Maven:
```
./mvnw clean install
```
* Run the Spring Boot application:
```
./mvnw spring-boot:run
```
* The backend should now be running at http://localhost:8080.

***
### Additional Notes
* Ensure that both the frontend and backend are running simultaneously for the application to function correctly.
* Adjust the API endpoints in the React app if the backend server is hosted on a different port or domain.
<br/><br/>
<br/><br/>
<br/><br/>
***
# Projektübersicht (Deutsche Version)
Dieses Projekt ist eine Webanwendung mit einem Frontend, das mit React.js erstellt wurde, und einem Backend, das mit Java Spring entwickelt wurde. Das Projekt ist in zwei Hauptverzeichnisse unterteilt: client für das Frontend und server für das Backend.

## Voraussetzungen
* Node.js: Erforderlich zum Ausführen des React.js-Frontends.
* Maven: Erforderlich zum Erstellen und Ausführen des Java Spring-Backends.
* Java JDK: Erforderlich für das Backend.
---
### Setup-Anweisungen
**1. Repository klonen:**
```
git clone <repository-url>
cd <repository-directory>
```
**2. Frontend-Setup:**
* Wechseln Sie in das client-Verzeichnis:
```
cd client
```
* Installieren Sie die erforderlichen Node.js-Abhängigkeiten:
```
npm install
```
* Starten Sie den React-Entwicklungsserver:
```
npm start
```
* Die React-Anwendung sollte jetzt unter http://localhost:3000 laufen.

**3. Backend-Setup:**
* Wechseln Sie in das server-Verzeichnis:
```
cd ../server
```
* Erstellen Sie das Projekt mit Maven:
```
./mvnw clean install
```
* Starten Sie die Spring Boot-Anwendung:
```
./mvnw spring-boot:run
```
* Das Backend sollte jetzt unter http://localhost:8080 laufen.

***
### Zusätzliche Hinweise
Stellen Sie sicher, dass sowohl das Frontend als auch das Backend gleichzeitig ausgeführt werden, damit die Anwendung korrekt funktioniert.
Passen Sie die API-Endpunkte in der React-App an, wenn der Backend-Server auf einem anderen Port oder einer anderen Domain gehostet wird.
<br/><br/>
<br/><br/>
<br/><br/>
***
# Project Documentation
### Diagrams
![](https://github.com/user-attachments/assets/3a09e5d8-6787-4e35-9e2a-e0e8ffdb0f31)

*ER diagram of the IS “Animal Shelter”*

![](https://github.com/user-attachments/assets/ffd5b984-32ef-414c-9f1d-9da7f98608c8)

*FA diagram of the IS “Animal Shelter”*

![](https://github.com/user-attachments/assets/5f846d7d-c7fd-42a5-ad7e-129916d98472)

*Physical model of the database*

![](https://github.com/user-attachments/assets/686899e8-48f5-4021-a10b-700feae5606a)

*Diagram of the main classes of the system*

![](https://github.com/user-attachments/assets/40fd07e0-64a8-47aa-8a76-aaf2221213ab)

*Class diagram in the context of the MVC (User) pattern*

![](https://github.com/user-attachments/assets/ecf04f6e-eff9-486a-a631-938ca2bedf56)

*Diagram of the sequence of actions*

![](https://github.com/user-attachments/assets/cf8d7b9d-cf4a-44da-9e6b-8fbe899b4c78)

*Activity diagram of the application processing process*

![](https://github.com/user-attachments/assets/ab4852b4-6672-4c7b-b57c-eb4ec6dae15b)

*Activity diagram of the application execution process*
