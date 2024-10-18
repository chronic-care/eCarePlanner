# eCarePlanner

**Goals \> Goals**

* Rationale  
  * Show all patient goals both inactive and active.  
  * There is a mapping for what is considered “active” (see notes).  
* Logic  
  * Gets all goals for the patient  
  * Caches to the following buckets. (What’s not an active Patient Goal goes into active Clinical Goal; and the same for inactive.)  
    * allGoals  
    * activePatientGoals (goal.expressedByType \=== 'Patient')  
    * activeClinicalGoals   
    * inactivePatientGoals (goal.expressedByType \=== 'Patient')  
    * inactiveClinicalGoals  
* Notes  
  * Active versus inactive is based on the following chart of FHIR statuses:  
     proposed: ACTIVE\_STATUS.ACTIVE,  
     planned: ACTIVE\_STATUS.ACTIVE,  
     accepted: ACTIVE\_STATUS.ACTIVE,  
     'on-hold': ACTIVE\_STATUS.ACTIVE,  
     unknown: ACTIVE\_STATUS.ACTIVE,  
     completed: ACTIVE\_STATUS.INACTIVE,  
     cancelled: ACTIVE\_STATUS.INACTIVE,  
     rejected: ACTIVE\_STATUS.ACTIVE,  
     active: ACTIVE\_STATUS.ACTIVE,  
     'entered-in-error': ACTIVE\_STATUS.IGNORE,

**Health Concerns \> Problem List**

* Rationale  
  * Display all problem list Conditions from EHR systems with status \= ACTIVE\_STATUS.ACTIVE  
* Logic  
  * Condition?category=problem-list-item  
* Notes  
  * N/A

**Health Concerns \> Other Health Concerns**

* Rationale  
  * Display all health concern Conditions from EHR systems with status \= ACTIVE\_STATUS.ACTIVE  
* Logic  
  * Condition?category=health-concern  
* Notes  
  * Uncategorized conditions will be ignored

**Health Concerns \> Inactive Diagnosis**

* Rationale  
  * Display all health concern Conditions from EHR systems with status \= ACTIVE\_STATUS.INACTIVE  
  * There is a mapping for what is considered “active” (see notes).  
* Logic  
  * Condition?category=health-concern and Condition?category=problem-list-item  
    With inactive status  
