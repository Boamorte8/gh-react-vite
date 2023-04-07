import { Card, DonutChart, Title } from '@tremor/react';

import { currencyFormatter } from '@lib/utils';

const cities = [
  {
    name: 'New York',
    sales: 9800,
  },
  {
    name: 'London',
    sales: 4567,
  },
  {
    name: 'Hong Kong',
    sales: 3908,
  },
  {
    name: 'San Francisco',
    sales: 2400,
  },
  {
    name: 'Singapore',
    sales: 1908,
  },
  {
    name: 'Zurich',
    sales: 1398,
  },
];

export const Test = () => (
  <div>
    <h1 className='mb-8'>Test page on route gh-react-vite</h1>
    <p className='mb-4'>Test of donut chart</p>
    <div className='flex justify-center'>
      <Card className="max-w-lg">
        <Title>Sales</Title>
        <DonutChart
          className="mt-6"
          data={cities}
          category="sales"
          index="name"
          valueFormatter={currencyFormatter}
          colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
        />
      </Card>
    </div>
  </div>
);
