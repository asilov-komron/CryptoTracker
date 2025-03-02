
import { Card } from 'antd';


function CryptoCard(props) {

    const price = Math.round(props.currency.quote.USD.price)
    const change_24_h = Number(props.currency.quote.USD.percent_change_24h.toFixed(3));
    const color = change_24_h >= 0 ? "green" : "red"
    const market_cap = (Number(props.currency.quote.USD.market_cap) / 1e9).toFixed(0);
    

    return (
        <>
            <Card
                title={
                    <div className='flex items-center gap-1 '>
                        <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${props.currency.id}.png`} alt=""  width={30}/>
                        <span>{props.currency.name}</span>
                    </div>
                }
                style={{
                    width: 300,
                }}
            >
                {/* <b> */}
                <p>Current price: <b>${price/1000}K</b></p>
                <p >price change in 24 hours: <b style={ {color: color}}>{change_24_h}%</b></p>
                <p>Market Capitalization: <b>${market_cap}B</b></p>
                {/* </b> */}
            </Card>
        </>
    )
}

export default CryptoCard
