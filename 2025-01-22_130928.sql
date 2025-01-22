--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--

DROP DATABASE practicas;




--
-- Drop roles
--

DROP ROLE postgres;


--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:7mnbMmy6FLWmNuCke/JPHA==$ikIlwBbffdjzdyS4/h0YIFEAYClYELFBpglE4NEW+WM=:ji+/XxG4QlNNwrQlYaVwNOLzXNhc6ZChrIfOR/n2IPI=';

--
-- User Configurations
--








--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2 (Debian 17.2-1.pgdg120+1)
-- Dumped by pg_dump version 17.2 (Debian 17.2-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO postgres;

\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: postgres
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: postgres
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2 (Debian 17.2-1.pgdg120+1)
-- Dumped by pg_dump version 17.2 (Debian 17.2-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- PostgreSQL database dump complete
--

--
-- Database "practicas" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2 (Debian 17.2-1.pgdg120+1)
-- Dumped by pg_dump version 17.2 (Debian 17.2-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: practicas; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE practicas WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE practicas OWNER TO postgres;

\connect practicas

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: boolean_choice; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.boolean_choice AS ENUM (
    'Si',
    'No',
    'Otras'
);


ALTER TYPE public.boolean_choice OWNER TO postgres;

--
-- Name: completion_percentage_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.completion_percentage_enum AS ENUM (
    'Menos del 50%',
    '50%',
    '75%',
    '100'
);


ALTER TYPE public.completion_percentage_enum OWNER TO postgres;

--
-- Name: opcion_tipo; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.opcion_tipo AS ENUM (
    'Si',
    'No',
    'Otras',
    'No aplica'
);


ALTER TYPE public.opcion_tipo OWNER TO postgres;

--
-- Name: progress_level; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.progress_level AS ENUM (
    'Menos del 50%',
    '50%',
    '75%',
    '100%'
);


ALTER TYPE public.progress_level OWNER TO postgres;

--
-- Name: project_stage; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.project_stage AS ENUM (
    'Propuesta',
    'Desarrollo(pruebas)',
    'Implementación'
);


ALTER TYPE public.project_stage OWNER TO postgres;

--
-- Name: proposal_status_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.proposal_status_enum AS ENUM (
    'Propuesta',
    'Desarrollo(pruebas)',
    'Implementación'
);


ALTER TYPE public.proposal_status_enum OWNER TO postgres;

--
-- Name: satisfaction_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.satisfaction_enum AS ENUM (
    'Muy satisfecho',
    'Satisfecho',
    'Medianamente satisfecho',
    'Poco satisfecho',
    'Insatisfecho'
);


ALTER TYPE public.satisfaction_enum OWNER TO postgres;

--
-- Name: satisfaction_level; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.satisfaction_level AS ENUM (
    'Muy satisfecho',
    'Satisfecho',
    'Medianamente satisfecho',
    'Poco satisfecho',
    'Insatisfecho'
);


ALTER TYPE public.satisfaction_level OWNER TO postgres;

--
-- Name: seccion_tipo; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.seccion_tipo AS ENUM (
    'evaluacion',
    'competencias',
    'observaciones',
    'indicadores',
    'observaciones_estudiantes'
);


ALTER TYPE public.seccion_tipo OWNER TO postgres;

--
-- Name: subseccion_tipo; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.subseccion_tipo AS ENUM (
    'comercial',
    'operacional',
    'desarrollo',
    'logistica',
    'transformacion',
    'calidad'
);


ALTER TYPE public.subseccion_tipo OWNER TO postgres;

--
-- Name: yes_no_other_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.yes_no_other_enum AS ENUM (
    'Si',
    'No',
    'Otras'
);


ALTER TYPE public.yes_no_other_enum OWNER TO postgres;

--
-- Name: update_fecha_modificacion(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.update_fecha_modificacion() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.fecha_modificacion = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.update_fecha_modificacion() OWNER TO postgres;

--
-- Name: validar_asociacion_estudiante_docente(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.validar_asociacion_estudiante_docente() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    -- Verificar que el id_estudiante corresponde a un estudiante (id_rol = 2)
    IF (SELECT id_rol FROM public.usuarios WHERE id = NEW.id_estudiante) != 2 THEN
        RAISE EXCEPTION 'Solo se pueden asociar estudiantes a docentes';
    END IF;
    RETURN NEW;
END;
$$;


ALTER FUNCTION public.validar_asociacion_estudiante_docente() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: answer_options; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.answer_options (
    id integer NOT NULL,
    value character varying(50) NOT NULL
);


ALTER TABLE public.answer_options OWNER TO postgres;

--
-- Name: answer_options_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.answer_options_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.answer_options_id_seq OWNER TO postgres;

--
-- Name: answer_options_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.answer_options_id_seq OWNED BY public.answer_options.id;


--
-- Name: cargue; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cargue (
    id integer NOT NULL
);


ALTER TABLE public.cargue OWNER TO postgres;

--
-- Name: cargue_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cargue_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cargue_id_seq OWNER TO postgres;

--
-- Name: cargue_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cargue_id_seq OWNED BY public.cargue.id;


--
-- Name: docente_estudiante; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.docente_estudiante (
    id integer NOT NULL,
    id_docente integer NOT NULL,
    id_estudiante integer NOT NULL
);


ALTER TABLE public.docente_estudiante OWNER TO postgres;

--
-- Name: docente_estudiante_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.docente_estudiante_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.docente_estudiante_id_seq OWNER TO postgres;

--
-- Name: docente_estudiante_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.docente_estudiante_id_seq OWNED BY public.docente_estudiante.id;


--
-- Name: empresas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.empresas (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL
);


ALTER TABLE public.empresas OWNER TO postgres;

--
-- Name: empresas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.empresas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.empresas_id_seq OWNER TO postgres;

--
-- Name: empresas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.empresas_id_seq OWNED BY public.empresas.id;


--
-- Name: entrega; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.entrega (
    id integer NOT NULL
);


ALTER TABLE public.entrega OWNER TO postgres;

--
-- Name: entrega_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.entrega_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.entrega_id_seq OWNER TO postgres;

--
-- Name: entrega_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.entrega_id_seq OWNED BY public.entrega.id;


--
-- Name: estados_practicas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estados_practicas (
    id integer NOT NULL,
    nombre character varying(30) NOT NULL
);


ALTER TABLE public.estados_practicas OWNER TO postgres;

--
-- Name: estados_practicas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.estados_practicas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.estados_practicas_id_seq OWNER TO postgres;

--
-- Name: estados_practicas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.estados_practicas_id_seq OWNED BY public.estados_practicas.id;


--
-- Name: formulario_final; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.formulario_final (
    id integer NOT NULL,
    assessment_one integer,
    assessment_two integer,
    assessment_three integer,
    competencies_one integer,
    competencies_two integer,
    competencies_three integer,
    competencies_four integer,
    competencies_five integer,
    competencies_six integer,
    competencies_seven integer,
    competencies_eight integer,
    observation_one integer,
    observation_two integer,
    observation_three integer,
    observation_four integer,
    observation_five integer,
    observation_six integer,
    observation_seven integer,
    observation_eight integer,
    observation_nine integer,
    observation_ten integer,
    observation_eleven text,
    observation_twelve public.satisfaction_level,
    indicator_one integer,
    indicator_two integer,
    indicator_three integer,
    indicator_four integer,
    indicator_five boolean,
    indicator_six text,
    indicator_seven integer,
    indicator_eight integer,
    indicator_nine integer,
    indicator_ten integer,
    indicator_eleven boolean,
    indicator_twelve text,
    indicator_thirteen integer,
    indicator_fourteen integer,
    indicator_fifteen integer,
    indicator_sixteen integer,
    indicator_seventeen boolean,
    indicator_eighteen text,
    indicator_nineteen integer,
    indicator_twenty integer,
    indicator_twentyone integer,
    indicator_twentytwo integer,
    indicator_twentythree boolean,
    indicator_twentyfour text,
    indicator_twentyfive integer,
    indicator_twentysix integer,
    indicator_twentyseven integer,
    indicator_twentyeight integer,
    indicator_twentynine boolean,
    indicator_thirty text,
    indicator_thirtyone integer,
    indicator_thirtytwo integer,
    indicator_thirtythree integer,
    indicator_thirtyfour integer,
    indicator_thirtyfive boolean,
    indicator_thirtysix text,
    student_one public.project_stage,
    student_two public.progress_level,
    student_three text,
    student_four public.boolean_choice,
    student_five text,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_modificacion timestamp without time zone,
    id_entrega integer,
    id_cargue integer,
    observaciones text,
    CONSTRAINT formulario_final_assessment_one_check CHECK (((assessment_one >= 1) AND (assessment_one <= 5))),
    CONSTRAINT formulario_final_assessment_three_check CHECK (((assessment_three >= 1) AND (assessment_three <= 5))),
    CONSTRAINT formulario_final_assessment_two_check CHECK (((assessment_two >= 1) AND (assessment_two <= 5))),
    CONSTRAINT formulario_final_competencies_eight_check CHECK (((competencies_eight >= 1) AND (competencies_eight <= 5))),
    CONSTRAINT formulario_final_competencies_five_check CHECK (((competencies_five >= 1) AND (competencies_five <= 5))),
    CONSTRAINT formulario_final_competencies_four_check CHECK (((competencies_four >= 1) AND (competencies_four <= 5))),
    CONSTRAINT formulario_final_competencies_one_check CHECK (((competencies_one >= 1) AND (competencies_one <= 5))),
    CONSTRAINT formulario_final_competencies_seven_check CHECK (((competencies_seven >= 1) AND (competencies_seven <= 5))),
    CONSTRAINT formulario_final_competencies_six_check CHECK (((competencies_six >= 1) AND (competencies_six <= 5))),
    CONSTRAINT formulario_final_competencies_three_check CHECK (((competencies_three >= 1) AND (competencies_three <= 5))),
    CONSTRAINT formulario_final_competencies_two_check CHECK (((competencies_two >= 1) AND (competencies_two <= 5))),
    CONSTRAINT formulario_final_indicator_eight_check CHECK (((indicator_eight >= 1) AND (indicator_eight <= 5))),
    CONSTRAINT formulario_final_indicator_fifteen_check CHECK (((indicator_fifteen >= 1) AND (indicator_fifteen <= 5))),
    CONSTRAINT formulario_final_indicator_four_check CHECK (((indicator_four >= 1) AND (indicator_four <= 5))),
    CONSTRAINT formulario_final_indicator_fourteen_check CHECK (((indicator_fourteen >= 1) AND (indicator_fourteen <= 5))),
    CONSTRAINT formulario_final_indicator_nine_check CHECK (((indicator_nine >= 1) AND (indicator_nine <= 5))),
    CONSTRAINT formulario_final_indicator_nineteen_check CHECK (((indicator_nineteen >= 1) AND (indicator_nineteen <= 5))),
    CONSTRAINT formulario_final_indicator_one_check CHECK (((indicator_one >= 1) AND (indicator_one <= 5))),
    CONSTRAINT formulario_final_indicator_seven_check CHECK (((indicator_seven >= 1) AND (indicator_seven <= 5))),
    CONSTRAINT formulario_final_indicator_sixteen_check CHECK (((indicator_sixteen >= 1) AND (indicator_sixteen <= 5))),
    CONSTRAINT formulario_final_indicator_ten_check CHECK (((indicator_ten >= 1) AND (indicator_ten <= 5))),
    CONSTRAINT formulario_final_indicator_thirteen_check CHECK (((indicator_thirteen >= 1) AND (indicator_thirteen <= 5))),
    CONSTRAINT formulario_final_indicator_thirtyfour_check CHECK (((indicator_thirtyfour >= 1) AND (indicator_thirtyfour <= 5))),
    CONSTRAINT formulario_final_indicator_thirtyone_check CHECK (((indicator_thirtyone >= 1) AND (indicator_thirtyone <= 5))),
    CONSTRAINT formulario_final_indicator_thirtythree_check CHECK (((indicator_thirtythree >= 1) AND (indicator_thirtythree <= 5))),
    CONSTRAINT formulario_final_indicator_thirtytwo_check CHECK (((indicator_thirtytwo >= 1) AND (indicator_thirtytwo <= 5))),
    CONSTRAINT formulario_final_indicator_three_check CHECK (((indicator_three >= 1) AND (indicator_three <= 5))),
    CONSTRAINT formulario_final_indicator_twenty_check CHECK (((indicator_twenty >= 1) AND (indicator_twenty <= 5))),
    CONSTRAINT formulario_final_indicator_twentyeight_check CHECK (((indicator_twentyeight >= 1) AND (indicator_twentyeight <= 5))),
    CONSTRAINT formulario_final_indicator_twentyfive_check CHECK (((indicator_twentyfive >= 1) AND (indicator_twentyfive <= 5))),
    CONSTRAINT formulario_final_indicator_twentyone_check CHECK (((indicator_twentyone >= 1) AND (indicator_twentyone <= 5))),
    CONSTRAINT formulario_final_indicator_twentyseven_check CHECK (((indicator_twentyseven >= 1) AND (indicator_twentyseven <= 5))),
    CONSTRAINT formulario_final_indicator_twentysix_check CHECK (((indicator_twentysix >= 1) AND (indicator_twentysix <= 5))),
    CONSTRAINT formulario_final_indicator_twentytwo_check CHECK (((indicator_twentytwo >= 1) AND (indicator_twentytwo <= 5))),
    CONSTRAINT formulario_final_indicator_two_check CHECK (((indicator_two >= 1) AND (indicator_two <= 5))),
    CONSTRAINT formulario_final_observation_eight_check CHECK (((observation_eight >= 1) AND (observation_eight <= 5))),
    CONSTRAINT formulario_final_observation_five_check CHECK (((observation_five >= 1) AND (observation_five <= 5))),
    CONSTRAINT formulario_final_observation_four_check CHECK (((observation_four >= 1) AND (observation_four <= 5))),
    CONSTRAINT formulario_final_observation_nine_check CHECK (((observation_nine >= 1) AND (observation_nine <= 5))),
    CONSTRAINT formulario_final_observation_one_check CHECK (((observation_one >= 1) AND (observation_one <= 5))),
    CONSTRAINT formulario_final_observation_seven_check CHECK (((observation_seven >= 1) AND (observation_seven <= 5))),
    CONSTRAINT formulario_final_observation_six_check CHECK (((observation_six >= 1) AND (observation_six <= 5))),
    CONSTRAINT formulario_final_observation_ten_check CHECK (((observation_ten >= 1) AND (observation_ten <= 5))),
    CONSTRAINT formulario_final_observation_three_check CHECK (((observation_three >= 1) AND (observation_three <= 5))),
    CONSTRAINT formulario_final_observation_two_check CHECK (((observation_two >= 1) AND (observation_two <= 5)))
);


ALTER TABLE public.formulario_final OWNER TO postgres;

--
-- Name: formulario_final_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.formulario_final_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.formulario_final_id_seq OWNER TO postgres;

--
-- Name: formulario_final_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.formulario_final_id_seq OWNED BY public.formulario_final.id;


--
-- Name: formulario_modalidad; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.formulario_modalidad (
    id integer NOT NULL,
    id_usuario integer NOT NULL,
    id_modalidad integer NOT NULL,
    fecha_seleccion date,
    estado character varying(50)
);


ALTER TABLE public.formulario_modalidad OWNER TO postgres;

--
-- Name: formulario_modalidad_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.formulario_modalidad_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.formulario_modalidad_id_seq OWNER TO postgres;

--
-- Name: formulario_modalidad_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.formulario_modalidad_id_seq OWNED BY public.formulario_modalidad.id;


--
-- Name: menu_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.menu_item (
    id integer NOT NULL,
    nombre_item character varying(255) NOT NULL,
    enlace character varying(255) NOT NULL,
    descripcion text NOT NULL
);


ALTER TABLE public.menu_item OWNER TO postgres;

--
-- Name: menuitem_id_menu_item_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.menuitem_id_menu_item_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.menuitem_id_menu_item_seq OWNER TO postgres;

--
-- Name: menuitem_id_menu_item_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.menuitem_id_menu_item_seq OWNED BY public.menu_item.id;


--
-- Name: modalidades_practicas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modalidades_practicas (
    id integer NOT NULL,
    nombre character varying(30) NOT NULL,
    descripcion character varying
);


ALTER TABLE public.modalidades_practicas OWNER TO postgres;

--
-- Name: modalidades_practicas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.modalidades_practicas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.modalidades_practicas_id_seq OWNER TO postgres;

--
-- Name: modalidades_practicas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.modalidades_practicas_id_seq OWNED BY public.modalidades_practicas.id;


--
-- Name: niveles_practicas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.niveles_practicas (
    id integer NOT NULL,
    nombre character varying(30) NOT NULL
);


ALTER TABLE public.niveles_practicas OWNER TO postgres;

--
-- Name: niveles_practicas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.niveles_practicas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.niveles_practicas_id_seq OWNER TO postgres;

--
-- Name: niveles_practicas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.niveles_practicas_id_seq OWNED BY public.niveles_practicas.id;


--
-- Name: ofertas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ofertas (
    id integer NOT NULL,
    id_empresa integer NOT NULL,
    id_nivel_practica integer NOT NULL,
    id_modalidad_practica integer NOT NULL,
    salario integer NOT NULL
);


ALTER TABLE public.ofertas OWNER TO postgres;

--
-- Name: ofertas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ofertas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ofertas_id_seq OWNER TO postgres;

--
-- Name: ofertas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ofertas_id_seq OWNED BY public.ofertas.id;


--
-- Name: postulaciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.postulaciones (
    id integer NOT NULL,
    id_usuario integer NOT NULL,
    id_oferta integer NOT NULL
);


ALTER TABLE public.postulaciones OWNER TO postgres;

--
-- Name: postulaciones_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.postulaciones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.postulaciones_id_seq OWNER TO postgres;

--
-- Name: postulaciones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.postulaciones_id_seq OWNED BY public.postulaciones.id;


--
-- Name: practicas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.practicas (
    id integer NOT NULL,
    id_postulacion integer NOT NULL,
    id_estado_practica integer NOT NULL,
    fecha_inicio date,
    fecha_fin date
);


ALTER TABLE public.practicas OWNER TO postgres;

--
-- Name: practicas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.practicas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.practicas_id_seq OWNER TO postgres;

--
-- Name: practicas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.practicas_id_seq OWNED BY public.practicas.id;


--
-- Name: rol; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rol (
    id integer NOT NULL,
    nombre_rol character varying(255) NOT NULL
);


ALTER TABLE public.rol OWNER TO postgres;

--
-- Name: rol_id_rol_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.rol ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.rol_id_rol_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: rol_menu_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rol_menu_item (
    id_rol integer NOT NULL,
    id_menu_item integer NOT NULL
);


ALTER TABLE public.rol_menu_item OWNER TO postgres;

--
-- Name: segunda_entrega; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.segunda_entrega (
    id integer NOT NULL,
    progresspercentage character varying(255),
    currentactivity text,
    pendingactivities text,
    difficulties text,
    alignmentlevel text,
    activityresponse text,
    taskrelevance text,
    taskrelevanceexplanation text,
    supervisionlevel text,
    supervisiondetails text,
    planprogress text,
    scopemaintained text,
    newscopeobjective text,
    teacherguidance text,
    observaciones text,
    id_entrega integer,
    id_cargue integer
);


ALTER TABLE public.segunda_entrega OWNER TO postgres;

--
-- Name: segunda_entrega_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.segunda_entrega_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.segunda_entrega_id_seq OWNER TO postgres;

--
-- Name: segunda_entrega_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.segunda_entrega_id_seq OWNED BY public.segunda_entrega.id;


--
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    primer_nombre character varying(30) NOT NULL,
    segundo_nombre character varying(30),
    primer_apellido character varying(30) NOT NULL,
    segundo_apellido character varying(30),
    id_rol integer
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuarios_id_seq OWNER TO postgres;

--
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- Name: usuarios_modalidades_practicas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios_modalidades_practicas (
    id integer NOT NULL,
    id_usuario integer NOT NULL,
    id_modalidad_practica integer NOT NULL
);


ALTER TABLE public.usuarios_modalidades_practicas OWNER TO postgres;

--
-- Name: usuarios_modalidades_practicas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_modalidades_practicas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuarios_modalidades_practicas_id_seq OWNER TO postgres;

--
-- Name: usuarios_modalidades_practicas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_modalidades_practicas_id_seq OWNED BY public.usuarios_modalidades_practicas.id;


--
-- Name: usuarios_niveles_practicas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios_niveles_practicas (
    id integer NOT NULL,
    id_usuario integer NOT NULL,
    id_nivel_practica integer NOT NULL
);


ALTER TABLE public.usuarios_niveles_practicas OWNER TO postgres;

--
-- Name: usuarios_niveles_practicas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_niveles_practicas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuarios_niveles_practicas_id_seq OWNER TO postgres;

--
-- Name: usuarios_niveles_practicas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_niveles_practicas_id_seq OWNED BY public.usuarios_niveles_practicas.id;


--
-- Name: answer_options id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answer_options ALTER COLUMN id SET DEFAULT nextval('public.answer_options_id_seq'::regclass);


--
-- Name: cargue id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargue ALTER COLUMN id SET DEFAULT nextval('public.cargue_id_seq'::regclass);


--
-- Name: docente_estudiante id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.docente_estudiante ALTER COLUMN id SET DEFAULT nextval('public.docente_estudiante_id_seq'::regclass);


--
-- Name: empresas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empresas ALTER COLUMN id SET DEFAULT nextval('public.empresas_id_seq'::regclass);


--
-- Name: entrega id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrega ALTER COLUMN id SET DEFAULT nextval('public.entrega_id_seq'::regclass);


--
-- Name: estados_practicas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estados_practicas ALTER COLUMN id SET DEFAULT nextval('public.estados_practicas_id_seq'::regclass);


--
-- Name: formulario_final id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formulario_final ALTER COLUMN id SET DEFAULT nextval('public.formulario_final_id_seq'::regclass);


--
-- Name: formulario_modalidad id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formulario_modalidad ALTER COLUMN id SET DEFAULT nextval('public.formulario_modalidad_id_seq'::regclass);


--
-- Name: menu_item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_item ALTER COLUMN id SET DEFAULT nextval('public.menuitem_id_menu_item_seq'::regclass);


--
-- Name: modalidades_practicas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modalidades_practicas ALTER COLUMN id SET DEFAULT nextval('public.modalidades_practicas_id_seq'::regclass);


--
-- Name: niveles_practicas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.niveles_practicas ALTER COLUMN id SET DEFAULT nextval('public.niveles_practicas_id_seq'::regclass);


--
-- Name: ofertas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ofertas ALTER COLUMN id SET DEFAULT nextval('public.ofertas_id_seq'::regclass);


--
-- Name: postulaciones id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.postulaciones ALTER COLUMN id SET DEFAULT nextval('public.postulaciones_id_seq'::regclass);


--
-- Name: practicas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.practicas ALTER COLUMN id SET DEFAULT nextval('public.practicas_id_seq'::regclass);


--
-- Name: segunda_entrega id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segunda_entrega ALTER COLUMN id SET DEFAULT nextval('public.segunda_entrega_id_seq'::regclass);


--
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- Name: usuarios_modalidades_practicas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios_modalidades_practicas ALTER COLUMN id SET DEFAULT nextval('public.usuarios_modalidades_practicas_id_seq'::regclass);


--
-- Name: usuarios_niveles_practicas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios_niveles_practicas ALTER COLUMN id SET DEFAULT nextval('public.usuarios_niveles_practicas_id_seq'::regclass);


--
-- Data for Name: answer_options; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.answer_options (id, value) FROM stdin;
1	Nunca
2	Pocas_veces
3	Algunas_veces
4	Casi_siempre
5	Siempre
\.


--
-- Data for Name: cargue; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cargue (id) FROM stdin;
\.


--
-- Data for Name: docente_estudiante; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.docente_estudiante (id, id_docente, id_estudiante) FROM stdin;
1	6	8
2	6	7
3	9	10
\.


--
-- Data for Name: empresas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.empresas (id, nombre) FROM stdin;
1	Bancolombia
\.


--
-- Data for Name: entrega; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.entrega (id) FROM stdin;
\.


--
-- Data for Name: estados_practicas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estados_practicas (id, nombre) FROM stdin;
1	Activo
\.


--
-- Data for Name: formulario_final; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.formulario_final (id, assessment_one, assessment_two, assessment_three, competencies_one, competencies_two, competencies_three, competencies_four, competencies_five, competencies_six, competencies_seven, competencies_eight, observation_one, observation_two, observation_three, observation_four, observation_five, observation_six, observation_seven, observation_eight, observation_nine, observation_ten, observation_eleven, observation_twelve, indicator_one, indicator_two, indicator_three, indicator_four, indicator_five, indicator_six, indicator_seven, indicator_eight, indicator_nine, indicator_ten, indicator_eleven, indicator_twelve, indicator_thirteen, indicator_fourteen, indicator_fifteen, indicator_sixteen, indicator_seventeen, indicator_eighteen, indicator_nineteen, indicator_twenty, indicator_twentyone, indicator_twentytwo, indicator_twentythree, indicator_twentyfour, indicator_twentyfive, indicator_twentysix, indicator_twentyseven, indicator_twentyeight, indicator_twentynine, indicator_thirty, indicator_thirtyone, indicator_thirtytwo, indicator_thirtythree, indicator_thirtyfour, indicator_thirtyfive, indicator_thirtysix, student_one, student_two, student_three, student_four, student_five, fecha_creacion, fecha_modificacion, id_entrega, id_cargue, observaciones) FROM stdin;
1	4	3	5	5	4	3	2	1	3	4	5	2	3	4	5	1	3	4	5	2	3	Observación general sobre el proyecto	Muy satisfecho	4	5	3	2	t	Texto explicativo 1	5	4	3	2	f	Texto explicativo 2	4	3	2	5	t	Texto explicativo 3	4	3	2	5	f	Texto explicativo 4	4	3	2	5	t	Texto explicativo 5	4	3	2	5	f	Texto explicativo 6	Desarrollo(pruebas)	75%	Comentarios del estudiante	Si	Información adicional	2025-01-20 16:02:07.957251	\N	\N	\N	\N
14	4	3	5	2	4	3	5	1	3	4	2	5	3	4	2	1	5	3	4	2	3	Comentario adicional	Satisfecho	5	4	3	1	t	Texto adicional para indicador seis	3	5	4	2	f	Texto adicional para indicador doce	5	3	4	1	t	Texto adicional para indicador dieciocho	2	5	3	4	f	Texto adicional para indicador veinticuatro	1	3	4	5	t	Texto adicional para indicador treinta	2	4	3	5	t	Texto adicional para indicador treinta y seis	Implementación	75%	Comentario adicional del estudiante	No	Otra información relevante	2025-01-20 18:10:44.966	\N	\N	\N	\N
15	4	3	5	2	4	3	5	1	3	4	2	5	3	4	2	1	5	3	4	2	3	Comentario adicional	Satisfecho	5	4	3	1	t	Texto adicional para indicador seis	3	5	4	2	f	Texto adicional para indicador doce	5	3	4	1	t	Texto adicional para indicador dieciocho	2	5	3	4	f	Texto adicional para indicador veinticuatro	1	3	4	5	t	Texto adicional para indicador treinta	2	4	3	5	t	Texto adicional para indicador treinta y seis	Implementación	75%	Comentario adicional del estudiante	No	Otra información relevante	2025-01-20 18:11:15.027	\N	\N	\N	\N
16	4	3	5	2	4	3	5	1	3	4	2	5	3	4	2	1	5	3	4	2	3	Comentario adicional	Satisfecho	5	4	3	1	t	Texto adicional para indicador seis	3	5	4	2	f	Texto adicional para indicador doce	5	3	4	1	t	Texto adicional para indicador dieciocho	2	5	3	4	f	Texto adicional para indicador veinticuatro	1	3	4	5	t	Texto adicional para indicador treinta	2	4	3	5	t	Texto adicional para indicador treinta y seis	Implementación	75%	Comentario adicional del estudiante	No	Otra información relevante	2025-01-21 21:11:51.16	\N	\N	\N	\N
17	4	3	5	2	4	3	5	1	3	4	2	5	3	4	2	1	5	3	4	2	3	Comentario adicional	Satisfecho	5	4	3	1	t	null	3	5	4	2	f	Texto adicional para indicador doce	5	3	4	1	t	Texto adicional para indicador dieciocho	2	5	3	4	f	Texto adicional para indicador veinticuatro	1	3	4	5	t	Texto adicional para indicador treinta	2	4	3	5	t	Texto adicional para indicador treinta y seis	Implementación	75%	Comentario adicional del estudiante	No	Otra información relevante	2025-01-21 21:17:13.338	\N	\N	\N	\N
18	4	3	5	2	4	3	5	1	3	4	2	5	3	4	2	1	5	3	4	2	3	Comentario adicional	Satisfecho	5	4	3	1	t	\N	3	5	4	2	f	\N	5	3	4	1	t	Texto adicional para indicador dieciocho	2	5	3	4	f	Texto adicional para indicador veinticuatro	1	3	4	5	t	Texto adicional para indicador treinta	2	4	3	5	t	Texto adicional para indicador treinta y seis	Implementación	75%	Comentario adicional del estudiante	No	Otra información relevante	2025-01-21 21:21:35.489	\N	\N	\N	\N
19	4	3	5	2	4	3	5	1	3	4	2	5	3	4	2	1	5	3	4	2	3	Comentario adicional	Satisfecho	5	4	3	1	t	\N	3	5	4	2	f	\N	5	3	4	1	t	Texto adicional para indicador dieciocho	2	5	3	4	f	Texto adicional para indicador veinticuatro	1	3	4	5	t	Texto adicional para indicador treinta	2	4	3	5	t	Texto adicional para indicador treinta y seis	Implementación	75%	Comentario adicional del estudiante	No	Otra información relevante	2025-01-22 03:48:35.972	\N	\N	\N	\N
20	4	3	5	2	4	3	5	1	3	4	2	5	3	4	2	1	5	3	4	2	3	Comentario adicional	Satisfecho	5	4	3	1	t	\N	3	5	4	2	f	\N	5	3	4	1	t	Texto adicional para indicador dieciocho	2	5	3	4	f	Texto adicional para indicador veinticuatro	1	3	4	5	t	Texto adicional para indicador treinta	2	4	3	5	t	Texto adicional para indicador treinta y seis	Implementación	75%	Comentario adicional del estudiante	No	Otra información relevante	2025-01-22 17:27:05.089	\N	\N	\N	\N
\.


--
-- Data for Name: formulario_modalidad; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.formulario_modalidad (id, id_usuario, id_modalidad, fecha_seleccion, estado) FROM stdin;
15	8	2	2024-12-23	pendiente
\.


--
-- Data for Name: menu_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.menu_item (id, nombre_item, enlace, descripcion) FROM stdin;
1	Mis pr??cticas	/home/practices	Visualizaci??n Pr??cticas estudiante 
2	Gestiona tu pr??ctica	/home/manager-practices	Gesti??n de pr??cticas para el estudiante
3	Descarga documentos	/home/document-download	Repositorio Documentos
\.


--
-- Data for Name: modalidades_practicas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.modalidades_practicas (id, nombre, descripcion) FROM stdin;
5	Emprendimiento	\N
1	Contrato de aprendizaje	Cuota reguladora SENA con una duraci??n m??xima de 6 meses, (1080 hrs) 75% SMMLV + afiliaci??n a ARL y EPS.
2	Contrato laboral	Si se encuentra laborando en una empresa y las desea validar all??
3	Convenio interinstitucional	Duraci??n m??nima de 320 horas, medio tiempo o tiempo completo,  afiliaci??n a ARL y apoyo econ??mico.
4	Social o comunitaria	El estudiante dise??a o se vincula a un proyecto social que plantee, de manera seria y responsable, propuestas eficaces de intervenci??n con responsabilidad social, a sectores vulnerables de la sociedad. (320 hrs).
\.


--
-- Data for Name: niveles_practicas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.niveles_practicas (id, nombre) FROM stdin;
1	T??cnico
\.


--
-- Data for Name: ofertas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ofertas (id, id_empresa, id_nivel_practica, id_modalidad_practica, salario) FROM stdin;
1	1	1	1	1300000
\.


--
-- Data for Name: postulaciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.postulaciones (id, id_usuario, id_oferta) FROM stdin;
2	1	1
\.


--
-- Data for Name: practicas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.practicas (id, id_postulacion, id_estado_practica, fecha_inicio, fecha_fin) FROM stdin;
2	2	1	2024-10-24	2024-03-05
\.


--
-- Data for Name: rol; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rol (id, nombre_rol) FROM stdin;
1	docente
2	estudiante
3	admon_practicas
\.


--
-- Data for Name: rol_menu_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rol_menu_item (id_rol, id_menu_item) FROM stdin;
2	1
2	2
2	3
3	3
\.


--
-- Data for Name: segunda_entrega; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.segunda_entrega (id, progresspercentage, currentactivity, pendingactivities, difficulties, alignmentlevel, activityresponse, taskrelevance, taskrelevanceexplanation, supervisionlevel, supervisiondetails, planprogress, scopemaintained, newscopeobjective, teacherguidance, observaciones, id_entrega, id_cargue) FROM stdin;
1	\N	\N	\N	Falta de tiempo	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
2	50%	Revisión de avances	Revisión de informes	Falta de tiempo	Alto	Completo	Alta	Importante para el avance	Alto	Supervisión detallada	50%	Sí	Expandir el alcance	Adecuada	\N	\N	\N
3	50%	Revisión de avances	Revisión de informes	Falta de tiempo	Alto	Completo	Alta	Importante para el avance	Alto	Supervisión detallada	50%	Sí	Expandir el alcance	Adecuada	\N	\N	\N
4	50%	Revisión de avances	Revisión de informes	Falta de tiempo	Alto	Completo	Alta	Importante para el avance	Alto	Supervisión detallada	50%	Sí	Expandir el alcance	Adecuada	\N	\N	\N
\.


--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, id_rol) FROM stdin;
1	Miguel	??ngel	Manrique	T??llez	3
6	Ana	Maria	Lopez\n	Barrera	1
8	Juan	Sebastian	Rojas	Rivera	2
7	Miguel	Angel	Murillo	Paiba	2
9	Sergio	Alexander	Mora	Novoa	1
10	Juan	Diego	Ramirez	Torres	2
\.


--
-- Data for Name: usuarios_modalidades_practicas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios_modalidades_practicas (id, id_usuario, id_modalidad_practica) FROM stdin;
\.


--
-- Data for Name: usuarios_niveles_practicas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios_niveles_practicas (id, id_usuario, id_nivel_practica) FROM stdin;
\.


--
-- Name: answer_options_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.answer_options_id_seq', 5, true);


--
-- Name: cargue_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cargue_id_seq', 1, false);


--
-- Name: docente_estudiante_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.docente_estudiante_id_seq', 3, true);


--
-- Name: empresas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.empresas_id_seq', 1, true);


--
-- Name: entrega_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.entrega_id_seq', 1, false);


--
-- Name: estados_practicas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.estados_practicas_id_seq', 1, true);


--
-- Name: formulario_final_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.formulario_final_id_seq', 20, true);


--
-- Name: formulario_modalidad_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.formulario_modalidad_id_seq', 15, true);


--
-- Name: menuitem_id_menu_item_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.menuitem_id_menu_item_seq', 3, true);


--
-- Name: modalidades_practicas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.modalidades_practicas_id_seq', 5, true);


--
-- Name: niveles_practicas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.niveles_practicas_id_seq', 1, true);


--
-- Name: ofertas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ofertas_id_seq', 1, true);


--
-- Name: postulaciones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.postulaciones_id_seq', 2, true);


--
-- Name: practicas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.practicas_id_seq', 2, true);


--
-- Name: rol_id_rol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rol_id_rol_seq', 6, true);


--
-- Name: segunda_entrega_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.segunda_entrega_id_seq', 4, true);


--
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 10, true);


--
-- Name: usuarios_modalidades_practicas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_modalidades_practicas_id_seq', 1, false);


--
-- Name: usuarios_niveles_practicas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_niveles_practicas_id_seq', 1, false);


--
-- Name: answer_options answer_options_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answer_options
    ADD CONSTRAINT answer_options_pkey PRIMARY KEY (id);


--
-- Name: cargue cargue_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cargue
    ADD CONSTRAINT cargue_pkey PRIMARY KEY (id);


--
-- Name: docente_estudiante docente_estudiante_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.docente_estudiante
    ADD CONSTRAINT docente_estudiante_pkey PRIMARY KEY (id);


--
-- Name: empresas empresas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empresas
    ADD CONSTRAINT empresas_pkey PRIMARY KEY (id);


--
-- Name: entrega entrega_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.entrega
    ADD CONSTRAINT entrega_pkey PRIMARY KEY (id);


--
-- Name: estados_practicas estados_practicas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estados_practicas
    ADD CONSTRAINT estados_practicas_pkey PRIMARY KEY (id);


--
-- Name: formulario_final formulario_final_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formulario_final
    ADD CONSTRAINT formulario_final_pkey PRIMARY KEY (id);


--
-- Name: formulario_modalidad formulario_modalidad_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formulario_modalidad
    ADD CONSTRAINT formulario_modalidad_pkey PRIMARY KEY (id);


--
-- Name: menu_item menuitem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_item
    ADD CONSTRAINT menuitem_pkey PRIMARY KEY (id);


--
-- Name: modalidades_practicas modalidades_practicas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modalidades_practicas
    ADD CONSTRAINT modalidades_practicas_pkey PRIMARY KEY (id);


--
-- Name: niveles_practicas niveles_practicas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.niveles_practicas
    ADD CONSTRAINT niveles_practicas_pkey PRIMARY KEY (id);


--
-- Name: ofertas ofertas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ofertas
    ADD CONSTRAINT ofertas_pkey PRIMARY KEY (id);


--
-- Name: postulaciones postulaciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.postulaciones
    ADD CONSTRAINT postulaciones_pkey PRIMARY KEY (id);


--
-- Name: practicas practicas_id_postulacion_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.practicas
    ADD CONSTRAINT practicas_id_postulacion_key UNIQUE (id_postulacion);


--
-- Name: practicas practicas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.practicas
    ADD CONSTRAINT practicas_pkey PRIMARY KEY (id);


--
-- Name: rol rol_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_pkey PRIMARY KEY (id);


--
-- Name: rol_menu_item rolmenuitem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol_menu_item
    ADD CONSTRAINT rolmenuitem_pkey PRIMARY KEY (id_rol, id_menu_item);


--
-- Name: segunda_entrega segunda_entrega_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segunda_entrega
    ADD CONSTRAINT segunda_entrega_pkey PRIMARY KEY (id);


--
-- Name: usuarios_modalidades_practicas usuarios_modalidades_practicas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios_modalidades_practicas
    ADD CONSTRAINT usuarios_modalidades_practicas_pkey PRIMARY KEY (id);


--
-- Name: usuarios_niveles_practicas usuarios_niveles_practicas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios_niveles_practicas
    ADD CONSTRAINT usuarios_niveles_practicas_pkey PRIMARY KEY (id);


--
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- Name: empresas_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX empresas_id_idx ON public.empresas USING btree (id) WITH (deduplicate_items='true');


--
-- Name: estados_practicas_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX estados_practicas_id_idx ON public.estados_practicas USING btree (id) WITH (deduplicate_items='true');


--
-- Name: modalidades_practicas_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX modalidades_practicas_id_idx ON public.modalidades_practicas USING btree (id) WITH (deduplicate_items='true');


--
-- Name: niveles_practicas_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX niveles_practicas_id_idx ON public.niveles_practicas USING btree (id) WITH (deduplicate_items='true');


--
-- Name: ofertas_id_empresa_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ofertas_id_empresa_idx ON public.ofertas USING btree (id_empresa) WITH (deduplicate_items='true');


--
-- Name: ofertas_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ofertas_id_idx ON public.ofertas USING btree (id) WITH (deduplicate_items='true');


--
-- Name: ofertas_id_modalidad_practica_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ofertas_id_modalidad_practica_idx ON public.ofertas USING btree (id_modalidad_practica) WITH (deduplicate_items='true');


--
-- Name: ofertas_id_nivel_practica_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ofertas_id_nivel_practica_idx ON public.ofertas USING btree (id_nivel_practica) WITH (deduplicate_items='true');


--
-- Name: postulaciones_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX postulaciones_id_idx ON public.postulaciones USING btree (id) WITH (deduplicate_items='true');


--
-- Name: postulaciones_id_oferta_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX postulaciones_id_oferta_idx ON public.postulaciones USING btree (id_oferta) WITH (deduplicate_items='true');


--
-- Name: postulaciones_id_usuario_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX postulaciones_id_usuario_idx ON public.postulaciones USING btree (id_usuario) WITH (deduplicate_items='true');


--
-- Name: practicas_id_estado_practica_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX practicas_id_estado_practica_idx ON public.practicas USING btree (id_estado_practica) WITH (deduplicate_items='true');


--
-- Name: practicas_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX practicas_id_idx ON public.practicas USING btree (id) WITH (deduplicate_items='true');


--
-- Name: practicas_id_postulacion_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX practicas_id_postulacion_idx ON public.practicas USING btree (id_postulacion) WITH (deduplicate_items='true');


--
-- Name: usuarios_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX usuarios_id_idx ON public.usuarios USING btree (id) WITH (deduplicate_items='true');


--
-- Name: usuarios_modalidades_practicas_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX usuarios_modalidades_practicas_id_idx ON public.usuarios_modalidades_practicas USING btree (id) WITH (deduplicate_items='true');


--
-- Name: usuarios_modalidades_practicas_id_modalidad_practica_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX usuarios_modalidades_practicas_id_modalidad_practica_idx ON public.usuarios_modalidades_practicas USING btree (id_modalidad_practica) WITH (deduplicate_items='true');


--
-- Name: usuarios_modalidades_practicas_id_usuario_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX usuarios_modalidades_practicas_id_usuario_idx ON public.usuarios_modalidades_practicas USING btree (id_usuario) WITH (deduplicate_items='true');


--
-- Name: usuarios_niveles_practicas_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX usuarios_niveles_practicas_id_idx ON public.usuarios_niveles_practicas USING btree (id) WITH (deduplicate_items='true');


--
-- Name: usuarios_niveles_practicas_id_usuario_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX usuarios_niveles_practicas_id_usuario_idx ON public.usuarios_niveles_practicas USING btree (id_usuario) WITH (deduplicate_items='true');


--
-- Name: usuarios_niveles_practicas_id_usuario_idx1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX usuarios_niveles_practicas_id_usuario_idx1 ON public.usuarios_niveles_practicas USING btree (id_usuario) WITH (deduplicate_items='true');


--
-- Name: formulario_final fk_cargue; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formulario_final
    ADD CONSTRAINT fk_cargue FOREIGN KEY (id_cargue) REFERENCES public.cargue(id);


--
-- Name: segunda_entrega fk_cargue; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segunda_entrega
    ADD CONSTRAINT fk_cargue FOREIGN KEY (id_cargue) REFERENCES public.cargue(id);


--
-- Name: docente_estudiante fk_docente; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.docente_estudiante
    ADD CONSTRAINT fk_docente FOREIGN KEY (id_docente) REFERENCES public.usuarios(id) ON DELETE CASCADE;


--
-- Name: formulario_final fk_entrega; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formulario_final
    ADD CONSTRAINT fk_entrega FOREIGN KEY (id_entrega) REFERENCES public.entrega(id);


--
-- Name: segunda_entrega fk_entrega; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.segunda_entrega
    ADD CONSTRAINT fk_entrega FOREIGN KEY (id_entrega) REFERENCES public.entrega(id);


--
-- Name: docente_estudiante fk_estudiante; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.docente_estudiante
    ADD CONSTRAINT fk_estudiante FOREIGN KEY (id_estudiante) REFERENCES public.usuarios(id) ON DELETE CASCADE;


--
-- Name: formulario_modalidad formulario_modalidad_id_modalidad_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formulario_modalidad
    ADD CONSTRAINT formulario_modalidad_id_modalidad_fkey FOREIGN KEY (id_modalidad) REFERENCES public.modalidades_practicas(id);


--
-- Name: formulario_modalidad formulario_modalidad_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formulario_modalidad
    ADD CONSTRAINT formulario_modalidad_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id);


--
-- Name: ofertas ofertas_id_empresa_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ofertas
    ADD CONSTRAINT ofertas_id_empresa_fkey FOREIGN KEY (id_empresa) REFERENCES public.empresas(id) ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;


--
-- Name: ofertas ofertas_id_modalidad_practica_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ofertas
    ADD CONSTRAINT ofertas_id_modalidad_practica_fkey FOREIGN KEY (id_modalidad_practica) REFERENCES public.modalidades_practicas(id) ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;


--
-- Name: ofertas ofertas_id_nivel_practica_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ofertas
    ADD CONSTRAINT ofertas_id_nivel_practica_fkey FOREIGN KEY (id_nivel_practica) REFERENCES public.niveles_practicas(id) ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;


--
-- Name: postulaciones postulaciones_id_oferta_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.postulaciones
    ADD CONSTRAINT postulaciones_id_oferta_fkey FOREIGN KEY (id_oferta) REFERENCES public.ofertas(id) ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;


--
-- Name: postulaciones postulaciones_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.postulaciones
    ADD CONSTRAINT postulaciones_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id) ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;


--
-- Name: practicas practicas_id_estado_practica_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.practicas
    ADD CONSTRAINT practicas_id_estado_practica_fkey FOREIGN KEY (id_estado_practica) REFERENCES public.estados_practicas(id) ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;


--
-- Name: practicas practicas_id_postulacion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.practicas
    ADD CONSTRAINT practicas_id_postulacion_fkey FOREIGN KEY (id_postulacion) REFERENCES public.postulaciones(id) ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;


--
-- Name: rol_menu_item rolmenuitem_id_menu_item_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol_menu_item
    ADD CONSTRAINT rolmenuitem_id_menu_item_fkey FOREIGN KEY (id_menu_item) REFERENCES public.menu_item(id);


--
-- Name: rol_menu_item rolmenuitem_id_rol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol_menu_item
    ADD CONSTRAINT rolmenuitem_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public.rol(id);


--
-- Name: usuarios_modalidades_practicas usuarios_modalidades_practicas_id_modalidad_practica_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios_modalidades_practicas
    ADD CONSTRAINT usuarios_modalidades_practicas_id_modalidad_practica_fkey FOREIGN KEY (id_modalidad_practica) REFERENCES public.modalidades_practicas(id) ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;


--
-- Name: usuarios_modalidades_practicas usuarios_modalidades_practicas_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios_modalidades_practicas
    ADD CONSTRAINT usuarios_modalidades_practicas_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id) ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;


--
-- Name: usuarios_niveles_practicas usuarios_niveles_practicas_id_nivel_practica_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios_niveles_practicas
    ADD CONSTRAINT usuarios_niveles_practicas_id_nivel_practica_fkey FOREIGN KEY (id_nivel_practica) REFERENCES public.niveles_practicas(id) ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;


--
-- Name: usuarios_niveles_practicas usuarios_niveles_practicas_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios_niveles_practicas
    ADD CONSTRAINT usuarios_niveles_practicas_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id) ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

