const Expense = require('../models/indexModel');

exports.postAddExpense = async(req, res, next) => {
    const expenseName = req.body.expenseName;
    const expenseDesc = req.body.expenseDesc;
    const expenseAmount = req.body.expenseAmount;
    try {
       await Expense.create({
            expenseName: expenseName,
            expenseDesc: expenseDesc,
            expenseAmount: expenseAmount
        })
        res.json({ message: 'table created succesfully' })
    } catch { err } {
        console.error(err);
    }
}

exports.getAllexpenses = async (req, res, next) => {
    try {
        const data = Expense.findAll();
        res.json(data);
        res.status(200).json({ success: true })
    } catch (err) {
        console.error(err);
    }
}

exports.deleteUser = async (req, res, next) => {
    const id = req.params.id;
    try {
        const user = await Expense.findByPk(id);
        await user.destroy();
        res.status(200).json({ success: true })
    }
    catch (err) {
        console.error(err);
    }
}