# Cliniciansmartapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Generating updated models
- using: https://github.com/ferdikoomen/openapi-typescript-codegen
- Installed via: npm install openapi-typescript-codegen -g

 $ openapi -i https://mcc-niddk-backend.wl.r.appspot.com/api -o src/app/generated-data-api

or

  $ openapi -i http://localhost:8081/api-docs -o src/app/generated-data-api/



## Browse API
    https://mcc-niddk-backend.wl.r.appspot.com/swagger-ui/index.html?configUrl=/api-docs/swagger-config

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

For example ng build --prod

## Deployment to firebase
A demonstration instance of the application is deployed to firebase for public viewing - This instance is accessed using the Logica Sandbox MCCeCarePlanTest

     firebase deploy

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Running locally without docker
### Updating client id and API

#### Set environment variable
     export API_SERVER="https://new-api.myapp.com";
     export CLIENT_ID="123456789abcdef"
     
#### Replace variables in env.js
envsubst < src/assets/env.template.js > src/assets/env.js

#### Server the instance

ng serve

## Open Public FHIR Instance
https://api.logicahealth.org/MCCeCarePlanTest/open

# Docker
The included file 'Dockerfle-prod' is a basic production build docker file. It will build the app and containerize it in a node nginx server. 

## Building a production docker image

### Updating client id and API

### Via Docker 
$ docker run -it -e CLIENT_ID='xxxyyzzz123123" -e API_SERVER='http://localhost:8080' -p 80:80 --rm mcccareplan/mccproviderapp 

### Example of connecting to a local development docker instance and exposing the app on port 4200
$ docker run -it -e CLIENT_ID='xxxyyzzz123123' -e API_SERVER='http://localhost:8080' -p 4200:80 --rm mcccareplan/mccproviderapp  


### Eaxmple of running locally against a local production MCC API from Logical 
$ docker run -it -e CLIENT_ID='1491aa24-3b5b-42e8-b532-63707c359493' -e API_SERVER='http://localhost:8080' -p 4200:80 --rm mcccareplan/mccproviderapp

### Building the image
$  docker build -t mcccareplan/mccproviderapp -f Dockerfile-prod .

### Pushing the image
$ docker push mcccareplan/mccproviderapp


### Runtime Environment variabls
| Variable name | Sample Value |
| ------------- | ------------- | 
| API_SERVER | http://localhost:8080 |
| CLIENT_ID | 123456789abcdef |
| LAUNCH_SERVER | https://api.logicahealth.org/MCCeCarePlanTest/data |
| AUTH_DEBUG | false |

### Running the image

 docker run -it -e CLIENT_ID='xxxyyzzz123123' -e API_SERVER='http://localhost:8080' -p 80:80 --rm mcccareplan/mccproviderapp 

### Public build 

