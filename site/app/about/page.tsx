import { Navbar } from '../components/navbar/Navbar';
import { ScrapbookTimeline } from '../components/scrapbook/ScrapbookTimeline';

export default function AboutPage() {
  return (
    <div className="relative mx-auto w-full max-w-[1280px] px-6 md:px-8 pt-6 md:pt-8 pb-16">
      <Navbar />
      <ScrapbookTimeline />
    </div>
  );
}
