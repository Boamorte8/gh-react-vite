import { Card, Flex, Metric, ProgressBar, Text } from '@tremor/react';

import { LineChartSection } from '@components/LineChartSection';
import { BarChartSection } from '@components/BarChartSection';
import { AnimatedTitle } from '@components/AnimatedTitle';

export const Tremor = () => {
  return (
    <>
      <AnimatedTitle className='mb-6'>Tremor Components</AnimatedTitle>
      <section className="mb-8">
        <h2 className='mb-4'>Card with progress bar</h2>
        <Card className="max-w-xs mx-auto">
          <Text>Sales</Text>
          <Metric>$ 34,743</Metric>
          <Flex className="mt-4">
            <Text>32% of annual target</Text>
            <Text>$ 225,000</Text>
          </Flex>
          <ProgressBar percentageValue={32} className="mt-2" />
        </Card>
      </section>

      <LineChartSection />
      <BarChartSection />
    </>
  );
};
