SELECT 
    u.gender AS gender,
    ud.startYear AS USER_DEGREE_START_YEAR,
    d.name AS DEGREE_NAME, 
    uj.laboralSituation, uj.salary, uj.yearsOfExperience, uj.mexicanState,
    lap.name AS LABORAL_AREA_POSITION_NAME,
    la.name,
    inst.name,
    ud.mainUserJobId,
    e.name
FROM User u
LEFT JOIN UserDegree ud ON ud.userId = u.id
LEFT JOIN DegreeTitle d ON d.id = ud.titleId
LEFT JOIN UserJob uj ON uj.userId = u.id
LEFT JOIN LaboralAreaPosition lap ON lap.id = uj.laboralAreaPositionId
LEFT JOIN LaboralArea la ON la.id = lap.laboralAreaId
LEFT JOIN Institution inst ON inst.id = ud.institutionId
LEFT JOIN Employer e ON e.id = uj.employerId
WHERE ud.titleId = 'b9bdc654-2b5d-43ea-b54a-8655b894a98d'
;