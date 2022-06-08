-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-10-13 09:24:49
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `jd.com`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL COMMENT '商品id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `price` float NOT NULL COMMENT '商品价格',
  `num` int(11) NOT NULL COMMENT '商品数量',
  `picture` text NOT NULL COMMENT '商品图片',
  `details` text NOT NULL COMMENT '商品详情',
  `type` text NOT NULL COMMENT '商品分类'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `num`, `picture`, `details`, `type`) VALUES
(100001, '苹果 Apple MacBook Pro 13.3英寸 新款M1芯片 笔记本电脑 教育优惠 深空灰【视网膜屏】 【官方标配】八核M1芯片 8G 256GB', 9498, 3233, '[{ \"src\": \"imgs/p01-0.jpg\", \"alt\": \"small\" }, { \"src\": \"imgs/p01-1.jpg\", \"alt\": \"details-1\" }, { \"src\": \"imgs/p01-2.jpg\", \"alt\": \"details-2\" }]', '<img src=\"https://img10.360buyimg.com/imgzone/jfs/t1/162947/5/16291/369121/6066c9cdE0ff4b1cb/de774529e84534b2.jpg\">', '[{ \"color\": \"灰\", \"type\": [\"128G\", \"256G\", \"1TB\"], \"price\": [9899, 10588, 12999] }, { \"color\": \"白\", \"type\": [\"128G\", \"256G\", \"1TB\"], \"price\": [9899, 10588, 12999] }]'),
(100002, 'Apple MacBook Pro 13.3 新款八核M1芯片 16G 512G SSD 深空灰 笔记本电脑 轻薄本 Z11C', 11999, 222, '[{ \"src\": \"imgs/p02-0.jpg\", \"alt\": \"small\" }, { \"src\": \"imgs/p02-1.jpg\", \"alt\": \"details-1\" }, { \"src\": \"imgs/p02-2.jpg\", \"alt\": \"details-2\" }]', '<img src=\"https://img13.360buyimg.com/cms/jfs/t1/123076/24/18281/711442/5faafc48E581545a5/aefc8b6131a2d36e.jpg\">', '[{ \"color\": \"灰\", \"type\": [\"128G\", \"256G\", \"1TB\"], \"price\": [9899, 10588, 12999] }, { \"color\": \"白\", \"type\": [\"128G\", \"256G\", \"1TB\"], \"price\": [9899, 10588, 12999] }]'),
(100003, 'Apple iPhone 12 (A2404) 128GB 白色 支持移动联通电信5G 双卡双待手机', 5599, 2221, '[{ \"src\": \"imgs/p03-0.jpg\", \"alt\": \"small\" }, { \"src\": \"imgs/p03-1.jpg\", \"alt\": \"details-1\" }, { \"src\": \"imgs/p03-2.jpg\", \"alt\": \"details-2\" }]', '<img src=\"https://img14.360buyimg.com/cms/jfs/t1/203778/2/2249/1433641/611f1bc2E0e9afb22/17565e464b9e554e.jpg\">', '[{ \"color\": \"灰\", \"type\": [\"128G\", \"256G\", \"1TB\"], \"price\": [9899, 10588, 12999] }, { \"color\": \"白\", \"type\": [\"128G\", \"256G\", \"1TB\"], \"price\": [9899, 10588, 12999] }]');

--
-- 转储表的索引
--

--
-- 表的索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=100004;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