* Notes   
  * Uncategorized conditions will not be displayed.  
  * Active versus inactive is based on the following chart of FHIR statuses:  
    "active:confirmed": ACTIVE\_STATUS.ACTIVE,  
    "active:provisional": ACTIVE\_STATUS.ACTIVE,  
    "active:missing": ACTIVE\_STATUS.ACTIVE,  
    "active:undefined": ACTIVE\_STATUS.ACTIVE,  
    "active:differential": ACTIVE\_STATUS.ACTIVE,  
    "active:unconfirmed": ACTIVE\_STATUS.ACTIVE,  
    "active:refuted": ACTIVE\_STATUS.INACTIVE,  
    "active:entered-in-error": ACTIVE\_STATUS.IGNORE,  
    "recurrence:confirmed": ACTIVE\_STATUS.ACTIVE,  
    "recurrence:provisional": ACTIVE\_STATUS.ACTIVE,  
    "recurrence:missing": ACTIVE\_STATUS.ACTIVE,  
    "recurrence:undefined": ACTIVE\_STATUS.ACTIVE,  
    "recurrence:differential": ACTIVE\_STATUS.ACTIVE,  
    "recurrence:unconfirmed": ACTIVE\_STATUS.ACTIVE,  
    "recurrence:refuted": ACTIVE\_STATUS.INACTIVE,  
    "recurrence:entered-in-error": ACTIVE\_STATUS.IGNORE,  
    "relapse:confirmed": ACTIVE\_STATUS.ACTIVE,  
    "relapse:provisional": ACTIVE\_STATUS.ACTIVE,  
    "relapse:missing": ACTIVE\_STATUS.ACTIVE,  
    "relapse:undefined": ACTIVE\_STATUS.ACTIVE,  
    "relapse:differential": ACTIVE\_STATUS.ACTIVE,  
    "relapse:unconfirmed": ACTIVE\_STATUS.ACTIVE,  
    "relapse:refuted": ACTIVE\_STATUS.INACTIVE,  
    "relapse:entered-in-error": ACTIVE\_STATUS.IGNORE,  
    "inactive:confirmed": ACTIVE\_STATUS.INACTIVE,  
    "inactive:provisional": ACTIVE\_STATUS.INACTIVE,  
    "inactive:missing": ACTIVE\_STATUS.INACTIVE,  
    "inactive:undefined": ACTIVE\_STATUS.INACTIVE,  
    "inactive:differential": ACTIVE\_STATUS.INACTIVE,  
    "inactive:unconfirmed": ACTIVE\_STATUS.INACTIVE,  
    "inactive:refuted": ACTIVE\_STATUS.INACTIVE,  
    "inactive:entered-in-error": ACTIVE\_STATUS.IGNORE,  
    "remission:confirmed": ACTIVE\_STATUS.INACTIVE,  
    "remission:provisional": ACTIVE\_STATUS.INACTIVE,  
    "remission:missing": ACTIVE\_STATUS.INACTIVE,  
    "remission:undefined": ACTIVE\_STATUS.INACTIVE,  
    "remission:differential": ACTIVE\_STATUS.INACTIVE,  
    "remission:unconfirmed": ACTIVE\_STATUS.INACTIVE,  
    "remission:refuted": ACTIVE\_STATUS.INACTIVE,  
    "remission:entered-in-error": ACTIVE\_STATUS.IGNORE,  
    "resolved:confirmed": ACTIVE\_STATUS.INACTIVE,  
    "resolved:provisional": ACTIVE\_STATUS.INACTIVE,  
    "resolved:missing": ACTIVE\_STATUS.INACTIVE,  
    "resolved:undefined": ACTIVE\_STATUS.INACTIVE,  
    "resolved:differential": ACTIVE\_STATUS.INACTIVE,  
    "resolved:unconfirmed": ACTIVE\_STATUS.INACTIVE,  
    "resolved:refuted": ACTIVE\_STATUS.INACTIVE,  
    "resolved:entered-in-error": ACTIVE\_STATUS.IGNORE,

**Health Maintenance & Interventions \> Active Medications**

* Rationale  
  * Retrieve and display all active MedicationRequests. There is a mapping for what is considered “active” (see notes).  
* Logic  
  * Patient/MedicationRequest  
    activeMedications  
    inactiveMedications  
  * Only active are displayed  
* Notes  
  * Active is based on the following chart of FHIR statuses:  
    active: ACTIVE\_STATUS.ACTIVE,  
    'on-hold': ACTIVE\_STATUS.INACTIVE,  
    cancelled: ACTIVE\_STATUS.INACTIVE,  
    'completed': ACTIVE\_STATUS.INACTIVE,  
    'entered-in-error': ACTIVE\_STATUS.IGNORE,  
    stopped: ACTIVE\_STATUS.INACTIVE,  
    unknown: ACTIVE\_STATUS.INACTIVE,

**Health Maintenance & Interventions \> Active Orders**

* Rationale  
  * Retrieve and display all active ServiceRequest resources  
* Logic  
  * ServiceRequest?status=active  
* Notes  
  * The only Status is when “status \= active”. No additional mapping.

**Health Status Evaluation & Outcomes**  
This tab includes eight possible sections based on category of the Observation. US Core requires category for Observations for Vital Signs, Laboratory, and Social History. The other categories proposed are available in the FHIR spec but are not required in US Core. There is a configuration variable named “showComponent” which is declared in each component section. “False” hides the section and “True” shows the section.

**Health Status Evaluation & Outcomes \> Vital Signs and Measure**

* Rationale  
  * Show the following vital signs:  
    * Blood pressure diastolic and systolic  
      Show blood pressure over time  
      Show weight over time  
* Logic  
  * Query by value set for diastolic  
    Query by value set for systolic  
    Query by value set for weight  
* Notes  
  * Value set is custom-built in eCarePlanner.  
  * The value sets currently included are available in Appendix A.

