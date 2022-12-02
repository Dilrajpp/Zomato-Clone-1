const Account = require('../Models/account');

exports.Sighnup = (req, res) => {
    const { firstName, lastName, phone, email, password } = req.body;

    const accountObj = new Account ({
        firstName,
        lastName,
        phone,
        email,
        password
    });

    accountObj.save()
    .then(response => {
        res.status(200).json({
            message:"User Details Saved Successfully", 
            account: response 
        })        
    })
    .catch(err =>{
        res.status(500).json({ error: err })
    })

}