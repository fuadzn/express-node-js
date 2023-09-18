import kelompokService from "../service/kelompok-service.js";

const create = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await kelompokService.create(request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  create,
};
