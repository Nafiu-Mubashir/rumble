
const SectionHeader = ({title, icon}:{title: string; icon: React.ReactNode}) => {
  return (
    <div className="dark:text-white flex items-center gap-4 h-[9.5rem] dark:bg-rumble-dark py-12 px-6 border dark:border-gray-700">
      {icon}
      <h1 className="font-bold text-[1.5rem] mt-3">{title}</h1>
    </div>
  )
}

export default SectionHeader