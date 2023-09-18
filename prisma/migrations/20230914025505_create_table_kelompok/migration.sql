-- CreateTable
CREATE TABLE `kelompok` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kelompok_kegiatan_kerja_id` VARCHAR(255) NULL,
    `created_by` VARCHAR(100) NULL,
    `updated_by` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
