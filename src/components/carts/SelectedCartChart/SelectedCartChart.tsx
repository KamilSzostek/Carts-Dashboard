import React, { useEffect, useState } from 'react';
import { LineChart, Line, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { IProduct } from '../../../types/IProduct';
import { discountedPrice } from '../../../helpers/discountedProductPrice';
import { IChartObject } from '../../../types/IChartObject';
import './SelectedCartChart.scss'

interface ISelectedCartChartProps {
  products: IProduct[]
}

const SelectedCartChart: React.FunctionComponent<ISelectedCartChartProps> = ({ products }) => {
  const [data, setData] = useState<IChartObject[]>([])

  const prepareChartData = () => {
    const preparedData = []
    if (products) {
      for (const product of products) {
        preparedData.push({
          name: product.title,
          price: product.price!,
          discountedPrice: +discountedPrice(product),
          fullName: `Product ${products.indexOf(product) + 1}`
        })
      }
      setData(preparedData)
    }
  }
  useEffect(() => {
    prepareChartData()
  }, [products])

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip background-light">
        <h5>{payload[2].value}</h5>
        <p className="label">Price: {payload[0].value}</p>
        <p className="intro">Discounted price: {payload[1].value}</p>
        {/* <p className="intro">Quantity: {payload[3].value}</p> */}
      </div>
    );
  }

  return null;
};
  return (
    <div className='cart-chart ms-4 mt-4'>
      <LineChart width={600} height={250} data={data}
        margin={{ top: 30, bottom: 30 }}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="fullName" angle={2} />
        <YAxis />
        <Tooltip content={<CustomTooltip/>} />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <Line type="monotone" dataKey="discountedPrice" stroke="#82ca9d" />
        <Line type="monotone" dataKey="name" stroke="#8884d8" />
        {/* <Line type="monotone" dataKey="quantity" stroke="#8884d8" /> */}
      </LineChart>
    </div>
  );
};

export default SelectedCartChart;
