import ExpCard from '../ui/ExpCard';
import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" style={{ marginBottom: '5.5rem' }}>
      {experience.map((item, i) => (
        <ExpCard key={`${item.role}-${item.company}`} item={item} index={i} />
      ))}
    </section>
  );
}
