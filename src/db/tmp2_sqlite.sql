SELECT 
    uj.laboralSituation, AVG(uj.salary), COUNT(1)
FROM User u
LEFT JOIN UserDegree ud ON ud.userId = u.id
LEFT JOIN UserJob uj ON uj.userId = u.id
WHERE ud.titleId = 'b9bdc654-2b5d-43ea-b54a-8655b894a98d'
GROUP BY uj.laboralSituation
;