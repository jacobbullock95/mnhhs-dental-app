using System;

namespace DentalApp.API.Models
{
    public class ConsentForm
    {
        public int Id { get; set; }

        public string FormDate { get; set; }

        

        //Details

        public string ChildTitle { get; set; }

        public string ChildFirstName { get; set; }

        public string ChildLastName { get; set; }

        public string ChildAlt { get; set; }

        public string Gender { get; set; }

        public string ChildPhone { get; set; }

        public string DateOfBirth { get; set; }

        public string HomeAddress { get; set; }

        public string PostalAddress { get; set; }

        public string IceName { get; set; }

        public string IcePhone { get; set; }


        public string HealthcareNumber { get; set; }

        public string HealthcareExpiry { get; set; }

        public string ChildMedicareNumber { get; set; }

        public string ChildMedicareCode { get; set; }

        public string ChildMedicareExpiry { get; set; }

        public string DentalBenefits { get; set; }

        public string School { get; set; }

        public string Grade { get; set; }

        //Consent

        public string Consent { get; set; }

        public string DigitalSignature { get; set; }

        public string SignedDate { get; set; }

        //Please Answer

        public string Origin { get; set; }

        public string Country { get; set; }

        public string Language { get; set; }

        public string Interpreter { get; set; }

        public string GpName { get; set; }

        public string GpAddress { get; set; }

        public string GpPhone { get; set; }

        public string CpsCustody { get; set; }

        public string BranchName { get; set; }

        public string BranchAddress { get; set; }

        public string BranchPhone { get; set; }

        public string DigitalSignature2 { get; set; }

        public string SignedDate2 { get; set; }

        //Dental History

 

        public string PriorTreatment { get; set; }

        public string PtSchool { get; set; }

        public string PtYear { get; set; }

        public string OtherDentist { get; set; }

        public string OtherDentistName { get; set; }

        public string OtherDentistAddress { get; set; }

        public string OtherDentistPhone { get; set; }

        //Change MyProperty to string OtherSpecialist 
        //when rebuilding database
        public int MyProperty { get; set; }

        public string OtherSpecialistName { get; set; }

        public string OtherSpecialistAddress { get; set; }

        public string OtherSpecialistPhone { get; set; }

        public string CurrentProblems { get; set; }

        // Medical History

        public string Confidential { get; set; }

        //IF CONF IS SET TRUE, NONE OF REST ARE SET

        public string RheumaticFever { get; set; }

        public string HeartComplaint { get; set; }

        public string HeartValveDisorder { get; set; }

        public string ThyroidDisease { get; set; }

        public string CardiacPacemaker { get; set; }

        public string Prosthetic { get; set; }

        public string Anaemia { get; set; }

        public string ExcessBleeding { get; set; }

        public string BloodPressure { get; set; }

        public string Stroke { get; set; }

        public string Hiv { get; set; }

        public string GrowthDisorder { get; set; }

        public string Epilepsy { get; set; }

        public string Radiation { get; set; }

        public string Steroid { get; set; }

        public string Asthma { get; set; }

        public string Bronchitis { get; set; }

        public string Tb { get; set; }

        public string Stomach { get; set; }

        public string Nervous { get; set; }

        public string Diabetes { get; set; }

        public string Kidney { get; set; }

        public string Hepatitis { get; set; }

        public string Other { get; set; }

        public string OtherCondition { get; set; }

        //END OF BOXES

        public string Doctor { get; set; }

        public string DoctorName { get; set; }

        public string DoctorPhone { get; set; }

        public string Medication { get; set; }

        public string MedicationDetails { get; set; }
        public string Antibiotic { get; set; }
        public string AntibioticDetails { get; set; }
        public string Reaction { get; set; }

        public string ReactionDetails { get; set; }
        public string Smoke { get; set; }

        public string SmokeDetails { get; set; }
        public string Pregnant { get; set; }

        public string PregnantDetails { get; set; }

        public string DrugAllergy { get; set; }

        public string OtherAllergy { get; set; }

        public string SmsConsent { get; set; }

        public string EmailConsent { get; set; }


        //Last Page

        public string DigitalSignature3 { get; set; }

        public string SignedDate3 { get; set; }

        public User User { get; set; }

        public int UserId { get; set; }



    }
}