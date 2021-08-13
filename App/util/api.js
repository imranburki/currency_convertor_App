import {format} from 'date-fns'

const SAMPLE_RATES = {
    ALL: 103.49,
    AMD:492.11,
    ARS:96.99,
    AZN:1.70,
    AED: 3.67,
    AUD: 1.36,
    BAM:1.67,
    BDT:84.81,
    BHD:0.38,
    BIF:1982.77,
    BGN: 1.67,
    BND:1.36,
    BRL: 5.25,
    BOB:6.89,
    BRL:5.25,
    BWP:11.16,
    BYN:2.49,
    BZD:2.02,
    CAD: 1.25,
    CDF:2003.00,
    CLP:774.06,
    CHF: 0.92,
    COP:3858.38,
    CRC:621.44,
    CNY: 6.48,
    CVE:93.84,
    CZK: 21.62,
    DJF:178.00,
    DOP:57.19,
    DKK: 6.33,
    DZD:135.26,
    EEK:13.3369,
    EGP:15.70,
    ERN:15,
    EUR:0.85,
    GBP: 0.72,
    HKD: 7.78,
    HRK: 7.78,
    HUF: 300.32,
    IDR: 14373.35,
    ILS: 3.22,
    INR: 74.27,
    ISK: 125.96,
    JPY: 110.28,
    KRW: 1164.69,
    MXN: 19.89,
    MYR: 4.24,
    NOK: 8.83,
    NZD: 1.43,
    PHP: 50.49,
    PKR:164.41,
    PLN: 3.89,
    RON: 4.18,
    RUB: 73.44,
    SEK: 8.68,
    SGD: 1.36,
    THB: 33.35,
    TRY: 8.54,
    USD: 1.1634,
    ZAR: 14.83,
  };

export const api=(fullpath="") =>{
    const [path]=fullpath.split("?");
    if(path.length===0){
        return Promise.reject(new Error('the path is required'))
    }

    if(path!=="/latest"){
        return Promise.reject(new Error('invalid path'))
    }
    const baseCurrency=fullpath.split('base=')[1]|| 'EUR';
//return Promise.resolve();

return  new Promise(resolve=>{
    setTimeout(()=>{
        resolve({
            base:baseCurrency,
           // data: format(new Date(),'MMM do, yyyy'),
            rates:{
                ...SAMPLE_RATES,
                [baseCurrency]:1,
            },
        })
    },500)
})
}