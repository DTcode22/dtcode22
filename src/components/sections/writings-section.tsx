import { SectionHeader } from '@/components/shared/section-header';
import { SectionNavigator } from '../shared/section-navigator';

export function WritingsSection() {
  return (
    <div className="space-y-32">
      {/* Header */}
      <section
        id="writings-intro"
        className="scroll-mt-20 space-y-6 text-center"
      >
        <SectionHeader
          title="Writings"
          subtitle="There are no posts at the moment. Please check back later!"
        />
      </section>

      <div className="min-h-[20vh]" />

      {/* Navigation */}
      <section id="topics" className="scroll-mt-20 space-y-8">
        <SectionNavigator
          id="topics"
          currentSection="writings"
        ></SectionNavigator>
      </section>
    </div>
  );
}
