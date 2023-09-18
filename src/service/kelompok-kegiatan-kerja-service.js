import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { createKelompokKKValidation } from "../validation/kelompok-kegiatan-kerja-validation.js";
import { validate } from "../validation/validation.js";

const create = async (request) => {
  const konfigurasi = validate(createKelompokKKValidation, request);

  return prismaClient.konfigurasi.create({
    data: konfigurasi,
    select: {
      id: true,
      kelompok_kegiatan_kerja_id: true,
      created_by: true,
      updated_by: true,
    },
  });
};

export default {
  create,
};
