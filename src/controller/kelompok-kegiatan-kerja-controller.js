import kelompokKegiatanKerjaService from "../service/kelompok-kegiatan-kerja-service.js";

const create = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await kelompokKegiatanKerjaService.create(request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};


export default {
  create
};
