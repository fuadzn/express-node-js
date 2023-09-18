import Joi from "joi";

const createKelompokValidation = Joi.object({
  kelompok_kegiatan_kerja_id: Joi.string().max(255).optional(),
  created_by: Joi.string().max(100).optional(),
  updated_by: Joi.string().max(100).optional(),
});

export {
  createKelompokValidation
};
