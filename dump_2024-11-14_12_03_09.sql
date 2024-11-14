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

-- Dumped from database version 17.0 (Debian 17.0-1.pgdg120+1)
-- Dumped by pg_dump version 17.0 (Debian 17.0-1.pgdg120+1)

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

-- Dumped from database version 17.0 (Debian 17.0-1.pgdg120+1)
-- Dumped by pg_dump version 17.0 (Debian 17.0-1.pgdg120+1)

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

-- Dumped from database version 17.0 (Debian 17.0-1.pgdg120+1)
-- Dumped by pg_dump version 17.0 (Debian 17.0-1.pgdg120+1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

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
-- Name: modalidades_practicas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modalidades_practicas (
    id integer NOT NULL,
    nombre character varying(30) NOT NULL
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
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    primer_nombre character varying(30) NOT NULL,
    segundo_nombre character varying(30),
    primer_apellido character varying(30) NOT NULL,
    segundo_apellido character varying(30)
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
-- Name: empresas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empresas ALTER COLUMN id SET DEFAULT nextval('public.empresas_id_seq'::regclass);


--
-- Name: estados_practicas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estados_practicas ALTER COLUMN id SET DEFAULT nextval('public.estados_practicas_id_seq'::regclass);


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
-- Data for Name: empresas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.empresas (id, nombre) FROM stdin;
1	Bancolombia
\.


--
-- Data for Name: estados_practicas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estados_practicas (id, nombre) FROM stdin;
1	Activo
\.


--
-- Data for Name: modalidades_practicas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.modalidades_practicas (id, nombre) FROM stdin;
1	Contrato de aprendizaje
\.


--
-- Data for Name: niveles_practicas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.niveles_practicas (id, nombre) FROM stdin;
1	Técnico
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
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido) FROM stdin;
1	Miguel	Ángel	Manrique	Téllez
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
-- Name: empresas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.empresas_id_seq', 1, true);


--
-- Name: estados_practicas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.estados_practicas_id_seq', 1, true);


--
-- Name: modalidades_practicas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.modalidades_practicas_id_seq', 1, true);


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
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 1, true);


--
-- Name: usuarios_modalidades_practicas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_modalidades_practicas_id_seq', 1, false);


--
-- Name: usuarios_niveles_practicas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_niveles_practicas_id_seq', 1, false);


--
-- Name: empresas empresas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empresas
    ADD CONSTRAINT empresas_pkey PRIMARY KEY (id);


--
-- Name: estados_practicas estados_practicas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estados_practicas
    ADD CONSTRAINT estados_practicas_pkey PRIMARY KEY (id);


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

