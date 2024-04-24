-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2024 at 11:04 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `libros`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrador`
--

CREATE TABLE `administrador` (
  `id` int(11) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `contrasena` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `administrador`
--

INSERT INTO `administrador` (`id`, `correo`, `contrasena`) VALUES
(1, 'silvi@gmail.com', 123),
(2, 'Silvana0@gmail.com', 123456);

-- --------------------------------------------------------

--
-- Table structure for table `publicaciones`
--

CREATE TABLE `publicaciones` (
  `id` int(11) NOT NULL,
  `titulo` varchar(25) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `precio` int(20) NOT NULL,
  `url` varchar(250) NOT NULL,
  `pdf` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `publicaciones`
--

INSERT INTO `publicaciones` (`id`, `titulo`, `descripcion`, `precio`, `url`, `pdf`) VALUES
(2, 'El olvido que seremos ', 'El olvido que seremos, de Héctor Abad Faciolince, extraordinario canto al amor filial y clásico contemporáneo de la literatura en español, emprende un nuevo vuelo con esta adaptación al formato de nov', 0, 'https://letraslibres.com/wp-content/uploads/2016/05/img_art_12374_4398.jpg', 'image_1713860720676.docx'),
(3, 'MOMO', 'NCHCHCHCBCBCBCCBC', 0, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSL69y55wJDKUXVawLLq02owftKY8HDR66aA&s', 'file_1713862198840.docx'),
(5, 'El maestro ciruela ', 'Este libro es jshshgdgdfgdggffg', 10000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4Cti2IzO7W3L6az4pEF_BGzn0ZovBggfeH79m6308g&s', 'file_1713912225543.docx'),
(9, 'Invisible', 'invisible', 0, 'https://cdn.culturagenial.com/es/imagenes/invisible-eloy.jpg', 'file_1713964957743.docx'),
(10, 'El niño', 'El niño ', 0, 'https://imagessl4.casadellibro.com/a/l/s5/24/9788419468024.webp', 'file_1713965108243.docx'),
(11, 'El desfribilador', 'El desfribilidar es un libro.....', 0, 'https://covers.alibrate.com/b/6238bf5bc887170efba7c23a/af2287cd-429b-4c33-8ccc-8699ecbfef1b/share', 'file_1713965387039.docx'),
(12, 'Rivales divinos ', 'este libro es una belleza', 0, 'https://www.educaciontrespuntocero.com/wp-content/uploads/2024/01/rivales-divinos.jpg', 'file_1713965492590.docx'),
(13, 'El bosque de los susurros', 'Este bosque me da miedo', 0, 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1668516406-514hltLWVcL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*', 'file_1713965589577.docx'),
(14, 'Hija de esparta', 'hijaaaaaaaaaaaaaaaaaaaaaaa', 0, 'https://assets.saposyprincesas.com/2020/03/hija-de-esparta.jpg', 'file_1713965665310.docx'),
(15, 'Prohibido', 'Ante la incapacidad de una madre alcohólica y la ausencia de un padre que los abandonó, deben hacerse cargo de sus hermanos menores y esconder su situación a los servicios sociales. Esa responsabilida', 0, 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1683464732-914x3s-Xv6L.jpg?crop=1xw:1xh;center,top&resize=980:*', 'file_1713965773904.docx'),
(17, 'El principito', 'Es un niño bonito', 0, 'https://www.libreriauca.com/system/balloom/product_assets/attachments/000/010/874/normal/LIB-9789996152054.jpg?1535598385', 'file_1713965938075.docx'),
(19, 'El huerto', 'El huerto está en un lugar desconocido', 20000, 'https://m.media-amazon.com/images/I/510bQBx+6JL.jpg', 'file_1713966190638.docx'),
(20, 'Un monstruo', 'Este monstruo vino a verme', 25000, 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1646842868-51IQ4LZLb-L._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*', 'file_1713966305575.docx'),
(21, 'Merlín', 'Ante la incapacidad de una madre alcohólica y la ausencia de un padre que los abandonó, deben hacerse cargo de sus hermanos menores y esconder su situación a los servicios sociales. Esa responsabilida', 30000, 'https://www.cinconoticias.com/wp-content/uploads/Literatura-juvenil-El-mago-Merlin.jpg', 'file_1713966500649.docx'),
(22, 'Wonder', 'Ante la incapacidad de una madre alcohólica y la ausencia de un padre que los abandonó, deben hacerse cargo de sus hermanos menores y esconder su situación a los servicios sociales. Esa responsabilida', 30000, 'https://www.penguinlibros.com/ar/2130425-home_default/wonder-2-la-historia-de-julian.webp', 'file_1713966701151.docx'),
(24, 'Brilla entre las nubes', 'Brilla', 30000, 'https://images.booksense.com/images/218/195/9798670195218.jpg', 'file_1713967033041.docx'),
(25, 'Vuela alto', 'Volemos juntos', 20000, 'https://m.media-amazon.com/images/I/71I6A2ozhdL._AC_UF1000,1000_QL80_.jpg', 'file_1713967129672.docx'),
(26, 'Todas para una', 'Todos juntos', 35000, 'https://images.cdn3.buscalibre.com/fit-in/360x360/27/fd/27fdf6fd490ec7723743b6ab907cfa8c.jpg', 'file_1713967193136.docx'),
(27, 'Luz de luna', 'La niña que bebió luz de luna', 40000, 'https://img.remediosdigitales.com/eed4cf/91z1agugwll/450_1000.jpg', 'file_1713967278929.docx'),
(28, 'Mujercitas', 'Ante la incapacidad de una madre alcohólica y la ausencia de un padre que los abandonó, deben hacerse cargo de sus hermanos menores y esconder su situación a los servicios sociales. Esa responsabilida', 30000, 'https://img.remediosdigitales.com/e12fb3/51ts7lrtoyl/450_1000.jpg', 'file_1713967365838.docx'),
(29, 'Latidos que nunca dije ', 'Esta es una descripción', 25000, 'https://images.cdn2.buscalibre.com/fit-in/360x360/1f/d8/1fd83aba74f4d30c79b5a6e7c45ba661.jpg', 'file_1713976770579.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `contrasena` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `contrasena`) VALUES
(1, 'sol', 'sol@gmail.com', '12345'),
(3, 'Luisita', 'luisita@gmail.com', '12345678'),
(4, 'Luisa', 'luisa@gmail.com', '12345');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administrador`
--
ALTER TABLE `administrador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
