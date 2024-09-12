import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import projectsData from '@/sections/data/projects'; // Mengimpor data project

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Ambil project berdasarkan id
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <p>Project tidak ditemukan.</p>;
  }

  return (
    <div className="min-h-screen py-20 bg-gray-900 text-white relative">
      {/* Background Rings */}
      <div className="absolute inset-0 opacity-5 z-[-10]" style={{ backgroundImage: `url(${project.backgroundImage.src})` }}></div>

      <div className="container mx-auto px-4">
        {/* Tombol Kembali */}
        <Link href="/projects">
          <a className="text-white/70 hover:text-white transition duration-300 inline-flex items-center gap-2">
            <span>← Kembali ke Proyek</span>
          </a>
        </Link>

        {/* Detail Project */}
        <div className="mt-10 lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold tracking-wide mb-4">{project.title}</h1>
            <p className="text-white/60 text-lg mb-6">{project.description}</p>

            <ul className="space-y-4">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircleIcon className="size-6 text-emerald-300" />
                  <span>{result.title}</span>
                </li>
              ))}
            </ul>

            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="mt-8 bg-emerald-500 text-gray-900 h-12 px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                <span>Lihat Situs Langsung</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </a>
          </div>

          {/* Gambar Project */}
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <Image src={project.image.src} alt={project.title} className="rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
