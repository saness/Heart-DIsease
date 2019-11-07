-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2019 at 06:10 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `heartdiseaseapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `username`, `password`) VALUES
(32, 'Sanish Suwal', 'sanishsuwal3@gmail.com ', 'sanish', '$5$rounds=535000$4xPh0dj1gUDB6ike$vFXM.UoXFz2QC41P1UMxNBpv6RdA66.7KmlQa.zhRD.'),
(33, 'Rubek', 'ryback@gmail.com', 'ryback', '$5$rounds=535000$D4gbDIScrAnrSsMg$HuWvOMFzaqyvk7.a9W77EfK5EBPvw10jXRdFWattKY7'),
(34, 'Sophia', 'sophiagyawali@gmail.com', 'sophia', '$5$rounds=535000$F8F0JtSH5/TAe0LS$SNdRRWyRbaEahXEOyKsZwX7PJYkbEzY.GwHZJPH/3d9'),
(37, 'Raju', 'raju@gmail.com', 'raju123', '$5$rounds=535000$8hU5CXafPOnf0WQe$nBwWduQECiynE/Meeig8.GU5uuEjQ0nn8T/6w6IyXuD'),
(38, 'Hari', 'hari@email.com', 'Hari123', '$5$rounds=535000$K0hXg8ZROnEGotr3$8mrPTb5s0v/e9J4zxGe/24zTzZaouZrtvAV6txwx/91'),
(39, 'Sanod', 'sanod@gmail.com', 'sonod', '$5$rounds=535000$kozUpBPANqO0z1k1$uEV8PnK8iiUr1Drqf1HmUXrTO/XkUrMlH5pFF5jW.k/');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
