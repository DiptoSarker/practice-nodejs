CREATE TABLE `nodejs-login`.`user` ( `id` INT NOT NULL AUTO_INCREMENT , `Book_Name` VARCHAR(45) NOT NULL , `Writer_Name` VARCHAR(45) NOT NULL , `Publications` VARCHAR(45) NOT NULL , `Catagories` VARCHAR(45) NOT NULL , `Status` VARCHAR NOT NULL DEFAULT 'active' , PRIMARY KEY (`id`)) ENGINE = InnoDB;