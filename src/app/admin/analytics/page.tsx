import React from 'react';
import { countStudents } from '@/lib/db/queries/students';
import { getPrograms } from '@/lib/db/queries/programs';
import { countStudentsByProgram, countStudentsByRegistrationSource } from '@/lib/db/queries/analytics';
import AnalyticsCards from '@/components/admin/AnalyticsCards';
import AnalyticsCharts from '@/components/admin/AnalyticsCharts';

export default async function AnalyticsPage() {
  const totalStudents = await countStudents({});
  const programs = await getPrograms();
  const studentsByProgram = await countStudentsByProgram();
  const studentsBySource = await countStudentsByRegistrationSource();

  const chartDataByProgram = studentsByProgram.map(p => ({ name: p.program, count: p.count }));
  const chartDataBySource = studentsBySource.map(s => ({ name: s.source, count: s.count }));

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-black">
          {/* simple icon using Activity glyph already in charts component; keep header minimal */}
          <span className="text-xs font-bold">A</span>
        </div>
        <h1 className="text-2xl font-bold">Analytics</h1>
      </div>
      <AnalyticsCards totalStudents={totalStudents} totalPrograms={programs.length} />
      <AnalyticsCharts studentsByProgram={chartDataByProgram} studentsBySource={chartDataBySource} />
    </div>
  );
} 