
const nameVaildation = (txt) => {
    let reg = new RegExp(/^[a-zA-Z]+$/);
    return reg.test(txt);
}

const cardNumVaildation = (txt) => {
    let reg = new RegExp(/^[0-9]+$/);
    return reg.test(txt) && txt.length === 16;
}

const cvvCodeVaildation = (txt) => {
    let reg = new RegExp(/^[0-9]+$/);
    return reg.test(txt) && txt.length === 3;
}

const expDateVaildation = (txt) => {
    let today = new Date();
    let someDate = new Date(txt);
    return txt.length === 10 && !isNaN(someDate.getTime()) && (today < someDate);
}

const CardHolder = [
    {
        lbl: 'Card holder name',
        txtName: 'holderName',
        validation: nameVaildation,
        type: 'text',
        isValid: false,
        val: null
    }, {
        lbl: 'Card Number (16 digits)',
        txtName: 'carNumber',
        validation: cardNumVaildation,
        type: 'text',
        isValid: false,
        val: null
    }, {
        lbl: 'CCV code (3 digits)',
        txtName: 'cvvCode',
        validation: cvvCodeVaildation,
        type: 'text',
        isValid: false,
        val: null
    }, {
        lbl: 'Expiration date (yyyy/mm/dd)',
        txtName: 'expireDate',
        validation: expDateVaildation,
        type: 'text',
        isValid: false,
        val: null
    }, {
        lbl: 'Card Type',
        txtName: 'cardType',
        validation: nameVaildation,
        type: 'text',
        isValid: false,
        val: null
    }
];

export default CardHolder;