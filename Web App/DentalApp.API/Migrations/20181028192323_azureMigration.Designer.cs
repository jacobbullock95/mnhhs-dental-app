﻿// <auto-generated />
using System;
using DentalApp.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DentalApp.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20181028192323_azureMigration")]
    partial class azureMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DentalApp.API.Models.ConsentForm", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Anaemia");

                    b.Property<string>("Antibiotic");

                    b.Property<string>("AntibioticDetails");

                    b.Property<string>("Asthma");

                    b.Property<string>("BloodPressure");

                    b.Property<string>("BranchAddress");

                    b.Property<string>("BranchName");

                    b.Property<string>("BranchPhone");

                    b.Property<string>("Bronchitis");

                    b.Property<string>("CardiacPacemaker");

                    b.Property<string>("ChildAlt");

                    b.Property<string>("ChildFirstName");

                    b.Property<string>("ChildLastName");

                    b.Property<string>("ChildMedicareCode");

                    b.Property<string>("ChildMedicareExpiry");

                    b.Property<string>("ChildMedicareNumber");

                    b.Property<string>("ChildPhone");

                    b.Property<string>("ChildTitle");

                    b.Property<string>("Confidential");

                    b.Property<string>("Consent");

                    b.Property<string>("Country");

                    b.Property<string>("CpsCustody");

                    b.Property<string>("CurrentProblems");

                    b.Property<string>("DateOfBirth");

                    b.Property<string>("DentalBenefits");

                    b.Property<string>("Diabetes");

                    b.Property<string>("DigitalSignature");

                    b.Property<string>("DigitalSignature2");

                    b.Property<string>("DigitalSignature3");

                    b.Property<string>("Doctor");

                    b.Property<string>("DoctorName");

                    b.Property<string>("DoctorPhone");

                    b.Property<string>("DrugAllergy");

                    b.Property<string>("EmailConsent");

                    b.Property<string>("Epilepsy");

                    b.Property<string>("ExcessBleeding");

                    b.Property<string>("FormDate");

                    b.Property<string>("Gender");

                    b.Property<string>("GpAddress");

                    b.Property<string>("GpName");

                    b.Property<string>("GpPhone");

                    b.Property<string>("Grade");

                    b.Property<string>("GrowthDisorder");

                    b.Property<string>("HealthcareExpiry");

                    b.Property<string>("HealthcareNumber");

                    b.Property<string>("HeartComplaint");

                    b.Property<string>("HeartValveDisorder");

                    b.Property<string>("Hepatitis");

                    b.Property<string>("Hiv");

                    b.Property<string>("HomeAddress");

                    b.Property<string>("IceName");

                    b.Property<string>("IcePhone");

                    b.Property<string>("Interpreter");

                    b.Property<string>("Kidney");

                    b.Property<string>("Language");

                    b.Property<string>("Medication");

                    b.Property<string>("MedicationDetails");

                    b.Property<int>("MyProperty");

                    b.Property<string>("Nervous");

                    b.Property<string>("Origin");

                    b.Property<string>("Other");

                    b.Property<string>("OtherAllergy");

                    b.Property<string>("OtherCondition");

                    b.Property<string>("OtherDentist");

                    b.Property<string>("OtherDentistAddress");

                    b.Property<string>("OtherDentistName");

                    b.Property<string>("OtherDentistPhone");

                    b.Property<string>("OtherSpecialistAddress");

                    b.Property<string>("OtherSpecialistName");

                    b.Property<string>("OtherSpecialistPhone");

                    b.Property<string>("PostalAddress");

                    b.Property<string>("Pregnant");

                    b.Property<string>("PregnantDetails");

                    b.Property<string>("PriorTreatment");

                    b.Property<string>("Prosthetic");

                    b.Property<string>("PtSchool");

                    b.Property<string>("PtYear");

                    b.Property<string>("Radiation");

                    b.Property<string>("Reaction");

                    b.Property<string>("ReactionDetails");

                    b.Property<string>("RheumaticFever");

                    b.Property<string>("School");

                    b.Property<string>("SignedDate");

                    b.Property<string>("SignedDate2");

                    b.Property<string>("SignedDate3");

                    b.Property<string>("Smoke");

                    b.Property<string>("SmokeDetails");

                    b.Property<string>("SmsConsent");

                    b.Property<string>("Steroid");

                    b.Property<string>("Stomach");

                    b.Property<string>("Stroke");

                    b.Property<string>("Tb");

                    b.Property<string>("ThyroidDisease");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("ConsentForms");
                });

            modelBuilder.Entity("DentalApp.API.Models.DentalClinic", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address");

                    b.Property<string>("ClinicType");

                    b.Property<string>("Name");

                    b.Property<string>("Phone");

                    b.Property<string>("Suburb");

                    b.HasKey("Id");

                    b.ToTable("DentalClinics");
                });

            modelBuilder.Entity("DentalApp.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("EmailVerified");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("MedicareCode");

                    b.Property<string>("MedicareExpiry");

                    b.Property<string>("MedicareNumber");

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Phone");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("DentalApp.API.Models.Value", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Values");
                });

            modelBuilder.Entity("DentalApp.API.Models.ConsentForm", b =>
                {
                    b.HasOne("DentalApp.API.Models.User", "User")
                        .WithMany("ConsentForms")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}