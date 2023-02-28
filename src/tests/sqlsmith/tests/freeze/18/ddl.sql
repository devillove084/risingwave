CREATE TABLE supplier (s_suppkey INT, s_name CHARACTER VARYING, s_address CHARACTER VARYING, s_nationkey INT, s_phone CHARACTER VARYING, s_acctbal NUMERIC, s_comment CHARACTER VARYING, PRIMARY KEY (s_suppkey));
CREATE TABLE part (p_partkey INT, p_name CHARACTER VARYING, p_mfgr CHARACTER VARYING, p_brand CHARACTER VARYING, p_type CHARACTER VARYING, p_size INT, p_container CHARACTER VARYING, p_retailprice NUMERIC, p_comment CHARACTER VARYING, PRIMARY KEY (p_partkey));
CREATE TABLE partsupp (ps_partkey INT, ps_suppkey INT, ps_availqty INT, ps_supplycost NUMERIC, ps_comment CHARACTER VARYING, PRIMARY KEY (ps_partkey, ps_suppkey));
CREATE TABLE customer (c_custkey INT, c_name CHARACTER VARYING, c_address CHARACTER VARYING, c_nationkey INT, c_phone CHARACTER VARYING, c_acctbal NUMERIC, c_mktsegment CHARACTER VARYING, c_comment CHARACTER VARYING, PRIMARY KEY (c_custkey));
CREATE TABLE orders (o_orderkey BIGINT, o_custkey INT, o_orderstatus CHARACTER VARYING, o_totalprice NUMERIC, o_orderdate DATE, o_orderpriority CHARACTER VARYING, o_clerk CHARACTER VARYING, o_shippriority INT, o_comment CHARACTER VARYING, PRIMARY KEY (o_orderkey));
CREATE TABLE lineitem (l_orderkey BIGINT, l_partkey INT, l_suppkey INT, l_linenumber INT, l_quantity NUMERIC, l_extendedprice NUMERIC, l_discount NUMERIC, l_tax NUMERIC, l_returnflag CHARACTER VARYING, l_linestatus CHARACTER VARYING, l_shipdate DATE, l_commitdate DATE, l_receiptdate DATE, l_shipinstruct CHARACTER VARYING, l_shipmode CHARACTER VARYING, l_comment CHARACTER VARYING, PRIMARY KEY (l_orderkey, l_linenumber));
CREATE TABLE nation (n_nationkey INT, n_name CHARACTER VARYING, n_regionkey INT, n_comment CHARACTER VARYING, PRIMARY KEY (n_nationkey));
CREATE TABLE region (r_regionkey INT, r_name CHARACTER VARYING, r_comment CHARACTER VARYING, PRIMARY KEY (r_regionkey));
CREATE TABLE person (id BIGINT, name CHARACTER VARYING, email_address CHARACTER VARYING, credit_card CHARACTER VARYING, city CHARACTER VARYING, state CHARACTER VARYING, date_time TIMESTAMP, extra CHARACTER VARYING, PRIMARY KEY (id));
CREATE TABLE auction (id BIGINT, item_name CHARACTER VARYING, description CHARACTER VARYING, initial_bid BIGINT, reserve BIGINT, date_time TIMESTAMP, expires TIMESTAMP, seller BIGINT, category BIGINT, extra CHARACTER VARYING, PRIMARY KEY (id));
CREATE TABLE bid (auction BIGINT, bidder BIGINT, price BIGINT, channel CHARACTER VARYING, url CHARACTER VARYING, date_time TIMESTAMP, extra CHARACTER VARYING);
CREATE TABLE alltypes1 (c1 BOOLEAN, c2 SMALLINT, c3 INT, c4 BIGINT, c5 REAL, c6 DOUBLE, c7 NUMERIC, c8 DATE, c9 CHARACTER VARYING, c10 TIME, c11 TIMESTAMP, c13 INTERVAL, c14 STRUCT<a INT>, c15 INT[], c16 CHARACTER VARYING[]);
CREATE TABLE alltypes2 (c1 BOOLEAN, c2 SMALLINT, c3 INT, c4 BIGINT, c5 REAL, c6 DOUBLE, c7 NUMERIC, c8 DATE, c9 CHARACTER VARYING, c10 TIME, c11 TIMESTAMP, c13 INTERVAL, c14 STRUCT<a INT>, c15 INT[], c16 CHARACTER VARYING[]);
CREATE MATERIALIZED VIEW m0 AS SELECT t_0.s_suppkey AS col_0, (CAST(NULL AS STRUCT<a CHARACTER VARYING, b INT>)) AS col_1, (FLOAT '238') AS col_2 FROM supplier AS t_0 JOIN region AS t_1 ON t_0.s_address = t_1.r_name GROUP BY t_0.s_suppkey, t_1.r_comment, t_0.s_acctbal, t_0.s_address, t_1.r_regionkey HAVING false;
CREATE MATERIALIZED VIEW m1 AS SELECT DATE '2022-08-16' AS col_0, (sq_2.col_0 # (coalesce(NULL, NULL, NULL, NULL, NULL, NULL, (INT '844065332'), NULL, NULL, NULL))) AS col_1, sq_2.col_0 AS col_2, (((INT '-1644141203') # ((INT '966') << (INT '0'))) # ((SMALLINT '764') - ((sq_2.col_0 & (sq_2.col_0 * (SMALLINT '1'))) * (INT '866')))) AS col_3 FROM (SELECT t_1.price AS col_0 FROM customer AS t_0 FULL JOIN bid AS t_1 ON t_0.c_phone = t_1.extra GROUP BY t_1.price HAVING false) AS sq_2 WHERE ((sq_2.col_0 + (2147483647)) <= ((INT '282'))) GROUP BY sq_2.col_0;
CREATE MATERIALIZED VIEW m2 AS SELECT (t_1.c7 - ((BIGINT '705') - t_1.c7)) AS col_0 FROM nation AS t_0 FULL JOIN alltypes2 AS t_1 ON t_0.n_comment = t_1.c9 WHERE t_1.c1 GROUP BY t_1.c3, t_1.c7, t_1.c6, t_1.c14, t_1.c5 HAVING true;
CREATE MATERIALIZED VIEW m4 AS SELECT t_1.n_name AS col_0 FROM lineitem AS t_0 LEFT JOIN nation AS t_1 ON t_0.l_shipmode = t_1.n_comment WHERE (false) GROUP BY t_1.n_name, t_1.n_regionkey, t_0.l_tax, t_0.l_receiptdate;
CREATE MATERIALIZED VIEW m5 AS SELECT (INTERVAL '0') AS col_0, (hop_0.auction | hop_0.auction) AS col_1, hop_0.auction AS col_2 FROM hop(bid, bid.date_time, INTERVAL '3600', INTERVAL '334800') AS hop_0 WHERE true GROUP BY hop_0.auction HAVING false;
CREATE MATERIALIZED VIEW m6 AS SELECT t_1.c10 AS col_0, ((FLOAT '-1224621089') < (SMALLINT '487')) AS col_1, TIME '01:25:33' AS col_2 FROM auction AS t_0 LEFT JOIN alltypes2 AS t_1 ON t_0.date_time = t_1.c11 AND (CAST(NULL AS STRUCT<a INT>)) NOT IN ((CAST(NULL AS STRUCT<a INT>)), t_1.c14, t_1.c14, t_1.c14, CAST(NULL AS STRUCT<a INT>)) GROUP BY t_1.c11, t_1.c10;
CREATE MATERIALIZED VIEW m7 AS SELECT ((INT '295')) AS col_0, t_0.ps_supplycost AS col_1, (t_0.ps_availqty + t_0.ps_supplycost) AS col_2 FROM partsupp AS t_0 GROUP BY t_0.ps_availqty, t_0.ps_supplycost, t_0.ps_comment HAVING false;
CREATE MATERIALIZED VIEW m8 AS WITH with_0 AS (WITH with_1 AS (WITH with_2 AS (SELECT t_3.l_suppkey AS col_0, (coalesce(NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ((CASE WHEN true THEN (INTERVAL '86400') ELSE (INTERVAL '0') END) / (1)), NULL)) AS col_1, t_3.l_linenumber AS col_2 FROM lineitem AS t_3 FULL JOIN partsupp AS t_4 ON t_3.l_suppkey = t_4.ps_availqty WHERE false GROUP BY t_3.l_suppkey, t_4.ps_comment, t_3.l_linestatus, t_3.l_shipdate, t_3.l_discount, t_3.l_linenumber, t_3.l_returnflag, t_3.l_orderkey) SELECT ((INT '261') # (INT '872')) AS col_0 FROM with_2 WHERE (true)) SELECT (INTERVAL '3600') AS col_0, CAST(((-2147483648) >= (((INT '878') # (SMALLINT '97')) # (INT '164'))) AS INT) AS col_1, true AS col_2 FROM with_1 WHERE false) SELECT (INTERVAL '60') AS col_0 FROM with_0;
CREATE MATERIALIZED VIEW m9 AS SELECT t_0.c16 AS col_0, ('FMQjylA9QY') AS col_1, (BIGINT '945') AS col_2, t_0.c11 AS col_3 FROM alltypes2 AS t_0 GROUP BY t_0.c15, t_0.c4, t_0.c11, t_0.c5, t_0.c7, t_0.c16, t_0.c10, t_0.c3 HAVING CAST(t_0.c3 AS BOOLEAN);