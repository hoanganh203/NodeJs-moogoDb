import Product from "../models/product";
import joi from "joi";

const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
});

export const create = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) {
            return res.json({
                message: error.details[0].message,
            });
        }

        const data = await Product.create(req.body);
        return res.status(200).json({
            message: "Thêm sản phẩm thành công",
            data,
        });

    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });

    }
}


export const getAll = async (req, res) => {
    try {

        const data = await Product.find();
        return res.status(200).json({
            message: "Danh sách",
            data,
        });

    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });

    }
}

export const getOne = async (req, res) => {
    try {

        const data = await Product.findById(req.params.id);
        return res.status(200).json({
            message: "Danh sách one",
            data,
        });

    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });

    }
}

export const remove = async (req, res) => {
    try {

        const data = await Product.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xóa thành công",
            data,
        });

    } catch (error) {
        return res.json({
            message: error.message,
        });

    }
}

export const update = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) {
            return res.json({
                message: error.details[0].message,
            });
        }

        const data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json({
            message: "Cập nhật thành công",
            data,
        });

    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });

    }
}


