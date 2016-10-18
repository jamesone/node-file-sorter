-- phpMyAdmin SQL Dump
-- version 4.4.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 23, 2015 at 04:22 AM
-- Server version: 5.5.44
-- PHP Version: 5.4.43

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `itguru`
--

-- --------------------------------------------------------

--
-- Table structure for table `crossword`
--

CREATE TABLE `crossword` (
  `crossword_ID` int(11) NOT NULL,
  `topic_ID` int(11) NOT NULL,
  `difficulty` int(11) NOT NULL,
  `total_sqrs` int(11) NOT NULL,
  `x_sq` int(11) NOT NULL,
  `y_sq` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `crossword`
--

INSERT INTO `crossword` (`crossword_ID`, `topic_ID`, `difficulty`, `total_sqrs`, `x_sq`, `y_sq`) VALUES
(1, 1, 3, 144, 12, 12),
(2, 2, 2, 100, 10, 10),
(3, 3, 3, 40, 5, 8);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `crossword`
--
ALTER TABLE `crossword`
  ADD PRIMARY KEY (`crossword_ID`),
  ADD KEY `topic_ID` (`topic_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `crossword`
--
ALTER TABLE `crossword`
  MODIFY `crossword_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `crossword`
--
ALTER TABLE `crossword`
  ADD CONSTRAINT `crossword_ibfk_1` FOREIGN KEY (`topic_ID`) REFERENCES `topic` (`topic_ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
