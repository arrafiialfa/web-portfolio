import Image from "next/image";
export default function Cards({ items }) {
  return (
    <div className="flex space-x-4">
      {/* Project 1 */}
      {items.map((item) => {
        return (
          <div key={item.id} className="flex flex-col items-center">
            <Image
              width={300}
              height={200}
              src="https://via.placeholder.com/300x200"
              alt="Project 1"
              className="rounded-lg mb-2"
            />
            <h4 className="text-lg font-semibold">Project 1</h4>
          </div>
        );
      })}
    </div>
  );
}
