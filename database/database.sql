CREATE DATABASE attendancesql;

USE attendancesql;

CREATE TABLE indicadores
(
  id_indicador INT NOT NULL,
  descripcion VARCHAR(1000) NOT NULL,
  PRIMARY KEY (id_indicador)
);

CREATE TABLE docentes
(
  id_docente INT NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  apellido_paterno VARCHAR(50) NOT NULL,
  apellido_materno VARCHAR(50) NOT NULL,
  correo_electronico VARCHAR(50) NOT NULL,
  correo_eletronico2 VARCHAR(100) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  telefono1 INT NOT NULL,
  telefono2 INT NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  fecha_ingreso DATE NOT NULL,
  PRIMARY KEY (id_docente)
);

CREATE TABLE materias
(
  id_materia INT NOT NULL,
  desc_materia VARCHAR(50) NOT NULL,
  PRIMARY KEY (id_materia)
);

CREATE TABLE coordinadores
(
  id_coordinador INT NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  apellido_paterno VARCHAR(50) NOT NULL,
  apellido_materno VARCHAR(50) NOT NULL,
  correo_electronico VARCHAR(100) NOT NULL,
  correo_electronico2 VARCHAR(100) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  telefono1 INT NOT NULL,
  telefono2 INT NOT NULL,
  fecha_ingreso DATE NOT NULL,
  PRIMARY KEY (id_coordinador)
);

CREATE TABLE horarios
(
  id_horario VARCHAR(100) NOT NULL,
  horario VARCHAR(100) NOT NULL,
  turno VARCHAR(100) NOT NULL,
  dia VARCHAR(20) NOT NULL,
  PRIMARY KEY (id_horario)
);

CREATE TABLE carreras
(
  id_carrera INT NOT NULL,
  desc_carrera VARCHAR(200) NOT NULL,
  id_coordinador INT NOT NULL,
  PRIMARY KEY (id_carrera),
  FOREIGN KEY (id_coordinador) REFERENCES coordinadores(id_coordinador)
);

CREATE TABLE alumnos
(
  id_alumno INT NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  apellido_paterno VARCHAR(50) NOT NULL,
  apellido_materno VARCHAR(50) NOT NULL,
  correo_electronico VARCHAR(100) NOT NULL,
  correo_electronico2 VARCHAR(100) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  fecha_ingreso DATE NOT NULL,
  escuela_procedencia VARCHAR(100) NOT NULL,
  telefono1 INT NOT NULL,
  telefono2 INT NOT NULL,
  direccion VARCHAR(150) NOT NULL,
  id_carrera INT NOT NULL,
  PRIMARY KEY (id_alumno),
  FOREIGN KEY (id_carrera) REFERENCES carreras(id_carrera)
);

CREATE TABLE materias_activas
(
  grupo VARCHAR(20) NOT NULL,
  id_docente INT NOT NULL,
  id_materia INT NOT NULL,
  id_horario VARCHAR(100) NOT NULL,
  PRIMARY KEY (grupo),
  FOREIGN KEY (id_docente) REFERENCES docentes(id_docente),
  FOREIGN KEY (id_materia) REFERENCES materias(id_materia),
  FOREIGN KEY (id_horario) REFERENCES horarios(id_horario)
);

CREATE TABLE Comentarios
(
  comentario VARCHAR(1000) NOT NULL,
  fecha_captura DATE NOT NULL,
  id_alumno INT NOT NULL,
  grupo VARCHAR(20) NOT NULL,
  id_docente INT NOT NULL,
  FOREIGN KEY (id_alumno) REFERENCES alumnos(id_alumno),
  FOREIGN KEY (grupo) REFERENCES materias_activas(grupo),
  FOREIGN KEY (id_docente) REFERENCES docentes(id_docente)
);

CREATE TABLE alumnos_condicionados
(
  razon_condicionado VARCHAR(200) NOT NULL,
  id_alumno INT NOT NULL,
  FOREIGN KEY (id_alumno) REFERENCES alumnos(id_alumno)
);

CREATE TABLE asistencias
(
  asistencia INT NOT NULL,
  fecha_captura DATE NOT NULL,
  id_alumno INT NOT NULL,
  grupo VARCHAR(20) NOT NULL,
  FOREIGN KEY (id_alumno) REFERENCES alumnos(id_alumno),
  FOREIGN KEY (grupo) REFERENCES materias_activas(grupo)
);

CREATE TABLE lista_alumnos
(
  id_alumno INT NOT NULL,
  id_materia INT NOT NULL,
  grupo VARCHAR(20) NOT NULL,
  FOREIGN KEY (id_alumno) REFERENCES alumnos(id_alumno),
  FOREIGN KEY (id_materia) REFERENCES materias(id_materia),
  FOREIGN KEY (grupo) REFERENCES materias_activas(grupo)
);


CREATE TABLE satisfaccion_del_aula
(
  indicador_uno VARCHAR(1000) NOT NULL,
  indicador_dos VARCHAR(1000) NOT NULL,
  indicador_tres VARCHAR(1000) NOT NULL,
  indicador_cuatro VARCHAR(1000) NOT NULL,
  fecha_captura DATE NOT NULL,
  id_alumno INT NOT NULL,
  grupo VARCHAR(20) NOT NULL,
  FOREIGN KEY (id_alumno) REFERENCES alumnos(id_alumno),
  FOREIGN KEY (grupo) REFERENCES materias_activas(grupo)
);

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
