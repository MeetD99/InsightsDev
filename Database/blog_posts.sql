-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `desc` varchar(1000) NOT NULL,
  `img` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `uid` int DEFAULT NULL,
  `cat` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uid_idx` (`uid`),
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (3,'ChatGPT dead?','<p>Multiple new AIs have been introduced lately , Is ChatGPT dead? Explore Claude AI and Perplexity.</p>','1713171932393pexels-photo-15863066.webp','2024-04-15 14:35:32',7,'technology'),(4,'Mars Rover','<p>mars Rover is super cool, It lives on mars.</p>','1713171976050mars-mars-rover-space-travel-robot-73910.jpeg','2024-04-15 14:36:16',7,'science'),(6,'Intel\'s comeback!','<p>Intel recently introduced the new Intel Ultra chips straight out of Meteor Lake, California. These chips are said to perform at par with Apple\'s M2 and M3 chips. These chips are super fast and have a dedicated Neural processing unit (NPU) that makes running Large Language models easy for AI tasks. These chips could finally bring the much needed revolution needed in Windows PCs.</p>','1713172409510pexels-photo-2399840.jpeg','2024-04-15 14:43:29',6,'technology'),(10,'Flare PDEU','<p>It is a cultural fest of PDEU, Gandhinagar where culture meets creativity and the campus is filled with joy and excitement.</p>','17133803544831713174104467pexels-photo-256381.jpeg','2024-04-17 21:23:25',6,'cinema'),(11,'Fruits, the magical food','<p>Fruits are nature\'s colorful bounty, rich in essential vitamins, minerals, and antioxidants, bolstering immune health and promoting overall well-being. Their fiber content aids digestion, regulates blood sugar levels, and supports heart health, making them an indispensable part of a balanced diet. Incorporating a variety of fruits into daily consumption can contribute to a vibrant, energetic lifestyle.</p>','1713380938601fruits.jpeg','2024-04-18 00:38:58',14,'food'),(12,'The Mysterious Black Holes!','<p>Black holes are enigmatic cosmic phenomena, where gravity is so intense that nothing, not even light, can escape their grasp. They are formed from the collapse of massive stars and play a crucial role in shaping the structure of the universe.</p>','1713381123308Science.jpg','2024-04-18 00:42:03',14,'science'),(13,'The Ancient Indian temples','<p>Ancient Indian temple architecture is a masterpiece of intricate design, reflecting spiritual and cultural symbolism in every detail, from sculpted deities to elaborate carvings. Its symmetrical layouts and precise proportions evoke a sense of divine harmony and transcendence, inviting worshippers to experience the sacred within its walls.</p>','1713381276518art2.jpeg','2024-04-18 00:44:36',6,'art'),(14,'Is Junk Food secretly killing Us?','<p>Junk foods, laden with excessive fats, sugars, and artificial additives, contribute to obesity, heart disease, and other chronic health conditions. Their lack of nutritional value undermines overall well-being, leading to a cycle of poor dietary choices and adverse health outcomes.</p>','1713381388243food.webp','2024-04-18 00:46:28',6,'food'),(15,'The Art of doing Art!','<p>The art of creating art is a delicate dance between imagination and skill, where the soul\'s expression meets the canvas\'s embrace. It is a journey of self-discovery, passion, and boundless creativity, transcending boundaries to evoke emotion and inspire connection.</p>','1713381457590art.jpeg','2024-04-18 00:47:37',7,'art'),(16,'Getting lost in colors!','<p>Getting lost in colors is like wandering through a kaleidoscope of emotions, where each hue tells a story of its own, igniting the imagination and stirring the soul. It\'s a journey of discovery and delight, where vibrant pigments weave a tapestry of beauty that captivates the senses and invites endless exploration.</p>','1713381604897design.jpeg','2024-04-18 00:50:04',7,'design'),(17,'Designing the world!','<p><strong>Designing</strong> is the art of harmonizing form and function, where creativity meets practicality to solve problems and inspire wonder. It\'s a process of envisioning possibilities, refining details, and crafting experiences that resonate with purpose and elegance.</p>','1713381673672design2.webp','2024-04-18 00:51:13',14,'design'),(18,'Project for DBMS','<p>This is a MERN Stack Project made by us.</p>','1713431309543art.jpeg','2024-04-18 14:38:29',15,'technology');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-20 11:39:41