The latest images are available at docker hub under mcccareplan/*. 

## Future work relating to docker

1) Testing on containers
1) Assemble a production docker-compose that links the api and the client.
1) Development containerization


 ## Development URL Parameters 
 
 | Parameter | Description | Sample |
|--------- | ------------- | --------|
| devmode | enable development mode | true |
| subject | FHIR Id of the launch subject | cc-pat-pnoelle |

## Environment variables to override after build
| Path | File Name | Description |
| ---- | --------- | ----------- |
| /assets/json/data | lab-mappings.json | Defines the lab results to query on the "Health Status" screen.  Use the file found in  folder [/assets/json/data-backups](src/assets/json/data-backups) | 
| /assets/json/data | vital-mappings.json | Defines the vital signs to query on the "Health Status" screen  Use the file found in  folder [/assets/json/data-backups](src/assets/json/data-backups) | 
| /assets/json/data | feature-toggling.json | Toggle functionality on/off across the application  Use the file found in  folder [/assets/json/data-backups](src/assets/json/data-backups) | 

Use docker -v command to overwrite the "json/data" with a folder of your own.  
The file names and types must match exactly.  Also, you must include all json files even if you are only modifying one.

$ docker run -v {Full 'json/data' Directory Path}:/usr/share/nginx/html/assets/json/data -d -p 80:80 --rm mcccareplan/mccproviderapp

01/18/2023:
Updated code to use Common Data Services and removed the dependecy on mcc-api Java application.

2021-10-19
 - Release ("1.2.7")
 - Fix Docker dependacy to the be the latest nginx


2021-09-16
- Release ("1.2.6")
- Fix for Target Values spinner never finishing

2021-08-25
- Release ("1.2.5")
- Changed UACR table color coding to conform with graphing olor coding

2021-08-23
- Release ("1.2.4")
- Changed spinners to display header while loading
- Added more null handling to the care team

2021-08-16
- Release ("1.2.3")
- Changed the "firstRecorded" date in Active/Inactive diagnosis panels to use "firstRecordedAsText" due to timezone rendering issues offsetting rendered date by a day
- Added loading spinners to Medications, Education, Counseling and Referrals

2021-08-05
- Release ("1.2.2")
- Changed EGFR data service to correctly parse string value types
- Removed sorting from EGFR result column to accomodate string value types
- Filtered EGFR chart data to omit string values

2021-07-29
- Release ("1.2.1")
- Change logging implemented in 1.2.0 to prevent crashing

2021-07-22
- Release ("1.2.0")
- Attempt to fix IE 11 Table overlap bug on "Health Status" screen (unable to debug IE11 locally)
- More logging on "DATA" property assignments
- Better spinner handling

2021-07-19
- Release ("1.1.9")
- Gave uniform widths to tables and charts on the "Health Status" page to fix some odd sizing
- Some small table padding improvements for cleaner ui
- Fixed observation calls not adding header or handling errors correctly.  Should fix lab results not loading.
- Added some loading spinners

2021-06-15
- Release ("1.1.8")
- Updated WoT to have configurable preferred units
- Updated WoT to have dynamic y-axis range
- Updated WoT to render preferred units in title and data

2021-06-14
- Release ("1.1.7")
- Remove Weight Over Time color banding

2021-05-14
- Release ("1.1.6")
- New unit type api param utilized for EGFR
- First recorded date integrated into active/inactive diagnoses tables/modals
- Paging fix for goals/diagnoses
- Update datamodel

2021-05-11
- Release ("1.1.5")
- New nginx config file to resolve intermittent 404 routing issues (on reload primarily)
- More null handling for condition modal

2021-05-10
- Release ("1.1.4")
- 404 Retry handler
- Handling EGFR values without a unit type
- Added "EGFR" label to EGFR dropdown values
- More null handling on diagnoses tables

2021-05-04
- Release ("1.1.3")
- Attempted fix for graph lifecycle issues

2021-05-03
- Release ("1.1.2")
- Set feature toggling, vitals & labs options to be overridden by docker
- Sort egfr default
- CodeableConcept value handler

2021-04-20
- Release ("1.1.1")
- Restored Condition Click functionality
- Fixed WoT Table color coding
- Handle period onset values
- Better labels for Questionnaires
- More logging for debugging
- Removed Bezier curves
 
2021-04-08
- Release ("1.1.0")
- Labs/Vitals now configurable via JSON
- Features can now be toggled on/off via JSON
- Fix for medications table not loading

2021-03-29
- Release ("1.0.9")
- Handle no careplans (default labs/vitals)
- Better responsiveness

2021-03-18
- Release ("1.0.8")
- Refactored tables (due to large amounts of console errors)

2021-03-15    
- Release ("1.0.7")
- Changed eGFR to use "segmented" endpoint
- Changed eGFR to group multiple data sets
- Changed eGFR to force user to choose which dataset to render
- Removed invalid "key" field usage (no ui changes)

2021-03-04
- Release ("1.0.6")
- Null handling for goals' Achievement Status
- Individual Error handling for Labs/Vitals
- Loading text for Labs/Vitals due to long load times

2021-02-25
- release ("1.0.5")
- Updated lab pull log
- Updated Various Display issues

2021-02-02
- First full release ("1.0.1")
- Support for the AUTH_DEBUG environment variable

2021-01-08 
- Added support for standalone launch

2021-01-05
- Update to deal with observations of status 'notfound'

2021-01-04
- Updated to fix issues with education, counseling, referrals passing the right header info.

2021-12-30
- Wired in education, counseling, and referrals.
