DELIMITER //
CREATE PROCEDURE registrarAsistencia
(
IN _asistencia INT,
IN _id_alumno INT,
IN _grupo VARCHAR(20),
IN _indicador_uno VARCHAR(1000),
IN _indicador_dos VARCHAR(1000),
IN _indicador_tres VARCHAR(1000),
IN _indicador_cuatro VARCHAR(1000),
IN _comentario VARCHAR(1000)
)
BEGIN

INSERT INTO asistencias (asistencia, fecha_captura, id_alumno, grupo) 
VALUES (_asistencia, CURDATE(), _id_alumno, _grupo);

INSERT INTO satisfaccion_del_aula (indicador_uno, indicador_dos, indicador_tres, indicador_cuatro, fecha_captura, id_alumno, grupo)
VALUES (_indicador_uno, _indicador_dos, _indicador_tres, _indicador_cuatro, CURDATE(), _id_alumno, _grupo);

INSERT INTO comentarios (comentario, fecha_captura, id_alumno, grupo, id_docente)
VALUES (_comentario, CURDATE(), _id_alumno, _grupo, 9153);

END //

#CALL registrarAsistencia(2, 8836, '333', 'happy', 'sad', 'medium', 'sad', 'muymal');