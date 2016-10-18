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
-- Table structure for table `crossword_question`
--

CREATE TABLE `crossword_question` (
  `question_ID` int(11) NOT NULL,
  `crossword_ID` int(11) NOT NULL,
  `square_ID` int(11) NOT NULL,
  `isDown` tinyint(1) NOT NULL,
  `question` varchar(60) NOT NULL,
  `answer` varchar(60) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `crossword_question`
--

INSERT INTO `crossword_question` (`question_ID`, `crossword_ID`, `square_ID`, `isDown`, `question`, `answer`) VALUES
(3, 1, 0, 0, 'Where subclasses', 'lnheritance'),
(4, 1, 0, 1, 'Continuous', 'loop'),
(5, 1, 36, 0, 'polymorphism test', 'polymorphism'),
(6, 1, 26, 1, 'Class test', 'Class'),
(7, 1, 45, 1, 'integer test', 'integer'),
(8, 1, 47, 1, 'Method test', 'Method'),
(9, 1, 64, 0, 'Parent test', 'Parent'),
(10, 1, 74, 0, 'String test', 'String'),
(11, 1, 112, 0, 'Declare test', 'Declare'),
(12, 2, 33, 0, 'method test', 'method'),
(13, 2, 24, 1, 'Testing test', 'testing'),
(14, 2, 38, 1, 'declare test', 'declare'),
(15, 3, 2, 1, 'modifier test', 'modifier'),
(16, 3, 31, 0, 'create object', 'new'),
(17, 3, 4, 1, 'Pass info back', 'return');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `crossword_question`
--
ALTER TABLE `crossword_question`
  ADD PRIMARY KEY (`question_ID`),
  ADD KEY `crossword_ID` (`crossword_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `crossword_question`
--
ALTER TABLE `crossword_question`
  MODIFY `question_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=18;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `crossword_question`
--
ALTER TABLE `crossword_question`
  ADD CONSTRAINT `crossword_question_ibfk_1` FOREIGN KEY (`crossword_ID`) REFERENCES `crossword` (`crossword_ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
