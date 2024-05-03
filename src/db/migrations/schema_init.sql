-- create table
CREATE TABLE User (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "externalId" TEXT NOT NULL
);

-- create table
CREATE TABLE Institution (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- create table
CREATE TABLE DegreeTitle (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- create table
CREATE TABLE Employer (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- create table
CREATE TABLE LaboralArea (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- create table
CREATE TABLE LaboralAreaPosition (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "laboralAreaId" TEXT NOT NULL,
    CONSTRAINT "Validation_laboral_area_id_fkey" FOREIGN KEY ("id") REFERENCES LaboralArea("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- create table
CREATE TABLE UserDegree (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "titleId" TEXT NOT NULL,
    "institutionId" TEXT NOT NULL,
    "startYear" INTEGER NOT NULL,
    "mainUserJobId" TEXT NOT NULL,
    CONSTRAINT "Validation_user_id_fkey" FOREIGN KEY ("userId") REFERENCES User("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Validation_title_id_fkey" FOREIGN KEY ("titleId") REFERENCES DegreeTitle("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Validation_institution_id_fkey" FOREIGN KEY ("institutionId") REFERENCES Institution("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Validation_main_user_job_id_fkey" FOREIGN KEY ("mainUserJobId") REFERENCES UserJob("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- create table 
CREATE TABLE UserJob (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "laboralSituation" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "employerId" TEXT NOT NULL,
    "laboralAreaId" TEXT NOT NULL,
    "laboralAreaPositionId" TEXT NOT NULL,
    "yearsOfExperience" INTEGER NOT NULL,
    "mexicanState" TEXT,
    CONSTRAINT "Validation_user_id_fkey" FOREIGN KEY ("userId") REFERENCES User("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Validation_employer_id_fkey" FOREIGN KEY ("employerId") REFERENCES Employer("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Validation_laboral_area_id_fkey" FOREIGN KEY ("laboralAreaId") REFERENCES LaboralArea("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Validation_laboral_area_position_id_fkey" FOREIGN KEY ("laboralAreaPositionId") REFERENCES LaboralAreaPosition("id") ON DELETE RESTRICT ON UPDATE CASCADE
);