**Health Status Evaluation & Outcomes \> Procedure Result**

* Rationale  
  * A clinical FHIR SME designed the page with Procedure per the FHIR specification as a separate section to facilitate easy navigation for patient status  
* Logic  
  * Patient/Observation?category=procedure  
* Notes  
  * N/A

**Health Status Evaluation & Outcomes \> Imaging Results**

* Rationale  
  * A clinical FHIR SME designed the page with Imaging per the FHIR specification as a separate section to facilitate easy navigation for patient status  
* Logic  
  * Patient/Observation?category=imaging  
* Notes  
  * N/A

**Health Status Evaluation & Outcomes \> Tests**

* Rationale  
  * Technical Expert Panels (TEP) convened under the MCC project defined the lab codes to be included.  
* Logic  
  * Query by value sets  
* Notes  
  * Value set is custom-built in eCarePlanner.  
  * Lab codes included in the app can be found in Appendix B.

**Health Status Evaluation & Outcomes \> Activities**

* Rationale  
  * A clinical FHIR SME designed the page with Activities per the FHIR specification as a separate section to facilitate easy navigation for patient status  
* Logic  
  * Patient/Observation?category=activity  
* Notes  
  * N/A

**Health Status Evaluation & Outcomes \> Exam**

* Rationale  
  * A clinical FHIR SME designed the page with Exam per the FHIR specification as a separate section to facilitate easy navigation for patient status  
* Logic  
  * Patient/Observation?category=exam  
* Notes  
  * N/A

**Health Status Evaluation & Outcomes \> History**

* Rationale  
  * A clinical FHIR SME designed the page with Social History per the FHIR specification as a separate section to facilitate easy navigation for patient status  
* Logic  
  * Patient/Observation?category=social-history  
* Notes  
  * N/A

**Health Status Evaluation & Outcomes \> Therapy**

* Rationale  
  * A clinical FHIR SME designed the page with Therapy per the FHIR specification as a separate section to facilitate easy navigation for patient status  
* Logic  
  * Patient/Observation?category=therapy  
* Notes  
  * N/A

**Care Team**

