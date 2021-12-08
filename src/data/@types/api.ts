export interface ICotacaoDolar {
    USDBRL: IApiCotacao;
}

export interface IApiCotacao {
    ask: string;
    bid: string;
    code: string;
    codein: string;
    create_date: string;
    high: string;
    low: string;
    name: string;
    pctChange: string;
    timestamp: string;
    varBid: string;
}

export interface IDadosCoinGecko {
    data: ITickersCoinGecko;
}
interface ITickersCoinGecko {
    tickers: Array<any>;
}
interface IConverted_lastCoinGecko {
    converted_last: IUsdCoinGecko;
}
interface IUsdCoinGecko {
    usd: string;
}

export interface IApiConversor {
    data: IApiConversorMoeda;
}
interface IApiConversorMoeda {
    BRL_USD: IApiConversorVal;
    USD_BRL: IApiConversorVal;
}
interface IApiConversorVal {
    val: number;
}