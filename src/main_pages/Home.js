/** @format */

import Banner from '../components/Banner';
import StatisticsRow from '../components/cards/StatisticsRow';

export default function Home() {
  return (
    <>
      {/* Banner */}
      <Banner />

      {/* Global Statistics */}
      <div style={{ marginTop: '60px' }}>
        <StatisticsRow title='GLOBAL STATISTICS' />
      </div>
    </>
  );
}
