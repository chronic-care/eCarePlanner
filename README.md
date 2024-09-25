# eCarePlanner SMART on FHIR app

The eCarePlanner web-based application is launched by a clinical user from within that user’s EHR desktop application using that practitioner’s current login credentials and the current patient being viewed in the EHR. The eCarePlanner application displays data for that patient, if the EHR system is configured to allow the practitioner to access that patient’s data. Key features include:
- eCarePlanner must be configured as a SMART app in the user’s EHR system, whereupon it will be launched using the HL7 SMART v1 [EHR launch sequence](https://hl7.org/fhir/smart-app-launch/1.0.0/#ehr-launch-sequence) standard that includes use of OAuth2 for secure login and access to patient data.
- In order to retrieve supplemental data saved by a patient or caregiver, the SDS service must be installed, hosted, and integrated by the same provider organization used by a patient. Supplemental data are not accessible by a patient’s care team members outside of this organization.
- eCarePlanner can be used without an SDS installation, but a clinical user will not be able to retrieve any supplemental data authored by patients or caregivers. And, without the SDS, no patient data from other healthcare organizations will be available or displayed in eCarePlanner.

## Development Details
- [How to build this Angular web application](documentation/developer-build.md)

## Application Overview and Architecture
* Coming soon
