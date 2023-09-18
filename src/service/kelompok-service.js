import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { createKelompokValidation } from "../validation/kelompok-validation.js";
import { validate } from "../validation/validation.js";

const create = async (request) => {
  const kelompok = validate(createKelompokValidation, request);

  return prismaClient.kelompok.create({
    data: kelompok,
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
