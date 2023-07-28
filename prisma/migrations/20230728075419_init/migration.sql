-- CreateTable
CREATE TABLE `Books` (
    `id_book` INTEGER NOT NULL AUTO_INCREMENT,
    `title_book` VARCHAR(100) NOT NULL,
    `isbn_book` VARCHAR(20) NOT NULL,
    `date_published_book` DATETIME(3) NOT NULL,
    `publisher_book` VARCHAR(50) NOT NULL,
    `author_book` VARCHAR(50) NOT NULL,
    `description_book` TEXT NOT NULL,
    `page_count_book` INTEGER NOT NULL,
    `format_book` VARCHAR(20) NOT NULL,
    `language_book` VARCHAR(20) NOT NULL,
    `cover_book` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Books_isbn_book_key`(`isbn_book`),
    PRIMARY KEY (`id_book`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Member` (
    `id_member` INTEGER NOT NULL AUTO_INCREMENT,
    `name_member` VARCHAR(50) NOT NULL,
    `email_member` VARCHAR(50) NOT NULL,
    `password_member` VARCHAR(100) NOT NULL,
    `avatar_member` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Member_email_member_key`(`email_member`),
    PRIMARY KEY (`id_member`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stok` (
    `id_stok` INTEGER NOT NULL AUTO_INCREMENT,
    `id_book` INTEGER NOT NULL,
    `total_stok_book` INTEGER NOT NULL,

    UNIQUE INDEX `Stok_id_book_key`(`id_book`),
    PRIMARY KEY (`id_stok`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaksi_pinjam` (
    `id_pinjam` INTEGER NOT NULL AUTO_INCREMENT,
    `borrowedBy` VARCHAR(50) NOT NULL,
    `id_books` VARCHAR(30) NOT NULL,
    `date_pinjam` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `total_days_pinjam` INTEGER NOT NULL,

    PRIMARY KEY (`id_pinjam`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaksi_pengembalian` (
    `id_pengembalian` VARCHAR(30) NOT NULL,
    `borrowedBy` VARCHAR(50) NOT NULL,
    `id_books` VARCHAR(30) NOT NULL,
    `date_plan_pengembalian` DATETIME(3) NOT NULL,
    `date_actual_pengembalian` DATETIME(3) NULL,
    `denda_pengembalian` INTEGER NULL,
    `status_pengembalian` BOOLEAN NOT NULL,
    `keterangan_pengembalian` TEXT NULL,

    PRIMARY KEY (`id_pengembalian`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Stok` ADD CONSTRAINT `Stok_id_book_fkey` FOREIGN KEY (`id_book`) REFERENCES `Books`(`id_book`) ON DELETE CASCADE ON UPDATE CASCADE;
