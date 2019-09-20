using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DentalApp.API.Migrations
{
    public partial class azureMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DentalClinics",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ClinicType = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Suburb = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DentalClinics", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Username = table.Column<string>(nullable: true),
                    PasswordHash = table.Column<byte[]>(nullable: true),
                    PasswordSalt = table.Column<byte[]>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    MedicareNumber = table.Column<string>(nullable: true),
                    MedicareCode = table.Column<string>(nullable: true),
                    MedicareExpiry = table.Column<string>(nullable: true),
                    EmailVerified = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Values",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Values", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ConsentForms",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FormDate = table.Column<string>(nullable: true),
                    ChildTitle = table.Column<string>(nullable: true),
                    ChildFirstName = table.Column<string>(nullable: true),
                    ChildLastName = table.Column<string>(nullable: true),
                    ChildAlt = table.Column<string>(nullable: true),
                    Gender = table.Column<string>(nullable: true),
                    ChildPhone = table.Column<string>(nullable: true),
                    DateOfBirth = table.Column<string>(nullable: true),
                    HomeAddress = table.Column<string>(nullable: true),
                    PostalAddress = table.Column<string>(nullable: true),
                    IceName = table.Column<string>(nullable: true),
                    IcePhone = table.Column<string>(nullable: true),
                    HealthcareNumber = table.Column<string>(nullable: true),
                    HealthcareExpiry = table.Column<string>(nullable: true),
                    ChildMedicareNumber = table.Column<string>(nullable: true),
                    ChildMedicareCode = table.Column<string>(nullable: true),
                    ChildMedicareExpiry = table.Column<string>(nullable: true),
                    DentalBenefits = table.Column<string>(nullable: true),
                    School = table.Column<string>(nullable: true),
                    Grade = table.Column<string>(nullable: true),
                    Consent = table.Column<string>(nullable: true),
                    DigitalSignature = table.Column<string>(nullable: true),
                    SignedDate = table.Column<string>(nullable: true),
                    Origin = table.Column<string>(nullable: true),
                    Country = table.Column<string>(nullable: true),
                    Language = table.Column<string>(nullable: true),
                    Interpreter = table.Column<string>(nullable: true),
                    GpName = table.Column<string>(nullable: true),
                    GpAddress = table.Column<string>(nullable: true),
                    GpPhone = table.Column<string>(nullable: true),
                    CpsCustody = table.Column<string>(nullable: true),
                    BranchName = table.Column<string>(nullable: true),
                    BranchAddress = table.Column<string>(nullable: true),
                    BranchPhone = table.Column<string>(nullable: true),
                    DigitalSignature2 = table.Column<string>(nullable: true),
                    SignedDate2 = table.Column<string>(nullable: true),
                    PriorTreatment = table.Column<string>(nullable: true),
                    PtSchool = table.Column<string>(nullable: true),
                    PtYear = table.Column<string>(nullable: true),
                    OtherDentist = table.Column<string>(nullable: true),
                    OtherDentistName = table.Column<string>(nullable: true),
                    OtherDentistAddress = table.Column<string>(nullable: true),
                    OtherDentistPhone = table.Column<string>(nullable: true),
                    MyProperty = table.Column<int>(nullable: false),
                    OtherSpecialistName = table.Column<string>(nullable: true),
                    OtherSpecialistAddress = table.Column<string>(nullable: true),
                    OtherSpecialistPhone = table.Column<string>(nullable: true),
                    CurrentProblems = table.Column<string>(nullable: true),
                    Confidential = table.Column<string>(nullable: true),
                    RheumaticFever = table.Column<string>(nullable: true),
                    HeartComplaint = table.Column<string>(nullable: true),
                    HeartValveDisorder = table.Column<string>(nullable: true),
                    ThyroidDisease = table.Column<string>(nullable: true),
                    CardiacPacemaker = table.Column<string>(nullable: true),
                    Prosthetic = table.Column<string>(nullable: true),
                    Anaemia = table.Column<string>(nullable: true),
                    ExcessBleeding = table.Column<string>(nullable: true),
                    BloodPressure = table.Column<string>(nullable: true),
                    Stroke = table.Column<string>(nullable: true),
                    Hiv = table.Column<string>(nullable: true),
                    GrowthDisorder = table.Column<string>(nullable: true),
                    Epilepsy = table.Column<string>(nullable: true),
                    Radiation = table.Column<string>(nullable: true),
                    Steroid = table.Column<string>(nullable: true),
                    Asthma = table.Column<string>(nullable: true),
                    Bronchitis = table.Column<string>(nullable: true),
                    Tb = table.Column<string>(nullable: true),
                    Stomach = table.Column<string>(nullable: true),
                    Nervous = table.Column<string>(nullable: true),
                    Diabetes = table.Column<string>(nullable: true),
                    Kidney = table.Column<string>(nullable: true),
                    Hepatitis = table.Column<string>(nullable: true),
                    Other = table.Column<string>(nullable: true),
                    OtherCondition = table.Column<string>(nullable: true),
                    Doctor = table.Column<string>(nullable: true),
                    DoctorName = table.Column<string>(nullable: true),
                    DoctorPhone = table.Column<string>(nullable: true),
                    Medication = table.Column<string>(nullable: true),
                    MedicationDetails = table.Column<string>(nullable: true),
                    Antibiotic = table.Column<string>(nullable: true),
                    AntibioticDetails = table.Column<string>(nullable: true),
                    Reaction = table.Column<string>(nullable: true),
                    ReactionDetails = table.Column<string>(nullable: true),
                    Smoke = table.Column<string>(nullable: true),
                    SmokeDetails = table.Column<string>(nullable: true),
                    Pregnant = table.Column<string>(nullable: true),
                    PregnantDetails = table.Column<string>(nullable: true),
                    DrugAllergy = table.Column<string>(nullable: true),
                    OtherAllergy = table.Column<string>(nullable: true),
                    SmsConsent = table.Column<string>(nullable: true),
                    EmailConsent = table.Column<string>(nullable: true),
                    DigitalSignature3 = table.Column<string>(nullable: true),
                    SignedDate3 = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConsentForms", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ConsentForms_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ConsentForms_UserId",
                table: "ConsentForms",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ConsentForms");

            migrationBuilder.DropTable(
                name: "DentalClinics");

            migrationBuilder.DropTable(
                name: "Values");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
