--
-- PostgreSQL database dump
--

\restrict iAejmPC6aBMnPf6wyGWdXZIU87g8dG5oksMthigNKXEpfdPVwzfjVYtNzBlW5ga

-- Dumped from database version 18.2
-- Dumped by pg_dump version 18.2

-- Started on 2026-10-01 08:20:44

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
-- TOC entry 228 (class 1259 OID 24883)
-- Name: user_products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_products (
    id integer CONSTRAINT cart_items_id_not_null NOT NULL,
    product_id integer CONSTRAINT cart_items_product_id_not_null NOT NULL,
    user_id integer CONSTRAINT cart_items_user_id_not_null NOT NULL,
    quantity integer CONSTRAINT cart_items_quantity_not_null NOT NULL
);


ALTER TABLE public.user_products OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 24882)
-- Name: cart_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cart_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cart_items_id_seq OWNER TO postgres;

--
-- TOC entry 5066 (class 0 OID 0)
-- Dependencies: 227
-- Name: cart_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cart_items_id_seq OWNED BY public.user_products.id;


--
-- TOC entry 224 (class 1259 OID 24824)
-- Name: orders_products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders_products (
    id integer CONSTRAINT order_items_id_not_null NOT NULL,
    quantity integer CONSTRAINT order_items_quantity_not_null NOT NULL,
    price numeric(10,2) CONSTRAINT order_items_price_not_null NOT NULL,
    product_id integer CONSTRAINT order_items_product_id_not_null NOT NULL,
    order_id integer CONSTRAINT order_items_orders_id_not_null NOT NULL
);


ALTER TABLE public.orders_products OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 24823)
-- Name: order_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.order_items_id_seq OWNER TO postgres;

--
-- TOC entry 5067 (class 0 OID 0)
-- Dependencies: 223
-- Name: order_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_items_id_seq OWNED BY public.orders_products.id;


--
-- TOC entry 226 (class 1259 OID 24851)
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    status text NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    delivery_address character varying(255) NOT NULL
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 24850)
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.orders_id_seq OWNER TO postgres;

--
-- TOC entry 5068 (class 0 OID 0)
-- Dependencies: 225
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- TOC entry 222 (class 1259 OID 24788)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    product_name character varying(255) NOT NULL,
    quantity integer NOT NULL,
    price numeric(10,2) NOT NULL,
    image_src text NOT NULL,
    is_sold boolean,
    old_price numeric(10,2)
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 24787)
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_id_seq OWNER TO postgres;

--
-- TOC entry 5069 (class 0 OID 0)
-- Dependencies: 221
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- TOC entry 220 (class 1259 OID 24768)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer CONSTRAINT users_id_not_null NOT NULL,
    user_name character varying(255) CONSTRAINT users_user_name_not_null NOT NULL,
    password_hash character varying(255) CONSTRAINT users_password_hash_not_null NOT NULL,
    phone_number text CONSTRAINT users_phone_number_not_null NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 24767)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 5070 (class 0 OID 0)
-- Dependencies: 219
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public."user".id;


--
-- TOC entry 4881 (class 2604 OID 24854)
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- TOC entry 4880 (class 2604 OID 24827)
-- Name: orders_products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_products ALTER COLUMN id SET DEFAULT nextval('public.order_items_id_seq'::regclass);


--
-- TOC entry 4879 (class 2604 OID 24791)
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- TOC entry 4876 (class 2604 OID 24771)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 4883 (class 2604 OID 24886)
-- Name: user_products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_products ALTER COLUMN id SET DEFAULT nextval('public.cart_items_id_seq'::regclass);


--
-- TOC entry 5058 (class 0 OID 24851)
-- Dependencies: 226
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 5056 (class 0 OID 24824)
-- Dependencies: 224
-- Data for Name: orders_products; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 5054 (class 0 OID 24788)
-- Dependencies: 222
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.products VALUES (18, 'Galaxy s22 Ultra', 100, 32999.00, 'assets/pictures/category/technology/galaxy-s22-ultra.png', false, 74999.00);
INSERT INTO public.products VALUES (19, 'Galaxy M13 (4GB | 64GB )', 100, 10499.00, 'assets/pictures/category/technology/galaxy-m13.png', false, 14999.00);
INSERT INTO public.products VALUES (20, 'Galaxy M33 (4GB | 64GB)', 100, 16999.00, 'assets/pictures/category/technology/galaxy-m33.png', false, 24999.00);
INSERT INTO public.products VALUES (21, 'Galaxy M53 (4GB | 64GB)', 100, 31999.00, 'assets/pictures/category/technology/galaxy-m53.png', false, 40999.00);
INSERT INTO public.products VALUES (22, 'Galaxy S22 Ultra', 100, 67999.00, 'assets/pictures/category/technology/galaxy-s22-ultra-gray.png', false, 85999.00);


--
-- TOC entry 5052 (class 0 OID 24768)
-- Dependencies: 220
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 5060 (class 0 OID 24883)
-- Dependencies: 228
-- Data for Name: user_products; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 5071 (class 0 OID 0)
-- Dependencies: 227
-- Name: cart_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cart_items_id_seq', 1, false);


--
-- TOC entry 5072 (class 0 OID 0)
-- Dependencies: 223
-- Name: order_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_items_id_seq', 1, false);


--
-- TOC entry 5073 (class 0 OID 0)
-- Dependencies: 225
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 1, false);


--
-- TOC entry 5074 (class 0 OID 0)
-- Dependencies: 221
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 22, true);


--
-- TOC entry 5075 (class 0 OID 0)
-- Dependencies: 219
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- TOC entry 4899 (class 2606 OID 24892)
-- Name: user_products cart_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_products
    ADD CONSTRAINT cart_items_pkey PRIMARY KEY (id);


--
-- TOC entry 4895 (class 2606 OID 24835)
-- Name: orders_products order_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_products
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (id);


--
-- TOC entry 4897 (class 2606 OID 24861)
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- TOC entry 4891 (class 2606 OID 24800)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- TOC entry 4893 (class 2606 OID 24802)
-- Name: products products_product_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_product_name_key UNIQUE (product_name);


--
-- TOC entry 4885 (class 2606 OID 24785)
-- Name: user users_phone_number_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT users_phone_number_key UNIQUE (phone_number);


--
-- TOC entry 4887 (class 2606 OID 24781)
-- Name: user users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4889 (class 2606 OID 24783)
-- Name: user users_user_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT users_user_name_key UNIQUE (user_name);


--
-- TOC entry 4902 (class 2606 OID 24893)
-- Name: user_products cart_items_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_products
    ADD CONSTRAINT cart_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- TOC entry 4903 (class 2606 OID 24898)
-- Name: user_products cart_items_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_products
    ADD CONSTRAINT cart_items_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 4900 (class 2606 OID 24914)
-- Name: orders_products order_items_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_products
    ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id);


--
-- TOC entry 4901 (class 2606 OID 24944)
-- Name: orders_products order_items_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_products
    ADD CONSTRAINT order_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


-- Completed on 2026-10-01 08:20:44

--
-- PostgreSQL database dump complete
--

\unrestrict iAejmPC6aBMnPf6wyGWdXZIU87g8dG5oksMthigNKXEpfdPVwzfjVYtNzBlW5ga

