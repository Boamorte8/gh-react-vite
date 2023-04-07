import { BarChart, Card, Subtitle, Title } from '@tremor/react';

import { currencyFormatter } from '@lib/utils';

const chartdata = [
  {
    name: 'Amphibians',
    'Number of threatened species': 2488,
  },
  {
    name: 'Birds',
    'Number of threatened species': 1445,
  },
  {
    name: 'Crustaceans',
    'Number of threatened species': 743,
  },
];

const chartdata2 = [
  {
    topic: 'Topic 1',
    'Group A': 890,
    'Group B': 338,
    'Group C': 538,
    'Group D': 396,
    'Group E': 138,
    'Group F': 436,
  },
  {
    topic: 'Topic 2',
    'Group A': 289,
    'Group B': 233,
    'Group C': 253,
    'Group D': 333,
    'Group E': 133,
    'Group F': 533,
  },
];

export const BarChartSection = () => {
  return (
    <>
      <section className="mb-8">
        <h2 className='mb-4'>Card with bar chart - Example 1</h2>
        <Card>
          <Title>Population growth rate (1951 to 2021)</Title>
          <Subtitle>
            The IUCN Red List has assessed only a small share of the total known
            species in the world.
          </Subtitle>
          <BarChart
            className="mt-6"
            data={chartdata}
            index="name"
            categories={['Number of threatened species']}
            colors={['blue']}
            valueFormatter={currencyFormatter}
            yAxisWidth={48}
          />
        </Card>
      </section>

      <section className="">
        <h2 className='mb-4'>Card with bar chart - Example 2</h2>
        <Card>
          <Title>Population growth rate (1951 to 2021)</Title>
          <Subtitle>
            The IUCN Red List has assessed only a small share of the total known
            species in the world.
          </Subtitle>
          <BarChart
            className="mt-6"
            data={chartdata2}
            index="name"
            categories={[
              'Group A',
              'Group B',
              'Group C',
              'Group D',
              'Group E',
              'Group F',
            ]}
            colors={['blue', 'teal', 'amber', 'rose', 'indigo', 'emerald']}
            valueFormatter={currencyFormatter}
            yAxisWidth={48}
          />
        </Card>
      </section>
    </>
  );
};
