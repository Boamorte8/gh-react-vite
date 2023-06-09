import { Card, LineChart, Title } from '@tremor/react';

const chartdata = [
  {
    year: 1951,
    'Population growth rate': 1.74,
  },
  {
    year: 1952,
    'Population growth rate': 1.93,
  },
  {
    year: 1953,
    'Population growth rate': 1.9,
  },
  {
    year: 1954,
    'Population growth rate': 1.98,
  },
  {
    year: 1955,
    'Population growth rate': 2,
  },
];

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}%`;

export const LineChartSection = () => {
  return (
    <section className="mb-8">
      <h2 className='mb-4'>Card with line chart</h2>
      <Card>
        <Title>Population growth rate (1951 to 2021)</Title>
        <LineChart
          className="mt-6"
          data={chartdata}
          index="year"
          categories={['Population growth rate']}
          colors={['blue']}
          valueFormatter={dataFormatter}
          yAxisWidth={40}
        />
      </Card>
    </section>
  );
};