* Rationale  
  * Retrieve and display participants included in CareTeam resources, as defined by US Core conformance and search specifications.  
    * [https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-careteam.html](https://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-careteam.html)  
  * Retrieve and display only “longitudinal” care teams.  
  * A Practitioner is displayed in the application CareTeam tab ***only*** if it is included in a CareTeam resource returned by an EHR system. Many Practitioners are referenced from other FHIR resources as the requester or performer, but they are not displayed in Care Team unless also included in a defined CareTeam resource.  
* Logic  
  * CareTeam?category=longitudinal  
* Notes  
  * N/A

## Use of FHIR Search Parameters

**\_count=x**

* This parameter may be added to any FHIR search. If included, this number sets the maximum number of resources that should be returned ***per page*** of results. However, the default JavaScript API for FHIR return all available pages from a single query. So including \_count is only useful in our apps if we also override the API to only return one page.  
* Not currently used in eCarePlanner

**\_sort**

* For example: &\_sort:desc=date would sort returned resources descending by date  
* However, this parameter is not supported by and EHR vendor FHIR endpoint that we’ve reviewed.  
* This \_sort parameter might be useful when executing our searching on the SDS FHIR service. This is based on HAPI reference implementation that does support \_sort for all resource types.  
* Not currently used in eCarePlanner; No EHR system supports \_sort.

**\_include**

* This parameter is very useful to improve performance when you also want to return references from the base resource.  For example, a single search will return CareTeam, plus all referenced Practitioner resource in a single Bundle.  
* For example: CareTeam?\_include=CareTeam:participant  
* However, our testing showed that Cerner and Allscripts FHIR endpoints do not support \_include and throw an error that causes the entire query to fail. eCarePlanner checks for a FHIR base URL from one of these vendors and omits the \_include parameter.

**\_revinclude**

* Reverse include, i.e. return all resources that include the target resource in one of its references. Allowed by the FHIR specification for any resource. However, very limited support by current EHR vendors.  
* However, support for \_revinclude is specifically required by US Core testing to enable efficient search of Provenance resources. eCarePlanner includes this search appended to all resource types to return Provenance in a single Bundle of results  
  * '&\_revinclude=Provenance:target'

**category**

* Included in some searches to limit the results to the specified list of one or more categories. Only a few category codes are standardized and required by US Core; others may not be used consistently between EHR vendors.  
* For example:   
  * Condition?category=problem-list-item  
  * And Condition?category=health-concern  
  * These could be combined into a single query for “probem-list-item,health-concern”, but earlier versions of Epic threw an error if more than one category is included in a single Condition query.  
* We also include a search for assessment Observations (e.g. from a questionnaire) using “category=survey”. Assessment Observations are defined in detail in recent versions of US Core FHIR IG that will be required for conformance by Jan 1, 2026\.   
* However, Epic threw a runtime error if this category is used by itself, so as a workaround, we appended a second category that is support by Epic:  
  * Observation?category=survey,functional-mental-status

**code**

* This parameter can be included to limit search results to one or more specific terminology codes. No EHR system supports query by value set so using code is the only viable option to query EHR systems right now.  
* eCarePlanner uses this parameter for Labs and Vital signs (see Appendix A and B). 

## Appendix A. Vital signs codes 
{  
   "general": \[  
       {  
           "name": "Blood Pressure",  
           "value": "85354-9",  
           "type": "panel"  
       },  
       {  
           "name": "Weight",  
           "value": "29463-7",  
           "type": "panel"  
       }  
   \],  
   "ckd": \[  
       {  
           "name": "Cognitive Status (MoCA)",  
           "value": "72172-0",  
           "type": "question"  
       },  
       {  
           "name": "Fatigue (PROMIS T-score)",  
           "value": "77864-7",  
           "type": "question"  
       },  
       {  
           "name": "Functional Status (PROMIS raw score)",  
           "value": "77827-4",  
           "type": "question"  
       },  
       {  
           "name": "Pain Interference (PROMIS T-score)",  
           "value": "77865-4",  
           "type": "question"  
       },  
       {  
           "name": "Pain Severity (Wong-Baker FACES)",  
           "value": "38221-8",  
           "type": "question"  
       },  
       {  
           "name": "PHQ9",  
           "value": "44261-6",  
           "type": "question"  
       }  
   \]  
}

## Appendix B. Lab codes
{  
   "general": \[  
       {  
           "name": "Serum Creatinine",  
           "value": "2.16.840.1.113762.1.4.1222.111",  
           "type": "valueset"  
       },  
       {  
           "name": "Hemoglobin",  
           "value": "2.16.840.1.113762.1.4.1222.114",  
           "type": "valueset"  
       },  
       {  
           "name": "A1C",  
           "value": "2.16.840.1.113762.1.4.1222.119",  
           "type": "valueset"  
       },  
       {  
           "name": "Serum Potassium",  
           "value": "2.16.840.1.113762.1.4.1222.120",  
           "type": "valueset"  
       },  
       {  
           "name": "Serum Phosphorus",  
           "value": "2.16.840.1.113762.1.4.1222.123",  
           "type": "valueset"  
       },  
       {  
           "name": "Calcium",  
           "value": "17861-6",  
           "type": "code"  
       },  
       {  
           "name": "Serum Albumin",  
           "value": "2.16.840.1.113762.1.4.1222.151",  
           "type": "valueset"  
       },  
       {  
           "name": "Blood Urea Nitrogen",  
           "value": "2.16.840.1.113762.1.4.1222.113",  
           "type": "valueset"  
       },  
       {  
           "name": "LDL",  
           "value": "2.16.840.1.113883.3.117.1.7.1.215",  
           "type": "valueset"  
       },  
       {  
           "name": "HDL",  
           "value": "2.16.840.1.113762.1.4.1222.135",  
           "type": "valueset"  
       },  
       {  
           "name": "Triglycerides",  
           "value": "2.16.840.1.113762.1.4.1222.137",  
           "type": "valueset"  
       },  
       {  
           "name": "Total Cholesterol",  
           "value": "2.16.840.1.113762.1.4.1222.139",  
           "type": "valueset"  
       },  
       {  
           "name": "Vitamin D",  
           "value": "2.16.840.1.113762.1.4.1222.126",  
           "type": "valueset"  
       },  
       {  
           "name": "Serum Bicarbonate",  
           "value": "2.16.840.1.113762.1.4.1222.130",  
           "type": "valueset"  
       },  
       {  
           "name": "Sodium",  
           "value": "2.16.840.1.113762.1.4.1222.131",  
           "type": "valueset"  
       },  
       {  
           "name": "Chloride",  
           "value": "2.16.840.1.113762.1.4.1222.132",  
           "type": "valueset"  
       }  
   \],  
   "ckd": \[  
       {  
           "name": "UACR",  
           "value": "2.16.840.1.113883.3.6929.2.1002",  
           "type": "valueset"  
       },  
       {  
           "name": "Serum Creatinine",  
           "value": "2.16.840.1.113762.1.4.1222.111",  
           "type": "valueset"  
       },  
       {  
           "name": "Hemoglobin",  
           "value": "2.16.840.1.113762.1.4.1222.114",  
           "type": "valueset"  
       },  
       {  
           "name": "A1C",  
           "value": "2.16.840.1.113762.1.4.1222.119",  
           "type": "valueset"  
       },  
       {  
           "name": "Serum Potassium",  
           "value": "2.16.840.1.113762.1.4.1222.120",  
           "type": "valueset"  
       },  
       {  
           "name": "Serum Phosphorus",  
           "value": "2.16.840.1.113762.1.4.1222.123",  
           "type": "valueset"  
       },  
       {  
           "name": "Calcium",  
           "value": "17861-6",  
           "type": "code"  
       },  
       {  
           "name": "Serum Albumin",  
           "value": "2.16.840.1.113762.1.4.1222.151",  
           "type": "valueset"  
       },  
       {  
           "name": "Transferrin Saturation",  
           "value": "2.16.840.1.113762.1.4.1222.118",  
           "type": "valueset"  
       },  
       {  
           "name": "Ferritin",  
           "value": "2.16.840.1.113762.1.4.1222.140",  
           "type": "valueset"  
       },  
       {  
           "name": "Blood Urea Nitrogen",  
           "value": "2.16.840.1.113762.1.4.1222.113",  
           "type": "valueset"  
       },  
       {  
           "name": "LDL",  
           "value": "2.16.840.1.113883.3.117.1.7.1.215",  
           "type": "valueset"  
       },  
       {  
           "name": "HDL",  
           "value": "2.16.840.1.113762.1.4.1222.135",  
           "type": "valueset"  
       },  
       {  
           "name": "Triglycerides",  
           "value": "2.16.840.1.113762.1.4.1222.137",  
           "type": "valueset"  
       },  
       {  
           "name": "Total Cholesterol",  
           "value": "2.16.840.1.113762.1.4.1222.139",  
           "type": "valueset"  
       },  
       {  
           "name": "Vitamin D",  
           "value": "2.16.840.1.113762.1.4.1222.126",  
           "type": "valueset"  
       },  
       {  
           "name": "KT/V",  
           "value": "2.16.840.1.113762.1.4.1222.128",  
           "type": "valueset"  
       },  
       {  
           "name": "Intact Parathyroid Hormone",  
           "value": "2.16.840.1.113762.1.4.1222.129",  
           "type": "valueset"  
       },  
       {  
           "name": "Serum Bicarbonate",  
           "value": "2.16.840.1.113762.1.4.1222.130",  
           "type": "valueset"  
       },  
       {  
           "name": "Sodium",  
           "value": "2.16.840.1.113762.1.4.1222.131",  
           "type": "valueset"  
       },  
       {  
           "name": "Chloride",  
           "value": "2.16.840.1.113762.1.4.1222.132",  
           "type": "valueset"  
       },  
       {  
           "name": "PTH",  
           "value": "2.16.840.1.113762.1.4.1222.129",  
           "type": "valueset"  
       }  
   \]  
}
